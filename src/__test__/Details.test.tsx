import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Details from '../components/Details';

describe('test', () => {
  test('render without crash', () => {
    render(<Details navigate={undefined} />);
  });
  test('snapshot test', () => {
    const component = render(<Details navigate={undefined} />);
    expect(component).toMatchSnapshot();
  });
});
