import DataField from '../../Common/DataField/DataField';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Chat1 from '../../assets/chat1.png';
import Chat2 from '../../assets/chat2.png';
import Chat3 from '../../assets/chat3.png';
import Chat4 from '../../assets/chat4.png';
import Chat5 from '../../assets/chat5.png';
import BackIcon from '../../Common/Icons/Back';
import ResetIcon from '../../Common/Icons/Reset';
import Plus from '../../Common/Icons/Plus';

function Chats(props) {
  const navigate = useNavigate();
  const [isParentLogin, setUserLogin] = useState(null);
  const options = [
    { value: 'site-one', label: 'Site One' },
    { value: 'site-two', label: 'Site Two' },
    { value: 'all', label: 'All' },
  ];
  const options2 = [
    { value: 'class-one', label: 'Class One' },
    { value: 'class-two', label: 'Class Two' },
    { value: 'all', label: 'All' },
  ];

  // Function to handle option change
  const handleSelectChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
  };

  useEffect(() => {
    const isParentLogin = localStorage.getItem('isParentLogin');
    if (isParentLogin === 'true') {
      setUserLogin(true);
    }
  }, []);

  const header = () => {
    return (
      <div className="header timelinePageHeader">
        <div className="i-p-header">
          <button
            className="backBtn smallFont"
            onClick={() => navigate('/dashboard/more')}
          >
            <BackIcon /> Back
          </button>
          <button
            className="addBtn"
            onClick={() => navigate('/dashboard/chat/add')}
          >
            <Plus />
          </button>
        </div>
        <h1 className="pt-0">Chats</h1>
        {!isParentLogin && (
          <div className="filter">
            <DataField
              optionsData={options}
              defaultValue={options[0]}
              label=""
              onChange={handleSelectChange}
              className="custom-select"
            />
            <DataField
              optionsData={options2}
              defaultValue={options2[0]}
              label=""
              onChange={handleSelectChange}
              className="custom-select"
            />
            <p className="text">
              <ResetIcon /> Reset
            </p>
          </div>
        )}
      </div>
    );
  };

  const renderCards = () => {
    return (
      <>
        <button
          className="card"
          onClick={() => {
            navigate('/dashboard/chats/1');
          }}
        >
          <img src={Chat1} alt="Search" />
        </button>
        <button
          className="card"
          onClick={() => {
            navigate('/dashboard/chats/2');
          }}
        >
          <img src={Chat2} alt="Search" />
        </button>
        <div className="card  ">
          <img src={Chat3} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Chat4} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Chat5} alt="Search" />
        </div>
        <div className="card  ">
          <img src={Chat5} alt="Search" />
        </div>
      </>
    );
  };

  return (
    <>
      {header()}
      <div
        className={`main-content timeLinePageContent ${
          isParentLogin ? 'p-adjustHeight' : 'adjustHeight'
        }`}
      >
        {renderCards()}
      </div>
    </>
  );
}

export default Chats;
