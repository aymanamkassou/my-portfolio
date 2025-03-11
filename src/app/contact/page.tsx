import Terminal from '@/components/ui/Terminal';

export default function Contact() {
  return (
    <div className="container mx-auto px-4">
      <section className="mb-16">
      <h1 className="pt-16 text-3xl mb-4 font-normal">Contact</h1>
      <Terminal 
        text="./get_in_touch.sh" 
        typingSpeed={40}
        className="text-xl mb-8"
      />
        
        <div className="card max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-xl mb-4">Get in touch</h2>
            <p className="mb-4">
              I'm always open to discuss research opportunities, collaboration on projects, 
              or just to chat about technology and computer science.
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg mb-2">Email</h3>
              <p className="dark:text-dark-accent text-light-accent">
                <a href="mailto:ayman.amkassou@gmail.com">ayman.amkassou@gmail.com</a>
              </p>
            </div>
            
            <div>
              <h3 className="text-lg mb-2">Location</h3>
              <p>Benslimane, Morocco</p>
            </div>
            
            <div>
              <h3 className="text-lg mb-2">Social</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/aymanamkassou" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="dark:text-dark-accent text-light-accent border-b dark:border-dark-accent border-light-accent pb-1"
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/ayman-a-amkassou/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="dark:text-dark-accent text-light-accent border-b dark:border-dark-accent border-light-accent pb-1"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
