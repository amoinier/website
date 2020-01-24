const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

module.exports.deviceScreen = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
};

module.exports.themeColor = '#F2B42B'
module.exports.secondColor = '#2D9CDB'
module.exports.thirdColor = '#44bd32'
module.exports.fourthColor = '#e84118'
module.exports.fifthColor = '#9c88ff'
module.exports.white = '#F4F4F4'
module.exports.lightwhite = '#FFFFFF'
module.exports.black = '#000000'
module.exports.lightdark = '#2f3640'
module.exports.grey = '#696969'

module.exports.email = 'amoinier@outlook.fr'
module.exports.linkedin = 'https://www.linkedin.com/in/amoinier/'
module.exports.github = 'https://github.com/amoinier'

module.exports.infoText = ['Alex', 'Moinier', ' ', 'Fullstack', 'Developer', ' ', 'Based in Paris']
module.exports.categories = [{name: 'Home', id: 'home'}, {name: 'Skills', id: 'skills'}, {name: 'Experience', id: 'experience'}, {name: 'Project', id: 'project'}]
module.exports.desc = [
  `23 years former student, interested by computing since I was young, I really started to learn programming in 2015 when I joined the 42 school. Now I spend a lot of my time developing my skills and discovering/learning new technologies to improve my level.`,
  `Worked 2 years in a startup. Small team requires to be versatile. I started as a trainee until I got to have an important place in the team. Front, back, integrations, customers, I worked on everything.`
]

module.exports.skills = ['Node.JS', 'Golang', 'HTML', 'CSS', 'React', 'SQL', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Docker', 'Express', 'Git', 'Linux']

module.exports.experiences = [
  {
    title: '42 School',
    date: '2015 - 2018',
    desc: 'Preparing for the certification as a Digital Technologies Architect',
    href: 'https://www.42.fr/'
  },
  {
    title: 'Optionizr',
    date: '2016 - 2019',
    desc: 'Fullstack developer with Node.JS/MongoDB',
    href: 'https://www.optionizr.com/',
  }
]

module.exports.projectsId = [
  ''
]