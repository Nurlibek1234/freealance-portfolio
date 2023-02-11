import gitHubIcon from "./gitHub-black.svg";
import "./style.css";

const BtnGitHub = ({link}) => {
  return (
    <a href={link} rel="noreferrer" target="_blank" className="btn-outline">
      {<img src={gitHubIcon} alt="" /> }
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
