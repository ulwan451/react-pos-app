import React, { Component } from "react";
import Axios from "axios";
import Produk from "../../components/Dashboard/Produk/Produk";

export default class Produks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      datak: [],
      kode_barang: "",
      nama_barang: "",
      stock: "",
      store: "",
      harga_beli: "",
      harga_jual: "",
      kategori_id: "",
      id_store: "",
      user: "",
      open: false,
      id_items: "",
      image: null
    };
  }

  // mereload ulang
  componentDidMount() {
    this.produkTampil();
    this.getKategori();
  }

  // mengambil item di localStorage
  UNSAFE_componentWillMount() {
    const myAkun = localStorage.getItem("user");
    const myUser = JSON.parse(myAkun);
    this.setState({
      user: myUser,
      id_store: myUser
    });
  }

  open = data => {
    this.setState({
      open: !this.state.open,
      image: data.image,
      stock: data.stock,
      store: data.id_store,
      harga_beli: data.buy_cost,
      harga_jual: data.sell_cost,
      nama_barang: data.name_item,
      kategori_id: data.kategori_id,
      id_items: data.id_item
    });
  };

  // menampilkan produk item
  produkTampil = () => {
    const id = this.state.user.id_store;
    Axios.get(
      `https://arcane-escarpment-90589.herokuapp.com/api/manager/tampil/${id}`
    )
      .then(res => {
        this.setState({
          data: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // menghapus produk
  handleRemove = id_item => {
    Axios.delete(
      `https://arcane-escarpment-90589.herokuapp.com/api/manager/barang/delete/${id_item}`
    )
      .then(res => {
        this.produkTampil();
      })
      .catch(err => {
        console.log(err);
      });
  };

  ///edit
  handleUpdate = e => {
    e.preventDefault();
    const id_items = this.state.id_items;
    const dataItem = {
      image: this.state.image,
      stock: this.state.stock,
      store: this.state.store,
      harga_beli: this.state.harga_beli,
      harga_jual: this.state.harga_jual,
      nama_barang: this.state.nama_barang,
      kategori_id: this.state.kategori_id
    };
    Axios.put(
      `https://arcane-escarpment-90589.herokuapp.com/api/manager/barang/update/${id_items}`,
      dataItem
    )
      .then(res => {
        this.produkTampil();
      })
      .catch(err => {
        console.log(err);
      });
  };

  // menambah produk
  handlePost = i => {
    i.preventDefault();
    const dataBarang = {
      kode_barang: this.state.kode_barang,
      nama_barang: this.state.nama_barang,
      stock: this.state.stock,
      store: this.state.user.id_store,
      harga_beli: this.state.harga_beli,
      harga_jual: this.state.harga_jual,
      kategori_id: this.state.kategori_id,
      image: this.state.image
    };
    Axios.post(
      "https://arcane-escarpment-90589.herokuapp.com/api/manager/barang",
      dataBarang
    )
      .then(res => {
        this.produkTampil();
      })
      .catch(err => {
        console.log(err);
      });
  };

  // input validation
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // menampilkan semua kategori
  getKategori = () => {
    Axios.get(
      "https://arcane-escarpment-90589.herokuapp.com/api/manager/kategori"
    )
      .then(res => {
        this.setState({
          datak: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChangeImg = e => {
    e.preventDefault();
    let file = e.target.files[0];
    this.setState({
      image: file
    });
  };
  render() {
    return (
      <>
        <Produk
          posts={this.handlePost}
          datas={this.state.data}
          image={this.state.image}
          datak={this.state.datak}
          stock={this.state.stock}
          remove={this.handleRemove}
          update={this.handleUpdate}
          content={this.props.content}
          store={this.state.user.id_store}
          harga_beli={this.state.harga_beli}
          harga_jual={this.state.harga_jual}
          kode_barang={this.state.kode_barang}
          nama_barang={this.state.nama_barang}
          select={this.state.kategori_id}
          handleChange={this.handleChange}
          handleImage={this.handleChangeImg}
          open={this.open}
          close={this.open}
          opens={this.state.open}
        />
      </>
    );
  }
}
