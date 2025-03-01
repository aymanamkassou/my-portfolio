export default function Footer() {
  return (
    <footer className="py-6 border-t dark:border-dark-border border-light-border text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Ayman Amkassou</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/aymanamkassou" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:dark:text-dark-accent hover:text-light-accent"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/ayman-a-amkassou/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:dark:text-dark-accent hover:text-light-accent"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:ayman.amkassou@gmail.com" 
              className="hover:dark:text-dark-accent hover:text-light-accent"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
