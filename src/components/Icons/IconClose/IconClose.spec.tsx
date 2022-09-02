import React from 'react';
import { render, screen } from '@testing-library/react';
import IconClose from './IconClose';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconClose title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconClose test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconClose: ', () => {
    const title = 'Fechar';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Fechar');
    expect(icon);
  });
});
