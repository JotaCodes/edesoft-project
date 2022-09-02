import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tooltip from './Tooltip';

// Theme:
import { ThemeProvider } from 'styled-components';
import main from 'themes/main';

const createSut = (title: string, items: string[]) => {
  const renderComp = () =>
    render(
      <ThemeProvider theme={main}>
        <Tooltip title={title} items={items} />
      </ThemeProvider>,
    );

  return { renderComp };
};

describe('Tooltip test', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render the Tooltip Componente: ', () => {
    const title = 'Estabelec. Emitentes (CNPJ — Unidade)';
    const items = ['284400001025006 - SP'];
    const { renderComp } = createSut(title, items);

    renderComp();

    const titleText = screen.getByText('Estabelec. Emitentes (CNPJ — Unidade)');
    expect(titleText).toBeInTheDocument();
  });
});
