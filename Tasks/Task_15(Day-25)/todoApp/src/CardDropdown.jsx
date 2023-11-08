import React, { useState } from 'react';
import './CardDropdown.css';

function CardDropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" onClick={toggleDropdown}>
        {selectedValue ? selectedValue : props.option1}
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          <li onClick={() => handleItemClick('Not Completed')}>{props.option1}</li>
          <li onClick={() => handleItemClick('Completed')}>{props.option2}</li>
        </ul>
      )}
    </div>
  );
}

export default CardDropdown;
