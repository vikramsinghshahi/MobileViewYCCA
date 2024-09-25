import { useNavigate } from 'react-router-dom';
import BackIcon from '../../Common/Icons/Back';
import AcCard from '../../assets/addActivities.png';
import AcCard1 from '../../assets/addActivities1.png';

function AddActivity() {
  const navigate = useNavigate();

  const header = () => {
    return (
      <div className="header timelinePageHeader">
        <div className="i-p-header">
          <button
            className="backBtn smallFont"
            onClick={() => navigate('/dashboard/activity')}
          >
            <BackIcon /> Back
          </button>
          <button className="addBtn">
            <span>Save</span>
            <span>Send</span>
          </button>
        </div>
        <h1 className="pt-0">Add Activity</h1>
      </div>
    );
  };

  const renderCards = () => (
    <>
      <div className="card  ">
        <img src={AcCard} alt="Search" />
      </div>
      <div className="card  ">
        <img src={AcCard1} alt="Search" />
      </div>
      <button className="btn">
        <span>Daily Activities</span>
        <span>Add</span>
      </button>
      <button className="btn" style={{ backgroundColor: '#EB261E' }}>
        <span>Creativr Arts Therapy</span>
        <span>Add</span>
      </button>
      <button className="btn" style={{ backgroundColor: '#F07120' }}>
        <span>Lessons//Skills</span>
        <span>Add</span>
      </button>
    </>
  );

  return (
    <>
      {header()}
      <div
        className={`main-content timeLinePageContent p-adjustHeight addActivity`}
      >
        {renderCards()}
      </div>
    </>
  );
}

export default AddActivity;
