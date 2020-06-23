import React from 'react';
import {Text} from './styles';

export default TextStyle = ({...props}) => {
  return <Text {...props}>{props.children}</Text>;
};
