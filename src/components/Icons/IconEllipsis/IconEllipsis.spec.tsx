import React from 'react';
import { render, screen } from '@testing-library/react';
import IconEllipsis from './IconEllipsis';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconEllipsis title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconEllipsis test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconEllipsis: ', () => {
    const title = 'Mais...';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Mais...');
    expect(icon);
  });
});
