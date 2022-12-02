import "./App.css";
import MyForm from "./chemistry";
import Molarmass from "molarmass.js";

function App() {
  const mm = new Molarmass();

  return (
    <div
      className="App flex py-40 px-60 font-sans bg-gradient-to-r from-cyan-500 to-blue-500 
      "
      style={{ backgroundColor: "#f1fafc", height: "100vh" }}
    >
      <div
        className="container mx-auto rounded-3xl flex-col py-10 h-3/4 bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg"
        style={{}}
      >
        <p className="text-xl font-semibold mb-6 mt-4">
          Get the molar mass of any compound in g/mol
        </p>
        <MyForm />
        <p className="font-semibold mt-10 justify-self-end">
          Chemistry Creative Assignment by <br></br>
          Oluwapelumi Oyelowo, Olayinka Ashimi & David Micheals
        </p>
      </div>
    </div>
  );
}

export default App;
