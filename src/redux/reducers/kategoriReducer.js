import {
  TAMBAH_KATEGORI,
  DELETE_KATEGORI,
  EDIT_KATEGORI,
  GET_KATEGORI,
  MODAL_OPEN
} from "../types";

const initialState = {
  data: [],
  kategori: "",
  open: false,
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        open: !state.open
      };
    case GET_KATEGORI:
      return {
        ...state,
        data: action.payload
      };
    case TAMBAH_KATEGORI:
      return [...state, action.payload];
    case DELETE_KATEGORI:
      return {
        ...state,
        data: action.payload
      };
    case EDIT_KATEGORI:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};
