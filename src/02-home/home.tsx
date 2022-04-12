import './home.css';
import { Fade } from 'react-awesome-reveal';
import CustomFade from '../00-experimental/customFade';

export default function Home() {
  return (
    <div className="section">
      <h3>HI! I'M JAEHYUK RYU.</h3>
      <CustomFade>
        <>
          Currently a high school senior in Korea, with particular interests in
          UI/UX.
          <br />
          {/* <hr /> */}I build websites and web-apps for fun.
        </>
      </CustomFade>
    </div>
  );
}
