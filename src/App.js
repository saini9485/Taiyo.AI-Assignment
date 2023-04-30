// import './App.css';
// import Home from './components/home/Home';

// function App() {
//   return (
//     <>
// <h1>Taiyo</h1>

// <Home/>
//     </>
//   );
// }

// export default App;


import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/contactPages/Contact";
import ContactDetail from "./components/contactPages/ContactDetails";
import CreateContact from "./components/contactPages/CreateContact";
import EditContact from "./components/contactPages/EditContact";
import ChartsAndMaps from "./components/chartAndMap/ChartAndMap";
import Error from "./components/Error";




function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route index element={<Contact />} />
          <Route path="/:id" element={<ContactDetail />} />
          <Route path="/create" element={<CreateContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
          <Route path="charts-and-maps" element={<ChartsAndMaps />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

