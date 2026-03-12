import { useNavigate } from "react-router-dom";
import exit from "../../server/mongodb/controller/exit";
import sadCris from "/src/assets/Cris Triste.svg";
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

        <div className="containerLogout" onDoubleClick={backSubmit}>
            <div className="box_logout">
                <div className="supportDiv2" >

                    <div className="sup_div_close_logout">
                        <div className="close_logout" onClick={backSubmit}></div>
                    </div>

                    <img className="cris_logout" src={sadCris} alt="Logo Cris Triste" />

                    <div className="want_exit" >
                        <h2>Deseja sair?</h2>
                    </div>
                    <div className="submit_logout">
                        <button className="btn_exit_chat" onClick={exitSubmit}>Sair da conta</button>
                        <button className="btn_back_chat" onClick={backSubmit}>Voltar para o chat</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default formLogout