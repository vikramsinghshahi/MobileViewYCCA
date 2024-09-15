import DataField from '../../Common/DataField/DataField';
import { useNavigate } from 'react-router-dom';

function SingleChat() {
  const navigate = useNavigate();
  const options = [
    { value: 'site-one', label: 'Site One' },
    { value: 'site-two', label: 'Site Two' },
    { value: 'all', label: 'All' },
  ];

  // Function to handle option change
  const handleSelectChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
  };

  const header = () => {
    return (
      <div className="header timelinePageHeader">
        <div>
          <button
            className="backBtn smallFont"
            onClick={() => navigate('/dashboard/more')}
          >
            &lt; Back
          </button>
        </div>
        <h1>Chat</h1>
        {/* <div className="filter">
          <DataField
            optionsData={options}
            defaultValue={options[0]}
            label=""
            onChange={handleSelectChange}
            className="custom-select"
          />
          <DataField
            optionsData={options}
            defaultValue={options[0]}
            label=""
            onChange={handleSelectChange}
            className="custom-select"
          />
          <p className="text">Reset</p>
        </div> */}
      </div>
    );
  };

  const renderCards = () => {
    return (
      <>
        <div className="card ">
          <img src="/chat1.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/chat2.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/chat3.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/chat4.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/chat5.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/chat5.png" alt="Search" />
        </div>

        {/* <div className="card  ">
          <img src="/More7.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More8.png" alt="Search" />
        </div>
        <div className="card ">
          <img src="/More9.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More10.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More11.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More12.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More13.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More14.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More15.png" alt="Search" />
        </div>
        <div className="card  ">
          <img src="/More16.png" alt="Search" />
        </div> */}
      </>
    );
  };

  return (
    <>
      {header()}
      <div className="main-content timeLinePageContent singleChat">
        {/* {renderCards()} */}
      </div>
    </>
  );
}

export default SingleChat;
