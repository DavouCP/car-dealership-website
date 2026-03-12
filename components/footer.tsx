import { MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer id="about" className="relative border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border border-accent/60 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-accent" />
              </div>
              <span className="text-foreground font-mono text-sm tracking-widest uppercase">AutoLux</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              The finest premium and luxury vehicles, curated for discerning drivers. No compromise. Only excellence.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <p className="text-foreground/40 font-mono text-[10px] uppercase tracking-widest">Navigate</p>
            <nav className="flex flex-col gap-2">
              {["Showcase", "About", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
                  className="text-left text-muted-foreground hover:text-foreground text-sm font-mono tracking-wider transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Quick Links */}
          <div className="flex flex-col gap-3">
            <p className="text-foreground/40 font-mono text-[10px] uppercase tracking-widest">Contact</p>
            <div className="flex flex-col gap-2">
              <a href="tel:+1234567890" className="text-muted-foreground hover:text-accent text-sm font-mono transition-colors duration-200">
                +1 (234) 567-890
              </a>
              <a href="mailto:info@autolux.com" className="text-muted-foreground hover:text-accent text-sm font-mono transition-colors duration-200">
                info@autolux.com
              </a>
              <a
                href="https://wa.me/+1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-muted-foreground hover:text-accent text-sm font-mono transition-colors duration-200"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground/50 font-mono text-xs">
            © {new Date().getFullYear()} AutoLux. All rights reserved.
          </p>
          <p className="text-muted-foreground/30 font-mono text-xs">
            Display only. No purchases processed on site.
          </p>
        </div>
      </div>
    </footer>
  )
}
