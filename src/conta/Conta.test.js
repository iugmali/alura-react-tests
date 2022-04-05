import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import Conta from './Conta';

describe('Componente de conta', () => {
  it('Exibir saldo da conta como valor monetário', () => {
    render(<Conta saldo={1000}/>);
    const saldo = screen.getByTestId('saldo-conta');
    expect(saldo.textContent).toBe('R$ 1000');
  })
  it('Chama a função realizarTransacao quando o botão realizar operação é clicado', () => {
    const realizarTransacaoFunction = jest.fn();
    render(<Conta saldo={1000} realizarTransacao={realizarTransacaoFunction}/>);
    const botaoTransacao = screen.getByText('Realizar operação');
    fireEvent.click(botaoTransacao);
    expect(realizarTransacaoFunction).toBeCalled();
  })
})