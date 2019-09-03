import React, { useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Creators as PaymentActions } from '../../redux/ducks/payments';

import {
  Container,
  ItemHeader,
  List,
  PaymentCardRow,
  PaymentLabel,
  PaymentText,
} from './styles';

export default function Main({ navigation }) {
  const dispatch = useDispatch();

  const payment = useSelector(state => state.payment);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(PaymentActions.loadPaymentsRequest());
  }, []);

  // loadPayments = async () => {
  //   dispatch(PaymentActions.loadPaymentsRequest());
  // };

  return (
    <Container>
      <List
        data={payment}
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
        // onRefresh={() => {
        //   loadPayments();
        // }}
        // refreshing={loading}
      />
    </Container>
  );
}
