import './emergeAtScrollTile.css';
import { Fade } from 'react-awesome-reveal';

export default function ScrollTile(props: any) {
  const options = {
    rootMargin: '0px',
    threshold: 1.0,
  };

  // in the middle of making a scroll - emerge function.
  // const observer = new IntersectionObserver(makeVisible, options);
  //listItems.forEach(item => observer.observe(item));

  return (
    <div className="scroll">
      <ul className="scroll">
        <Fade duration={400} direction="up" fraction={0.5} damping={0.2}>
          {listItems}
        </Fade>
      </ul>
    </div>
  );
}

const listItems = [
  <li className="scrollItems">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  </li>,
  <li className="scrollItems">
    Architecto quo natus quos reiciendis enim quod corrupti ullam est esse
    delectus, dignissimos aut sint labore, voluptatibus animi porro, fugit
    quidem sed!
  </li>,
  <li className="scrollItems">
    Saepe hic impedit laborum harum molestias? Magni unde itaque expedita
    quaerat?
  </li>,
  <li className="scrollItems">
    Recusandae et quidem repellendus tempore aut temporibus magnam ipsam facere,
    officia sit aliquam ipsa eius quo cum odit esse necessitatibus doloribus
    amet!
  </li>,
  <li className="scrollItems">
    Ut ad ab sint adipisci molestias autem accusamus temporibus.
  </li>,
];

const makeVisible = () => {};
