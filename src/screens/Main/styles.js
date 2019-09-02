import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight()}px;
  align-items: center;
  background-color: #fff;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
export const ItemHeader = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 5px 40px 5px 20px;
  margin-top: 10px;
  border-top-width: 0.2px;
`;

export const Item = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #000;
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
