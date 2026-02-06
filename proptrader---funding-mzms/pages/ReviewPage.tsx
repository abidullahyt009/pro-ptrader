
import React from 'react';

interface ReviewPageProps {
  enrollmentId: string;
  submissionTime: string;
  onReset: () => void;
}

const ReviewPage: React.FC<ReviewPageProps> = ({ enrollmentId, submissionTime, onReset }) => {
  return (
    <div className="animate-in zoom-in fade-in duration-700 max-w-2xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full mb-4">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">Review in Progress</span>
        </div>
        <h2 className="text-3xl font-black">Submission Successful</h2>
        <p className="text-white/40">Your account is being provisioned by our systems.</p>
      </div>

      <div className="glass-card rounded-3xl overflow-hidden">
        <div className="p-8 space-y-8">
          <div className="grid grid-cols-2 gap-y-6">
            <div className="space-y-1">
              <span className="text-xs text-white/40 font-bold uppercase block">Enrollment ID</span>
              <span className="text-lg font-mono text-white">{enrollmentId}</span>
            </div>
            <div className="space-y-1 text-right">
              <span className="text-xs text-white/40 font-bold uppercase block">Status</span>
              <span className="text-lg font-bold text-primary">Accelerated</span>
            </div>
            <div className="space-y-1">
              <span className="text-xs text-white/40 font-bold uppercase block">Submission Time</span>
              <span className="text-lg text-white">{submissionTime}</span>
            </div>
            <div className="space-y-1 text-right">
              <span className="text-xs text-white/40 font-bold uppercase block">Verification Time</span>
              <span className="text-lg text-white">~ 5-10 mins</span>
            </div>
          </div>

          <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4">
            <h4 className="font-bold flex items-center gap-2">
              <span className="text-primary">●</span> Next Steps
            </h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-xs font-bold shrink-0">1</div>
                <p className="text-sm text-white/60">Check your email for credentials once the status changes to "Live".</p>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-xs font-bold shrink-0">2</div>
                <p className="text-sm text-white/60">Log in to your selected broker platform using the provided details.</p>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-xs font-bold shrink-0">3</div>
                <p className="text-sm text-white/60">Join our Discord community to network with other funded traders.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white/5 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <button className="text-white/40 text-sm hover:text-white transition-colors">Download Receipt (PDF)</button>
          <button 
            onClick={onReset}
            className="w-full md:w-auto px-10 py-4 bg-white text-black rounded-xl font-bold hover:bg-white/90 transition-all"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
