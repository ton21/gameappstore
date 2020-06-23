import React, {useState, useEffect, useRef} from 'react';
import {View, StatusBar, ActivityIndicator} from 'react-native';

import axios from 'axios';

import {
  Container,
  Header,
  Avatar,
  Categories,
  Category,
  CategoryName,
  CategoryDot,
  GamesList,
  GameCover,
  Game,
  Loading,
  GameInfo,
  GameImage,
  GameTitle,
} from './styles';
import {categoryList} from '../../categories';
import Text from '../../components/Text';
import {gameList} from '../../gameData';

const HomeScreen = ({navigation}) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [counter, setCounter] = useState(0);

  const gamesRef = useRef();
  const changeCategory = (category) => {
    gamesRef.current.scrollToOffset({x: 0, y: 0});
    setSelectedCategory(category);
  };

  const GameItem = (game) => {
    const {teaser, title, cover, backgroundColor} = game;
    return (
      <Game onPress={() => navigation.navigate('GameScreen', {game})}>
        <GameCover source={cover} />
        <GameInfo bgColor={backgroundColor}>
          <GameImage source={cover} />
          <GameTitle numberOfLines={4}>
            <Text bold>{title}</Text>
            {'\n'}
            <Text light>{teaser}</Text>
          </GameTitle>
        </GameInfo>
      </Game>
    );
  };

  const getCategories = async () => {
    try {
      const response = await axios({
        url: 'https://rawg-video-games-database.p.rapidapi.com/genres',
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
          'x-rapidapi-key':
            'a6302e6ca6msh0a97f8b3a33fc57p15b0a3jsn1ba2c7965041',
        },
      });
      const {results} = response.data;
      let innerCats = [];
      if (results.length > 0) {
        results.map((item) => {
          if (!innerCats.includes(item.name)) innerCats.push(item.name);
        });

        setCategories([...categories, ...innerCats]);
      }
      setIsLoading(false);
    } catch (response) {}
  };

  const getGames = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const response = await axios({
        url:
          'https://rawg-video-games-database.p.rapidapi.com/games?page=' + page,
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
          'x-rapidapi-key':
            'a6302e6ca6msh0a97f8b3a33fc57p15b0a3jsn1ba2c7965041',
        },
      });
      const {results} = response.data;
      let innerGames = [];
      if (results.length > 0) {
        results.map((item) => {
          if (item.genres.find((genre) => genre.name === selectedCategory)) {
            innerGames = [...innerGames, item];
          } else {
            innerGames.splice(innerGames.indexOf(item), 1);
          }
        });
        setGames([...games, ...innerGames]);
        setPage(page + 1);
      }
      setIsLoading(false);
    } catch (response) {
      console.log('error: ' + response);
      setIsLoading(false);
    }
  };

  return (
    <Container>
      {isLoading && (
        <Loading>
          <ActivityIndicator size={60} color="#819ee5" />
        </Loading>
      )}
      <StatusBar
        barStyle="-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Header>
        <Text large>
          <Text light large>
            Hello,{' '}
          </Text>
          <Text large bold>
            Ton Santos
          </Text>
          {'\n'}
          <Text large bold>
            Best games for today
          </Text>
        </Text>
        <Avatar
          source={{
            uri:
              'https://images.unsplash.com/photo-1592343618015-5527c8efc9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          }}
        />
      </Header>
      <Categories horizontal={true} showsHorizontalScrollIndicator={false}>
        {categoryList.map((category, index) => (
          <Category key={index} onPress={() => changeCategory(category)}>
            <CategoryName
              selected={selectedCategory === category ? true : false}>
              {category}
            </CategoryName>
            {selectedCategory === category && <CategoryDot />}
          </Category>
        ))}
      </Categories>
      <GamesList
        showsVerticalScrollIndicator={false}
        data={gameList.filter((game) => {
          return (
            game.category.includes(selectedCategory) ||
            selectedCategory === 'All'
          );
        })}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => GameItem(item)}
        ref={gamesRef}
      />
    </Container>
  );
};

export default HomeScreen;
