import React from 'react';
import { render, screen } from '@testing-library/react';
import IconTarget from './IconTarget';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconTarget title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconTarget test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconTarget: ', () => {
    const title = 'Selecione';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Selecione');
    expect(icon);
  });
});
