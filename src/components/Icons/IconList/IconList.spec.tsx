import React from 'react';
import { render, screen } from '@testing-library/react';
import IconList from './IconList';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconList title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconList test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconList: ', () => {
    const title = 'Listar';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Listar');
    expect(icon);
  });
});
