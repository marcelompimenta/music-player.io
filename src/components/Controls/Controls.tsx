import styled from "styled-components";
import forward from '../../assets/play-forward.svg'
import back from '../../assets/play-back.svg'
import play from '../../assets/play.svg'
import stop from '../../assets/stop.svg'
import { Container } from "../Container/Container.style";

export const Play = styled.img.attrs({
  src: `${play}`
})`

  cursor: pointer;
  width: auto;
  transition: 300ms ease-in-out;

  &:hover{
    opacity: .7;
  }

  &:active {
    opacity: .1;
  }

`

export const PlayBack = styled(Play).attrs({
  src: `${back}`
})``

export const PlayForward = styled(Play).attrs({
  src: `${forward}`
})``

export const Stop = styled(Play).attrs({
  src: `${stop}`
})``

export const Controls = () => {
  return (
    <Container gap="1.8rem">
      <PlayBack />
      <Stop />
      <Play />
      <PlayForward />
    </Container>
  )
}