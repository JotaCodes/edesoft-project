import React from 'react';

// styles
import { IconWrapper } from '../container';

interface Props {
  bgColor?: string;
  borderColor?: string;
  color?: string;
  title?: string;
}

const IconPlusRounded: React.FC<Props> = ({
  bgColor = '#596073',
  borderColor = '#596073',
  color = '#FFF',
  title = '',
}: Props) => (
  <IconWrapper
    type="small"
    size="great"
    width="24"
    height="23"
    viewBox="0 -3 23 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title !== '' && <title>{title}</title>}
    <circle
      opacity="0.75"
      cx="12"
      cy="12"
      r="12"
      fill={bgColor}
      stroke={borderColor}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 17C12.5523 17 13 16.5523 13 16L13 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H13L13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8L11 11L8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H11L11 16C11 16.5523 11.4477 17 12 17Z"
      fill={color}
    />
  </IconWrapper>
);

IconPlusRounded.displayName = 'IconPlusRounded';

export default React.memo(IconPlusRounded);
