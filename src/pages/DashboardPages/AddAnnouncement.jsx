import { useNavigate } from 'react-router-dom';
import BackIcon from '../../Common/Icons/Back';

function AddAnnouncement() {
  const navigate = useNavigate();

  const header = () => {
    return (
      <div className="header timelinePageHeader">
        <div className="i-p-header">
          <button
            className="backBtn smallFont"
            onClick={() => navigate('/dashboard/announcement')}
          >
            <BackIcon /> Back
          </button>
          <button className="addBtn">
            <span>Save</span>
            <span>Send</span>
          </button>
        </div>
        <h1 className="pt-0">Add Announcement</h1>
      </div>
    );
  };

  return (
    <>
      {header()}
      <div
        className={`main-content timeLinePageContent adjustHeight addAnnounce`}
      >
        {/* {renderCards()} */}
      </div>
    </>
  );
}

export default AddAnnouncement;
