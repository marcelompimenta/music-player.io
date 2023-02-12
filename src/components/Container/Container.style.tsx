import styled from "styled-components";

interface IContainerProps {
  direction?: string
  gap?: string
  space?: string
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  justify-content: ${props => props?.space || 'center'};
  flex-direction: ${props => props?.direction || "initial"};
  gap: ${props => props?.gap || `.25rem`};
  width: 100%;
`