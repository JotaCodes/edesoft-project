import React from 'react';

// styles
import { IconWrapper } from '../container';

interface Props {
  color?: string;
  title?: string;
}

const IconNext: React.FC<Props> = ({
  color = '#0074C0',
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
    <path
      d="M7 7.00175C7 6.19093 8.00106 5.7172 8.72636 6.18478L16.5365 11.2198C17.1545 11.6182 17.1545 12.4553 16.5365 12.8538L8.72636 17.8888C8.00106 18.3564 7 17.8826 7 17.0718V7.00175Z"
      fill={color}
    />
  </IconWrapper>
);

IconNext.displayName = 'IconNext';

export default React.memo(IconNext);
