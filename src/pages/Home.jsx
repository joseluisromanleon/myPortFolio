import Header from '../components/Header'
import Title from '../components/Title'
import SubTitle from '../components/SubTitle'
import AccountImage from '../components/AccountImage'
import SkillsData from '../components/SkillsData'
import SkillsDisplay from '../components/SkillsDisplay'
import NavBar from '../components/NavBar'

//agregar boton descargar CV

const Home = () => {
  return (
    <div className="pt-3 bg-gray-300 dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] dark:lg:bg-[url('./assets/images/bg-desktop-dark.jpg')] bg-cover h-44 bg-no-repeat bg-[url('./assets/images/bg-mobile-light.jpg')] lg:bg-[url('./assets/images/bg-desktop-light.jpg')]">
      <Header />
      <div className='flex grid-cols-6 gap-4 mb-14'>
        <NavBar />
        <div className='col-span-1'></div>
        <div className='w-40 bi-border-width align-middle pb-2 z-8'>
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
      <div className='grid grid-cols-1 gap-1 lg:grid-cols-3 mb-1 -mt-8 align-middle'>
        <div className='grid grid-rows-1 grid-flow-col gap-2'>
          <div className='bg-teal-200 dark:bg-gray-700 dark:text-white p-6'>
            <h1 className="header text-4xl text-center extrabold dark:text-white font-sans lg:text-4xl sm:text-sm font-bold pb-2 pt-1 lg:pt-4 text-gray-900'">
              <span className='text-2xl lg:text-4xl text-transparent extrabold bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-50 dark:to-pink-400'>
                Hola, soy {''}
              </span>
              <br /> José Luis Román
            </h1>
            <p className=' font-sans text-center pt-4'>
              Diseñador de aplicaciones web a través de lenguajes de marca y
              lenguajes de programación, Actuando desde el diseño de la
              arquitectura hasta su funcionamiento en Api-Rest listas para
              consumir.
              <br /> Graduado en el{' '}
              <strong>desarrollo de Aplicaciones web</strong> y en continuo
              aprendizaje como es lógico en esta área. <br />
              Partiendo del diseño de arquitectura, diseño gráfico, maquetación
              con diferentes tecnologías y desarrollando mediante el uso de
              Frameworks de Java y de JS además Wordpress y otros CMS.
            </p>
          </div>
        </div>

        <div className='grid grid-rows-1 lg:grid-rows-1 grid-flow-col gap-1'>
          <div className='col-span-2 col-end-2 bg-cyan-200 dark:bg-gray-900 dark:text-white p-6'>
            <SubTitle subtitle='Arquitectura Web' />
            <p className='text-center'>
              Dentro de las competencias adquiridas en mis Estudios se
              encuentran: El desarrollo de Api-Rest con Arquitecturas fiables y
              robustas, con SpringBoot, SpringSecurity, SpringData, uso de
              aplicaciones de control de Versiones y trabajos con
              Micro-servicios y Docker para empaquetar las versiones de uso
              entre otras muchas.
            </p>
          </div>

          <div className='col-span-2 col-end-2 lg:col-end-4 gap-2 bg-violet-200 dark:bg-gray-700 dark:text-white p-6'>
            <SubTitle subtitle='Diseño web' />
            <p className='text-center'>
              Destreza en el uso de lenguajes de diseño de Paginas Web como:
              HTML, CSS y JS. Motor de Plantillas Thymeleaf. y Wordpress. Además
              de PreProyectos con Adobe para maquetaciones
            </p>
          </div>
        </div>

        <div className='grid grid-rows-1 grid-flow-col gap-2'>
          <div className='bg-teal-200 dark:bg-gray-900 dark:text-white p-6'>
            <SubTitle subtitle='Desarrollo web' />
            <p className='font-sans text-center'>
              Desarrollo de aplicaciones web mediante el uso de HTML, CSS,
              JAVASCRIPT, PHP, MongoDB, MySQL, JAVA 17, GIT, Frameworks como,
              Angular, SpringBoot o con CMS como Wordpress...
            </p>

            <SubTitle subtitle='Diseño gráfico' />
            <p className='font-sans text-center'>
              Diseño de Logos, Banners {/* <Button text="Ver más" /> */}
            </p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-1 lg:grid-cols-3 text-center bg-gray-600'>
        <div className='col-span-4 lg:col-end-4 bg-gray-500 text-white dark:bg-gray-900 p-6 pt-8 lg:pt-4'>
          <div className='w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-opacity-60 dark:via-gray-900 dark:to-pink-900 -mt-12 py-4 float-right shadow-md '>
            <strong className='text-3xl text-center dark:text-white pt-4'>
              Junior
            </strong>
            <br />
            <small className='dark:text-white'>
              Experiencia
              <br />
              obtenida
              <br />
              durante los años de curso
            </small>
          </div>
          <SubTitle
            subtitle='Experiencia'
            className='dark:text-white hidden lg:visible'
          />
          {/* Agregar boton para descargar CV */}
        </div>
        <div className='row-span-1 lg:row-span-2 col-span-4 lg:col-span-2 p-6 mx-auto'>
          <span className='text-center'></span>

          <SkillsData className='dark:text-white' />
        </div>

        <div className='col-span-4 lg:col-span-2 bg-gray-700 shadow-lg dark:bg-gray-700 dark:text-white p-6'>
          <SubTitle
            subtitle='Skills Desarrollo FrontEnd'
            className='text-white dark:text-white'
          />
          <SkillsDisplay />
        </div>
        <div className='col-span-4 lg:col-span-1 lg:col-start-2 bg-violet-200 dark:bg-gray-900 dark:text-white p-6'>
          <span className='text-center'>2020-2024</span>
          <SubTitle subtitle='Estudios Cursados' />
          <p className='font-sans text-center'>
            Los Estudios los he cursado en: IES Vega de Mijas (Málaga).
            <br /> Obteniendo el Grado Superior en DAW. Desarrollo de
            Aplicaciones WEB.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Home
