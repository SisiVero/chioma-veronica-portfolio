import React, { Component } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Contact } from '../Contact';
describe('Contact Component', () => {
  test('renders contact form with all fields', () => {
    render(<Contact />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });
  test('renders contact information', () => {
    render(<Contact />);
    expect(screen.getByText('hello@example.com')).toBeInTheDocument();
    expect(screen.getByText('+1 (234) 567-890')).toBeInTheDocument();
    expect(screen.getByText('San Francisco, California, USA')).toBeInTheDocument();
  });
  test('form submission with valid data', () => {
    const {
      getByLabelText,
      getByText
    } = render(<Contact />);
    fireEvent.change(getByLabelText(/name/i), {
      target: {
        value: 'John Doe'
      }
    });
    fireEvent.change(getByLabelText(/email/i), {
      target: {
        value: 'john@example.com'
      }
    });
    fireEvent.change(getByLabelText(/subject/i), {
      target: {
        value: 'Test Subject'
      }
    });
    fireEvent.change(getByLabelText(/message/i), {
      target: {
        value: 'Test Message'
      }
    });
    const submitButton = getByText('Send Message');
    fireEvent.click(submitButton);
    // Add assertions for form submission
    // This would typically involve checking if the form was submitted
    // and if any success/error messages are displayed
  });
});