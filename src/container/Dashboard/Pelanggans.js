import React, { Component } from "react";
import Pelanggan from "../../components/Dashboard/Kasir/Pelanggan";
import Axios from "axios";

export default class Pelanggans extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      username: "",
      name: "",
      email: "",
      password: "",
      store: "",
      regisErr: "",
      isLoading: false,
      id_store: "",
      data: []
    };
  }

  componentDidMount() {
    this.getKasir();
  }
  // menampilkan semua data kasir
  getKasir = () => {
    const id_store = this.state.user.id_store;
    Axios.get(
      `https://arcane-escarpment-90589.herokuapp.com/api/kasir/show/${id_store}`
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

  // validasi
  validate = () => {
    if (!this.state.regisErr) {
      this.setState({
        regisErr: "Daftar kasir gagal!"
      });
    }
  };

  // input validations
  handlechange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // mendaftarkan kasir
  onSubmit = i => {
    i.preventDefault();
    const dataRegister = {
      username: this.state.username,
      name: this.state.name,
      email: this.state.email,
      id_store: this.state.user.id_store,
      password: this.state.password
    };

    this.setState({ isLoading: true });
    Axios.post(
      "https://arcane-escarpment-90589.herokuapp.com/api/kasir/register",
      dataRegister
    )
      .then(res => {
        this.setState({ isLoading: false });
        this.getKasir();
      })
      .catch(err => {
        console.log(err);
        const isValidate = this.validate();
        this.setState({ isLoading: false });
        if (isValidate) {
        }
      });
  };

  deleteKasir = id => {
    this.setState({ isLoading: true });
    Axios.delete(
      `https://arcane-escarpment-90589.herokuapp.com/api/kasir/delete/${id}`
    )
      .then(res => {
        this.setState({ isLoading: false });
        this.getKasir();
      })
      .catch(error => {
        this.setState({ isLoading: false });
        console.log(error);
      });
  };

  // mengambil data didalam localStorage
  UNSAFE_componentWillMount() {
    const myAkun = localStorage.getItem("user");
    const myUser = JSON.parse(myAkun);
    this.setState({
      user: myUser,
      id_store: myUser
    });
  }

  render() {
    const { name, email, password, username, isLoading } = this.state;
    const { onSubmit, handlechange } = this;
    return (
      <>
        <Pelanggan
          content={this.props.content}
          idToko={this.state.user.id_store}
          valueUsername={username}
          valueUser={name}
          valueEmail={email}
          valueStore={this.state.user.id_store}
          valuePass={password}
          onSubmit={onSubmit}
          onChange={handlechange}
          loading={isLoading}
          validate={this.state.regisErr}
          data={this.state.data}
          isLoading={this.state.isLoading}
          deleteKasir={this.deleteKasir}
        />
      </>
    );
  }
}
