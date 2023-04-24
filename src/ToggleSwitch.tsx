import React, { useContext } from 'react';
import ReactSwitch from 'react-switch';
import { ThemeContext } from './ThemeContext';

function ToggleSwitch() {

  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleChange = () => {
    setIsDarkMode(currentMode => !currentMode);
  };

  const height = 20;

  return (
    <ReactSwitch
      checked={isDarkMode}
      onChange={handleChange}
      height={height}
      handleDiameter={height - 4}
      width={height * 2}
      offHandleColor='#eee'
      offColor='#bbb'
      onHandleColor='#aaa'
      onColor='#666'
      uncheckedHandleIcon={<svg viewBox="0 -4 20 27"
        height="100%"
        width="100%"
        style={{ position: 'absolute', top: 0 }}
        xmlns="http://www.w3.org/2000/svg">
        <path d="M10 1V2M10 18V19M19 10H18M2 10H1M16.364 16.364L15.657 15.657M4.343 4.343L3.636 3.636M16.364 3.636L15.657 4.343M4.343 15.657L3.636 16.364M14 10C14 11.0609 13.5786 12.0783 12.8284 12.8284C12.0783 13.5786 11.0609 14 10 14C8.93913 14 7.92172 13.5786 7.17157 12.8284C6.42143 12.0783 6 11.0609 6 10C6 8.93913 6.42143 7.92172 7.17157 7.17157C7.92172 6.42143 8.93913 6 10 6C11.0609 6 12.0783 6.42143 12.8284 7.17157C13.5786 7.92172 14 8.93913 14 10Z"
          stroke="#555"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"/>
      </svg>}
      checkedHandleIcon={<svg viewBox="0 -4 20 27"
        height="100%"
        width="100%"
        style={{ position: 'absolute', top: 0 }}
        xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1948 13.8217C14.9232 14.1748 16.7173 14.0122 18.3541 13.354C17.6841 15.0213 16.5304 16.45 15.0417 17.4562C13.5529 18.4624 11.797 19.0001 10.0001 19C7.9105 18.9977 5.88674 18.2687 4.27577 16.9378C2.6648 15.6069 1.56695 13.757 1.17043 11.7054C0.773906 9.65374 1.1034 7.52805 2.10244 5.69272C3.10148 3.85739 4.70782 2.42673 6.64611 1.646C5.98791 3.28277 5.82527 5.0769 6.17839 6.80535C6.53151 8.53381 7.38484 10.1204 8.63229 11.3678C9.87974 12.6153 11.4663 13.4686 13.1948 13.8217Z"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"/>
      </svg>}
      checkedIcon={false}
      uncheckedIcon={false}
    />
  );
}

export default ToggleSwitch;