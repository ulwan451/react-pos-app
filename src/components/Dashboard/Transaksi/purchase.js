import React, { Component } from "react";
import ProductPurchase from "./ProductPurchase";
import Axios from "axios";
import TableTransaksi from "./tableMaterial";
import market from "../../../asset/shopping-cart.svg";
export default class Purchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTable: [],
      dataProduk: [],
      user: "",
      id_store: "",
      totalAkhir: "",
      isLoading: false,
      isLoading2: false,
      valueSearch: ""
    };
  }
  componentDidMount() {
    this.produkTampil();
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

  componentWillUnmount() {}

  produkTampil = () => {
    const id = this.state.user.id_store;
    this.setState({
      isLoading: true
    });
    Axios.get(
      `https://arcane-escarpment-90589.herokuapp.com/api/manager/tampil/${id}`
    )
      .then(res => {
        this.setState({
          dataProduk: res.data,
          isLoading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleAddToCart = data => {
    let { dataTable } = this.state;

    const alreadyExists = dataTable.some(
      item => item.data.name_item === data.name_item
    );

    if (alreadyExists) {
      dataTable = dataTable.map(item => {
        if (item.data.name_item === data.name_item) {
          item.quantity = item.quantity + 1;
        }
        return item;
      });
    } else {
      dataTable.push({
        data,
        quantity: 1
      });
    }
    this.setState({ dataTable });
  };

  handleRemoveItemFromCart = currentItem => {
    let { dataTable } = this.state;
    dataTable = dataTable
      .map(cartItem => {
        if (cartItem.data.name_item === currentItem.data.name_item) {
          cartItem.quantity = cartItem.quantity - 1;
        }
        return cartItem;
      })
      .filter(cartItem => cartItem.quantity > 0);
    this.setState({ dataTable });
  };

  filterSearch = event => {
    this.setState({ valueSearch: event.target.value.substr(0, 20) });
  };

  handleTransaksi = () => {
    this.setState({
      isLoading2: true
    });

    Axios.get(
      "https://arcane-escarpment-90589.herokuapp.com/api/kasir/transaksi"
    )
      .then(res => {
        this.setState({
          isLoading2: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const produkToko = this.state.dataProduk.filter(list => {
      return (
        list.name_item
          .toLowerCase()
          .indexOf(this.state.valueSearch.toLowerCase()) !== -1
      );
    });
    return (
      <div className={this.props.content ? "col-md-10 mt-5" : "col-md-12 mt-5"}>
        <div className="row mb-5">
          <div className="col-md-8 mt-3">
            <h5 className="text-dark title-transaksi">
              <img src={market} alt="" width="40" className="img-fluid mr-2" />
              TRANSAKSI BARU
            </h5>
            <div className=" p-4 shadow-table mt-4">
              <TableTransaksi
                rows={this.state.dataTable}
                handleRemoveItemFromCart={this.handleRemoveItemFromCart}
                invoiceSubtotal={this.state.totalAkhir}
                handleTransaksi={this.handleTransaksi}
                loading={this.state.isLoading2}
              />
            </div>
          </div>

          <div className="col-md-4">
            <ProductPurchase
              valueSearch={this.state.valueSearch}
              filterSearch={this.filterSearch}
              isLoading={this.state.isLoading}
              dataProduk={produkToko}
              pilihItem={this.handleAddToCart}
            />
          </div>
        </div>
        <p
          className="text-center text-secondary"
          style={{ positon: "fixed", bottom: 0 }}
        >
          © Beta Pos 2019.
        </p>
      </div>
    );
  }
}
