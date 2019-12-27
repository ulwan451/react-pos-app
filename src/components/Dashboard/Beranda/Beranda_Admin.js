import React from "react";

export default function Beranda_Admin(props) {
  return (
    <div className={props.content ? "col-md-10 mt-5" : "col-md-12 mt-5"}>
      <h1>Anda Login Sebagai Admin</h1>
    </div>
  );
}
