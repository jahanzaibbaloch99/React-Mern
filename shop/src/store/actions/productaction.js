import axios from "axios";


//get all products

export const getProducts = () => dispatch => {
  console.log("asdfasdas")
  // dispatch(setProductLoading());
  axios.get("http://localhost:3001/api/product")
    .then(res => {
      console.log(res)
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data
      })
    }
    )
    .catch(err => {
      console.log(err)
      dispatch({
        type: "GET_PRODUCTS",
        payload: null
      })
    }
    );
};
//loading state;
export const setProductLoading = () => {
  return {
    type: "PRODUCT_LOADING"
  };
};

