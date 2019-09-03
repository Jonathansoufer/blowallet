import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as PaymentActions } from '../ducks/payments';

export function* loadPayments() {
  try {
    const res = yield call(api.get);
    yield put(PaymentActions.loadPaymentsSuccess(res.data.data));
  } catch (error) {
    yield put(PaymentActions.loadPaymentsFailure());
  }
}
