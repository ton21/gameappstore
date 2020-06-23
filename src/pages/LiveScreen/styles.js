import styled from 'styled-components';
import {SafeAreaView} from 'react-native-safe-area-context';

import {TouchableOpacity} from 'react-native-gesture-handler';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #343434;
`;

export const Header = styled.View`
  margin: 32px 16px 0 16px;
`;
export const SearchContainer = styled.View`
  position: relative;
  margin: 22px 0 32px 0;
  background-color: #404040;
  border-radius: 100px;
  justify-content: center;
  flex-direction: row;
`;
export const Search = styled.TextInput`
  flex: 1;
  padding: 8px 23px;
  color: #838383;
`;
export const SearchIcon = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

export const PopularGames = styled.ScrollView``;
export const PopularGamesContainer = styled.View`
  margin: 16px;
  margin-left: 0;
`;
export const PopularGame = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 12px;
`;

export const SectionContainer = styled.View`
  margin-bottom: 16px;
  margin-left: 16px;
`;

export const LiveGamesTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-right: 16px;
`;

export const LiveGames = styled.FlatList`
  position: relative;
  margin: 0 16px;
`;
export const LiveGameContainer = styled.View`
  margin-bottom: 16px;
`;
export const LiveGame = styled.Image`
  width: 100%;
  height: 275px;
  border-radius: 12px;
  margin-bottom: 22px;
`;
export const LiveGameTitle = styled.View`
  margin-right: 12px;
  border-radius: 4px;
  background-color: #cf0c4d;
  padding: 4px 8px;
`;
export const LiveGameOver = styled.View`
  position: absolute;
  top: 8px;
  right: 8px;
  flex-direction: row;
  align-items: center;
`;
export const LiveGameBadge = styled.View`
  background-color: #f55;
  border-radius: 4px;
  padding: 4px 8px;
`;
