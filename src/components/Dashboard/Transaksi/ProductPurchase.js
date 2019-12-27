import React from "react";
import "./Tables.scss";
import InputSearch from "../../Input/inputSearch";
import { Button } from "@material-ui/core";
import ScatterPlotOutlinedIcon from "@material-ui/icons/ScatterPlotOutlined";

const ProductPurchase = ({
  dataProduk,
  pilihItem,
  isLoading,
  valueSearch,
  filterSearch
}) => {
  return (
    <div className="mt-4">
      <h5 className="text-dark title-transaksi mb-4">
        <ScatterPlotOutlinedIcon />
        DAFTAR BARANG
      </h5>
      <div className="table-responsive text-center tableProduk">
        <div className="py-3">
          <InputSearch
            placeholder="search product"
            value={valueSearch}
            onChange={filterSearch}
          />
        </div>

        <table className="table border">
          <thead>
            <tr>
              <th scope="col">Nama Barang</th>
              <th scope="col">Harga</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr className="text-center">
                <td>Loadings ....</td>
              </tr>
            ) : (
              dataProduk.map((data, index) => (
                <tr className="transition" key={index}>
                  <td>{data.name_item}</td>
                  <td>{data.sell_cost}</td>

                  <td>
                    <Button variant="contained" onClick={() => pilihItem(data)}>
                      +
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductPurchase;
