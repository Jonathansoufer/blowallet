const initialState = {
  payment: [],
  error: '',
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_PAYMENTS':
      return {
        error: '',
        loading: false,
        payment: action.payload,
      };
    case 'LOAD_ERROR':
      return {
        error: 'Data fetch error!',
        loading: false,
        payment: [],
      };
    default:
      return state;
  }
};
