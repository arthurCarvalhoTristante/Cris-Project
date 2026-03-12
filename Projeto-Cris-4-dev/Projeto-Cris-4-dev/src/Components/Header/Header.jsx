
import "./Header.css";


function Header({ checkbox, mostraClick }) {


    const offlogin = () => {
      mostraClick()
    }

    return (
        <>
            <header className="headerNormal">
                <img src={checkbox ? "../src/assets/LogoCris.svg" : "../src/assets/LogoCrisDarkMode.svg"} alt="Logo" height="60px" width="60px" />
                <h1>Cris</h1> 
            </header>
            <div className="boxButton">
                <button onClick={offlogin}>Sair</button>
            </div>
         

        </>
    )
}

export default Header;