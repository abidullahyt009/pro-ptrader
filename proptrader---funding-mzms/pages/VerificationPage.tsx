
import React, { useState, useEffect } from 'react';

interface VerificationPageProps {
  onComplete: () => void;
}

const VerificationPage: React.FC<VerificationPageProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Detecting transaction...');

  useEffect(() => {
    const statuses = [
      'Detecting transaction...',
      'Matching payment to billing...',
      'Scanning blockchain for confirmations...',
      'Verifying asset arrival...',
      'Syncing with broker API...',
      'Finalizing enrollment...'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 1;
        
        // Update status text periodically
        if (next % 20 === 0 && currentStep < statuses.length - 1) {
          currentStep++;
          setStatus(statuses[currentStep]);
        }
        
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return next;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="animate-in fade-in duration-500 max-w-xl mx-auto flex flex-col items-center justify-center space-y-12 py-12">
      <div className="relative">
        {/* Large Spinner */}
        <div className="w-48 h-48 rounded-full border-4 border-white/5 flex items-center justify-center">
          <svg className="absolute w-full h-full transform -rotate-90">
            <circle
              className="text-primary transition-all duration-300"
              strokeWidth="4"
              strokeDasharray={48 * 2 * Math.PI}
              strokeDashoffset={48 * 2 * Math.PI * (1 - progress / 100)}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="76"
              cx="96"
              cy="96"
            />
          </svg>
          <div className="text-4xl font-black">{progress}%</div>
        </div>
        
        {/* Pulsing Dot */}
        <div className="absolute top-0 right-0 w-4 h-4 bg-primary rounded-full animate-ping"></div>
      </div>

      <div className="text-center space-y-4">
        <h3 className="text-2xl font-bold tracking-tight">Verifying Payment</h3>
        <p className="text-white/40 text-sm max-w-xs">{status}</p>
      </div>

      <div className="w-full glass-card p-6 rounded-2xl flex items-center gap-4">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">!</div>
        <div className="text-xs text-white/40 leading-relaxed">
          Average verification time is currently <span className="text-primary">2.4 minutes</span> due to high network traffic. Please keep this tab open.
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
