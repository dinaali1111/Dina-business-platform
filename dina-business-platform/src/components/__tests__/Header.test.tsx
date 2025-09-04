import { render, screen } from '@testing-library/react';
import { AuthProvider } from '../../contexts/AuthContext';
import Header from '../sections/Header';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

const MockedHeader = () => (
  <AuthProvider>
    <Header />
  </AuthProvider>
);

describe('Header Component', () => {
  it('renders logo and navigation', () => {
    render(<MockedHeader />);
    
    // Check if logo is rendered
    expect(screen.getByText('Dina Business')).toBeInTheDocument();
    
    // Check if navigation links are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('shows login and register buttons when user is not authenticated', () => {
    render(<MockedHeader />);
    
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });
});
