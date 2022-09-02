import React from 'react';
import { render, screen } from '@testing-library/react';
import IconEye from './IconEye';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconEye title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconEye test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconEye: ', () => {
    const title = 'Visualizar';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Visualizar');
    expect(icon);
  });
});
