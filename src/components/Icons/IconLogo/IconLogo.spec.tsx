import React from 'react';
import { render, screen } from '@testing-library/react';
import IconLogo from './IconLogo';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = () => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconLogo />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconLogo test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconLogo: ', () => {
    const { renderComp } = createSut();

    renderComp();

    const icon = screen.getByTitle('VLI');
    expect(icon);
  });
});
