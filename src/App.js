import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import NewProject from './pages/NewProject';
import Projects from './pages/Projects';

import Container from './layout/Container';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/newproject' element={<NewProject />} />
        </Routes>
      </Container>

      <Footer/>
    </BrowserRouter>

  );
}

export default App;
