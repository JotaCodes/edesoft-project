import React from 'react';
import { render, screen } from '@testing-library/react';
import IconTrash from './IconTrash';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconTrash title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconTrash test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconTrash: ', () => {
    const title = 'Apagar';
    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Apagar');
    expect(icon);
  });
});
