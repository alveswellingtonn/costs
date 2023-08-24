import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import NewProject from './pages/NewProject';

import Container from './layout/Container';

function App() {
  return (

    <BrowserRouter>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/company'>Empresa</Link>
        </li>
        <li>
          <Link to='/contact'>Contato</Link>
        </li>
        <li>
          <Link to='/newproject'>Novo Projeto</Link>
        </li>
      </ul>
      <Container customClass='min-height'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/company' element={<Company />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/newproject' element={<NewProject />} />
        </Routes>
      </Container>
      <p>footer</p>
    </BrowserRouter>

  );
}

export default App;
