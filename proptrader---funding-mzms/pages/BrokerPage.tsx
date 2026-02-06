
import React from 'react';
import { BROKERS } from '../constants';

interface BrokerPageProps {
  onSelectBroker: (broker: string) => void;
}

const BrokerPage: React.FC<BrokerPageProps> = ({ onSelectBroker }) => {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-black">Select Your Trading Platform</h2>
        <p className="text-white/60 mt-2">Choose the broker you prefer for your funded account.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {BROKERS.map((broker) => (
          <button
            key={broker}
            onClick={() => onSelectBroker(broker)}
            className="glass-card group p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-primary/60 transition-all hover:scale-[1.02]"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl font-bold text-primary group-hover:bg-primary/10 transition-colors">
              {broker.charAt(0)}
            </div>
            <div className="text-xl font-bold">{broker}</div>
            <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Available Platform</div>
          </button>
        ))}
      </div>

      <div className="text-center p-6 glass-card rounded-2xl border-dashed border-white/20">
        <p className="text-sm text-white/40">Don't see your broker? Contact support for custom API integration.</p>
      </div>
    </div>
  );
};

export default BrokerPage;
