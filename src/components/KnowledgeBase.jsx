import { knowledgeCards } from "../data/dashboardData";
import "./KnowledgeBase.css";

function KnowledgeBase() {
  return (
    <div className="kb-section">
      <h3 className="kb-title">Knowledge base</h3>
      <div className="kb-cards">
        {knowledgeCards.map((card) => (
          <div key={card.label} className="kb-card" style={{ background: card.color }}>
            <div className="kb-card-icon-wrap" style={{ background: card.iconColor + "22" }}>
              <i className={`fa-solid ${card.icon}`} style={{ color: card.iconColor }}></i>
            </div>
            <span className="kb-card-label">{card.label}</span>
            <i className="fa-solid fa-chevron-right kb-card-arrow" style={{ color: card.iconColor }}></i>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KnowledgeBase;
