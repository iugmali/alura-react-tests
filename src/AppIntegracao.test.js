import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App, {calcularNovoSaldo} from './App';
import api from './api';

jest.mock('./api');

describe('Requisições para a api', () => {
  it('Exibir lista de transações', async () => {
    api.listaTransacoes.mockResolvedValue([
      {
        "valor": "10",
        "transacao": "saque",
        "data": "10/08/2020",
        "id": 1
      },
      {
        "transacao": "deposito",
        "valor": "20",
        "data": "26/09/2020",
        "id": 2
      }
    ]);
    render(<App />);
    expect(await screen.findByText('saque')).toBeInTheDocument;
    expect(screen.getByTestId('transacoes').children.length).toBe(2);
  });

})