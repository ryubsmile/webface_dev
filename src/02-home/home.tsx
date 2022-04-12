import './home.css';
import { Fade } from 'react-awesome-reveal';

export default function Home() {
  return (
    <div className="section">
      <h3>HI! I'M JAEHYUK RYU.</h3>
      <Fade duration={400} direction="up" fraction={0.5} damping={0.2}>
        <>
          Currently a high school senior in Korea, with particular interests in
          UI/UX.
          <br />
          {/* <hr /> */}I build websites and web-apps for fun.
        </>
      </Fade>
    </div>
  );
}
