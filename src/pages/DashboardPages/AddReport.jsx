import { useNavigate } from 'react-router-dom';
import BackIcon from '../../Common/Icons/Back';
import AcCard from '../../assets/addActivities.png';
import AcCard1 from '../../assets/addActivities1.png';

function AddReport() {
  const navigate = useNavigate();

  const header = () => {
    return (
      <div className="header timelinePageHeader">
        <div className="i-p-header">
          <button
            className="backBtn smallFont"
            onClick={() => navigate('/dashboard/report')}
          >
            <BackIcon /> Back
          </button>
          <button className="addBtn">
            <span>Save</span>
            <span>Send</span>
          </button>
        </div>
        <h1 className="pt-0">Add Daily Report</h1>
      </div>
    );
  };

  const renderCards = () => (
    <>
      <div className="card  ">
        <img src={AcCard} alt="Search" />
      </div>
      {/* <div className="card  ">
        <img src={AcCard1} alt="Search" />
      </div> */}
      <button className="btn" style={{ backgroundColor: '#77A916' }}>
        <span>Food</span>
        <span>Add</span>
      </button>
      <button className="btn">
        <span>Bathroom/Potty</span>
        <span>Add</span>
      </button>
      <button className="btn" style={{ backgroundColor: '#EB261E' }}>
        <span>Nap Time</span>
        <span>Add</span>
      </button>
      <button className="btn" style={{ backgroundColor: '#F07120' }}>
        <span>Mood</span>
        <span>Add</span>
      </button>
      <button className="btn" style={{ backgroundColor: '#009A43' }}>
        <span>Items Needed</span>
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

export default AddReport;
