import styled from 'styled-components';

import {TouchableOpacity} from 'react-native-gesture-handler';
export const Container = styled.ScrollView`
  flex: 1;
  background-color: #333;
`;

export const GameArtContainer = styled.View``;
export const GameArt = styled.Image`
  width: 100%;
  height: 300px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
`;
export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 45px;
  left: 16px;
`;

export const GameInfoContainer = styled.View`
  padding: 20px 16px;
  flex-direction: row;
  align-items: center;
`;
export const GameThumbContainer = styled.View`
  margin-right: 16px;
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
`;
export const GameThumb = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
`;
export const GameInfo = styled.View`
  width: 0;
  flex-grow: 1;
  padding-right: 12px;
  flex-direction: column;
`;

export const Download = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #c73e6b;
  align-items: center;
  justify-content: center;
`;

export const GameStatsContainer = styled.View`
  flex-direction: row;
  padding: 0 16px;
  justify-content: space-between;
`;

export const Stars = styled.View`
  flex-direction: row;
`;

export const ScreenShotsContainer = styled.View`
  flex: 1;
  margin: 30px 0;
`;
export const ScreenShots = styled.ScrollView`
  flex-direction: row;
`;
export const ScreenShotContainer = styled.View`
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 5px;
`;
export const ScreenShot = styled.Image`
  width: 300px;
  height: 200px;
  margin: 0 16px;
  border-radius: 20px;
`;

export const Description = styled.View`
  padding: 0 16px;
  margin-bottom: 30px;
`;
