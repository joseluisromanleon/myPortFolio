import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import ContactPage from '../pages/ContactPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/proyectos',
    element: <Projects />,
  },
  {
    path: '/contacto',
    element: <ContactPage />,
  },
])
