import React from 'react';
import styled from 'styled-components/native';

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

const Button = styled.TouchableOpacity`
  background-color: ${props => props.bgColor || '#2A9D8F'};
  padding: 15px 30px;
  border-radius: 30px;
  align-items: center;
  flex: 1;
  margin: 0 10px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const RoundedButtons = () => {
  return (
    <ButtonContainer>
      <Button bgColor="#2A9D8F">
        <ButtonText>Button 1</ButtonText>
      </Button>
      <Button bgColor="#E76F51">
        <ButtonText>Button 2</ButtonText>
      </Button>
    </ButtonContainer>
  );
};

export default RoundedButtons;
