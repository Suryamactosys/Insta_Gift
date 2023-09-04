import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import PageRoutes from './routes/PageRoutes';
// import Demo from './Components/Demo/Demo';

function App() {
  return (
    <>
      <Navbar />
      {/* <Demo /> */}
      <PageRoutes />
      <Footer />
    </>
  );
}

export default App;
