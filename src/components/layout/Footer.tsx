export default function Footer() {
  return (
    <footer className="bg-charbroiled text-vanilla py-16 px-6 border-t-[8px] border-ketchup">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        <div>
           <h3 className="font-serif text-3xl mb-4">Everest Burgers</h3>
           <p className="font-sans text-vanilla/70 max-w-sm">
             Classic taste. Modern convenience. Serving Glendale since 1995 with fresh, never-frozen beef, hearty breakfast burritos, and massive pastrami sandwiches.
           </p>
        </div>
        
        <div>
          <h4 className="font-serif text-xl mb-4 text-toasted">Hours & Location</h4>
          <p className="font-sans text-vanilla/70">
            123 Brand Blvd<br />
            Glendale, CA 91203<br /><br />
            Open Daily: 7am - 10pm
          </p>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-4 text-toasted">Connect</h4>
          <div className="flex flex-col space-y-2 font-sans text-vanilla/70">
            <a href="#" className="hover:text-ketchup transition">Instagram</a>
            <a href="#" className="hover:text-ketchup transition">Twitter / X</a>
            <a href="#" className="hover:text-ketchup transition">Facebook</a>
          </div>
        </div>
        
        <div>
          <h4 className="font-serif text-xl mb-4 text-toasted">Company</h4>
          <div className="flex flex-col space-y-2 font-sans text-vanilla/70">
            <a href="#" className="hover:text-ketchup transition flex items-center space-x-2">
              <span>We Are Hiring</span>
              <span className="bg-ketchup text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">New</span>
            </a>
            <a href="#" className="hover:text-ketchup transition">Gift Cards</a>
            <a href="#" className="hover:text-ketchup transition">Contact Us</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-sm text-vanilla/50 font-sans">
        © {new Date().getFullYear()} Everest Burgers. All rights reserved. Powered by AI.
      </div>
    </footer>
  );
}
