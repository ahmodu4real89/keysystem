import React from 'react';

const LogoGrid = ({ logos }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {logos.map((logo) => (
        <div key={logo.name} className="flex justify-center items-center m-2">
          <img
            src={logo.src}
            alt={logo.name}
            className="h-18 w-45 px-2 object-contain "
          />
        </div>
      ))}
    </div>
  );
};

export default LogoGrid;