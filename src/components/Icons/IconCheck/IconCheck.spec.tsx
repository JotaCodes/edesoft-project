import React from 'react';
import { render, screen } from '@testing-library/react';
import IconCheck from './IconCheck';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconCheck title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconCheck test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconCheck: ', () => {
    const title = 'Confirmado!';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Confirmado!');
    expect(icon);
  });
});
