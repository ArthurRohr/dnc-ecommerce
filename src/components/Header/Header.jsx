import dncLogo from "../../assets/logo-dnc.png";
import "./index.scss"

const Header = () => {
  return (
    <div className='header'>
      <img src={dncLogo} alt="Logo da escola dnc" />
    </div>
  );
};

export default Header