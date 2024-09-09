import Header from '../components/Header'
import Title from '../components/Title'
import AccountImage from '../components/AccountImage'
import NavBar from '../components/NavBar'
import ProjectsSection from '../components/ProjectsSection'

const Projects = () => {
  return (
    <div className="pt-3 bg-gray-300 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] dark:lg:bg-[url('./assets/images/bg-desktop-dark.jpg')] bg-cover h-44 bg-no-repeat bg-[url('./assets/images/bg-mobile-light.jpg')] lg:bg-[url('./assets/images/bg-desktop-light.jpg')]">
      <Header />

      <div className='flex grid-cols-6 gap-4 mb-14'>
        <NavBar />
        <div className='col-span-1'></div>
        <div className='w-40 align-middle pb-2 z-10'>
          <AccountImage />
        </div>
        <div className='col-span-4 text-left'>
          <Title
            text='Bienvenido a mi portafolio'
            className='text-white'
          />
          <Title
            text='Diseño de Soluciones para tus proyectos'
            className='text-white'
          />
        </div>
      </div>

      <ProjectsSection />
    </div>
  )
}
export default Projects
