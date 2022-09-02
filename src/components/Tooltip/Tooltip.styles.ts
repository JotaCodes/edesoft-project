import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 1px 10px rgb(0 0 0 / 15%);
  padding: ${({ theme }) => theme.spacing.small.little};
  border-radius: ${({ theme }) => theme.borders.width.thick};
  margin-left: ${({ theme }) => theme.spacing.small.little};
  z-index: 999;
  position: absolute;
  width: max-content;

  p,
  li {
    color: ${({ theme }) => theme.colors.highlightDark};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.medium};
    font-size: ${({ theme }) => theme.fonts.fontSize.xm};
  }

  ul {
    margin-top: ${({ theme }) => theme.spacing.small.little};

    li {
      list-style-type: none;
      font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};
    }
  }
`;

export default Wrapper;
