import { Button } from '../Utility/Button';
import { render, fireEvent, cleanup, getByLabelText, getAllByText } from '@testing-library/react';
import { FormSection } from '../Layout/FormSection';
import { Select } from '../Utility/Select';

afterEach(cleanup);

const defaultProps = {
  onClick: jest.fn(),
  children: 'Submit'
};

const mockOptions = [{ label: 'test label', value: 'test value' }];

test('button renders with correct text', () => {
  const { queryByText, rerender } = render(<Button {...defaultProps} />);
  expect(queryByText('Submit')).toBeTruthy();

  // Change props
  rerender(<Button {...defaultProps}>Go</Button>);
  expect(queryByText('Go')).toBeTruthy();
});

test('calls correct function on click', () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button {...defaultProps} onClick={onClick} />);
  fireEvent.click(getByText(defaultProps.children));
  expect(onClick).toHaveBeenCalled();
});

test('disabled prop does not allow call to function on click', () => {
  const { getByText } = render(<Button {...defaultProps} isDisabled={true} />);
  fireEvent.click(getByText(defaultProps.children));
  expect(defaultProps.onClick).toHaveBeenCalledTimes(0);
});

test('Form Section renders with correct label', () => {
  const { queryByText, rerender } = render(<FormSection label="Testing" htmlfor="Tests" />);
  expect(queryByText('Testing')).toBeTruthy();

  // Change props
  rerender(<FormSection label="Testing Change" htmlfor="Tests" />);
  expect(queryByText('Testing Change')).toBeTruthy();
});

test('disabled prop does not allow select component', () => {
  const { getByText } = render(
    <Select
      {...defaultProps}
      id={'test id'}
      name={'test'}
      onChange={jest.fn()}
      isDisabled={true}
      options={mockOptions}
    />
  );
  fireEvent.click(getByText('test label'));
  expect(defaultProps.onClick).toHaveBeenCalledTimes(0);
});
