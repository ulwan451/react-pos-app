import React, { Component } from "react";
import Supplier from "../../components/Dashboard/Supplier/Supplier";
import Axios from "axios";

export default class Suppliers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isLoading: false,
      data: [],
      name: "",
      alamat: "",
      telp: ""
    };
  }

  open = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    this.getSupplier();
  }

  postSupplier = i => {
    i.preventDefault();
    const { name, alamat, telp } = this.state;
    const dataSupp = {
      name: name,
      alamat: alamat,
      telp: telp
    };

    Axios.post(
      "https://arcane-escarpment-90589.herokuapp.com/api/manager/suplier",
      dataSupp
    )
      .then(res => {
        this.getSupplier();
      })
      .catch(err => {
        console.log(err);
      });
  };

  getSupplier = () => {
    Axios.get(
      "https://arcane-escarpment-90589.herokuapp.com/api/manager/suplier"
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

  deleteSupplier = id => {
    Axios.delete(
      `https://arcane-escarpment-90589.herokuapp.com/api/manager/suplier/${id}`
    )
      .then(res => {
        this.getSupplier();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { content } = this.props;
    return (
      <Supplier
        data={this.state.data}
        postSupplier={this.postSupplier}
        deleteSupplier={this.deleteSupplier}
        valueName={this.state.name}
        valueAlamat={this.state.alamat}
        valueTelp={this.state.telp}
        onChange={this.handleChange}
        content={content}
        open={this.open}
        close={this.open}
        opens={this.state.open}
        isLoading={this.state.isLoading}
      />
    );
  }
}
