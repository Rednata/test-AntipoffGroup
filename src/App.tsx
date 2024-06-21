import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Card } from './components/Card/Card';
import { Catalog } from './components/Catalog/Catalog';
import { Header } from './components/Header/Header';
import { Registry } from './components/Registry/Registry';

function App() {
  return (
    <>
      <Routes>
        <Route path='/teams'
          element={
            <>
              <Header />
              <Catalog />
            </>
          }
        />
        <Route path='/teams/:card'
          element={
            <>
              <Header/>
              <Card/>
            </>
          }
        />
        <Route path='/'
          element={<Registry />}
        />
      </Routes>
    </>
  );
}

export default App;

