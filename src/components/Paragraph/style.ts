import styled from 'styled-components';

interface IParagraphStyled {
  smallText?: boolean;
}

export const ParagraphStyled = styled.p<IParagraphStyled>`
  color: var(--gray-05);
  font: ${(props) => {
    if (props.smallText) {
      return 'var(--text-1);';
    }

    return 'var(--font-heading-3);';
  }};
`;
