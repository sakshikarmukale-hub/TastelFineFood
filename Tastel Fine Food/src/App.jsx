import Header from "./components/Header";
import './App.css'
import Footer from './components/Footer';
import Routing from "./routes/RoutesConfig"


function App() {
  return (
    <>
      <Header />
      <Routing />
      <Footer />
    </>
  );
}

export default App;