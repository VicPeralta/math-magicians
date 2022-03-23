import { BrowserRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NavBar from '../components/navBar';
import Calculator from '../components/calculator';

describe('Navigation interaction', () => {
  test('Home navigation', () => {
    const Element = (
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    render(Element);
    const homeLink = screen.getByText('Home');
    userEvent.click(homeLink);

    expect(homeLink.classList.contains('active')).toBeTruthy();
  });
  test('Calculator navigation', () => {
    const Element = (
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    render(Element);
    const calculatorLink = screen.getByText('Calculator');
    userEvent.click(calculatorLink);

    expect(calculatorLink.classList.contains('active')).toBeTruthy();
  });
  test('Quote navigation', () => {
    const Element = (
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    render(Element);
    const quoteLink = screen.getByText('Quote');
    userEvent.click(quoteLink);
    const calculatorLink = screen.getByText('Calculator');
    const homeLink = screen.getByText('Home');

    expect(quoteLink.classList.contains('active')).toBeTruthy();
    expect(calculatorLink.classList.contains('active')).toBeFalsy();
    expect(homeLink.classList.contains('active')).toBeFalsy();
  });
});

describe('Calculator interaction', () => {
  test('Addition interaction', () => {
    render(<Calculator />);
    const numberFive = screen.getByText('5');
    const plus = screen.getByText('+');
    const equal = screen.getByText('=');
    userEvent.click(numberFive);
    userEvent.click(plus);
    userEvent.click(numberFive);
    userEvent.click(equal);
    const result = screen.getByText('10');
    expect(result.classList.contains('results')).toBeTruthy();
  });
});
