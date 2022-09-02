import styled from 'styled-components';

interface Props {
  type: 'small' | 'mid';
  size: 'tiny' | 'little' | 'regular' | 'medium' | 'great' | 'bigger';
}

const Wrapper = styled.svg<Props>`
  min-width: ${({ theme, type, size }) => theme.spacing[type][size]};
`;

export default Wrapper;
