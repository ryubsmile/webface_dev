import Project from '../Project';
import { projectRequirements } from '../Project';

const specs: projectRequirements = {
  num: '02',
  sub: (
    <>
      MACHINE <br /> LEARNING
    </>
  ),
  projectName: 'Spotify Song Recommender',
  projectExplanation: `A machine-learning embedded song recommender that takes in
    user-chosen Spotify songs to generate a playlist that suits their
    taste of music. This project was a collaboration with my sister,
    made out of Django and Javascript. I learned how machine-learning can be used in so
    many different places, using APIs, and developed further interest in Single-Page-Applications. 
    The source code is currently a download-able web application. 
    If you want to try it out, travel to its Github Repository by clicking the image.`,
  img1: require('./img1.png'),
  link1: 'https://github.com/ryubsmile/spotify-song-recommender',
  img2: require('./img2.png'),
  link2: 'https://github.com/ryubsmile/spotify-song-recommender',
};

export default function SongRec() {
  return Project(specs);
}
