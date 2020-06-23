import styled from 'styled-components';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #333;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 35px 16px 0 16px;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;

export const Categories = styled.ScrollView`
  margin-top: 32px;
  flex-grow: 0;
`;
export const Category = styled(TouchableOpacity).attrs({
  activeOpacity: 0.85,
})`
  margin: 0 16px;
  align-items: center;
  height: 32px;
  margin-bottom: 32px;
`;
export const CategoryName = styled.Text`
  color: ${(props) => (props.selected ? '#cf0c4d' : '#9a9a9a')};
  font-family: ${(props) =>
    props.selected ? 'Montserrat-Medium' : 'Montserrat-Light'};
`;

export const CategoryDot = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: #cf0c4d;
  margin-top: 3px;
`;

export const GamesList = styled.FlatList``;
export const Game = styled(TouchableOpacity).attrs({
  activeOpacity: 0.85,
})`
  margin-bottom: 32px;
`;
export const GameCover = styled.Image`
  width: 100%;
  height: 300px;
`;

export const Loading = styled.View`
  background-color: rgba(255, 255, 255, 0.8);
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
`;

export const GameInfo = styled.View`
  border-radius: 12px;
  margin: 0 16px;
  margin-top: -45px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.bgColor ?? 'rgba(0, 0, 0, 0.7)'};
`;
export const GameImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;
export const GameTitle = styled.Text`
  margin: 0 16px;
  margin-right: 60px;
`;
