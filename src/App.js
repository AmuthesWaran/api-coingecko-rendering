import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DataTableRender from "./components/DataTableRender";
import DisplayCard from "./components/DisplayCard";

function App() {
  return (
    <div>


      <Routes>

        <Route path='/' element={<Dashboard />} />
        <Route path='/react-data-tables' element={<DataTableRender />} />
        <Route path='/simple-table' element={<Dashboard />} />
        <Route path='/card-view' element={<DisplayCard />} />
        
      </Routes>


    </div>
  );
}

export default App;
