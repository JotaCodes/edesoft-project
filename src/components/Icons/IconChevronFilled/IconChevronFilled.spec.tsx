import React from 'react';
import { render, screen } from '@testing-library/react';
import IconChevronFilled from './IconChevronFilled';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconChevronFilled title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconChevronFilled test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconChevronFilled: ', () => {
    const title = 'Ler';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Ler');
    expect(icon);
  });
});
