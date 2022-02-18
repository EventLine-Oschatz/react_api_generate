import React, { useState, useEffect } from "react";
import endpoints from "../storage/endpoints.sool";

const Endpoints = () => {
  const [apiEndpoints, setEndpoints] = useState([]);

  const fetchEndpoints = () => {
    fetch(endpoints)
      .then((r) => r.text())
      .then((text) => {
        let allEndpoints = text.split("\n");

        setEndpoints(allEndpoints);
        localStorage.setItem("endpoints", JSON.stringify(allEndpoints));
      });
  };

  useEffect(() => {
    fetchEndpoints();
  }, []);
  return (
    <>
      <div className="p-4 border-solid rounded-md border border-teal-400 w-full justify-items-stretch">
        {apiEndpoints.map((endpoint, item) => (
          <li
            className="list-none p-3 pl-0 flex-auto flex-col text-teal-400"
            key={item}
          >
            {endpoint}
          </li>
        ))}
      </div>
    </>
  );
};
export default Endpoints;
