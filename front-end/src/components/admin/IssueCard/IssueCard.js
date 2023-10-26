import './IssueCard.css';
import { useNavigate } from 'react-router-dom';
function IssueCard({ issue }) {
   const navigate = useNavigate();
   const onClickIssueCard = (index) => {
      navigate('/admin/dashboard/' + index);
   };
   return (
      <div onClick = {onClickIssueCard(issue.index)} key={issue.index} className="issue-card-admin">
         <h4 className="issue-card-admin-name-id">{issue.studentName} ({issue.studentNetID})</h4>
         <h4 className="issue-card-admin-title">{issue.title}</h4>
         <p className="issue-card-admin-description">{issue.description}</p>
         <div className={`issue-card-admin-priority-tag ${issue.currentPriority.toLowerCase().replace(/\s+/g, '')}`}>
            {issue.currentPriority}
         </div>
         <div className="issue-card-admin-date">{issue.dateCreated}</div>
      </div>
   );
};
export default IssueCard;
