import { call, put } from 'redux-saga/effects';

import { Creators as PaymentActions } from '../ducks/payments';

export function* loadPayments() {
  try {
    const response = yield call(
      'https://gist.githubusercontent.com/AbdoulNdiaye/b253a0a7b093cd5e775c85261780cff5/raw/3d0d14c6e21f6f758a2968f6ed1d61a9bc3594bb/transactions.json'
    );
    console.log(response);
    yield put(PaymentActions.loadPaymentsSuccess(response.data.data));
  } catch (error) {
    yield put(PaymentActions.loadPaymentsFailure());
  }
}
