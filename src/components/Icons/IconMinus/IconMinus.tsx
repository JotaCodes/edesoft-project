import React from 'react';

// styles
import { IconWrapper } from '../container';

interface Props {
  color?: string;
  title?: string;
}

const IconMinus: React.FC<Props> = ({
  color = '#F37A19',
  title = '',
}: Props) => (
  <IconWrapper
    type="small"
    size="great"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title !== '' && <title>{title}</title>}
    <circle opacity="0.75" cx="12" cy="12" r="12" fill={color} />
    <path
      d="M16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13L8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11L16 11Z"
      fill="white"
    />
  </IconWrapper>
);

IconMinus.displayName = 'IconMinus';

export default React.memo(IconMinus);
