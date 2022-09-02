import React from 'react';

// styles
import { IconWrapper } from '../container';

interface Props {
  color?: string;
  title?: string;
}

const IconCheck: React.FC<Props> = ({
  color = '#0074C0',
  title = '',
}: Props) => (
  <IconWrapper
    type="mid"
    size="little"
    width="48"
    height="49"
    viewBox="0 0 48 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title !== '' && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.6232 12.5L20.3684 27.1109L13.6914 20.7813L9 25.4752L20.3684 36.5L39.3158 17.1926L34.6232 12.5Z"
      fill={color}
    />
  </IconWrapper>
);

IconCheck.displayName = 'IconCheck';

export default React.memo(IconCheck);
