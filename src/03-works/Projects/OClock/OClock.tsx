import Project from '../Project';
import { projectRequirements } from '../Project';

const specs: projectRequirements = {
  num: '04',
  sub: (
    <>
      IOS <br /> SWIFT
    </>
  ),
  projectName: "O'Clock",
  projectExplanation: `A quick iOS application made out of XCode and Swift. 
    Records time on various subjects the user chooses to keep track of. Submitted
    as the final capstone project in Advanced Design & Technology class. Through this
    project I learned the difference of web-apps and mobile applications, and a little bit of
    Swift as well. Below are the demo files and github link.`,
  img1: require('./demo.png'),
  link1:
    'https://drive.google.com/file/d/1lXAgSk-TT2-I9392eEMu1G3Kgaf9rQgk/view?usp=sharing',
  img2: require('./github.png'),
  link2: 'https://github.com/ryubsmile/O-Clock',
};

export default function SongRec() {
  return Project(specs);
}
