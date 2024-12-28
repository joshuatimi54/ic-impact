import React from 'react';

type IProps = {
  children: React.ReactNode;
};

const Structure: React.FC<IProps> = ({ children }) => {
  return <div className="bg-greyish min-[500px] max-w-[650px]">{children}</div>;
};

export default Structure;
