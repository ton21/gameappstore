import styled from 'styled-components';

export const Text = styled.Text`
  color: ${(props) => props.color ?? '#fff'};
  ${({title, large, medium, small, tiny}) => {
    switch (true) {
      case title:
        return 'font-size: 32px';
      case large:
        return 'font-size: 20px';
      case medium:
        return 'font-size: 16px';
      case small:
        return 'font-size: 13px';
      case tiny:
        return 'font-size: 12px';
      default:
        return 'font-size: 14px';
    }
  }}
  ${({light, bold, heavy}) => {
    switch (true) {
      case light:
        return 'font-family: Montserrat-Light';
      case bold:
        return 'font-family: Montserrat-Medium';
      case heavy:
        return 'font-family: Montserrat-Bold';
      default:
        return 'font-family: Montserrat-Regular';
    }
  }}
  ${({center, right}) => {
    switch (true) {
      case center:
        return 'text-align: center';
      case right:
        return 'text-align: right';
      default:
        return 'text-align: left';
    }
  }}
`;
