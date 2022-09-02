import React from 'react';

interface Props {
  color?: string;
  title?: string;
}

// styles:
import { IconWrapper } from '../container';

const IconChevron: React.FC<Props> = ({
  color = '#A8AFC1',
  title = '',
}: Props) => (
  <IconWrapper
    type="small"
    size="medium"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title !== '' && <title>{title}</title>}
    <path d="M12 6L8 10L4 6" stroke={color} strokeLinejoin="round" />
  </IconWrapper>
);

IconChevron.displayName = 'IconChevron';

export default React.memo(IconChevron);
