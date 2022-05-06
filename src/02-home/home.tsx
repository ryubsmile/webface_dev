import './home.css';
import CustomFade from '../00-experimental/customFade';

export default function Home() {
  return (
    <div className="section">
      <h3>HI! I'M JAEHYUK RYU.</h3>
      <CustomFade>
        <p className="general-exp">
          Currently a high school senior in Korea, with particular interests in
          UI/UX.
          <br />I build websites and web-apps for fun. Especially, I love making{' '}
          <u>Single-Page Applications!</u>
          <br />
          Primarily built from React and Typescript, this website Webface_Dev is
          hosted by Github Pages.
          <br />I adopted the 'Mobile-first approach' in development process; if
          bugs and glitches are found, please contact me.
        </p>
      </CustomFade>
    </div>
  );
}
