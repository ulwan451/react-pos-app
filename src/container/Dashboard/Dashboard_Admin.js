import React, { Component } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import data from "../../components/Dashboard/Sidebar/data/data1.json";
import Profile from "./profiles";
import BerandaAdmin from "../../components/Dashboard/Beranda/Beranda_Admin";

export default class Dashboard_Admin extends Component {
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
    if (!localStorage.getItem("role")) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container-fluid">
        <div className="row">
          <Sidebar
            data={data.Admin}
            logout={out}
            btn={this.state.btn}
            ToggleSidebar={this.ToggleSidebar}
            togglesidebar={this.state.togglesidebar}
          />
          <Switch>
            <Route path="/admin/beranda">
              <BerandaAdmin content={this.state.content} />
            </Route>
            <Route path="/admin/userprofile">
              <Profile content={this.state.content} />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
