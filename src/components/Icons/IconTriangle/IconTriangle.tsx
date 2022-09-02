import React from 'react';

interface Props {
  color?: string;
  title?: string;
}

const IconTriangle: React.FC<Props> = ({
  color = '#596073',
  title = '',
}: Props) => (
  <svg
    width="12"
    height="6"
    viewBox="0 0 12 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {title !== '' && <title>{title}</title>}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 6L0 0L12 0L6 6Z"
      fill={color}
    />
  </svg>
);

IconTriangle.displayName = 'IconTriangle';

export default React.memo(IconTriangle);
