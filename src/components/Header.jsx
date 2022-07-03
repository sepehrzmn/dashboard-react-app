import React from "react";

const Header = ({ title, category }) => {
  return (
    <div className="mb-10 capitalize">
      <p className="text-gray-400">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight text-scale-900 dark:text-slate-200 mt-5 ">{title}</p>
    </div>
  );
};

export default Header;
