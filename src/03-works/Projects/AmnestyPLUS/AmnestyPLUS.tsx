import Project from '../Project';
import { projectRequirements } from '../Project';

const specs: projectRequirements = {
  num: '01',
  sub: 'WEBSITE',
  projectName: 'Amnesty PLUS',
  projectExplanation: `An Official Branch group of Amnesty Korea, the human rights
    Non-governmental Organization. The website itself is built entirely
    by the students in the group. My contributions to the development
    include, but weren't limited to: frontend design and structural
    improvement. You can find me on 'About'-'IT department.' I go by the
    name Jeff here. Please Check the website out by clicking the image!`,
  img1: require('./Website-Blur1.png'),
  link1: 'https://amnestyplus.org/index.jsp',
  img2: require('./Website-Blur2.png'),
  link2: 'https://amnestyplus.org/index.jsp',
};

export default function AmnestyPLUS() {
  return Project(specs);
}
