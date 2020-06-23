import React, {useEffect} from 'react';

import {StatusBar} from 'react-native';
import {
  Container,
  GameArtContainer,
  GameArt,
  BackButton,
  GameInfoContainer,
  GameThumbContainer,
  GameThumb,
  GameInfo,
  Download,
  GameStatsContainer,
  Stars,
  ScreenShotsContainer,
  ScreenShotContainer,
  ScreenShots,
  ScreenShot,
  Description,
} from './styles';

import Text from '../../components/Text';

import Icon from 'react-native-vector-icons/MaterialIcons';

const GameScreen = ({route, navigation}) => {
  const {game} = route.params;

  const renderStars = () => {
    let stars = [];
    for (let s = 1; s <= 5; s++) {
      stars.push(
        <Icon
          key={s}
          name="star"
          size={15}
          style={{marginRight: 0}}
          color={game.rating >= parseFloat(s) ? '#c73e6b' : '#444'}
        />,
      );
    }
    return <Stars>{stars}</Stars>;
  };
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Container vertical={true} showsVerticalScrollIndicator={false}>
        <GameArtContainer>
          <GameArt source={game.cover} />
          <BackButton onPress={() => navigation.goBack()}>
            <Icon name="close" color="gray" size={32} />
          </BackButton>
        </GameArtContainer>
        <GameInfoContainer>
          <GameThumbContainer>
            <GameThumb source={game.cover} />
          </GameThumbContainer>
          <GameInfo>
            <Text style={{marginBottom: 5}}>{game.title}</Text>
            <Text small color="#9a9a9a" numberOfLines={2}>
              {game.teaser}
            </Text>
          </GameInfo>
          <Download>
            <Icon name="cloud-download" size={24} color="#fff" />
          </Download>
        </GameInfoContainer>
        <GameStatsContainer>
          {renderStars()}
          <Text heavy small color="#9a9a9a">
            {game.rating}
          </Text>
          <Text bold small color="#9a9a9a">
            {game.category[0]}
          </Text>
          <Text bold small color="#9a9a9a">
            {game.age}
          </Text>
          <Text bold light color="#9a9a9a">
            Game of the day
          </Text>
        </GameStatsContainer>
        <ScreenShotsContainer>
          <ScreenShots horizontal={true} showsHorizontalScrollIndicator={false}>
            {game.screenshots.map((screenshot, idx) => (
              <ScreenShotContainer
                key={idx}
                style={{
                  elevation: 4,
                }}>
                <ScreenShot source={screenshot} />
              </ScreenShotContainer>
            ))}
          </ScreenShots>
        </ScreenShotsContainer>
        <Description>
          <Text light color="#888" tiny style={{lineHeight: 18}}>
            {game.description}
          </Text>
        </Description>
      </Container>
    </>
  );
};

export default GameScreen;
