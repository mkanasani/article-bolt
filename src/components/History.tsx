import React from 'react';

export const History = () => {
  return (
    <div className="w-[80vw] mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
        Generation History
      </h2>
      <iframe
        className="airtable-embed w-full"
        src="https://airtable.com/embed/appxryDmq2p1iJTVm/shrABN5ZqFkD4pySo"
        frameBorder="0"
        width="100%"
        height="533"
        style={{ background: 'transparent', border: '1px solid #ccc' }}
      />
    </div>
  );
};