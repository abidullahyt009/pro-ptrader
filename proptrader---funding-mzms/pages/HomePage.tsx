
import React from 'react';
import { PlanType } from '../types';
import { PLANS } from '../constants';

interface HomePageProps {
  onSelectPlan: (plan: PlanType) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onSelectPlan }) => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-black text-white">Choose Your Path to Funding</h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Select a funding model that fits your trading style. Proven strategies get scaled with real capital.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Challenge Plan Card */}
        <div className="glass-card rounded-3xl p-8 flex flex-col justify-between hover:border-primary/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">Most Popular</span>
            </div>
            <h3 className="text-3xl font-bold">{PLANS[PlanType.CHALLENGE].name}</h3>
            <p className="text-white/60">{PLANS[PlanType.CHALLENGE].description}</p>
            <div className="py-6 border-y border-white/10 space-y-3">
              <div className="flex justify-between">
                <span className="text-white/40">Target to Pass</span>
                <span className="font-bold text-primary">{PLANS[PlanType.CHALLENGE].target}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Total Loss Limit</span>
                <span className="font-bold">{PLANS[PlanType.CHALLENGE].totalLoss}</span>
              </div>
            </div>
            <div className="text-4xl font-black">
              ${PLANS[PlanType.CHALLENGE].fee} <span className="text-sm font-normal text-white/40">one-time fee</span>
            </div>
          </div>
          <button 
            onClick={() => onSelectPlan(PlanType.CHALLENGE)}
            className="mt-8 w-full btn-primary py-4 rounded-xl font-bold text-lg"
          >
            Start Challenge
          </button>
        </div>

        {/* Instant Plan Card */}
        <div className="glass-card rounded-3xl p-8 flex flex-col justify-between hover:border-white/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 bg-white/10 border border-white/20 rounded-full">
              <span className="text-white text-xs font-bold uppercase tracking-wider">Fast Track</span>
            </div>
            <h3 className="text-3xl font-bold">{PLANS[PlanType.INSTANT].name}</h3>
            <p className="text-white/60">{PLANS[PlanType.INSTANT].description}</p>
            <div className="py-6 border-y border-white/10 space-y-3">
              <div className="flex justify-between">
                <span className="text-white/40">Evaluation</span>
                <span className="font-bold text-primary">None</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Live Access</span>
                <span className="font-bold text-primary">Immediate</span>
              </div>
            </div>
            <div className="text-4xl font-black">
              ${PLANS[PlanType.INSTANT].fee} <span className="text-sm font-normal text-white/40">one-time fee</span>
            </div>
          </div>
          <button 
            onClick={() => onSelectPlan(PlanType.INSTANT)}
            className="mt-8 w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all"
          >
            Get Instant Access
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="glass-card p-4 rounded-xl">
          <div className="text-primary font-bold">24/7</div>
          <div className="text-xs text-white/40">Support</div>
        </div>
        <div className="glass-card p-4 rounded-xl">
          <div className="text-primary font-bold">90%</div>
          <div className="text-xs text-white/40">Profit Split</div>
        </div>
        <div className="glass-card p-4 rounded-xl">
          <div className="text-primary font-bold">Payouts</div>
          <div className="text-xs text-white/40">Bi-Weekly</div>
        </div>
        <div className="glass-card p-4 rounded-xl">
          <div className="text-primary font-bold">Zero</div>
          <div className="text-xs text-white/40">Hidden Fees</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
