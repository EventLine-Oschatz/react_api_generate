import Modules from "./components/modules";
import Users from "./components/users";
import EditUser from "./components/editUser";
import EndPoints from "./components/endpoints";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const App = () => {
  function Home() {
    return (
      <>
        <h3 className="text-xl">verfügbare Module</h3>
        <div className="py-3 bordered flex w-full">
          <div className="w-full">
            <Modules />
          </div>
        </div>

        <h3 className="text-xl mt-8">verfügbare Benutzer</h3>
        <div className="py-3 bordered flex w-full">
          <div className="w-full">
            <Users />
          </div>
        </div>

        <h3 className="text-xl mt-8">verfügbare EndPoints</h3>
        <div className="py-3 bordered flex w-full">
          <div className="w-full">
            <EndPoints />
          </div>
        </div>
      </>
    );
  }
  function EditUser_page() {
    let { id } = useParams();

    return (
      <>
        <Link
          to="/"
          className="bg-teal-400 hover:bg-teal-600 text-white py-2 px-4 rounded-full mb-10 font-light flex content-center align-center"
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAAl0lEQVRoge3ZsQ3CMBgF4RM7YMH+k1ChIGhIwTihcBNRxsX/sO6b4J3kxjZI+gcNeAG36iEjGrACG7AUbznsDLzpER/gUjvnGCNSGJHCiBRGpDAihREpjEhhRIopIgCe9IiVfl0tdaoekOD3aF1r54wxJpUxqYxJZUwqY1IZk8qYVMakmipm/z39KN4yrNEfM+7VQ6RZfQGMQnFtuPZjaQAAAABJRU5ErkJggg=="
            alt="left_icon"
            className="w-5 inline-flex mr-2 invert"
          />
          Übersicht
        </Link>
        <EditUser id={id} />
      </>
    );
  }

  return (
    <div className="container mx-auto flex-1 my-8 justify-center items-center content-center flex flex-col">
      <h1 className="text-5xl text-teal-400 mb-3">SooL-API-Generator</h1>
      <div className="p-5 flex flex-col items-start w-full">
        <Router>
          <Routes>
            <Route path="/newUser" element={"... new User"} />
            <Route path="/editUser/:id" element={<EditUser_page />} />
            <Route path="/deleteUser/:id" element={"... delete User"} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
