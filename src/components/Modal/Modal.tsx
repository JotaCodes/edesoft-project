import React from 'react';
import classnames from 'classnames';

// Icons
import { IconClose } from '../Icons';

// styles
import Wrapper, { Content } from './Modal.styles';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  padding?: boolean;
  buttonTestId?: string;
}

const Modal: React.FC<Props> = ({
  children,
  onClose,
  padding = false,
  buttonTestId = '',
}: Props) => {
  const handleOnClick = () => onClose();

  const contentStyles = classnames({
    'has-padding': padding,
  });

  return (
    <Wrapper>
      <Content className={contentStyles}>
        <button
          type="button"
          onClick={handleOnClick}
          className="close-button"
          data-testid={buttonTestId}
        >
          <IconClose title="fechar" />
        </button>
        {children}
      </Content>
    </Wrapper>
  );
};

export default Modal;
