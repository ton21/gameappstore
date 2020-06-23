import React from 'react';
import {
  StatusBar,
  FlatList,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  SearchContainer,
  Search,
  SearchIcon,
  PopularGames,
  PopularGamesContainer,
  PopularGame,
  SectionContainer,
  LiveGamesTitle,
  LiveGames,
  LiveGameContainer,
  LiveGame,
  LiveGameTitle,
  LiveGameOver,
  LiveGameBadge,
} from './styles';
import Text from '../../components/Text';
import {gameList} from '../../gameData';

const LiveScreen = () => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <Header>
        <Text color="white">Streaming</Text>
        <SearchContainer>
          <Search
            placeholderTextColor="#838383"
            placeholder="Search live streams or games..."
          />
          <SearchIcon>
            <Icon size={24} name="search" color="#838383" />
          </SearchIcon>
        </SearchContainer>
      </Header>
      <SectionContainer>
        <Text bold medium>
          Popular Games
        </Text>
        <PopularGames horizontal={true} showsHorizontalScrollIndicator={false}>
          {gameList.map((game, index) => {
            return (
              <PopularGamesContainer key={index}>
                <PopularGame source={game.cover} />
              </PopularGamesContainer>
            );
          })}
        </PopularGames>
      </SectionContainer>
      <SectionContainer>
        <LiveGamesTitle>
          <Text bold medium>
            Live Now
          </Text>
          <Text bold small color="#cf0c4d">
            View All
          </Text>
        </LiveGamesTitle>
      </SectionContainer>
      <LiveGames
        data={gameList}
        keyExtractor={(item) => String(item.id)}
        vertical={true}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <LiveGameContainer>
            <LiveGame source={item.cover} />
            <LiveGameOver>
              <LiveGameTitle>
                <Text small bold>
                  {item.title}
                </Text>
              </LiveGameTitle>
              <LiveGameBadge>
                <Text small bold>
                  Live
                </Text>
              </LiveGameBadge>
            </LiveGameOver>
          </LiveGameContainer>
        )}
      />
    </Container>
  );
};

export default LiveScreen;
