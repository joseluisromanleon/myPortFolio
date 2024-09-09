import { useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const SkillDisplay = () => {
  const [skills] = useState([
    {
      title: 'HTML',
      percent: 90,
      element: 'Accesibilidad, HTML semántico, Formularios y Validaciones, SEO',
    },
    {
      title: 'CSS',
      percent: 90,
      element: 'Animaciones, Grid, flexbox, Diseño web adaptable',
    },
    {
      title: 'JavaScript',
      percent: 60,
      element:
        'Colecciones con clave, JSON, Bucles e iteraciones, JavaScript asincrónico, Módulos, Herramientas de desarrollo',
    },
    { title: 'Typescript', percent: 10, element: 'Tipificación estructural' },
    {
      title: 'React',
      percent: 20,
      element:
        'Vite, Components, JSX, Props, State, Common Hooks, Lists and Keys, React Router, GraphQL: Apollo, Frameworks, Formik, API Calls',
    },
    {
      title: 'Angular',
      percent: 50,
      element: 'Angular CLI 17, Componentes, Módulos',
    },
    {
      title: 'Tailwind',
      percent: 50,
      element: 'Dark Mode, focus states, Responsive, Grid, Components',
    },
    {
      title: 'Bootstrap',
      percent: 90,
      element:
        'complementos, componentes y sistemas de cuadrícula, variables CSS, Iconos',

    },
    {
      title: 'Figma',
      percent: 50,
      element:
        'Wireframes, Prototipos animados, Componente, vectores, capas y objetos, Mover y Escalar diseños',
    },
    {
      title: 'MongoDB',
      percent: 30,
      element:
        'Apollo, Integración con Visual Studio Code, Atlas, Herramientas y conectores, Compass',
    },
    {
      title: 'MySQL',
      percent: 80,
      element:
        ' Integración con Visual Studio Code, Inteliji, Herramientas y conectores',
    },
    {
      title: 'Git',
      percent: 60,
      element:
        'Crear Repositorios, control de versiones, Crear ramas, commits, solicitudes de extracción, gestion de conflictos',
    },
    {
      title: 'Docker',
      percent: 60,
      element:
        'Crear Repositorios, Dockerizar las tecnologías,en sus diferentes versiones para, reutilización en equipos diferentes, sin problemas de compatibilidades',
    },
  ])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const [currentSkill, setCurrentSkill] = useState({
    title: 'HTML',
    percent: 95,
    elements: ['Completo'],
  })

  const circumference = ((2 * 22) / 7) * 100

  const handleSkillClick = skill => {
    // Dividir la cadena de elementos en un arreglo usando la coma como delimitador
    const elementsArray = skill.element
      ? skill.element
          .split(',')
          .filter(Boolean)
          .map(element => element.trim())
      : []
    setCurrentSkill({
      title: skill.title,
      percent: skill.percent,
      elements: elementsArray,
    })
  }

  return (
    <main className='w-full text-gray-100 bg-gray-700 place-content-center'>
      <section className='p-6 space-y-6 bg-gray-700 rounded-xl md:grid md:grid-cols-2 md:gap-4 sm:space-y-0'>
        <div className='grid grid-cols-3 lg:grid-cols-2 gap-2 lg:gap-4'>
          {skills.map(skill => (
            <button
              key={skill.title}
              onClick={() => handleSkillClick(skill)}
              className={`w-20 px-1 lg:px-4 py-2 text-sm lg:text-xl text-gray-100 transition bg-blue-600 rounded-md h-14 lg:w-44 hover:bg-blue-700 ${
                currentSkill.title === skill.title
                  ? 'font-bold ring-2 ring-gray-100'
                  : ''
              }`}>
              {skill.title}
            </button>
          ))}
        </div>
        <div className='grid grid-cols-3 lg:grid-cols-2 gap-2 lg:gap-4'>
          <div className='col-span-3'>
            <div
              className='flex items-center justify-center'
              style={{ position: 'relative' }}>
              <svg className='transform -rotate-90 w-72 h-72'>
                <circle
                  cx='145'
                  cy='145'
                  r='98'
                  stroke='currentColor'
                  strokeWidth='30'
                  fill='transparent'
                  className='text-gray-100'
                />
                <circle
                  cx='145'
                  cy='145'
                  r='98'
                  stroke='currentColor'
                  strokeWidth='27'
                  fill='transparent'
                  strokeDasharray={circumference}
                  strokeDashoffset={
                    circumference - (currentSkill.percent / 100) * circumference
                  }
                  className='text-blue-500'
                />
              </svg>
              <span className='absolute text-5xl'>{`${currentSkill.percent}%`}</span>
            </div>
          </div>
          <div className='col-span-3'>
            <button
              className='w-60 mr-2 lg:mr-0 px-1 lg:px-4 py-2 text-sm lg:text-l text-gray-900 transition bg-white rounded-md h-14 lg:w-44 hover:bg-blue-200'
              onClick={openModal}>
              Ver conocimientos de <strong>{currentSkill.title}</strong>
            </button>

            <Transition show={isModalOpen}>
              <Dialog
                as='div'
                className='fixed inset-0 z-10 overflow-y-auto'
                onClose={closeModal}>
                <div className='min-h-screen px-4 text-center'>
                  {/* This is a trick to center the modal */}
                  <span className='inline-block h-screen align-middle'></span>
                  <div className='inline-block align-middle p-8 mr-4 lg:mr-0 bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all'>
                    {/* Your additional content goes here */}
                    <h2 className='text-2xl font-bold mb-4'>{`Elementos de ${currentSkill.title}`}</h2>
                    <ul>
                      {currentSkill.elements.map((element, index) => (
                        <li key={index}>{element}</li>
                      ))}
                    </ul>
                    <button
                      className='mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
                      onClick={closeModal}>
                      Cerrar
                    </button>
                  </div>
                </div>
              </Dialog>
            </Transition>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SkillDisplay
