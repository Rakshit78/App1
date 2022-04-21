import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Wdetail from '../components/Wdetail';

describe('test', () => {
  const capital: string = '';
  test('render without crash', () => {
    render(<Wdetail capital={capital} />);
  });
  test('snapshot test', () => {
    const component = render(<Wdetail capital={capital} />);
    expect(component).toMatchSnapshot();
  });
});
