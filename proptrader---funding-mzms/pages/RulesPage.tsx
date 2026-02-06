
import React from 'react';
import { PlanDetails } from '../types';

interface RulesPageProps {
  plan: PlanDetails;
  onProceed: () => void;
}

const RulesPage: React.FC<RulesPageProps> = ({ plan, onProceed }) => {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-black">{plan.name} Rules</h2>
        <p className="text-white/60 mt-2">Please review the parameters carefully before proceeding.</p>
      </div>

      <div className="glass-card rounded-3xl overflow-hidden">
        <div className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="text-xs text-white/40 font-bold uppercase">Funding Fee</label>
              <div className="text-2xl font-black text-primary">${plan.fee}</div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-white/40 font-bold uppercase">Profit Target</label>
              <div className="text-2xl font-black text-white">{plan.target}</div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-white/40 font-bold uppercase">Max Daily Loss</label>
              <div className="text-2xl font-black text-white">{plan.dailyLoss}</div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-white/40 font-bold uppercase">Total Loss Limit</label>
              <div className="text-2xl font-black text-white">{plan.totalLoss}</div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <h4 className="font-bold text-lg">Terms of Service</h4>
            <ul className="space-y-3">
              {[
                "Strict adherence to maximum loss limits is mandatory.",
                "Withdrawals are processed bi-weekly upon reaching minimum threshold.",
                "Multiple account management is allowed within guidelines.",
                "Automated trading systems are permitted on this plan.",
                "Failure to meet targets results in evaluation closure."
              ].map((rule, idx) => (
                <li key={idx} className="flex gap-3 text-sm text-white/70">
                  <div className="mt-1 w-4 h-4 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  </div>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="bg-white/5 p-6 border-t border-white/10 flex items-center justify-between">
          <div className="text-sm text-white/40 italic">I agree to the rules of the {plan.name}</div>
          <button 
            onClick={onProceed}
            className="btn-primary px-8 py-3 rounded-xl font-bold"
          >
            I Understand & Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;
