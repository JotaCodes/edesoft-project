import React from 'react';
import { render, screen } from '@testing-library/react';
import IconTriangle from './IconTriangle';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconTriangle title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconTriangle test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconTriangle: ', () => {
    const title = 'Selecione';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Selecione');
    expect(icon);
  });
});
