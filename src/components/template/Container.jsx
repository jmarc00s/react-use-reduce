import React from 'react';

const Container = ({ children }) => {
  return (
    <main className="h-screen bg-gray-900 text-white">
      <div className="flex flex-col justify-center items-center h-full">
        {children}
      </div>
    </main>
  );
};

export default Container;
