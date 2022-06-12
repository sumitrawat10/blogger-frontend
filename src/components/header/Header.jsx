import "./header.css";
import headerImg from './../../assets/header.jpg';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src={headerImg}
        alt="header"
      />
    </div>
  );
}
