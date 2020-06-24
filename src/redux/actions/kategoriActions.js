import {
  TAMBAH_KATEGORI,
  EDIT_KATEGORI,
  DELETE_KATEGORI,
  GET_KATEGORI,
  MODAL_OPEN
} from "../types";
import axios from "axios";

const base_url = "https://arcane-escarpment-90589.herokuapp.com/api";

export const modalOpen = () => dispatch => {
  return dispatch({
    type: MODAL_OPEN
  });
};

export const getKategori = () => dispatch => {
  axios.get(`${base_url}/manager/kategori`).then(res => {
    dispatch({
      type: GET_KATEGORI,
      payload: res.data
    });
  });
};

export const tambahKategori = ({ kategori }) => dispatch => {
  return dispatch => {
    axios
      .post(`${base_url}/manager/kategori`, { kategori })
      .then(res => {
        dispatch(createPostSuccess(res.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createPostSuccess = data => {
  return {
    type: TAMBAH_KATEGORI,
    payload: {
      kategori: data.kategori
    }
  };
};

export const editKategori = data => ({
  type: EDIT_KATEGORI,
  payload: data
});

export const deleteKategori = data => ({
  type: DELETE_KATEGORI,
  payload: data
});
