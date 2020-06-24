import React, { Component, Fragment } from "react";
import Axios from "axios";
import Register from "../../components/Register/Register";

export default class Registers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      email: "",
      password: "",
      store: "",
      regisErr: "",
      isLoading: false
    };
  }

  validate = () => {
      this.setState({
        regisErr: "Register gagal tersimpan!"
      });
  };

  handlechange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = i => {
    i.preventDefault();
    const dataRegister = {
      username: this.state.username,
      name: this.state.name,
      email: this.state.email,
      store: this.state.store,
      password: this.state.password
    };

    this.setState({ isLoading: true });
    Axios.post(
      "https://arcane-escarpment-90589.herokuapp.com/api/register",
      dataRegister
    )
      .then(res => {
        console.log(res);
        this.setState({ isLoading: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
        this.validate();
      });
  };
  render() {
    const { name, email, password, username, store, isLoading } = this.state;
    const { onSubmit, handlechange } = this;

    return (
      <Fragment>
        <Register
          nameUsername="username"
          nameUser="name"
          nameEmail="email"
          nameStore="store"
          namePass="password"
          onSubmit={onSubmit}
          valueUsername={username}
          valueUser={name}
          valueEmail={email}
          valueStore={store}
          valuePass={password}
          onChange={handlechange}
          loading={isLoading}
          validate={this.state.regisErr}
        />
      </Fragment>
    );
  }
}
