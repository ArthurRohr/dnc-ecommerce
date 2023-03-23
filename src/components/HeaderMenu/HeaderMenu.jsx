import dncLogo from "../../assets/logo-dnc.png";
import cartLogo from "../../assets/cartshop.png"
import "./index.scss"

const HeaderMenu = () => {
  return (
    <header className='header-menu'>
      <img src={dncLogo} alt="Logo da escola dnc" className='header-menu__logo'/>
      <ul>
        <li>Home</li>
        <li>Novidades</li>
        <li>Feminino</li>
        <li>Masculino</li>
        <li>Atendimento</li>
      </ul>
      <div className='header-menu__cart-shop'>
        <h1>Meu Carrinho</h1>
        <img src={cartLogo} alt="Logo do carrinho" />
      </div>
    </header>
  );
};

export default HeaderMenu