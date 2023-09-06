import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import PageRoutes from './routes/PageRoutes';

function App() {
  return (
    <>
      <Navbar />
      <PageRoutes />
      <Footer />
    </>
  );
}

export default App;
