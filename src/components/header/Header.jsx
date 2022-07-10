import "./header.css";
import headerImg from './../../assets/header.jpg';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">The</span>
        <span className="headerTitleLg">Blogger</span>
      </div>
      <img
        className="headerImg"
        src={headerImg}
        alt="header"
      />
    </div>
  );
}
