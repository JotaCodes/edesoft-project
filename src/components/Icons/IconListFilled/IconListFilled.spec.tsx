import React from 'react';
import { render, screen } from '@testing-library/react';
import IconListFilled from './IconListFilled';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconListFilled title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconListFilled test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconListFilled: ', () => {
    const title = 'Ver todos';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Ver todos');
    expect(icon);
  });
});
