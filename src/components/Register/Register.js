import React, { Fragment } from "react";
import "./Register.scss";
import { Link } from "react-router-dom";
import Buttons from "./ButtonLoading";
import Input from "../Input/Input";
import logo from "../../asset/beta2.svg";

const Register = ({
  nameUsername,
  nameUser,
  nameEmail,
  nameStore,
  namePass,
  valueUsername,
  valueUser,
  valueStore,
  valuePass,
  valueEmail,
  onChange,
  onSubmit,
  loading,
  validate
}) => {
  return (
    <Fragment>
      <div className="row container-fluid rows justify-content-center">
        <div className="col-md-8">
          <div className="register">
            <form className="form" onSubmit={onSubmit}>
              <Link to="/">
                <img
                  src={logo}
                  alt=""
                  className="float-left logoss img-fluid"
                  width="30"
                />
              </Link>
              <h4 className="textlogin">SIGN UP</h4>
              <p style={{ color: "#fb3c69" }}>Buat akun toko anda!</p>
              <div className="row">
                <div className="col-md-6">
                  <Input
                    type="text"
                    label="Username"
                    name={nameUsername}
                    value={valueUsername}
                    onChange={onChange}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    type="text"
                    label="Nama Toko"
                    name={nameStore}
                    value={valueStore}
                    onChange={onChange}
                  />
                </div>
                <div className="col-md-12">
                  <Input
                    type="text"
                    label="Nama Lengkap"
                    name={nameUser}
                    value={valueUser}
                    onChange={onChange}
                  />
                </div>
                <div className="col-md-12">
                  <Input
                    type="email"
                    label="Email"
                    name={nameEmail}
                    value={valueEmail}
                    onChange={onChange}
                  />
                </div>
                <div className="col-md-12">
                  <Input
                    type="password"
                    label="Password"
                    name={namePass}
                    value={valuePass}
                    onChange={onChange}
                  />
                </div>
              </div>

              <Buttons
                className="button mt-3 mb-5"
                title="Register"
                loading={loading}
              />
              <Link to="/login">
                <p className="link">Login untuk masuk</p>
              </Link>
              <p className="validate">{validate}</p>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
