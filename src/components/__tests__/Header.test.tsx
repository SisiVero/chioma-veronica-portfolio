import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '../Header';
describe('Header Component', () => {
  test('renders logo and navigation links', () => {
    render(<Header />);
    expect(screen.getByText('JD')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Tech Stack')).toBeInTheDocument();
  });
  test('toggles mobile menu when button is clicked', () => {
    render(<Header />);
    const menuButton = screen.getByLabelText('Toggle menu');
    // Menu should be hidden initially
    expect(screen.queryByRole('navigation')).not.toBeVisible();
    // Click to open menu
    fireEvent.click(menuButton);
    expect(screen.queryByRole('navigation')).toBeVisible();
    // Click to close menu
    fireEvent.click(menuButton);
    expect(screen.queryByRole('navigation')).not.toBeVisible();
  });
});