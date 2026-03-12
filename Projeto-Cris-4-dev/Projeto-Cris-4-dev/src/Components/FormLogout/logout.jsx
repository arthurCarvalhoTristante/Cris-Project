import { useNavigate } from "react-router-dom";
import exit from "../../server/mongodb/controller/exit";
import "./logout.css"

function formLogout({ escondeClick, setAuthenticated }) {

    const navigate = useNavigate();

    const exitSubmit = () => {
        exit()
        setAuthenticated(false);
        navigate("/");
    }

    const backSubmit = () => {
        escondeClick();
    }

    return (

        <div className="container">
                <div>
                    <img src="../../src/assets/Cris Triste.svg" alt="" />
                    <h2>Deseja sair?</h2>
                    <div className="submit">
                        <button onClick={exitSubmit}>Sair da conta</button>
                        <button onClick={backSubmit}>voltar para</button>
                    </div>
                </div>
        </div>

    )
}

export default formLogout