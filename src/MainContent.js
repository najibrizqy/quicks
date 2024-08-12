import React from 'react';

function MainContent() {
  return (
    <main className="flex-1 bg-gray-900 text-white p-4">
      {/* Search Bar */}
      <div className="w-full flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="bg-gray-800 text-white p-2 rounded w-full"
        />
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Content */}
      <div className="mt-4">
        {/* Add your main content here */}
      </div>
    </main>
  );
}

export default MainContent;
