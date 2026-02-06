
import React, { useState, useCallback, useEffect } from 'react';
import { AppStep, PlanType, CryptoNetwork, EnrollmentState } from './types';
import { PLANS } from './constants';
import Layout from './components/Layout';

// Step components
import HomePage from './pages/HomePage';
import RulesPage from './pages/RulesPage';
import BrokerPage from './pages/BrokerPage';
import BillingPage from './pages/BillingPage';
import PaymentPage from './pages/PaymentPage';
import VerificationPage from './pages/VerificationPage';
import ReviewPage from './pages/ReviewPage';

const App: React.FC = () => {
  const [state, setState] = useState<EnrollmentState>({
    step: AppStep.HOME,
    selectedPlan: null,
    selectedBroker: null,
    selectedNetwork: null,
    billing: null,
    enrollmentId: null,
    submissionTime: null
  });

  const navigateTo = useCallback((step: AppStep) => {
    setState(prev => ({ ...prev, step }));
    window.scrollTo(0, 0);
  }, []);

  const selectPlan = (plan: PlanType) => {
    setState(prev => ({ ...prev, selectedPlan: plan }));
    navigateTo(AppStep.RULES);
  };

  const selectBroker = (broker: string) => {
    setState(prev => ({ ...prev, selectedBroker: broker }));
    navigateTo(AppStep.BILLING);
  };

  const submitBilling = (data: any) => {
    setState(prev => ({ ...prev, billing: data }));
    navigateTo(AppStep.PAYMENT);
  };

  const submitPayment = (network: CryptoNetwork) => {
    const id = `PT-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
    const now = new Date().toLocaleTimeString();
    setState(prev => ({ 
      ...prev, 
      selectedNetwork: network, 
      enrollmentId: id,
      submissionTime: now
    }));
    navigateTo(AppStep.VERIFICATION);
  };

  const reset = () => {
    setState({
      step: AppStep.HOME,
      selectedPlan: null,
      selectedBroker: null,
      selectedNetwork: null,
      billing: null,
      enrollmentId: null,
      submissionTime: null
    });
  };

  const renderStep = () => {
    switch (state.step) {
      case AppStep.HOME:
        return <HomePage onSelectPlan={selectPlan} />;
      case AppStep.RULES:
        return state.selectedPlan ? (
          <RulesPage 
            plan={PLANS[state.selectedPlan]} 
            onProceed={() => navigateTo(AppStep.BROKER)} 
          />
        ) : null;
      case AppStep.BROKER:
        return <BrokerPage onSelectBroker={selectBroker} />;
      case AppStep.BILLING:
        return <BillingPage 
          onSubmit={submitBilling} 
          planName={state.selectedPlan ? PLANS[state.selectedPlan].name : ''} 
        />;
      case AppStep.PAYMENT:
        return state.selectedPlan ? (
          <PaymentPage 
            fee={PLANS[state.selectedPlan].fee} 
            onSubmit={submitPayment} 
          />
        ) : null;
      case AppStep.VERIFICATION:
        return <VerificationPage onComplete={() => navigateTo(AppStep.REVIEW)} />;
      case AppStep.REVIEW:
        return (
          <ReviewPage 
            enrollmentId={state.enrollmentId || ''} 
            submissionTime={state.submissionTime || ''}
            onReset={reset}
          />
        );
      default:
        return <HomePage onSelectPlan={selectPlan} />;
    }
  };

  return (
    <Layout onHomeClick={reset}>
      {renderStep()}
    </Layout>
  );
};

export default App;
