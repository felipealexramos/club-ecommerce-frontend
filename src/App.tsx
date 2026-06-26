import { FunctionComponent } from 'react';
import HomePage from './pages/home/home.page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
