import React from 'react';
import { render, screen } from '@testing-library/react';
import IconConfig from './IconConfig';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconConfig title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconConfig test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconConfig: ', () => {
    const title = 'Configuração';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Configuração');
    expect(icon);
  });
});
