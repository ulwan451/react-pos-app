import React from "react";
import "./Produk.scss";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "../../Input/Input";
import Buttons from "../../Register/ButtonLoading";

const Produk = ({
  content,
  kode_barang,
  nama_barang,
  stock,
  store,
  harga_beli,
  harga_jual,
  handleChange,
  loading,
  handleImage,
  datas,
  remove,
  update,
  posts,
  datak,
  select,
  open,
  close,
  opens
}) => {
  return (
    <div className={content ? "col-md-10 mt-5" : "col-md-12 mt-5"}>
      <h3>Daftar Produk</h3>
      <button className="btn btn-sm" onClick={open}>
        + Tambah Produk
      </button>
      <Dialog open={opens}>
        <DialogTitle>Tambah Produk</DialogTitle>
        <DialogContent>
          <form>
            <select
              required
              className="select"
              onChange={handleChange}
              value={select}
              name="kategori_id"
              defaultValue={"DEFAULT"}
            >
              <option value="DEFAULT" disabled>
                Pilih Kategori ...
              </option>

              {datak.map((data, index) => (
                <option key={index} className="option" value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
            <Input
              type="number"
              label="kode_barang"
              name="kode_barang"
              value={kode_barang}
              onChange={handleChange}
            />
            <Input
              type="text"
              label="nama_barang"
              name="nama_barang"
              value={nama_barang}
              onChange={handleChange}
            />
            <Input
              type="number"
              label="stock"
              name="stock"
              value={stock}
              onChange={handleChange}
            />
            <Input
              type="number"
              label="ID Store"
              name="store"
              value={store}
              onChange={handleChange}
            />
            <Input
              type="number"
              label="harga_beli"
              name="harga_beli"
              value={harga_beli}
              onChange={handleChange}
            />
            <Input
              type="number"
              label="harga_jual"
              name="harga_jual"
              value={harga_jual}
              onChange={handleChange}
            />
            <input type="file" onChange={handleImage} />
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                onChange={handleImage}
              />
              <label className="custom-file-label">upload gambar</label>
            </div>
            <div className="modal-footer">
              <Buttons
                className="btn btn-primary btn-sm float-right"
                title="Tambah"
                loading={loading}
                onClick={posts}
              />
              <Buttons
                className="btn btn-primary btn-sm float-right"
                title="Update"
                loading={loading}
                onClick={update}
              />
              <Buttons
                className="btn btn-primary btn-sm float-right"
                title="Batal"
                loading={loading}
                onClick={close}
              />
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <div className="table-responsive mt-3 text-center">
        <table className="table border">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Image</th>
              <th scope="col">Kode Produk</th>
              <th scope="col">Nama Barang</th>
              <th scope="col">Kategori</th>
              <th scope="col">Stock</th>
              <th scope="col">Harga Beli</th>
              <th scope="col">Harga Jual</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, index) => (
              <tr key={index} className="transition">
                <td>{index + 1}</td>
                <td>
                  <img src={data.image} alt="" />
                </td>
                <td>{data.item_code}</td>
                <td>{data.name_item}</td>
                <td>{data.name}</td>
                <td>{data.stock}</td>
                <td>{data.buy_cost}</td>
                <td>{data.sell_cost}</td>
                <td>
                  <Buttons
                    className="btn btn-sm mr-1"
                    title={
                      <i
                        className="far
                     fa-trash-alt"
                      ></i>
                    }
                    onClick={() => remove(data.id_item)}
                  />
                  <Buttons
                    className="btn btn-sm"
                    title={<i className="far fa-edit"></i>}
                    onClick={() => open(data)}
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

export default Produk;
