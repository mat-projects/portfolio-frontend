import linkedin from "././images/LinkedIn.png";
import github from "././images/GitHub.png";
import profileimage from "././images/ProfileImage.png";

export default function Header(): JSX.Element {
  return (
    <>
      <div className="header">
        <div className="headerlogobar">
          <a
            href="https://www.linkedin.com/in/mat-batten"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="headerimg" src={linkedin} alt="LinkedIn"></img>
          </a>
          <a
            href="https://github.com/matbatten"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="headerimg" src={github} alt="GitHub"></img>
          </a>
        </div>
        <div className="headertext">
          <div className="header--title">MAT BATTEN</div>
          <div className="header--description">a short react portfolio</div>
        </div>
        <img
          className="header--profile"
          src={profileimage}
          alt="Who is this good-looking chap?"
        ></img>
      </div>
    </>
  );
}
