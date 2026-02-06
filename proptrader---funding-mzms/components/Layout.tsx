
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  onHomeClick: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, onHomeClick }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <div 
          onClick={onHomeClick}
          className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-xl">P</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight">PropTrader</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={onHomeClick} className="text-sm font-medium text-white/60 hover:text-white transition-colors">Home</button>
          <button className="text-sm font-medium text-white/60 hover:text-white transition-colors">Support</button>
          <div className="h-4 w-[1px] bg-white/20"></div>
          <span className="text-primary text-sm font-semibold">Active Enrollment</span>
        </nav>
      </header>
      
      <main className="flex-1 w-full max-w-4xl mx-auto p-4 md:p-8">
        {children}
      </main>

      <footer className="border-t border-white/10 p-8 mt-12 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/40 text-sm">© 2024 PropTrader Funding Group. All rights reserved.</p>
          <p className="text-white/20 text-xs mt-2 italic">Trading involves significant risk. Ensure you understand our risk disclosures before enrolling.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
