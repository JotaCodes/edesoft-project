import React from 'react';
import { render, screen } from '@testing-library/react';
import IconDoor from './IconDoor';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <IconDoor title={title} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('IconDoor test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the IconDoor: ', () => {
    const title = 'Sair';

    const { renderComp } = createSut(title);

    renderComp();

    const icon = screen.getByTitle('Sair');
    expect(icon);
  });
});
