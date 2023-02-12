import { createGlobalStyle } from "styled-components";
import RobotoBold from './fonts/Roboto-Bold.ttf'
import RobotoLight from './fonts/Roboto-Light.ttf'
import RobotoRegular from './fonts/Roboto-Regular.ttf'

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto', sans-serif;
  src: url(${RobotoBold}) format('ttf'),
  url(${RobotoLight}) format('ttf'),
  url(${RobotoRegular}) format('ttf');
}
`

export default FontStyles