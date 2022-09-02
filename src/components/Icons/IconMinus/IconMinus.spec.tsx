import React from 'react';
import { render, screen } from '@testing-library/react';
import IconMinus from './IconMinus';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconMinus title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconMinus test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconMinus: ', () => {
    const title = 'Retirar';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Retirar');
    expect(icon);
  });
});
