import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Emplisting from "./Emplisting";
import EmpCreate from "./EmpCreate";
import EmpEdit from "./EmpEdit";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Emplisting />} />
          <Route path="/employee/create" element={<EmpCreate />} />
          <Route path="/employee/edit/:empid" element={<EmpEdit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import Data from "./city.json";

// const App = () => {
//   const [search, setSearch] = useState("");
//   return (
//     <div>
//       <center>
//         <h1>Enter Your City</h1>
//         <input
//           style={{ width: "70%" }}
//           type="text"
//           value={search}
//           placeholder="Search"
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <br />
//         {Data.filter((city) =>
//           city.name.toLowerCase().includes(search.toLowerCase())
//         ).map((city) => {
//           return (
//             <div
//               style={{
//                 border: "1px solid black",
//                 padding: "10px",
//                 margin: "10px",
//                 maxWidth: "70%",
//               }}
//             >
//               {city.name}
//             </div>
//           );
//         })}
//       </center>
//     </div>
//   );
// };

// export default App;
