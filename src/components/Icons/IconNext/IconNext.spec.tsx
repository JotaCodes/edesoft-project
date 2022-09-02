import React from 'react';
import { render, screen } from '@testing-library/react';
import IconNext from './IconNext';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconNext title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconNext test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconNext: ', () => {
    const title = 'Avançar';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Avançar');
    expect(icon);
  });
});
