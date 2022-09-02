import React from 'react';
import { render, screen } from '@testing-library/react';
import IconChevron from './IconChevron';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconChevron title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconChevron test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconChevron: ', () => {
    const title = 'Abrir';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Abrir');
    expect(icon);
  });
});
