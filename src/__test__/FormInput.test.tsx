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
  test('render formInput without crash', () => {
    render(<FormInput navigate={undefined} />);
    expect(screen.getByRole('btn')).toBeInTheDocument();
    screen.debug();
  });
  test('render formInput without crash', () => {
    render(<FormInput navigate={undefined} />);
    expect(screen.getByRole('btn')).toBeDisabled();
  });
  test('input changes', () => {
    render(<FormInput navigate={undefined} />);
    const component = fireEvent.change(screen.getByLabelText('Input'), {
      target: { value: 'rakshit' },
    });
    expect(component).toBe(true);
  });
});

/*
 test('render formInput without crash', () => {
    const mockfun = jest.fn();
    render(<FormInput navigate={mockfun} />);
    fireEvent.click(screen.getByRole('btn'));
    expect(mockfun).toHaveBeenCalled();
  });
  */
