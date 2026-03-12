import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import login from "../../server/mongodb/controller/auth";
import { useNavigate } from 'react-router-dom';
import'react-toastify/dist/ReactToastify.css';
import { Zoom, toast } from "react-toastify";

import "./login.css";

function Login({ setAuthenticated, setToken }) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkpassword, setCheck] = useState(false);
    const navigate = useNavigate();


    const showToast = (islogin) => {
    

        const resul = islogin

        if (!email || !password) {
            toast.info("Campos vazios", {
                position: "top-center",
                theme: "dark",
                pauseOnHover: false,
                pauseOnFocusLoss: false
            })
        } else{
            if (resul) {
                toast.success('Logado com sucesso!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                    });
            } else {
                toast.error('Erro login', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Zoom,
                    });
            }
        }
    }

    const onLogin = async (e) => {
        e.preventDefault();

        const islogin = await login(email, password);

        showToast(islogin)

        if (islogin) {
            setToken(islogin.token);
            setAuthenticated(true);
            navigate('/chat');
        } else {
            console.log("erro login");
        }
    
    

    }

    const onAvatar = () => {

        setCheck(!checkpassword);

    }

    const offAvatar = () => {

        setCheck(!checkpassword);
    }


    return (
        <>
            <div className="area">
                <div className="cris_titulo">
                    <div className="box">
                        <h2>CRIS</h2>
                        <h3>ASSISTENTE</h3>
                    </div>
                </div>
                <div className="img_1">
                    <img src="Ellipse 1.svg" alt="" />
                </div>
                <div className="img_2">
                    <img src="Ellipse 2.svg" alt="" />
                </div>
                <div className="img_3">
                    <img src="Ellipse 3.svg" alt="" />
                </div>
            </div>
            <div className="marca">
                <img src="Barra_amarela_inf.svg" />
            </div>
            <div className="styles">
                <div className="img_0">
                    <img src="Barra_amarela.svg" />
                </div>
                <div className="container">
                    <div className="box_login">
                        <form onSubmit={onLogin}>
                            <header className="cabecalho">
                                <div className={checkpassword ? "image_logo" : "image_logo2"}>

                                    <div className="hands">
                                            <div className={checkpassword ? "left_hand" : "left_hand2"} > </div>
                                            <div className={checkpassword ? "right_hand" : "right_hand2"} > </div>

                    
                                    </div>

                                    {/* <img src="Ellipse para CRIS (1).svg" className="ellipse_cris"/> */}

                                </div>
                                <h1>Faça seu login</h1>
                            </header>
                            <div className="form_login">
                                <div className="camp_email">
                                    <MdOutlineMailOutline className="icon_email" />
                                    <input className="input_email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" />
                                </div>
                                <div className="camp_senha">
                                    < RiLockPasswordLine className="icon_senha" />
                                    <input className="input_pass" type="password" onFocus={onAvatar} onBlur={offAvatar} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" />
                                </div>
                            </div>
                            <div className="submit_login">
                                <input type="submit" value="LOGIN" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
