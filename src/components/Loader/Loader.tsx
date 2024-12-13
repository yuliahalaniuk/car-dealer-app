import React from 'react'

const Loader = ({
  size = 40,
}: {
  size?: number;
}) => {
  return (
    <div
      className="inline-block rounded-full box-border animate-spin border-solid border-4 border-blue-500"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderBottomColor: "transparent",
      }}
    />
  );
};

export default Loader
