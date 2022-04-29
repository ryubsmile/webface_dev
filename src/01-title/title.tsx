import './title.css';

export default function Title() {
  return (
    <div id="title">
      <div className="webface">WEBFACE</div>
      {/* <div className="pg">&nbsp;&nbsp;&nbsp;P&nbsp;G&nbsp;</div> */}
      <img className="logo-back" src={require('./logo.png')} alt="" />
    </div>
  );
}
