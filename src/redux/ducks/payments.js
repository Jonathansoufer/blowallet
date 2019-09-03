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
const INITIAL_STATE = {
  payments: [],
  loading: false,
  error: false,
};

export default function payments(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOAD_PAYMENTS_REQUEST:
      return { ...state, loading: true };
    case Types.LOAD_PAYMENTS_SUCCESS:
      return {
        ...state,
        payments: action.payload.data,
        loading: false,
        error: false,
      };
    case Types.LOAD_PAYMENTS_FAILURE:
      return { ...state, loading: false, error: true };
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
