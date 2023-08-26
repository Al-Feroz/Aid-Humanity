import React from "react";

const PageTitle = ({ title, destination }) => {
  return (
    <div>
      <div className="bg-custom-blue-shade4 py-14">
        <div className="container mx-auto text-center">
          <h2 className="font-bold text-3xl">{title}</h2>
        </div>
      </div>
      <div className="container mx-auto text-custom-gray-shade1 py-8">
        <p>{destination}</p>
      </div>
    </div>
  );
};

export default PageTitle;
