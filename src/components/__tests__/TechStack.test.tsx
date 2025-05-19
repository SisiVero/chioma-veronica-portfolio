import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { TechStack } from '../TechStack';
describe('TechStack Component', () => {
  test('renders all technology categories', () => {
    render(<TechStack />);
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Tools & Others')).toBeInTheDocument();
  });
  test('renders all frontend technologies', () => {
    render(<TechStack />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
  });
  test('renders core expertise section', () => {
    render(<TechStack />);
    expect(screen.getByText('Core Expertise')).toBeInTheDocument();
    expect(screen.getByText('React.js')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
  });
});