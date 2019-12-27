import React, { Component, Fragment } from "react";
import Login from "../../components/Login/Login";
import { Redirect } from "react-router-dom";
import Loading from "../../components/Login/Loading";
import Axios from "axios";

export default class Logins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      admin: "",
      toko: "",
      kasir: "",
      username: "",
      password: "",
      passwordErr: "",
      access_token: "",
      img: "",
      imagePreviewUrl: ""
    };
  }

  handlechange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    if (!this.state.passwordEr) {
      this.setState({
        passwordEr: "Username atau password tidak sesuai!"
      });
    }
  };

  onSubmit = i => {
    i.preventDefault();
    const dataLogin = {
      username: this.state.username,
      password: this.state.password
    };
    this.setState({
      isLoading: true
    });
    Axios.post(
      "https://arcane-escarpment-90589.herokuapp.com/api/login",
      dataLogin
    )
      .then(res => {
        console.log(res);
        localStorage.setItem("role", res.data.login.role);
        localStorage.setItem("token", res.data.access_token);
        localStorage.setItem("user", JSON.stringify(res.data.login));
        const admin = "0";
        const toko = "1";
        const kasir = "2";
        this.setState({
          access_token: res.data.access_token,
          isLoading: false,
          admin: admin,
          toko: toko,
          kasir: kasir
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isLoading: false
        });
        const isValidate = this.validate();
        if (isValidate) {
          console.log(this.state);
        }
      });
  };

  render() {
    const { username, password, isLoading } = this.state;
    const { onSubmit, handlechange } = this;
    const user = localStorage.getItem("role");
    const admin = this.state.admin;
    const kasir = this.state.kasir;
    const toko = this.state.toko;

    if (user === admin) {
      return <Redirect to="/admin/beranda" />;
    } else if (user === toko) {
      return <Redirect to="/dashboard/beranda" />;
    } else if (user === kasir) {
      return <Redirect to="/kasir/beranda" />;
    } else if (isLoading) {
      return <Loading />;
    }
    return (
      <Fragment>
        <Login
          nameUser="username"
          namePass="password"
          onSubmit={onSubmit}
          valueUser={username}
          valuePass={password}
          onChange={handlechange}
          validate={this.state.passwordEr}
        />
      </Fragment>
    );
  }
}
