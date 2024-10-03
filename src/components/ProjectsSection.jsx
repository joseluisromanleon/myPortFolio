import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 4,
    title: 'Maquetación',
    description: 'Proyectos maquetados usando Adobe XD',
    https: 'https://jlrleducaand.github.io/mhm/',
    image: 'AdobeXD',
    tag: ['All', 'Web'],
  },
  {
    id: 2,
    title: 'Bootstrap',
    description:
      'Proyectos desarrollo front , https://jlrleducaand.github.io/mhm/',
    https: 'https://jlrleducaand.github.io/mhm/',
    image: 'Transparencia-LARAVEL',
    tag: ['All', 'Web'],
  },
  {
    id: 1,
    title: 'Wordpress',
    description:
      'Sitios web adaptables, enfocados a afianzar la marca, SEO y conversión. Diseñado en Wordpress, uso de plugins, temas hijo, Elementor.   https://softwaredevelopers.website/',
    https: 'https://softwaredevelopers.website/',
    image: 'WordpressProjects',
    tag: ['All', 'Web'],
  },
  {
    id: 3,
    title: 'React',
    description:
      'Proyectos desarrollados con React, Next, Vite, Tailwind, GraphQL, MongoDB',
    https: 'https://jlrl-portfolio.netlify.app/',
    image: 'React',
    tag: ['All', 'Web'],
  },

  {
    id: 5,
    title: 'Spring-Microservices',
    description:
      'Proyecto Microservicios con SprigBoot Feing MySQL MongoDB GITHUB',
    https: 'https://github.com/joseluisromanleon/spring-microservices-init.git',
    image: 'postman',
    tag: ['All', 'Web'],
  },
  {
    id: 6,
    title: 'Angular',
    description: 'Proyectos desarrollado Angular, MySQLi, Bootstrap',
    https: '',
    image: 'AngularProject',
    tag: ['All', 'Web'],
  },
  {
    id: 7,
    title: 'En curso',
    description: 'Proyecto fin de  curso',
    https: '',
    image: 'EnCurso',
    tag: ['All', 'Web'],
  },
]
const ProjectsSection = () => {
  return (
    <div className='md:container md:mx-auto mt-4 dark:bg-gray-900'>
      <div className='lg:inline-flex lg:flex-wrap '>
        {projectsData.map(projects => (
          <ProjectCard
            key={projects.id}
            title={projects.title}
            description={projects.description}
            https={projects.https}
            imageUrl={projects.image}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectsSection
