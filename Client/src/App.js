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
import { useDispatch } from 'react-redux';
import { setLoading } from './redux/actions.js';

function App() {
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   /*    const EMAIL = 'ejemplo@gmail.com';
      const PASSWORD = '@123Password'; */

   /* //Función sin server
   function login(userData) {
         if (userData.password === PASSWORD && userData.email === EMAIL) {
            setAccess(true);
            navigate('/home');
         }
         return alert("Credenciales incorrectas");
      } */

   /* // Promesas
      function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
         .then(({ data }) => {
            const { access } = data;
            setAccess(data);
            access && navigate('/home');
         }).catch((error) => {
            if (error.response.status === 404) {
               return window.alert('Credenciales incorrectas')
            }
         })
   } */

   async function login(userData) {
      try {
         const { email, password } = userData;
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const QUERY = `?email=${email}&password=${password}`
         const { data } = await axios(URL + QUERY)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      }
      catch (error) {
         if (error.response.status === 404) {
            return alert('Credenciales incorrectas')
         }
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const dispatch = useDispatch();
   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();

   /* //Promesas
         const onSearch = (id) => {
         dispatch(setLoading(true));
         // axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => { --> url antigua
         axios(`http://localhost:3001/rickandmorty/character/${id}`)
            .then(({ data }) => {
               if (data.name) {
                  const personaje = characters?.find((per) => per.id === Number(id))
                  if (personaje) return window.alert('El id ya existe')
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  return window.alert('¡No hay personajes con este ID!')
               }
            }).catch((error) => {
               if (error.response.status === 404) {
                  return window.alert('¡No hay personajes con este ID!')
               }
            }).finally(() => {
               dispatch(setLoading(false))
            }
            )
      } */

   async function onSearch(id) {
      try {
         dispatch(setLoading(true));
         const URL = 'http://localhost:3001/rickandmorty/character/' + id

         const { data } = await axios(URL)

         if (data.name) {
            const personaje = characters?.find(per => per.id === data.id)
            if (personaje) return alert('El id ya existe')
            setCharacters(characters => [...characters, data]);
         }
      }
      catch (error) {
         if (error.response.status === 404) {
            return alert('¡Id no puede ser vacio!')
         } if (error.response.status === 500) {
            return alert('¡No hay personajes con este ID!')
         }
      }
      finally {
         dispatch(setLoading(false))
      }

   }

   const onClose = (id) => {
      setCharacters(characters?.filter(char => char.id !== id))
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
