import { Routes, Route, useNavigate, useSearchParams } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import FormInput from './components/FormInput';
function App() {
  const navigate = useNavigate();
  const [sparams] = useSearchParams();
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<FormInput navigate={navigate} />} />
        <Route
          path='/details'
          element={<Details sparams={sparams} navigate={navigate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
