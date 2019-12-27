import React from "react";
import "./Kategori.scss";
import Input from "../../Input/Input";
import Buttons from "../../Register/ButtonLoading";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const Kategori = ({
  content,
  onSubmit,
  value,
  onChange,
  loading,
  dataKategori,
  isLoading,
  deleteKategori,
  open,
  opens,
  handleChange,
  editKategori,
  close
}) => {
  return (
    <div className={content ? "col-md-10 mt-5" : "col-md-12 mt-5"}>
      <h3>Daftar Kategori</h3>
      <div className="daftar">
        <p>
          <button
            className="btn btn-sm"
            data-toggle="collapse"
            data-target="#collapseExample"
          >
            + Kategori
          </button>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="col-md-4">
            <form onSubmit={onSubmit}>
              <Input
                type="text"
                label="Kategori"
                value={value}
                onChange={onChange}
              />
              <Buttons
                className="btn btn-primary btn-sm float-right"
                title="Save"
                loading={loading}
              />
            </form>
          </div>
        </div>

        <div className="table-responsive mt-3 text-center">
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Kategori</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {dataKategori.map((datas, index) => (
                <tr key={datas.id} className="transition">
                  <td>{index + 1}</td>
                  <td>{datas.name}</td>
                  <td>
                    <Buttons
                      className="btn btn-sm"
                      title="delete"
                      onClick={() => deleteKategori(datas.id)}
                      loading={isLoading}
                    />
                    {/* edit kategori */}
                    <button className="btn btn-sm ml-3" onClick={open}>
                      Edit
                    </button>
                    <Dialog open={opens}>
                      <DialogTitle>Update Kategori</DialogTitle>
                      <DialogContent>
                        <Input
                          type="text"
                          label="kategori"
                          value={value}
                          onChange={handleChange}
                        />
                        <div className="modal-footer">
                          <Buttons
                            className="btn btn-sm"
                            title="save"
                            onClick={() => editKategori(datas.id)}
                            loading={isLoading}
                          />
                          <button type="button" className="btn" onClick={close}>
                            Batal
                          </button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Kategori;
