// 'use client';
// import { useEffect } from 'react';
// import Prism from 'prismjs';

// // Import language support
// import 'prismjs/components/prism-c';
// import 'prismjs/components/prism-cpp';
// import 'prismjs/components/prism-markup';
// import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-python';
// import 'prismjs/components/prism-bash';
// import 'prismjs/components/prism-json';

// // Import theme (you can change this to match your site's theme)
// import '../../../public/themes/prism-duotone-sea.css';

// interface CodeBlockProps {
//   code: string;
//   language: string;
//   fileName?: string;
// }

// export default function CodeBlock({ code, language, fileName }: CodeBlockProps) {
//   useEffect(() => {
//     Prism.highlightAll();
//   }, [code]);

//   return (
//     <div className="mb-6 overflow-hidden rounded border dark:border-dark-border border-light-border">
//       {fileName && (
//         <div className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-800 border-b dark:border-dark-border border-light-border">
//           <span className="terminal-prompt">{fileName}</span>
//         </div>
//       )}
//       <pre className="m-0 p-4 overflow-x-auto">
//         <code className={`language-${language}`}>{code}</code>
//       </pre>
//     </div>
//   );
// }
