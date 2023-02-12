import styled from "styled-components";
import { Container } from "../Container/Container.style";

interface ITimerProps {
  consumed?: number
  remaining?: number

}

export const TimeConsumed = styled.span<ITimerProps>`
  ::after {
    content: ${props => `"${props.consumed || "00:00"}"`};
    color: ${({theme}) => theme.secondary.contrastText};
    font-size: .875rem;
  }
`
export const TimeLeft = styled(TimeConsumed)`
  ::after {
    content: ${props => `"${props.remaining || "00:00"}"`};
  }
`

export const Timer = ({ consumed, remaining }: ITimerProps) => {
  return (
    <Container space="space-between">
      <TimeConsumed consumed={consumed} />
      <TimeLeft remaining={remaining} />
    </Container>
  )
}