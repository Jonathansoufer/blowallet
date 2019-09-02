import React from 'react';
import { View, Text } from 'react-native';

import { Container, HeaderTitle } from './styles';

export default function Header({ title }) {
  return (
    <Container>
      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  );
}
