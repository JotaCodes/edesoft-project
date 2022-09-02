import styled from 'styled-components';

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 999;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.section`
  &.has-padding {
    padding: ${({ theme }) => theme.spacing.small.bigger};
  }

  min-height: 100px;
  min-width: 100px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 17px rgb(0 0 0 / 15%);
  position: relative;
  border-radius: ${({ theme }) => theme.borders.width.thick};

  .close-button {
    position: absolute;
    background-color: transparent;
    top: 16px;
    right: 16px;
    left: auto;
    cursor: pointer;
  }
`;

export default Wrapper;
export { Content };
