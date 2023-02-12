import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  align-items: center;
  background-color: ${({theme}) => theme.color.primary.main} ;
  height: 31.25rem;
  width: 16.655rem;
  border-radius: .5rem;
  padding: 2rem;
  box-shadow: 0 .375rem 1.875rem -.625rem #000000;
`