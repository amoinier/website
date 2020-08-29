declare interface DeviceScreen {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  desktop: string;
  desktopL: string;
}

declare interface Category {
  name: string;
  id: string;
}

declare interface Experience {
  title: string;
  date: string;
  desc: string;
  href: string;
  analytics: string;
}

declare interface ProjectList {
  id: string;
  language: string;
  description: string;
  analytics: string;
  contributor?: boolean;
}

declare interface Config {
  deviceScreen: DeviceScreen;
  username: string;
  githubToken: string;
  themeColor: string;
  secondColor: string;
  thirdColor: string;
  fourthColor: string;
  fifthColor: string;
  white: string;
  lightwhite: string;
  black: string;
  lightdark: string;
  grey: string;
  email: string;
  linkedin: string;
  github: string;
  infoText: any[];
  categories: Category[];
  desc: string[];
  skills: string[];
  experiences: Experience[];
  projectList: ProjectList[];
}
