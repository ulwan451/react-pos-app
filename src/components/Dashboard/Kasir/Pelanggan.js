import React from "react";
import "./Pelanggan.scss";
import Input from "../../Input/Input";
import Buttons from "../../Register/ButtonLoading";
import PropTypes from "prop-types";

const Pelanggan = ({
  content,
  onChange,
  onSubmit,
  valueUser,
  valueUsername,
  valuePass,
  valueEmail,
  valueStore,
  loading,
  validate,
  data,
  deleteKasir,
  isLoading
}) => {
  return (
    <div className={content ? "col-md-10 mt-5" : "col-md-12 mt-5"}>
      <div className="row">
        <div className="col-md-12">
          <h3>Daftar Kasir</h3>
          <div>
            <div className="daftar">
              <p>
                <button
                  className="btn btn-sm"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample"
                >
                  + Kasir
                </button>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="daftarkasir">
                  <form onSubmit={onSubmit}>
                    <h4 className="textlogin mb-2">Daftarkan Kasir</h4>
                    <div className="row">
                      <div className="col-md-12 inputnone">
                        <label>ID:</label>
                        <input
                          className="inputId"
                          type="number"
                          name="store"
                          value={valueStore}
                          onChange={onChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <Input
                          type="text"
                          label="Name"
                          name="name"
                          value={valueUser}
                          onChange={onChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <Input
                          type="text"
                          label="Username"
                          name="username"
                          value={valueUsername}
                          onChange={onChange}
                        />
                      </div>

                      <div className="col-md-12">
                        <Input
                          type="email"
                          label="Email"
                          name="email"
                          value={valueEmail}
                          onChange={onChange}
                        />
                      </div>
                      <div className="col-md-12">
                        <Input
                          type="password"
                          label="Password"
                          name="password"
                          value={valuePass}
                          onChange={onChange}
                        />
                      </div>
                    </div>
                    <Buttons
                      className="btn btn-primary btn-sm float-right"
                      title="Tambah"
                      loading={loading}
                    />
                    <p className="validat">{validate}</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TABLE KASIR */}
      <div className="table-responsive mt-3">
        <table className="table border">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">ID</th>
              <th scope="col">Nama</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datas, index) => (
              <tr key={datas.id} className="transition">
                <td>{index + 1}</td>
                <td>{datas.id}</td>
                <td>{datas.name}</td>
                <td>{datas.email}</td>
                <td>
                  <Buttons
                    className="btn btn-sm"
                    title="delete"
                    onClick={() => deleteKasir(datas.id)}
                    loading={isLoading}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Pelanggan.propTypes = {
  content: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  nameUsername: PropTypes.string,
  nameUser: PropTypes.string,
  nameEmail: PropTypes.string,
  nameStore: PropTypes.string,
  namePass: PropTypes.string,
  valueUser: PropTypes.string,
  valueUsername: PropTypes.string,
  valuePass: PropTypes.string,
  valueEmail: PropTypes.string,
  valueStore: PropTypes.number,
  loading: PropTypes.bool,
  idToko: PropTypes.number
};

export default Pelanggan;
