'use client';

import { useState, useEffect } from 'react';

interface TerminalProps {
  text: string;
  typingSpeed?: number;
  className?: string;
}

export default function Terminal({ text, typingSpeed = 30, className = '' }: TerminalProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, text, typingSpeed, isTyping]);

  return (
    <div className={`font-mono ${className}`}>
      <div className="terminal-prompt">
        {displayedText}
        {isTyping && <span className="animate-pulse">▋</span>}
      </div>
    </div>
  );
}

