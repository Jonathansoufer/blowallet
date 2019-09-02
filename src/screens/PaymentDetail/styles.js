import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const PaymentCardRow = styled.View`
  flex-direction: row;
`;

export const PaymentLabel = styled.Text`
  font-size: 14px;
  font-weight: 800;
  color: #441771;
  padding: 2px;
`;

export const PaymentText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #441771;
  padding: 2px;
`;

export const RemoveButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #441771;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const RemoveButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
