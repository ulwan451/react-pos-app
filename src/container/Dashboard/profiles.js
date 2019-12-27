import React, { Component } from "react";
import Profile from "../../components/Dashboard/profile/Profile";
import Axios from "axios";

export default class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      name: "",
      email: "",
      username: "",
      password: "",
      isLoading: false
    };
  }

  // mengambil item di localStorage
  componentDidMount() {
    const myAkun = localStorage.getItem("user");
    const myUser = JSON.parse(myAkun);
    this.setState({
      user: myUser
    });
  }

  // input validations

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // mengupdate name dan email
  updateUser = e => {
    e.preventDefault();
    const dataUser = {
      name: this.state.name,
      email: this.state.email,
      id: this.state.user.id
    };
    this.setState({ isLoading: true });
    Axios.put(
      "https://arcane-escarpment-90589.herokuapp.com/api/kasir/update",
      dataUser
    )
      .then(res => {
        this.setState({ isLoading: false });
      })
      .catch(err => {
        this.setState({ isLoading: false });
        console.log(err);
      });
  };

  // mengupdate username dan password
  updatePrivate = e => {
    e.preventDefault();
    const dataPrivasi = {
      username: this.state.username,
      password: this.state.password,
      id: this.state.user.id
    };
    this.setState({ isLoading: true });
    Axios.put(
      "https://arcane-escarpment-90589.herokuapp.com/api/kasir/privasi",
      dataPrivasi
    )
      .then(res => {
        this.setState({ isLoading: false });
      })
      .catch(err => {
        this.setState({ isLoading: false });
        console.log(err);
      });
  };

  render() {
    const { name, email, password, username } = this.state;
    const { handleChange, updateUser, updatePrivate } = this;
    return (
      <>
        <Profile
          content={this.props.content}
          namaUser={this.state.user.name}
          emailUser={this.state.user.email}
          role={this.state.user.role}
          nameUser="name"
          nameEmail="email"
          namePass="password"
          nameUsername="username"
          valueUser={name}
          valueEmail={email}
          valuePass={password}
          valueUsername={username}
          onChange={handleChange}
          updateUser={updateUser}
          updatePrivate={updatePrivate}
          loading={this.state.isLoading}
          avatar={this.state.user.avatar}
        />
      </>
    );
  }
}
