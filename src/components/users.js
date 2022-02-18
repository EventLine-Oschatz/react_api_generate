import React, { useState, useEffect } from "react";
import usersJSON from "../storage/api_users.sool";
import { Link } from "react-router-dom";

const Users = () => {
  const [apiUsers, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch(usersJSON)
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error " + response.status);
        }
        return response.json();
      })
      .then((json) => {
        setUsers(json);
      })
      .catch(function (error) {
        alert("error " + error.message);
      });
  };

  const UserList = () => {
    const arr = [];
    Object.keys(apiUsers).forEach((key) =>
      arr.push({ name: key, value: apiUsers[key] })
    );
    localStorage.setItem("apiUsers", JSON.stringify(arr));

    let usersListe = arr.map((key, id) => (
      <li key={id} className="list-none p-3 mr-5 pl-0 flex justify-between">
        <div className="flex justify-self-start flex-col flex-1">
          <div>{key.value.username}</div>
          <small>
            Beschreibung: {key.value.description}
            <br />
            Token: {key.name}
          </small>
        </div>
        <div className="flex justify-self-end w-48 items-center justify-end">
          <Link
            to={`/editUser/${id}`}
            className="mr-5 cursor-pointer w-11 p-2 border-solid border rounded border-teal-400 hover:bg-teal-400 group transition duration-150 ease-in-out"
            title="Element bearbeiten"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACJklEQVRoge2Yy0ocQRSGvxYhIPoObkWDunQlKgFFEq970SfwEWJ0DF5Qk2xEfYgQNy5EQpIHcOFWs89CF1GjJuO4qBq60nZdBtqu6nF+KBjqHKb+b07V6Z4CaAP2gAugEui4AHaBVgzaC8Co69gxgZzLpG5Tkmf1IDyem5KqtKHL6LMpRyNPqgZIaGpWPhfhnGhVlxWJvLlwk3HH1E1FGiChqQESmpot8WSniAyxLFVzB302FTH9MkE9d+qmInUD0jjsoalIh/0Hll1QlP/sRhV1a7UBLclJU0WS90qmWJZDp9fAicwpA1+B3qKBzAL3KbmXwEsbSCiaBv6iB9+H8EFUiE3gJ+lVCRpEhXgr59p5DGMFyeuMuEJUlYT5EiqICrGg8bYl47+BLhuID7lALMj4HTBWnQwJZAphrgKsaHJUiEk1EAqIC8Q7YoiJZDAEEBeIRRm/BcbTEnyDqBCrmhwrBPgFcYFYIoYY0+QA/kBcIErEEG9sX5j1C19yfE9ZU22xJY2vdRn/A4zYIJALPSXINwPEssbThgIx7AKRt9TttJYSjxAvhhXgBhjNz5q7+ogr8T4lHgEfZPwaeJWftdq0jTD5OSUWAR9l/AoYytFXzTpDGP0HzCjzhYLo4P8GUAbmEBCfiCEGfRl01TyPu9k94vKg+ire781dDTpA354vgQF/1tz1AtGFktU4Rjz0OrNYxHZlmoUqwCniUu1QjiPgV5aLPAAXI7HlWRP8RwAAAABJRU5ErkJggg=="
              className="group-hover:invert"
              alt="edit_icon"
            />
          </Link>
          <Link
            to={`/deleteUser/${id}`}
            className=" cursor-pointer w-11 p-2 border-solid border rounded border-teal-400 hover:bg-pink-600 hover:border-pink-600 group transition duration-150 ease-in-out"
            title="Element löschen"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA5ElEQVRoge2aUQrCMBBEB5Eeyno9rZ6rgngP22vohwmCxCahu+0o82AJhG2a1yz9aBcQ/0sD4AxgBPDIxACgC9fQcUJe4DOOq+w0w4DX5nYFuS3eJ0NHfMpe+ZNsrBZam5xIj/J6j3jl93NEmDApQ9N69rjvL53IJBJhQyIJbgCuBvOulLw9vuXUztfmAFBp8SERNiTChkTYkAgbEmFDImxIhA2JsCERNiTChkTY2BqudUH6Y1rtvCv6P7IUEmGjVGQMY+u1kQT7MJo2FXSob8+wioOlSBNkYpvGEnEPEpSNNyLHE0pSmqxDj5Q1AAAAAElFTkSuQmCC"
              className="group-hover:invert"
              alt="delete_icon"
            />
          </Link>
        </div>
      </li>
    ));

    return (
      <>
        <ul className="divide-y divide-solid divide-teal-400">{usersListe}</ul>
      </>
    );
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="p-4 border-solid rounded-md border border-teal-400 w-full">
        <UserList />
      </div>
    </>
  );
};
export default Users;
