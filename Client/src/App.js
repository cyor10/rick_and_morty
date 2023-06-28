import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom"
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import image from './img/image.jpg'

function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '@123Password';

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
      return alert("Credenciales incorrectas");
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();
   const onSearch = (id) => {
      /* axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => { --> url antigua*/
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            const personaje = characters.find((per) => per.id === Number(id))
            if (personaje) return window.alert('El id ya existe')
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   return (
      <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', height: 1050, paddingTop: 0 }}>
         {pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path="/home"
               element={<Cards characters={characters} onClose={onClose} />}></Route>
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={""} />
         </Routes>
      </div>
   );
}

export default App;
