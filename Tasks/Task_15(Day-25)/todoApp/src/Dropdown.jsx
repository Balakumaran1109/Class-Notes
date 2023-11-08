import React, { useState } from 'react';
import './Dropdown.css';

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (value) => {
    props.passFilterFunction(value)
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button id="button" class="btn btn-secondary dropdown-toggle" type="button" onClick={toggleDropdown}>
        {selectedValue ? selectedValue : props.option1}
      </button>
      {isOpen && (
        <ul id="listItem" className="dropdown-list">
          <li onClick={() => handleItemClick('All')}>{props.option1}</li>
          <li onClick={() => handleItemClick('Completed')}>{props.option2}</li>
          <li onClick={() => handleItemClick('Not Completed')}>{props.option3}</li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
