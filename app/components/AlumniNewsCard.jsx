import React from 'react';

const ReusableCard = ({ imageUrl, title, content, lastUpdated }) => {
  return (
    <div className="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row">
      <img
        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:!rounded-none md:!rounded-s-lg"
        src={imageUrl}
        alt=""
      />
      <div className="flex flex-col justify-start p-6">
        <h5 className="mb-2 text-xl font-medium">{title}</h5>
        <p className="mb-4 text-base">{content}</p>
        <p className="text-xs text-surface/75 dark:text-neutral-300 text-black">{lastUpdated}</p>
      </div>
    </div>
  );
};

export default ReusableCard;
