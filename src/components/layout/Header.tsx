'use client';

import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="py-6 border-b dark:border-dark-border border-light-border">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <Link href="/" className="text-xl tracking-tight">
            ayman@portfolio:~$
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <span className="text-2xl">≡</span>
          )}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:dark:text-dark-accent hover:text-light-accent">
            ~/home
          </Link>
          <Link href="/projects" className="hover:dark:text-dark-accent hover:text-light-accent">
            ~/projects
          </Link>
          <Link href="/experience" className="hover:dark:text-dark-accent hover:text-light-accent">
            ~/experience
          </Link>
          <Link href="/contact" className="hover:dark:text-dark-accent hover:text-light-accent">
            ~/contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 border-t dark:border-dark-border border-light-border">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="hover:dark:text-dark-accent hover:text-light-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              ~/home
            </Link>
            <Link 
              href="/projects" 
              className="hover:dark:text-dark-accent hover:text-light-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              ~/projects
            </Link>
            <Link 
              href="/experience" 
              className="hover:dark:text-dark-accent hover:text-light-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              ~/experience
            </Link>
            <Link 
              href="/contact" 
              className="hover:dark:text-dark-accent hover:text-light-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              ~/contact
            </Link>
            <div>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
