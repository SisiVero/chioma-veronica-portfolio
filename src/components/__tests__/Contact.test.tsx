import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { Contact } from '../Contact';
describe('Contact Component', () => {
  test('renders contact information', () => {
    render(<Contact />);
    expect(screen.getByText('veronicaezezim@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('+234 907-344-5627')).toBeInTheDocument();
    expect(screen.getByText('Lagos, Nigeria')).toBeInTheDocument();
  });

});