/**
 *Action Types
 */
export const Types = {
  LOAD_PAYMENTS_REQUEST: 'LOAD_PAYMENTS_REQUEST',
  LOAD_PAYMENTS_SUCCESS: 'LOAD_PAYMENTS_SUCCESS',
  LOAD_PAYMENTS_FAILURE: 'LOAD_PAYMENTS_FAILURE',
};
/**
 *Reducer
 */
const initialState = {
  data: [],
  loading: '',
  error: false,
};

export default function indexPayments(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case Types.LOAD_PAYMENTS_REQUEST:
      return { ...state, loading: 'request' };
    case Types.LOAD_PAYMENTS_SUCCESS:
      console.log('initialData', state.loading);
      return {
        ...state,
        data: action.payload.data,
        loading: 'success',
        error: false,
      };

    case Types.LOAD_PAYMENTS_FAILURE:
      return { ...state, loading: 'failure', error: true };
    default:
      return state;
  }
}
/**
 *Action Creators
 */

export const Creators = {
  loadPaymentsRequest: () => ({
    type: Types.LOAD_PAYMENTS_REQUEST,
  }),

  loadPaymentsSuccess: data => ({
    type: Types.LOAD_PAYMENTS_SUCCESS,
    payload: { data },
  }),

  loadPaymentsFailure: () => ({
    type: Types.LOAD_PAYMENTS_FAILURE,
  }),
};
