export default function PlanCard({ plan, onSubscribe }) {
  const getQualityIcon = (quality) => {
    switch(quality) {
      case "4K":
        return "🎬";
      case "HD":
        return "📺";
      case "SD":
        return "📱";
      default:
        return "📺";
    }
  };

  const getScreenIcon = (screens) => {
    return "🖥️".repeat(screens);
  };

  return (
    <div className="plan-card">
      <div className="plan-card-header">
        <h2 className="plan-name">{plan.name}</h2>
        <div className="plan-price">
          <span className="currency">₹</span>
          <span className="amount">{plan.price}</span>
          <span className="period">/month</span>
        </div>
      </div>
      
      <div className="plan-features">
        <div className="feature-item">
          <span className="feature-icon">{getQualityIcon(plan.quality)}</span>
          <div className="feature-details">
            <span className="feature-label">Video Quality</span>
            <span className="feature-value">{plan.quality}</span>
          </div>
        </div>
        
        <div className="feature-item">
          <span className="feature-icon">{getScreenIcon(plan.screens)}</span>
          <div className="feature-details">
            <span className="feature-label">Screens you can watch on at the same time</span>
            <span className="feature-value">{plan.screens}</span>
          </div>
        </div>
      </div>

      <button className="btn-subscribe" onClick={() => onSubscribe(plan)}>
        Subscribe
      </button>
    </div>
  );
}
