import {render} from '@testing-library/react';
import App from './App';

test('Renders the App component', () => {
  render(<App />);
  expect(App).toBeTruthy();
});
