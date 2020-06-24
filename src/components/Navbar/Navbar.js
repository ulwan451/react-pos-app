import React from "react";
import "./Navbar.scss";
import Beta from "../../asset/beta2.svg";
import { NavLink } from "react-router-dom";

export default class Navbar extends React.Component {
  state = {
    status: true,
    btn: true
  };

  show = () => {
    this.setState({
      status: !this.state.status,
      btn: !this.state.btn
    });
  };
  render() {
    return (
      <div className="navbar fixed-top">
        <div className="container">
          <NavLink to="/">
            <img src={Beta} alt="" width="40" className="mt-2" />
          </NavLink>
          <ul className={this.state.status ? "awal-status" : "show-status"}>
            <li>
              <NavLink activeClassName="nav-aktif" to="/login">
                DAFTAR
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-aktif" to="/tentangkami">
                TENTANG KAMI
              </NavLink>
            </li>
          </ul>
          <div onClick={this.show} className="toggle">
            {this.state.btn === false ? (
              <i className="fas fa-times fade"></i>
            ) : (
              <i className="fas fa-bars fade"></i>
            )}
          </div>
        </div>
      </div>
    );
  }
}
