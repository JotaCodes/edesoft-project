import React from 'react';

// styles
import { IconWrapper } from '../container';

interface Props {
  color?: string;
  title?: string;
  clasName?: string;
}

const IconList: React.FC<Props> = ({
  color = '#596073',
  title = '',
  clasName = '',
}: Props) => (
  <IconWrapper
    type="small"
    size="great"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={clasName}
  >
    {title !== '' && <title>{title}</title>}
    <line x1="8" y1="6.25" x2="20" y2="6.25" stroke={color} strokeWidth="1.5" />
    <line
      x1="4"
      y1="6.25"
      x2="5.5"
      y2="6.25"
      stroke={color}
      strokeWidth="1.5"
    />
    <line
      x1="8"
      y1="12.25"
      x2="20"
      y2="12.25"
      stroke={color}
      strokeWidth="1.5"
    />
    <line
      x1="4"
      y1="12.25"
      x2="5.5"
      y2="12.25"
      stroke={color}
      strokeWidth="1.5"
    />
    <line
      x1="8"
      y1="18.25"
      x2="20"
      y2="18.25"
      stroke={color}
      strokeWidth="1.5"
    />
    <line
      x1="4"
      y1="18.25"
      x2="5.5"
      y2="18.25"
      stroke={color}
      strokeWidth="1.5"
    />
  </IconWrapper>
);

IconList.displayName = 'IconList';

export default React.memo(IconList);
