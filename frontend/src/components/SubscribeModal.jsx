import axios from "axios";
import { useState } from "react";

export default function SubscribeModal({ plan, onClose }) {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const subscribe = async () => {
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    
    setLoading(true);
    try {
      const res = await axios.post("https://netflix-backend-cmh1.onrender.com/api/subscribe", {
        userName: name,
        planName: plan.name,
        duration: 1
      });
      setSuccessMessage(res.data.message);
      setSuccess(true);
      setTimeout(() => {
        onClose();
        setName("");
        setSuccess(false);
      }, 3000);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        {!success ? (
          <>
            <div className="modal-header">
              <h2 className="modal-title">Complete your subscription</h2>
              <p className="modal-subtitle">You're choosing the <strong>{plan.name}</strong> plan</p>
            </div>
            
            <div className="modal-body">
              <div className="plan-summary">
                <div className="summary-item">
                  <span className="summary-label">Plan:</span>
                  <span className="summary-value">{plan.name}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Price:</span>
                  <span className="summary-value">₹{plan.price}/month</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Quality:</span>
                  <span className="summary-value">{plan.quality}</span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Screens:</span>
                  <span className="summary-value">{plan.screens}</span>
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="userName">Enter your name</label>
                <input
                  id="userName"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  onKeyPress={e => e.key === 'Enter' && subscribe()}
                  className="modal-input"
                />
              </div>
            </div>

            <div className="modal-footer">
              <button 
                className="btn-confirm" 
                onClick={subscribe}
                disabled={loading}
              >
                {loading ? "Processing..." : "Confirm Subscription"}
              </button>
            </div>
          </>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2 className="success-title">Subscription Successful!</h2>
            <p className="success-text">{successMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}
