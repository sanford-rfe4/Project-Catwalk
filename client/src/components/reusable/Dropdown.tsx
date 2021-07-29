import React, {useState, useEffect, useRef} from 'react';
import '../../styles/dropdown.css'

const Dropdown = (props: any) => {
  const dropdownRef = useRef(null);
  const [drop, setDrop] = useState(false);
  const handleClick = () => {
    setDrop(!drop);
  }

  useEffect(() => {
    const pageClickEvent = (e: any) => {
      if (dropdownRef.current !== null && dropdownRef.current !== (e.target)) {
        setDrop(!drop);
      }
    };
    // If the item is active (ie open) then listen for clicks
    if (drop) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => {
      window.removeEventListener('click', pageClickEvent);
    }

  }, [drop]);


  return (
    <React.Fragment>
    <a onClick={() => {handleClick()}}>{props.initial}</a>
    <ul ref={dropdownRef} className={`menu ${drop ? 'active' : 'inactive'}`}>
      {props.listItems.map((item: any) => (
        <li><a onClick={() => {props.itemClick()}}>{item}</a></li>
      ))}
    </ul>
    </React.Fragment>
  );
};

export default Dropdown;