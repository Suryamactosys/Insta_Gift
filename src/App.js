import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import PageRoutes from './routes/PageRoutes';
import Test from './Components/Test/Test';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Test />
      <PageRoutes />
      <Footer />
    </>
  );
}

export default App;
