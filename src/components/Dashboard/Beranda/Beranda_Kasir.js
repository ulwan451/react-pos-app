import React from "react";
import Promo from "../Transaksi/Promo/Promo";

export default function Beranda_kasir(props) {
  return (
    <div className={props.content ? "col-md-10 mt-5" : "col-md-12 mt-5"}>
      <div className="col-md-12">
        <h1>Anda Login Sebagai Kasir</h1>
      </div>
      <div className="col-md-12 ">
        <Promo />
      </div>
    </div>
  );
}
