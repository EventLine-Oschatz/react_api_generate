import React, { useState, useEffect } from "react";
import modules from "../storage/modules.sool";

const Modules = () => {
  const [apiModules, setModules] = useState([]);
  const [apiModulesDescription, setDescription] = useState([]);

  const fetchModules = () => {
    fetch(modules)
      .then((r) => r.text())
      .then((text) => {
        let allModules = text.split("\n");
        let resultModules = [];
        let resultDesc = [];
        for (let item of allModules) {
          let itemArr = item.split("-");
          resultModules.push(itemArr[0]);
          resultDesc.push(itemArr[1]);
        }
        setModules(resultModules);
        localStorage.setItem("methods", JSON.stringify(resultModules));
        setDescription(resultDesc);
      });
  };

  useEffect(() => {
    fetchModules();
  }, []);
  return (
    <>
      <div className="p-4 border-solid rounded-md border border-teal-400 w-full justify-items-stretch">
        {apiModules.map((module, item) => (
          <li
            className="list-none p-3 mr-5 pl-0 inline-flex flex-auto flex-col text-teal-400 text-3xl text-center"
            key={item}
          >
            {module}
            <small className="text-xs">({apiModulesDescription[item]})</small>
          </li>
        ))}
      </div>
    </>
  );
};
export default Modules;
