import React from 'react';
import { render, screen } from '@testing-library/react';
import IconNextInitial from './IconNextInitial';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconNextInitial title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconNextInitial test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconNextInitial: ', () => {
    const title = 'Pular para o início';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Pular para o início');
    expect(icon);
  });
});
