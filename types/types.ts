export enum SelectedPage {
  Home = "home",
  Services = "services",
  About = "about",
  Experience = "experience",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element
  title: string
  description: string
}

export interface ClassType {
  name: string
  description?: string
  image: object
}
