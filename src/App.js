import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import UseStateHook from './components/UseStateHook';
import UseEffectsHook from './components/UseEffectsHook';

function App() {
  return (
    <div className="App">
        <Header/>
          <main className='content'>
            <UseStateHook/>
            <UseEffectsHook/>
          </main>        
        <Footer/>
    </div>
  );
}

export default App;
