import { all, takeLatest } from 'redux-saga/effects';

import { Types as PaymentTypes } from '../ducks/payments';

import { loadPayments } from './payments';

export default function* rootSaga() {
  return yield all([
    takeLatest(PaymentTypes.LOAD_PAYMENTS_REQUEST, loadPayments),
  ]);
}
