import { useState } from "react";
import PlanCard from "../components/PlanCard";
import SubscribeModal from "../components/SubscribeModal";

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    { name: "Basic", price: 199, quality: "SD", screens: 1 },
    { name: "Standard", price: 499, quality: "HD", screens: 2 },
    { name: "Premium", price: 799, quality: "4K", screens: 4 }
  ];

  const closeModal = () => {
    setSelectedPlan(null);
  };

  return (
    <>
      <div className="hero-section">
        <div className="hero-background-posters">
          {[...Array(96)].map((_, i) => {
            const posterNum = i + 1;
            return <div key={i} className={`poster-item poster-${posterNum}`}></div>;
          })}
        </div>
        <div className="hero-background-overlay"></div>
        <div className="hero-background-elements">
          <div className="red-gradient-orb orb-1"></div>
          <div className="red-gradient-orb orb-2"></div>
          <div className="red-gradient-orb orb-3"></div>
          <div className="red-accent-line line-1"></div>
          <div className="red-accent-line line-2"></div>
          <div className="red-accent-line line-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">Unlimited entertainment</span>
          </div>
          <h1 className="hero-title">
            <span className="title-highlight">Choose</span> the plan that's right for you
          </h1>
          <p className="hero-subtitle">Watch anywhere. Cancel anytime.</p>
          <div className="hero-features">
            <div className="feature-badge">
              <span className="feature-icon">🎬</span>
              <span>4K Ultra HD</span>
            </div>
            <div className="feature-badge">
              <span className="feature-icon">📱</span>
              <span>Watch on any device</span>
            </div>
            <div className="feature-badge">
              <span className="feature-icon">⚡</span>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>

      <div className="plans-section">
        <div className="section-header">
          <h2 className="section-title">Select Your Plan</h2>
          <div className="red-divider"></div>
        </div>
        <div className="plan-container">
          {plans.map(plan => (
            <PlanCard key={plan.name} plan={plan} onSubscribe={setSelectedPlan} />
          ))}
        </div>
      </div>

      {selectedPlan && <SubscribeModal plan={selectedPlan} onClose={closeModal} />}
    </>
  );
}
