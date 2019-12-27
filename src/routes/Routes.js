import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "../components/LandingPage/LandingPage";
import TentangKami from "../components/LandingPage/TentangKami";
import Logins from "../container/auth/Logins";
import Registers from "../container/auth/Registers";
import Dashboard_Admin from "../container/Dashboard/Dashboard_Admin";
import Dashboard_Kasir from "../container/Dashboard/Dashboard_Kasir";
import Dashboard_Toko from "../container/Dashboard/Dashboard_Toko";

export default function Routes() {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Logins} />
      <Route path="/register" component={Registers} />
      <Route path="/tentangkami" component={TentangKami} />
      <Route path="/admin/beranda" component={Dashboard_Admin} />
      <Route path="/admin/userprofile" component={Dashboard_Admin} />
      <Route path="/kasir/beranda" component={Dashboard_Kasir} />
      <Route path="/kasir/transaksi" component={Dashboard_Kasir} />
      <Route path="/kasir/userprofile" component={Dashboard_Kasir} />
      <Route path="/dashboard/beranda" component={Dashboard_Toko} />
      <Route path="/dashboard/produk" component={Dashboard_Toko} />
      <Route path="/dashboard/pelanggan" component={Dashboard_Toko} />
      <Route path="/dashboard/riwayat" component={Dashboard_Toko} />
      <Route path="/dashboard/kategori" component={Dashboard_Toko} />
      <Route path="/dashboard/userprofile" component={Dashboard_Toko} />
    </Router>
  );
}
