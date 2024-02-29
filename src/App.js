import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Header />
        <Menu />
        <Footer />
      </div>
    </div>
  );
}
