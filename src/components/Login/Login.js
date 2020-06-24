import React, { Fragment } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import logo from "../../asset/beta2.svg";
const Login = ({
  nameUser,
  namePass,
  valueUser,
  valuePass,
  onChange,
  onSubmit,
  validate
}) => {
  return (
    <Fragment>
      <div className="row rows container-fluid">
        <div className="col-md-12">
          <div className="login">
            <form className="form" onSubmit={onSubmit}>
              <Link to="/">
                <img
                  src={logo}
                  alt=""
                  className="float-left logos img-fluid"
                  width="30"
                />
              </Link>
              <div className="teks">
                <h4 className="textlogin">LOGIN</h4>
              </div>
              <p className="about-text text-secondary">
                Anda bisa login sebagai Admin,
                <br /> Pemilik toko atau Kasir!
              </p>
              <Input
                type="text"
                label="Username"
                name={nameUser}
                value={valueUser}
                onChange={onChange}
              />

              <Input
                type="password"
                label="Password"
                name={namePass}
                value={valuePass}
                onChange={onChange}
              />
              <button
                className="button mt-3 mb-5"
                variant="contained"
                type="submit"
              >
                Login
              </button>
              <Link to="/register">
                <p>Buat akun</p>
              </Link>
              <p className="validate">{validate}</p>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
