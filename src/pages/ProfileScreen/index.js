import React from 'react';
import {StatusBar} from 'react-native';
import {
  Container,
  AvatarContainer,
  Avatar,
  Badge,
  Stats,
  Stat,
  Games,
  Game,
  GameImage,
  Info,
  Account,
  Settings,
  Logout,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Text from '../../components/Text';
import {gameList} from '../../gameData';

const ProfileScreen = () => {
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <AvatarContainer>
        <Avatar
          source={{
            uri:
              'https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80',
          }}
        />
        <Text heavy medium color="white">
          Ton Santos
        </Text>
      </AvatarContainer>
      <Badge>
        <Text small heavy>
          Pro Player
        </Text>
      </Badge>
      <Stats>
        <Stat>
          <Text large bold>
            250 <Text color="#9a9a9a">Games</Text>
          </Text>
        </Stat>
        <Stat>
          <Text large bold>
            3 <Text color="#9a9a9a">Purchases</Text>
          </Text>
        </Stat>
      </Stats>
      <Text center large>
        Purchased Games
      </Text>
      <Games
        data={gameList}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <Game>
            <GameImage source={item.cover} />
            <Info>
              <Text>{item.title}</Text>
              <Text>{Math.floor(Math.random() * 1000) + 1} Sales</Text>
            </Info>
            <Text>$ {Math.floor(Math.random() * 50) + 1}</Text>
          </Game>
        )}
      />
      <Account>
        <Settings>
          <Icon name="settings" size={24} color="white" />
        </Settings>
        <Logout>
          <Text heavy center small color="white">
            Logout
          </Text>
        </Logout>
      </Account>
    </Container>
  );
};

export default ProfileScreen;
