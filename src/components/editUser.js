import React, { useState, useEffect } from "react";

const EditUser = (props) => {
  const apiUsers = JSON.parse(localStorage.getItem("apiUsers")) || "";
  const methods = JSON.parse(localStorage.getItem("methods")) || "";
  const endpoints = JSON.parse(localStorage.getItem("endpoints")) || "";

  const activeUser = apiUsers[Object.keys(apiUsers)[props.id]];

  const PrivilegesOutput = () => {
    let methodlist = methods.map((method, id) => (
      <>
        <tr className="odd:bg-white even:bg-slate-100">
          <td className="align-top p-2">{method}</td>
          <td colspan="2" className="p-3 text-right">
            <EndpointsOutput method={method} />
          </td>
        </tr>
      </>
    ));

    return <>{methodlist}</>;
  };

  const EndpointsOutput = (props) => {
    let endpointslist = endpoints.map((endpoint, id) => {
      console.log(props["method"]);
      // GET, POST, PUT, DELETE

      console.log(activeUser.value);
      //      {
      //        "username": "Mathias Schröter",
      //        "description": "Test-API-User",
      //        "methods": {
      //            "GET": ["users","payments"],
      //            "POST": ["users","payments"],
      //            "PUT": ["users","payments"],
      //            "DELETE": ["users","payments"]
      //        }
      //      }

      console.log(activeUser.value.methods);
      //    {
      //        "GET": [
      //            "users",
      //            "payments"
      //        ],
      //        "POST": [
      //            "users",
      //            "payments"
      //        ],
      //        "PUT": [
      //            "users",
      //            "payments"
      //        ],
      //        "DELETE": [
      //            "users",
      //            "payments"
      //        ]
      //    }

      console.log(activeUser.value.methods["GET"]);
      //    ["users", "payments"];

      console.log(activeUser.value.methods[props["method"].toString()]);
      // => undefined

      //   if (
      //     activeUser.value.met.endpoint != "" &&
      //     activeUser.value.met.endpoint != undefined
      //   ) {
      //     console.log("Endpoint: " + endpoint + " ist okay.");
      //   }
      return (
        <>
          <tr className="hover:bg-slate-200">
            <td className="text-left p-2">
              /{props.method}
              {endpoint}
            </td>
            <td className="w-12 p-2">
              <input type="checkbox" name="" className="accent-teal-300" />
            </td>
          </tr>
        </>
      );
    });

    return (
      <>
        <table className="w-full">{endpointslist}</table>
      </>
    );
  };

  useEffect(() => {
    //privilegesOutput();
  }, []);

  return (
    <>
      <div className="p-4 border-solid rounded-md border border-teal-400 w-full">
        <form className="form">
          <div className="grid grid-cols-4 gap-4">
            <div className="">Name</div>
            <div className="col-span-3">{activeUser.value.username}</div>
            <div>Token</div>
            <div>{activeUser.name}</div>
          </div>
          <div className="text-4xl mt-8 text-teal-400">Berechtigungen</div>
          <table className="table-fixed border-collapse mt-5 w-full">
            <thead>
              <tr>
                <th className="w-48 text-left pb-3">Methode</th>
                <th className="text-left pb-3">Endpoints</th>
                <th className="w-12 pb-3">Zugriff</th>
              </tr>
            </thead>
            <tbody>
              <PrivilegesOutput />
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
};
export default EditUser;
