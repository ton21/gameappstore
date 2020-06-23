import styled from 'styled-components';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #343434;
`;

export const AvatarContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;
export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 12px;
  border-width: 2px;
  border-color: #cf0c4d;
`;

export const Badge = styled.View`
  background-color: #cf0c4d;
  padding: 4px 10px;
  align-self: center;
  border-radius: 4px;
`;
export const Stats = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 12px 0 32px 0;
  align-self: center;
`;
export const Stat = styled.View`
  margin: 0 16px;
`;

export const Games = styled.FlatList`
  flex: 1;
  margin: 16px;
  margin-bottom: 32px;
`;

export const Game = styled.View`
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  margin-bottom: 16px;
`;
export const GameImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  margin-right: 16px;
`;
export const Info = styled.View`
  flex: 1;
`;
export const Account = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 16px;
`;
export const Settings = styled.TouchableOpacity.attrs({
  activeOpacity: 0.85,
})`
  margin-right: 12px;
  padding: 10px;
  align-items: center;
  background-color: #cf0c4d;
  border-radius: 6px;
  height: 45px;
`;
export const Logout = styled.TouchableOpacity.attrs({
  activeOpacity: 0.85,
})`
  flex: 1;
  background-color: #404040;
  padding: 12px;
  height: 45px;
  border-radius: 6px;
  align-items: center;
`;
