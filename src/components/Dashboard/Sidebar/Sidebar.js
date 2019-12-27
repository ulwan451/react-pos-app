import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import avatar from "../../../asset/betas.svg";
import "./Sidebar.scss";
import NotesIcon from "@material-ui/icons/Notes";
import CloseIcon from "@material-ui/icons/Close";
export default class Sidebar extends Component {
  render() {
    return (
      <div style={{ width: "210px" }}>
        <div className="sidebar">
          <div
            className={this.props.togglesidebar ? "sidebarmain" : "sidebarnone"}
          >
            <div className="header">
              <h6 className="p-2 juduls">BETA POINT OF SALE</h6>
              <div className="proflenameimage" style={{ paddingLeft: "6px" }}>
                <img className="avatar" src={avatar} alt="" />
              </div>
            </div>
            <div className="menu">
              {this.props.data.map((datas, index) => (
                <ul key={index}>
                  <li>
                    <NavLink to={datas.link} activeClassName="aktif">
                      <span>
                        <i className={datas.icon}></i>
                        {datas.name}
                      </span>
                    </NavLink>
                  </li>
                </ul>
              ))}
            </div>
            <div className="out">
              <Link to="/">
                <i className="fas fa-sign-out-alt"></i>
                <span onClick={this.props.logout}>LOGOUT</span>
              </Link>
            </div>
          </div>
          <div className="top">
            <div
              onClick={this.props.ToggleSidebar}
              className={this.props.btn ? "toggleOpen" : "toggleClose"}
            >
              {this.props.btn === true ? (
                <CloseIcon className="ico" />
              ) : (
                <NotesIcon className="ico" />
              )}
              <p className="text-dashboard">DASHBOARD</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
