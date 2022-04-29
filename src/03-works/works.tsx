import './Works.css';
import SongRec from './Projects/SpotifySongRec/SongRec';
import Arduino from './Projects/ArduinoRC/ArduinoRC';
import AmnestyPLUS from './Projects/AmnestyPLUS/AmnestyPLUS';
import OClock from './Projects/OClock/OClock';

export default function Works() {
  return (
    <div className="section">
      <h3>WORKS & EXPERIENCES</h3>
      <p>
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
