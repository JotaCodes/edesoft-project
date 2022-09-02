import React from 'react';
import { render, screen } from '@testing-library/react';
import IconLightning from './IconLightning';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconLightning title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconLightning test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconLightning: ', () => {
    const title = 'Selecione';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Selecione');
    expect(icon);
  });
});
