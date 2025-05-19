import React, { Component } from 'react';
import { render, screen } from '@testing-library/react';
import { Projects } from '../Projects';
describe('Projects Component', () => {
  test('renders project cards with correct information', () => {
    render(<Projects />);
    // Check if all projects are rendered
    expect(screen.getByText('E-commerce Platform')).toBeInTheDocument();
    expect(screen.getByText('Dashboard UI Kit')).toBeInTheDocument();
    expect(screen.getByText('Real-time Collaboration Tool')).toBeInTheDocument();
  });
  test('renders project tags', () => {
    render(<Projects />);
    // Check if tags are rendered
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });
  test('renders project links', () => {
    render(<Projects />);
    // Check if all projects have Demo and Code links
    const demoLinks = screen.getAllByText('Live Demo');
    const codeLinks = screen.getAllByText('Code');
    expect(demoLinks).toHaveLength(3);
    expect(codeLinks).toHaveLength(3);
  });
});