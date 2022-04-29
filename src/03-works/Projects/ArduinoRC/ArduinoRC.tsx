import Project from '../Project';
import { projectRequirements } from '../Project';

const specs: projectRequirements = {
  num: '03',
  sub: 'ARDUINO',
  projectName: 'Arduino RC',
  projectExplanation: `Arduino RC is a month-long school project. 
    In a small group of 4, we had to come up with a meaningful work 
    using arduinos based on what we've learned in class so far. I 
    worked as the main Arduino programmer to use C++ and build the software. 
    Intended to strengthen the COVID-19 Protocol at school, the Arduino RC 
    detects the number of people in a room with ultrasonic transducers, 
    and emits a certain color of light according to the current accommodations
    to warn the new-coming visitors. Check more if you're interested - 
    in the website and the github Repository.`,
  img1: require('./vid.png'),
  link1: 'https://sites.google.com/view/jddmindustry/home',
  img2: require('./code.png'),
  link2: 'https://github.com/ryubsmile/arduinoRC',
};

export default function ArduinoRC() {
  return Project(specs);
}
