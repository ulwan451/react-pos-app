import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "../../Input/Input";
import Buttons from "../../Register/ButtonLoading";

export default function Supplier({
  content,
  opens,
  close,
  open,
  postSupplier,
  valueName,
  valueAlamat,
  valueTelp,
  onChange,
  data,
  deleteSupplier,
  isLoading,
  update
}) {
  return (
    <div className={content ? "col-md-10 mt-5" : "col-md-12 mt-5"}>
      <h3>Daftar Supplier</h3>
      <div className="row">
        <div className="col-md-4">
          <button className="btn btn-sm" onClick={open}>
            + Tambah
          </button>
        </div>
      </div>
      <Dialog open={opens}>
        <DialogTitle>Tambah Supplier</DialogTitle>
        <DialogContent>
          <Input
            name="name"
            type="text"
            label="Name Supplier"
            value={valueName}
            onChange={onChange}
          />
          <Input
            name="alamat"
            type="text"
            label="Alamat"
            value={valueAlamat}
            onChange={onChange}
          />
          <Input
            name="telp"
            type="number"
            label="Telpon"
            value={valueTelp}
            onChange={onChange}
          />
          <button className="btn btn-sm mr-3" onClick={postSupplier}>
            Tambah
          </button>
          <Buttons
            className="btn btn-primary btn-sm float-right"
            title="Update"
            onClick={update}
          />
          <button className="btn btn-sm" onClick={close}>
            Batal
          </button>
        </DialogContent>
      </Dialog>

      <div className="table-responsive mt-3 text-center">
        <table className="table border">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Nama Supplier</th>
              <th scope="col">Alamat</th>
              <th scope="col">No Telpon</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datas, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{datas.name}</td>
                <td>{datas.alamat}</td>
                <td>{datas.no_phone}</td>
                <td>
                  <Buttons
                    className="btn btn-sm mr-2"
                    title={
                      <i
                        className="far
                       fa-trash-alt"
                      ></i>
                    }
                    onClick={() => deleteSupplier(datas.id)}
                  />
                  <Buttons
                    className="btn btn-sm"
                    title={<i className="far fa-edit"></i>}
                    onClick={() => open(datas)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
