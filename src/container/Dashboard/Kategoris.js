import React, { Component } from "react";
import Axios from "axios";
import Kategori from "../../components/Dashboard/Kategori/Kategori";

export default class Kategoris extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      kategori: "",
      open: false
    };
  }

  open = () => {
    this.setState({
      open: !this.state.open
    });
  };

  componentDidMount() {
    this.getKategori();
  }

  getKategori = () => {
    Axios.get(
      "https://arcane-escarpment-90589.herokuapp.com/api/manager/kategori"
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

  handleChange = e => {
    this.setState({
      kategori: e.target.value
    });
  };

  onSubmit = i => {
    i.preventDefault();
    const dataRegister = {
      kategori: this.state.kategori
    };
    this.setState({ isLoading: true });
    Axios.post(
      "https://arcane-escarpment-90589.herokuapp.com/api/manager/kategori",
      dataRegister
    )
      .then(res => {
        this.setState({ isLoading: false });
        this.getKategori();
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
      });
  };

  // delete kategori
  deleteKategori = id => {
    this.setState({ isLoading: true });
    Axios.delete(
      `https://arcane-escarpment-90589.herokuapp.com/api/manager/kategori/${id}`
    )
      .then(res => {
        this.setState({ isLoading: false });
        this.getKategori();
      })
      .catch(error => {
        this.setState({ isLoading: false });
        console.log(error);
      });
  };

  // edit kategori
  editKategori = id => {
    const kategoris = {
      kategori: this.state.kategori
    };
    this.setState({ isLoading: true });
    Axios.put(
      `https://arcane-escarpment-90589.herokuapp.com/api/manager/kategori/${id}`,
      kategoris
    )
      .then(res => {
        this.setState({ isLoading: false });
        this.getKategori();
      })
      .catch(error => {
        this.setState({ isLoading: false });
        console.log(error);
      });
  };
  render() {
    return (
      <>
        <Kategori
          value={this.state.kategori}
          onChange={this.handleChange}
          onSubmit={this.onSubmit}
          content={this.props.content}
          loading={this.state.isLoading}
          dataKategori={this.state.data}
          editKategori={this.editKategori}
          deleteKategori={this.deleteKategori}
          handleChange={this.handleChange}
          open={this.open}
          opens={this.state.open}
          close={this.open}
        />
      </>
    );
  }
}
