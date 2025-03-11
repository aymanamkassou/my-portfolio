'use client';
import { useEffect, useRef } from 'react';

interface MathFormulaProps {
  formula: string;
  display?: boolean;
  className?: string;
}

export default function MathFormula({ formula, display = false, className = '' }: MathFormulaProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && containerRef.current) {
      // Dynamically import KaTeX
      import('katex').then((katex) => {
        import('katex/dist/katex.min.css');
        katex.default.render(formula, containerRef.current!, {
          throwOnError: false,
          displayMode: display,
        });
      });
    }
  }, [formula, display]);

  return <div ref={containerRef} className={className} />;
}
