import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="text-2xl font-bold tracking-tighter">
            PORTFOLIO<span className="text-[#ffc2c7]">.</span>
          </span>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8 text-muted-foreground text-sm font-medium">
          <a href="https://github.com/Deekshitha-089" className="hover:text-primary transition-colors">Github</a>
          <a href="https://www.linkedin.com/in/deekshithapuppala/" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="" className="hover:text-primary transition-colors">Twitter</a>
          <a href="https://www.instagram.com/deekshuuu.___/" className="hover:text-primary transition-colors">Instagram</a>
        </div>
        
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
          Made with <Heart className="w-4 h-4 text-[#ffc2c7] fill-[#ffc2c7]" /> in 2025
        </p>
        <p className="text-muted-foreground text-sm flex items-center justify-center gap-1"> &#169; Deekshitha Puppala. All rights reserved.</p>
      </div>
    </footer>
  );
}
