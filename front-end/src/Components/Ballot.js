import React, { useState } from 'react';

function Ballot({ title, children }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleCollapse = () => {
      setIsExpanded(!isExpanded);
    };
  return (
    <div className="border border-gray-300 rounded-lg">
      <button
        className="w-full flex justify-between items-center px-4 py-2 font-medium text-lg"
        onClick={toggleCollapse}
      >
        <span>{title}</span>
        <span>{isExpanded ? '▲' : '▼'}</span>
      </button>
      {isExpanded && <div className="px-4 py-2">{children}</div>}
    </div>
  )
}

export default Ballot