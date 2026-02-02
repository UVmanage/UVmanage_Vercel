import { Instagram, Twitter, Linkedin } from "lucide-react";
//Paste this on line 30 once platforms get a following:
//*          <div className="flex items-center gap-6">
//            <a
//              href="#"
//              className="text-muted-foreground hover:text-primary transition-colors"
//              aria-label="Instagram"
//            >
//              <Instagram className="w-5 h-5" />
//            </a>
//            <a
//              href="#"
//              className="text-muted-foreground hover:text-primary transition-colors"
//              aria-label="Twitter"
//            >
//              <Twitter className="w-5 h-5" />
//            </a>
//          </div>
export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold tracking-tighter text-foreground">
            UVmanage
          </div>



          <div className="text-sm text-muted-foreground">
            {new Date().getFullYear()} UVmanage. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
