import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Key from '../components/key';
import KeyRow from '../components/keyRow';
import Calculator from '../components/calculator';
import ResultWindow from '../components/resultWindow';
import NavBar from '../components/navBar';

describe('Components testing', () => {
  test('Key Component', () => {
    const tree = renderer.create(<Key name="3" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('KeyRow Component', () => {
    const tree = renderer.create(<KeyRow keys={['AC', '+/-', '%', '÷']} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Calculator Component', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('ResultWindow Component', () => {
    const tree = renderer.create(<ResultWindow value="0" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('NavBar Component', () => {
    const Element = (
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const tree = renderer.create(Element).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
