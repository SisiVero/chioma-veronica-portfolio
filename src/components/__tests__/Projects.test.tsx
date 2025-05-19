// import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
// import { Projects } from '../Projects';
// describe('Projects Component', () => {
//   test('renders project cards with correct information', () => {
//     render(<Projects />);
//     // Check if all projects are rendered
//     expect(screen.getByText('Wig Dealers')).toBeInTheDocument();
//     expect(screen.getByText('Infinion Website')).toBeInTheDocument();
//     expect(screen.getByText('Print Forge')).toBeInTheDocument();
//       expect(screen.getByText('Wig Dealer')).toBeInTheDocument();
//     expect(screen.getByText('Learning Journal')).toBeInTheDocument();
//     expect(screen.getByText('Print Forge')).toBeInTheDocument();
//       expect(screen.getByText('Quizzical')).toBeInTheDocument();
//     expect(screen.getByText('Password Generator')).toBeInTheDocument();
//     expect(screen.getByText('Weather App')).toBeInTheDocument();
//       expect(screen.getByText('Color Scheme Generator')).toBeInTheDocument();
//     expect(screen.getByText('Endorsement App')).toBeInTheDocument();
//     expect(screen.getByText('Portfolio')).toBeInTheDocument();
//       expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
//     expect(screen.getByText('Scoreboard')).toBeInTheDocument();
//     expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
//   });
//   test('renders project tags', () => {
//     render(<Projects />);
//     // Check if tags are rendered
//     expect(screen.getByText('Next.Js')).toBeInTheDocument();
//     expect(screen.getByText('React')).toBeInTheDocument();
//     expect(screen.getByText('TypeScript')).toBeInTheDocument();
//   });
//   test('renders project links', () => {
//     render(<Projects />);
//     // Check if all projects have Demo and Code links
//     const demoLinks = screen.getAllByText('Live Demo');
//     const codeLinks = screen.getAllByText('Code');
//     expect(demoLinks).toHaveLength(3);
//     expect(codeLinks).toHaveLength(3);
//   });
// });