import logoCris from "/src/assets/LogoCris.svg";
import logoCrisDark from "/src/assets/LogoCrisDarkMode.svg";
import "./Header.css";


function Header({ checkbox, mostraClick }) {


    const offlogin = () => {
        mostraClick()
    }

    return (
        <>
            <header className="headerNormal">
                <div className="supportDiv">
                    <img src={checkbox ? logoCris : logoCrisDark} alt="Logo" />
                    <h1>Cris</h1>
                </div>
                <div className="boxButton">
                    <button onClick={offlogin}>Sair</button>
                </div>

            </header>

        </>
    )
}

export default Header;