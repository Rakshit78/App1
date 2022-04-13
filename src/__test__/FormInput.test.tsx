import React from 'react';
//import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import FormInput from '../components/FormInput';

describe('Form input test', () => {
  test('render formInput without crash', () => {
    render(<FormInput navigate={undefined} />);
  });

  test('input changes', () => {
    render(<FormInput navigate={undefined} />);
    expect(screen.getByLabelText('Input')).toBeInTheDocument();
  });

  test('input changes', () => {
    const component = render(<FormInput navigate={undefined} />);

    expect(component).toMatchSnapshot();
  });
});
