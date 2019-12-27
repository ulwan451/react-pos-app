import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import Pelanggans from "./Pelanggans";
import Profile from "./profiles";
import Kategoris from "./Kategoris";
import Produks from "./Produks";
import data from "../../components/Dashboard/Sidebar/data/data1.json";
import Suppliers from "./Suppliers";
import BerandaToko from "../../components/Dashboard/Beranda/Beranda_Toko";

export default class Dashboard_Toko extends Component {
  state = {
    btn: true,
    content: true,
    togglesidebar: true
  };

  // toggle sidebar in dashboard
  ToggleSidebar = () => {
    this.setState({
      btn: !this.state.btn,
      content: !this.state.content,
      togglesidebar: !this.state.togglesidebar
    });
  };

  render() {
    // menghapus localStorage untuk logout
    const out = () => {
      localStorage.clear();
    };
    // mengunci halaman
    if (!localStorage.getItem("token")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar
            logout={out}
            data={data.Toko}
            btn={this.state.btn}
            ToggleSidebar={this.ToggleSidebar}
            togglesidebar={this.state.togglesidebar}
          />
          <Switch>
            <Route path="/dashboard/beranda">
              <BerandaToko content={this.state.content} />
            </Route>
            <Route path="/dashboard/pelanggan">
              <Pelanggans content={this.state.content} />
            </Route>
            <Route path="/dashboard/kategori">
              <Kategoris content={this.state.content} />
            </Route>
            <Route path="/dashboard/produk">
              <Produks content={this.state.content} />
            </Route>
            <Route path="/dashboard/riwayat">
              <Suppliers content={this.state.content} />
            </Route>
            <Route path="/dashboard/userprofile">
              <Profile content={this.state.content} />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
