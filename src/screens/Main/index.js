import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect, useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { reducer } from '../../redux/reducers';

import {
  Container,
  ItemHeader,
  List,
  PaymentCardRow,
  PaymentLabel,
  PaymentText,
} from './styles';

export default function Main({ navigation }) {
  const initialState = {
    payment: [],
    error: '',
    loading: true,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(
        'https://gist.githubusercontent.com/AbdoulNdiaye/b253a0a7b093cd5e775c85261780cff5/raw/3d0d14c6e21f6f758a2968f6ed1d61a9bc3594bb/transactions.json'
      )
      .then(res =>
        dispatch({
          type: 'LOAD_PAYMENTS',
          payload: res.data.data,
          loading: false,
        })
      )
      .catch(() => dispatch({ type: 'LOAD_ERROR' }));
  }, []);

  return (
    <Container>
      <List
        data={state.payment}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('PaymentDetail', { item })}>
              <ItemHeader>
                <Icon name="credit-card" size={24} color="#441771" />
                <PaymentCardRow>
                  <PaymentLabel>Beneficiary: </PaymentLabel>
                  <PaymentText>
                    {item.attributes.beneficiary_party.name}
                  </PaymentText>
                </PaymentCardRow>
                <PaymentCardRow>
                  <PaymentLabel>Amount: </PaymentLabel>
                  <PaymentText>
                    {item.attributes.amount} {item.attributes.currency}
                  </PaymentText>
                </PaymentCardRow>
                <PaymentCardRow>
                  <PaymentLabel>Type: </PaymentLabel>
                  <PaymentText>
                    Type: {item.attributes.payment_type}
                  </PaymentText>
                </PaymentCardRow>
                <PaymentCardRow>
                  <PaymentLabel>Scheduled to: </PaymentLabel>
                  <PaymentText>
                    Scheduled to: {item.attributes.processing_date}
                  </PaymentText>
                </PaymentCardRow>
              </ItemHeader>
            </TouchableOpacity>
          </View>
        )}
      />
    </Container>
  );
}
