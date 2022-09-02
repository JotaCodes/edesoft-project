import React from 'react';

// styles
import Wrapper from './Tooltip.styles';

interface Props {
  title: string;
  items: string[];
}

const Tooltip: React.FC<Props> = ({ title, items }: Props) => {
  return (
    <Wrapper>
      <p>{title}</p>
      <ul>
        {items.map((item, idx) => (
          <li key={`item-${idx}`}>{item}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default Tooltip;
