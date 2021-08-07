import './assets/styles/App.css';
import useGetRandomCountry from './hooks/useGetRandomCountry';

function App() {
  const country = useGetRandomCountry().response;
  const loading = useGetRandomCountry().loading;
  
  if(!loading){
    console.log(country);
  }
  

  return (
    <div className="App">
      <h2 id="country-quiz">Country-Quiz</h2>
    </div>
  );
}

export default App;
