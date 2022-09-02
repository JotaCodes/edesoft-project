import React from 'react';
import { render, screen } from '@testing-library/react';
import IconPlusRounded from './IconPlusRounded';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconPlusRounded title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconPlusRounded test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconPlusRounded: ', () => {
    const title = 'Adicionar';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Adicionar');
    expect(icon);
  });
});
