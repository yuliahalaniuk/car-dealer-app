import React from 'react'

const ListItem = ({text}: {text?: string}) => {
  return (
    <li className="p-4 border rounded-lg shadow-sm bg-white text-gray-800">
      {text}
    </li>
  );
}

export default ListItem
