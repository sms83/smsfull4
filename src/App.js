import './App.css';
import AddPackage from './components/AddPackage';
import PackageList from './components/PackageList';
import EditPackage from './components/EditPackage';
import Header from './components/Header';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <div className="row">
        <Routes>
           <Route exact path="/add" element={<AddPackage />}></Route>
           <Route exact path="/" element={<PackageList />}></Route>
           <Route exact path="/edit/:id" element={<EditPackage />}></Route>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
