import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
import NavBar from "./components/header/Header";
import Players from "./components/players/Players";
import Home from "./components/home/Home";
import ViewPlayer from "./components/viewPlayer/View-Player";
// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <NavBar />
//           <Routes>
//             <Route path="/" exact element={<Home />} />
//             <Route path="/players" element={<Players />} />
//           </Routes>
//         </div>
//       </Router>
//     );
//   }
// }
const App =(props) => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/players" exact element={<Players />} />
          {/* <Route path="/players/:id" element={<ViewPlayer />} /> */}
          <Route path='/players/:id' element={<ViewPlayer />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;