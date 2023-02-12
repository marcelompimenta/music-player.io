import styled from "styled-components";

interface ITextProps {
  text?: string
  primary?: boolean
  fontWeight?: number
  sizeFont?: string
}

export const DescriptionMusic = styled.p<ITextProps>`
  ::after {
    content: ${title => `"${title?.text || "carregando..."}"`};
    color: ${(colors) =>
    (colors.primary)
      ? colors.theme.color.primary.contrastText
      : colors.theme.secondary.contrastText};
    font-weight: ${weight => weight?.fontWeight || 100};
    font-size: ${size => size?.sizeFont || "1rem"};
  }
`
