import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const PaymentFormView = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;
export const PaymentText = styled.TextInput`
  flex: 1;
  height: 40px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  color: #441771;
  background: #eee;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const AddButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: #441771;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const AddButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
