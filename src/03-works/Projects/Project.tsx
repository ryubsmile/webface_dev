import './Project.css';
import CustomFade from '../../00-experimental/customFade';

export interface projectRequirements {
  num: string; // 01, 02, two digit form
  sub: JSX.Element | string; // should be all-cap
  projectName: string;
  projectExplanation: string;
  img1: any;
  link1: string;
  img2: any;
  link2: string;
}

export default function projectExplainer(props: projectRequirements) {
  return (
    <div className="container">
      <div className="proj-summary">
        <div className="index-box">
          <div className="center">
            <div className="num">{props.num}</div>
            <div className="sub">{props.sub}</div>
          </div>
        </div>
        <div className="exp-box">
          <div className="proj-title">{props.projectName}</div>
          <CustomFade>
            <p className="proj-exp">{props.projectExplanation}</p>
          </CustomFade>
        </div>
      </div>
      <div className="img-box">
        <a
          href={props.link1}
          className="sample-img"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={props.img1} alt="" width="100%" />
        </a>
        <a
          href={props.link2}
          className="sample-img"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={props.img2} alt="" width="100%" />
        </a>
      </div>
    </div>
  );
}
