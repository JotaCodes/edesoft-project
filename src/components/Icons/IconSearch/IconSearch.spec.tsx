import React from 'react';
import { render, screen } from '@testing-library/react';
import IconSearch from './IconSearch';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconSearch title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconSearch test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconSearch: ', () => {
    const title = 'Pesquisar';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Pesquisar');
    expect(icon);
  });
});
