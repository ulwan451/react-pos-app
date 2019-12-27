import React from "react";
import Price from "./Price";
import PropTypes from "prop-types";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import LastPageIcon from "@material-ui/icons/LastPage";
import TableFooter from "@material-ui/core/TableFooter";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import TableContainer from "@material-ui/core/TableContainer";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { Button } from "@material-ui/core";
import ButtonSuccess from "./buttonSuccess";

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

export default function TableTransaksi(props) {
  const [inputBayar, setInputBayar] = React.useState("");

  const handleInputChange = e => {
    setInputBayar(e.target.value);
  };

  const totalProductPrice = props.rows.map(
    rows => rows.quantity * Number(rows.data.sell_cost)
  );
  const totalPrice =
    totalProductPrice.length !== 0
      ? totalProductPrice.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        )
      : "0";

  const kembaliPrice =
    totalProductPrice.length !== 0
      ? inputBayar -
        totalProductPrice.reduce(
          (accumulator, currentValue) => accumulator + currentValue
        )
      : "0";

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Nama</TableCell>
              <TableCell align="left">Jumlah</TableCell>
              <TableCell align="left">Harga</TableCell>
              <TableCell align="left">Total</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? props.rows.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : props.rows
            ).map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}.</TableCell>
                <TableCell>{row.data.name_item}</TableCell>
                <TableCell align="left">{row.quantity}</TableCell>
                <TableCell align="left">Rp. {row.data.sell_cost}</TableCell>
                <TableCell align="left">
                  Rp. {row.quantity * row.data.sell_cost}
                </TableCell>
                <TableCell align="center">
                  <i
                    style={{ cursor: "pointer" }}
                    onClick={() => props.handleRemoveItemFromCart(row)}
                    className="far fa-trash-alt text-danger"
                  ></i>
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={4}>Subtotal</TableCell>
              <TableCell align="left">
                <Price amount={totalPrice} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4}>Bayar</TableCell>
              <TableCell align="left" colSpan={2}>
                Rp.
                <input
                  className="inputBayar"
                  type="number"
                  value={inputBayar}
                  onChange={handleInputChange}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={4}>Kembali</TableCell>
              <TableCell align="left">
                <Price amount={kembaliPrice} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" colSpan={5}>
                {props.loading ? (
                  <ButtonSuccess />
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={props.handleTransaksi}
                  >
                    Simpan
                  </Button>
                )}
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={5}
                count={props.rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
