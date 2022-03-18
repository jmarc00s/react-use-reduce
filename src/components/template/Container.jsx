import React from 'react';

const Container = ({ children, className }) => {
  return (
    <main className="h-screen bg-gray-900 text-white ">
      <div className="flex flex-col justify-center items-center h-full gap-10">
        {children}
      </div>
    </main>
  );
};

export default Container;
