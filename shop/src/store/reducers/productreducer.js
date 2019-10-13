
const initialState = {
  products:[],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "PRODUCT_LOADING":
      return {
        ...state,
        loading: true
      };
    case "GET_PRODUCTS":
      console.log(action.payload)
      return {
        ...state,
        products: action.payload,
        loading: false
      };
      default:
        return state;
    }
  };