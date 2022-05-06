import './Works.css';
import SongRec from './Projects/SpotifySongRec/SongRec';
import Arduino from './Projects/ArduinoRC/ArduinoRC';
import AmnestyPLUS from './Projects/AmnestyPLUS/AmnestyPLUS';
import OClock from './Projects/OClock/OClock';

const imgArrays = [
  <img
    alt="js"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    key="0"
  />,
  <img
    alt="ts"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
    key="1"
  />,
  <img
    alt="react"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    key="2"
  />,
  <img
    alt="html"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
    key="3"
  />,
  <img
    alt="css3"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
    key="4"
  />,
  <img
    alt="swift"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
    key="5"
  />,
  <img
    alt="arduino"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg"
    key="6"
  />,
  <img
    alt="django"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
    key="7"
    style={{ filter: 'brightness(200%)' }}
  />,
  <img
    alt="github"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    key="8"
    style={{ filter: 'invert(70%)' }}
  />,
  <img
    alt="mysql"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg"
    key="9"
  />,
  <img
    alt="python"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain.svg"
    key="10"
  />,
  <img
    alt="vscode"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    key="11"
  />,
];

export default function Works() {
  return (
    <div className="section">
      <h3>WORKS & EXPERIENCES</h3>
      <div className="tech-stacks">{imgArrays}</div>
      <p id="exp">
        List of my major works that are well documented. Click on the images to
        learn more.
      </p>
      {/* 
      have experience in ... 
      html, css, js, ts, react, node, jsp, java, python, django, mysql, swift, c, robotc, raspberry pi, arduino
      */}
      <hr className="divider" />
      <AmnestyPLUS />
      <hr className="divider" />
      <SongRec />
      <hr className="divider" />
      <Arduino />
      <hr className="divider" />
      <OClock />
    </div>
  );
}
