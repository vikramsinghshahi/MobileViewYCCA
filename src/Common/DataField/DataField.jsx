import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './DataField.scss';
// Functional Component
const DataField = (props) => {
  const { optionsData, defaultValue, label, onChange, className } = props;
  // useState hook to manage selected option
  const [selectedOption, setSelectedOption] = useState(defaultValue || null);
  console.log(label);

  // Function to handle option change
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    onChange(selectedOption); // Call parent function if passed
  };

  return (
    <div className="datafield-container">
      <label>{label}</label>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={optionsData}
        classNamePrefix={className}
        className={className}
      />
    </div>
  );
};

DataField.propTypes = {
  optionsData: PropTypes.any,
  defaultValue: PropTypes.any,
  label: PropTypes.any,
  onChange: PropTypes.any,
  className: PropTypes.any,
};

//   Add default props if necessary
DataField.defaultProps = {
  label: '',
};

export default DataField;
