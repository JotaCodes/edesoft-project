import React from 'react';
import { render, screen } from '@testing-library/react';
import IconCheckFilled from './IconCheckFilled';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconCheckFilled title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconCheckFilled test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconCheckFilled: ', () => {
    const title = 'Confirmar';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Confirmar');
    expect(icon);
  });
});
