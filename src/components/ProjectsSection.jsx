import ProjectCard from './ProjectCard'

const projectsData = [
  {
    id: 1,
    title: 'Wordpress',
    description:
      'Sitios web adaptables, enfocados a afianzar la marca, SEO y conversión. Diseñado en Wordpress, uso de plugins, temas hijo, Elementor.',
    https: 'https://softwaredevelopers.website/',
    image: 'WordpressProjects',
    tag: ['All', 'Web'],
  },
  {
    id: 2,
    title: 'Bootstrap',
    description:
      'Proyectos desarrollo front , https://jlrleducaand.github.io/mhm/',
    https: 'https://softwaredevelopers.website/',
    image: 'Transparencia-LARAVEL',
    tag: ['All', 'Web'],
  },
  {
    id: 3,
    title: 'React',
    description:
      'Proyectos desarrollados con React, Next, Vite, Tailwind, GraphQL, MongoDB',
    https: 'https://softwaredevelopers.website/',
    image: 'ReactProjects',
    tag: ['All', 'Web'],
  },
  {
    id: 4,
    title: 'Maquetación',
    description: 'Proyectos maquetados usando Figma',
    https: 'https://softwaredevelopers.website/',
    image: 'MaquetacionProjects',
    tag: ['All', 'Web'],
  },
  {
    id: 5,
    title: 'Java',
    description: 'Proyecto desarrollado en Java 17 a 22, POO, Mysql, DAO, DTO',
    https: 'https://softwaredevelopers.website/',
    image: '../icons/JavaIcon',
    tag: ['All', 'Web'],
  },
  {
    id: 6,
    title: 'Angular',
    description: 'Proyectos desarrollado Angular, Laravel, MySQLi, Bootstrap',
    https: 'https://softwaredevelopers.website/',
    image: 'AngularProject',
    tag: ['All', 'Web'],
  },
  {
    id: 7,
    title: 'Diseño gráfico',
    description:
      'Proyectos desrrollados usando la suite de Adobe. Photoshop, Illustrator, Premiere',
    https: 'https://softwaredevelopers.website/',
    image: 'GraphDesingProjects',
    tag: ['All', 'Web'],
  },
  {
    id: 8,
    title: 'Prestashop',
    description: 'Proyecto usando CMS Prestashop',
    https: 'https://softwaredevelopers.website/',
    image: 'PrestashopProjects',
    tag: ['All', 'Web'],
  },
  {
    id: 9,
    title: 'Otros CMS',
    description: 'Proyectos usando Ckan, Consul',
    https: 'https://softwaredevelopers.website/',
    image: 'OtrosCMS',
    tag: ['All', 'Web'],
  },
  {
    id: 10,
    title: 'En curso',
    description: 'Proyectos en curso',
    https: 'https://softwaredevelopers.website/',
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
