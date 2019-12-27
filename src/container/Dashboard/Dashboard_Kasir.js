import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import data from "../../components/Dashboard/Sidebar/data/data1.json";
import BerandaKasir from "../../components/Dashboard/Beranda/Beranda_Kasir";
import Profile from "./profiles";
import Purchase from "../../components/Dashboard/Transaksi/purchase";
export default class Dashboard_Kasir extends Component {
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
            data={data.Kasir}
            logout={out}
            btn={this.state.btn}
            ToggleSidebar={this.ToggleSidebar}
            togglesidebar={this.state.togglesidebar}
          />
          <Switch>
            <Route path="/kasir/beranda">
              <BerandaKasir content={this.state.content} />
            </Route>
            <Route path="/kasir/transaksi">
              <Purchase content={this.state.content} />
            </Route>
            <Route path="/kasir/userprofile">
              <Profile content={this.state.content} />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
