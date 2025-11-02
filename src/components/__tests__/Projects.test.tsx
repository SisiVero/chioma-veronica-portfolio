import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Projects } from '../Projects';
import { describe, test, expect } from 'vitest';

describe('Projects Component', () => {
  test('renders project cards with correct information', () => {
    render(<Projects/>);
    // Check if all projects are rendered
    expect(screen.getByText('Tax Calculator(work in progress)')).toBeInTheDocument();
    // expect(screen.getByText('Infinion Website')).toBeInTheDocument();
    // expect(screen.getByText('Print Forge')).toBeInTheDocument();
    // expect(screen.getByText('Print Forge')).toBeInTheDocument();
    //   expect(screen.getByText('Quizzical')).toBeInTheDocument();
    // expect(screen.getByText('Password Generator')).toBeInTheDocument();
    // expect(screen.getByText('Weather App')).toBeInTheDocument();
    //   expect(screen.getByText('Color Scheme Generator')).toBeInTheDocument();
    // expect(screen.getByText('Endorsement App')).toBeInTheDocument();
    // expect(screen.getByText('Portfolio')).toBeInTheDocument();
      expect(screen.getByText('Alpha Pins')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
  test('renders project tags', () => {
    render(<Projects />);
    // Check if tags are rendered
    expect(screen.getAllByText('React')).toHaveLength(2);
    // expect(screen.getAllByText('TypeScript')).toHaveLength(1);
  });
})