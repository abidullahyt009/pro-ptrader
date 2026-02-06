
import React, { useState } from 'react';

interface BillingPageProps {
  onSubmit: (data: any) => void;
  planName: string;
}

const BillingPage: React.FC<BillingPageProps> = ({ onSubmit, planName }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    country: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      onSubmit(formData);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-black">Billing Details</h2>
        <p className="text-white/60 mt-2">Complete your profile for {planName} enrollment.</p>
      </div>

      <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 space-y-6">
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-white/40 uppercase tracking-wider">Full Name</label>
            <input 
              required
              type="text" 
              value={formData.fullName}
              onChange={e => setFormData({...formData, fullName: e.target.value})}
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-white/40 uppercase tracking-wider">Email Address</label>
            <input 
              required
              type="email" 
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              placeholder="john@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider">Country</label>
              <input 
                required
                type="text" 
                value={formData.country}
                onChange={e => setFormData({...formData, country: e.target.value})}
                placeholder="USA"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-white/40 uppercase tracking-wider">Zip Code</label>
              <input 
                required
                type="text" 
                placeholder="10001"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-white/40 uppercase tracking-wider">Billing Address</label>
            <textarea 
              required
              rows={2}
              value={formData.address}
              onChange={e => setFormData({...formData, address: e.target.value})}
              placeholder="123 Street Ave, City"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-colors resize-none"
            />
          </div>
        </div>

        <button 
          type="submit"
          className="w-full btn-primary py-4 rounded-xl font-bold text-lg"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default BillingPage;
