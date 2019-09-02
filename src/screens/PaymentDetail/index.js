import React from 'react';

import {
  Container,
  PaymentCardRow,
  PaymentLabel,
  PaymentText,
  RemoveButton,
  RemoveButtonText,
} from './styles';

export default function PaymentDetail({ navigation }) {
  const item = navigation.getParam('item');

  return (
    <Container>
      <PaymentCardRow>
        <PaymentLabel>ID: </PaymentLabel>
        <PaymentText>{item.id}</PaymentText>
      </PaymentCardRow>
      <PaymentCardRow>
        <PaymentLabel>Payment Type: </PaymentLabel>
        <PaymentText>{item.attributes.payment_type}</PaymentText>
      </PaymentCardRow>
      <PaymentCardRow>
        <PaymentLabel>Amount: </PaymentLabel>
        <PaymentText>
          {item.attributes.amount} {item.attributes.currency}
        </PaymentText>
      </PaymentCardRow>
      <PaymentCardRow>
        <PaymentLabel>Beneficiary: </PaymentLabel>
        <PaymentText>{item.attributes.beneficiary_party.name}</PaymentText>
      </PaymentCardRow>

      <PaymentCardRow>
        <PaymentLabel>Category: </PaymentLabel>
        <PaymentText>{item.attributes.payment_purpose}</PaymentText>
      </PaymentCardRow>
      <PaymentCardRow>
        <PaymentLabel>Description: </PaymentLabel>
        <PaymentText>{item.attributes.reference}</PaymentText>
      </PaymentCardRow>
      <PaymentCardRow>
        <PaymentLabel>Date: </PaymentLabel>
        <PaymentText>{item.attributes.processing_date}</PaymentText>
      </PaymentCardRow>
      <RemoveButton
        onPress={() => {
          setVisible(!isVisible);
        }}>
        <RemoveButtonText>Cancel Payment</RemoveButtonText>
      </RemoveButton>
    </Container>
  );
}
