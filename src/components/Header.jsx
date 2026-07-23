import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary-dark text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-secondary-light">
          Auto Parts Inc.
        </h1>
        {/* Navigation or other header elements can go here */}
      </div>
    </header>
  );
};

export default Header;
