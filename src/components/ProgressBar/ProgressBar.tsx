import styled from "styled-components";
import { Container } from "../Container/Container.style";

interface IBarProgressProps {
  percentage?: number
}

export const ProgressBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: .325rem;
  background-color: ${({ theme }) => theme.secondary.contrastText};
  border-radius: .375rem;
  overflow: hidden;
`

export const FillProgress = styled.div<IBarProgressProps>`
  height: 100%;
  background-color: ${({ theme }) => theme.secondary.main};
  border-radius: .375rem;
  transition: width 0.2s ease-in-out;
  width: ${props => `${props?.percentage}%`};

`

export const ProgressBar = ({ percentage }: IBarProgressProps) => {
  return (
    <Container gap="0">
      <ProgressBarContainer>
        <FillProgress percentage={percentage} />
      </ProgressBarContainer>
    </Container>
  )
}