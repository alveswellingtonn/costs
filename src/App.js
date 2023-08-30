import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import NewProject from './pages/NewProject';
import Projects from './pages/Projects';
import Project from './pages/Project';

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
          <Route path='/projects' element={<Projects />} />
          <Route path='/company' element={<Company />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newproject' element={<NewProject />} />
          <Route path='/project/:id' element={<Project />} />
        </Routes>
      </Container>

      <Footer/>
    </BrowserRouter>

  );
}

export default App;
