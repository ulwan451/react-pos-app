import React from "react";
import "./Beranda.scss";
import Grafik from "../../Grafik/index";
import PropTypes from "prop-types";
import moment from "moment";
const Beranda_Toko = ({ content }) => {
  return (
    <div className={content ? "col-md-10" : "col-md-12"}>
      <div className="beranda">
        <div className="row justify-content-between">
          <div className="col-md-9">
            <h1 className="text-secondary">Beranda</h1>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-header border-0">Jumlah Transaksi</div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <h1 className="text-center m-3">Rp.3.525.000</h1>

                    <footer className="blockquote-footer">
                      {moment().format("dddd, L")}
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-header border-0">Barang Terjual</div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <h1 className="text-center m-3">210</h1>

                    <footer className="blockquote-footer">
                      {moment().format("dddd, L")}
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-header border-0">Barang Terbeli</div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <h1 className="text-center m-3">300</h1>
                    <footer className="blockquote-footer">
                      {moment().format("dddd, L")}
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Grafik />
      </div>
    </div>
  );
};

Beranda_Toko.propTypes = {
  content: PropTypes.bool
};

export default Beranda_Toko;
