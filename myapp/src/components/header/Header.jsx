import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavItem, Container, ThemeBtn } from '../index';

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-black/50 backdrop-blur-lg border-b border-gray-300 dark:border-white/10">
      <Container className='mx-auto px-4'>
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-blue-600 dark:text-orange-500">Portfolio</Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {NavItem.map((item) => (
              <Link 
                key={item.name}
                to={item.path} 
                className={`hover:text-blue-600 dark:hover:text-orange-500 transition-colors ${location.pathname === item.path ? 'text-blue-600 dark:text-orange-500' : 'text-gray-800 dark:text-white'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className='text-black dark:text-white'/> : <Menu className='text-black dark:text-white'/>}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            {NavItem.map((item) => (
              <Link 
                key={item.name}
                to={item.path} 
                className={`block py-2 hover:text-blue-600 dark:hover:text-orange-500 transition-colors ${location.pathname === item.path ? 'text-blue-600 dark:text-orange-500' : 'text-gray-800 dark:text-white'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
        <ThemeBtn/>
      </Container>
    </nav>
  );
}
