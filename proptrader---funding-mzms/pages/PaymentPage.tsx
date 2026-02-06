
import React, { useState } from 'react';
import { CryptoNetwork } from '../types';
import { WALLET_ADDRESSES } from '../constants';

interface PaymentPageProps {
  fee: number;
  onSubmit: (network: CryptoNetwork) => void;
}

const PaymentPage: React.FC<PaymentPageProps> = ({ fee, onSubmit }) => {
  const [network, setNetwork] = useState<CryptoNetwork>(CryptoNetwork.TRC20);
  const [copied, setCopied] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);

  const address = network === CryptoNetwork.TRC20 ? WALLET_ADDRESSES.TRC20 : WALLET_ADDRESSES.BEP20;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-500 max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-black">Payment Gateway</h2>
        <p className="text-white/60 mt-2">Send precisely <span className="text-primary font-bold">${fee} USDT</span> to the address below.</p>
      </div>

      <div className="glass-card rounded-3xl overflow-hidden">
        <div className="bg-white/5 p-4 flex gap-2">
          <button 
            onClick={() => setNetwork(CryptoNetwork.TRC20)}
            className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${network === CryptoNetwork.TRC20 ? 'bg-primary text-black' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
          >
            Tether TRC20
          </button>
          <button 
            onClick={() => setNetwork(CryptoNetwork.BEP20)}
            className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${network === CryptoNetwork.BEP20 ? 'bg-primary text-black' : 'bg-white/5 text-white/40 hover:bg-white/10'}`}
          >
            Tether BEP20
          </button>
        </div>

        <div className="p-8 flex flex-col items-center space-y-8">
          {/* Mock QR Code */}
          <div className="w-48 h-48 bg-white p-4 rounded-2xl">
            <div className="w-full h-full bg-zinc-900 rounded flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-1 opacity-20">
                 {Array.from({length: 16}).map((_, i) => <div key={i} className="bg-white"></div>)}
              </div>
              <div className="w-8 h-8 bg-primary rounded transform rotate-45"></div>
              <div className="absolute bottom-2 text-[8px] text-white/50 font-mono">SECURE QR</div>
            </div>
          </div>

          <div className="w-full space-y-2">
            <label className="text-xs font-bold text-white/40 uppercase tracking-wider block text-center">Wallet Address</label>
            <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-xl p-4 overflow-hidden">
              <code className="flex-1 text-sm font-mono truncate text-primary">{address}</code>
              <button 
                onClick={copyToClipboard}
                className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors"
              >
                {copied ? 'COPIED!' : 'COPY'}
              </button>
            </div>
          </div>

          <div className="w-full space-y-4 pt-4 border-t border-white/10">
            <h4 className="font-bold text-center">Step 2: Upload Proof</h4>
            <div className={`border-2 border-dashed rounded-2xl p-8 transition-colors text-center ${fileUploaded ? 'border-primary bg-primary/5' : 'border-white/10 hover:border-white/20'}`}>
              <input 
                type="file" 
                id="proof-upload" 
                className="hidden" 
                onChange={() => setFileUploaded(true)} 
              />
              <label htmlFor="proof-upload" className="cursor-pointer block">
                {fileUploaded ? (
                  <div className="space-y-2">
                    <div className="text-primary text-2xl">✓</div>
                    <div className="text-sm font-bold">Transaction Recorded</div>
                    <div className="text-xs text-white/40">Proof of payment attached successfully</div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <div className="text-3xl">📤</div>
                    <div className="text-sm font-bold">Click to Upload Snapshot</div>
                    <div className="text-xs text-white/40">JPG, PNG supported (Max 5MB)</div>
                  </div>
                )}
              </label>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 p-6 flex items-center justify-between border-t border-white/10">
          <div className="text-sm text-white/60">Ensure amount matches exactly</div>
          <button 
            disabled={!fileUploaded}
            onClick={() => onSubmit(network)}
            className={`px-10 py-4 rounded-xl font-bold transition-all ${fileUploaded ? 'btn-primary' : 'bg-white/5 text-white/20 cursor-not-allowed'}`}
          >
            I've Paid - Verify Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
