import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from "react";
import login from "../../server/mongodb/controller/auth";
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom, toast } from "react-toastify";
import Ellipse1 from "/Ellipse 1.svg";
import Ellipse2 from "/Ellipse 2.svg";
import Ellipse3 from "/Ellipse 3.svg";
import barraAmarelaInf from "/Barra_amarela_inf.svg";
import barraAmarela from "/Barra_amarela.svg";
import left_hand from "../../assets/mão esquerda.svg";
import right_hand from "../../assets/mão direita.svg";


import "./login.css";


function Login({ setAuthenticated, setToken }) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(true);
    const [isFocus, setFocus] = useState(false);
    const [checkHands, setHands] = useState(false);
    const [checkEyes2, setEyes2] = useState(false);
    const navigate = useNavigate();


    const [showpass, setShowPass] = useState(false);


    const showToast = (islogin) => {


        const resul = islogin

        if (!email || !password) {
            toast.info("Campos vazios", {
                position: "top-center",
                theme: "dark",
                hideProgressBar: true,
                pauseOnHover: false,
                pauseOnFocusLoss: false
            })
        } else {
            if (resul) {
                toast.success('Logado com sucesso!', {
                    position: "top-center",
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
                    position: "top-center",
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

    function auxAnime (hands, eyes, show) {

        setHands(hands)
        setEyes2(eyes)
        setShowPass(show)

    }

    const animation =  setTimeout(() => {

        const $input = document.querySelectorAll('input')
        const $img = document.querySelectorAll('img');

        let $right = $img[6];
        let $checkbox = $input[2]

        if(isFocus === true) {
            
            if($checkbox.checked === true) {

                auxAnime(true, false, true)
                $right.classList.add('right_hand3')

            } else {

                if($checkbox.checked === false) {

                auxAnime(true, false, false)
                $right.classList.remove('right_hand3')

                }
            }
        } 
        
        if(isFocus === false) {

            if($checkbox.checked === true) {

                auxAnime(true, false, true)
                $right.classList.add('right_hand3')
                
            } else {

                auxAnime(false, false, false)
                $right.classList.remove('right_hand3')

            }

        }

    }, 100)

    function animationFocus () {

        setFocus(!isFocus)

        console.log('Está no focus: ' + isFocus)


    }

    function animationBlur () {

        setFocus(!isFocus)

        console.log('Não está no focus: ' + isFocus)

        
    }

    function checker () {

        const $input = document.querySelectorAll('input')

        let $input_pass = $input[1]

        setChecked(!checked)

        $input_pass.focus()

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
                    <img src={Ellipse1} alt="" />
                </div>
                <div className="img_2">
                    <img src={Ellipse2} alt="" />
                </div>
                <div className="img_3">
                    <img src={Ellipse3} alt="" />
                </div>
            </div>
            <div className="marca">
                <img src={barraAmarelaInf} />
            </div>
            <div className="styles" >
                <div className="img_0">
                    <img src={barraAmarela} />
                </div>
                <div className="container">
                    <div className="box_login">
                        <form onSubmit={onLogin}>
                            <header className="cabecalho">
                                <div className="hands">

                                    {/* Imagem que renderiza a mão que fica do lado esquerdo e cobre os olhos da Cris quando o cliente fica com focus na senha */}

                                    <img src={left_hand} className={checkHands ? "left_hand" : "left_hand2"} />


                                    {/* SVG Logo da Cris, está no código pois a animação do olho é feita por aqui e pelo CSS, onde tem os Ids "left_eye" e "right_eye" 
                                    também existe um operador ternário que troca os valores dos olhos para ficarem abertor ou fechados de acordo com o input que o cliente está */}

                                    <div className="image_logo" alt="Logo Svg" >
                                        <svg width="200" height="191" viewBox="0 0 200 191" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.13781 117.323L5.17578 106.729L5.96059 105.551L9.49224 104.767L11.4543 103.59L13.0239 103.197L15.3783 102.412L17.3403 100.843L20.0872 100.058L21.2644 99.2733L26.3657 96.919L28.7201 94.957L30.2897 92.9951L30.6821 90.6408L29.8973 87.5017L27.9353 85.5398L24.796 84.3627L19.3024 80.8312L13.4163 78.8693L15.7707 77.2997L17.7327 76.515L19.3024 75.3378L21.6568 74.1607L29.1125 69.8444L32.2517 67.8825L36.9606 65.5282L39.7074 63.5663L42.0619 62.3891L46.7707 59.6424L50.3024 58.0729L53.0492 56.5033L55.796 54.149L59.7201 52.1871L62.4669 50.6176L65.9986 48.6557L75.4163 42.7699L81.6948 39.2384L87.9732 36.0993L89.5429 34.5298L97.391 30.606L97.7834 31.7831L99.7454 32.1755L100.138 32.9603L102.1 34.1374L104.454 34.9222L106.809 36.0993L109.556 38.0613L112.302 39.6308L116.619 41.9851L118.973 43.5547L126.429 47.0861L140.163 54.9338L143.302 56.5033L146.442 58.4653L150.366 60.4272L153.112 61.9967L166.062 69.452L175.087 75.3378L177.834 76.515L179.404 77.6921L177.834 79.2617L176.657 80.0464L174.695 81.2236L172.34 82.7931L168.809 84.3627L166.847 85.9322L164.492 87.8941L163.707 89.856V91.818L164.492 93.3875L166.847 94.957L170.378 97.3113L191.996 107.5L190.996 109V112L189.214 119L188.821 120.5L186.859 123.5L184.505 128.31L177.834 142.436L173.518 149.891L171.163 153.03L159.783 165.586L149.188 174.219L143.302 177.75L133.492 182.851L124.859 185.99L118.973 187.56L112.302 189.129L100.53 190.307L89.9353 189.914L79.7327 188.345L73.4543 187.167L61.2897 182.851L54.6188 179.712L47.5555 175.396L42.4543 171.864L36.5682 166.763L34.2138 164.802L30.2897 160.878L25.1884 154.992L18.1251 144.79L13.4163 135.765L10.277 127.525L8.70743 122.816L7.92262 120.07L7.13781 117.323Z" fill="url(#paint0_linear_2558_317)" />
                                            <g filter="url(#filter0_d_2558_317)">
                                                <ellipse cx="99.038" cy="103.987" rx="60.038" ry="60.04" fill="white" />
                                            </g>
                                            <path d="M87 125.17C98.7171 132.25 99.8159 132.151 112.505 125.17" stroke="#023169" strokeWidth="6.942" strokeLinecap="round" />
                                            <path d="M16.5552 101.627L5.56784 106.336L4.78303 105.551L4.39062 101.627V96.1337L4.78303 89.8555V87.1089V84.3622L5.56784 80.4383L6.35265 76.1221L7.92227 69.8439L11.0615 60.0343L13.8083 52.9714L15.7704 49.8323L17.34 46.6932L19.302 43.9465L20.4792 41.5922L22.0489 39.6303L24.4033 36.8836L26.7577 33.7445L28.7197 31.3902L30.2894 29.8207L31.4666 28.2512L32.6438 27.074L36.9602 23.1502L40.4919 20.4035L43.2387 18.0492L46.7704 15.3025L54.6185 10.9862L60.5046 8.23954L64.4286 6.67L67.5678 5.49285L73.0615 3.53092L76.9856 2.74615L81.302 1.569L87.1881 0.78423L93.0742 0.391846L99.7451 0.78423H102.099L108.378 1.569H111.125L116.618 2.35377L124.859 4.70808L129.96 6.67L138.593 10.9862L144.872 13.7329L154.289 20.4035L160.96 27.074L164.492 30.2131L166.846 32.9598L169.201 35.7065L171.948 39.6303L174.302 43.1618L174.694 44.3389L176.656 47.0856L178.226 49.8323L180.188 50.9999L181.758 54.9999V56.5028L182.543 58.0724L188.036 68.4999V71.9999L190 72.5906V75.9999L192.496 88.4999L191.996 92.9999L191 95.3489L191.5 96.9999V100.45V102.412L189.213 103.981L188.036 105.159L186.467 104.766L184.505 103.981L182.935 103.197L180.188 102.412L178.226 101.235L176.656 100.45L174.694 99.6652L171.555 98.488L168.416 96.5261L166.846 95.3489L163.707 91.4251L164.492 88.286L166.846 86.3241L168.416 85.5393L171.163 83.9698L173.125 82.4002L175.087 80.4383L178.226 79.2612L179.796 77.6916L179.011 77.2992L177.049 76.1221L175.087 74.9449L171.555 72.5906L168.416 71.0211L164.492 69.0592L160.96 67.0972L158.606 65.1353L155.074 63.9582L149.581 60.4267L144.872 58.0724L141.732 55.7181L138.593 54.1485L134.669 51.7942L131.137 49.8323L128.783 48.2628L124.859 46.3008L112.302 39.2379L109.948 38.4532L102.099 33.7445L99.7451 32.175L97.3906 30.9978H95.821L92.6818 32.5674L91.1122 33.7445L85.6185 36.8836L82.4792 38.4532L77.378 41.5922L73.0615 43.9465L67.5678 47.478L60.897 51.0095L58.1501 52.9714L54.6185 54.9333L52.264 56.1105L42.0615 61.9962L37.7451 64.3505L35.3906 65.5277L31.4666 67.882L28.7197 69.8439L25.9729 71.4135L21.264 74.1602L17.7324 76.1221L13.4159 78.8688H13.8083L15.7704 79.6535L20.4792 81.6155L28.3273 85.9317L30.2894 88.286V91.0327L29.5046 93.387L25.9729 96.9185L21.264 99.6652L16.5552 101.627Z" fill="url(#paint1_linear_2558_317)" />
                                            <g filter="url(#filter1_d_2558_317)">
                                                <path d="M10 104.16C10.9418 103.532 25.7551 99.3575 29.2867 93.4717C32.8184 87.586 25.7551 84.4469 25.7551 84.4469L13.1981 78.5611L96.388 30.6902L179.97 77.7764C169.15 85.4496 158.869 88.4276 165.451 94.2565C172.033 100.085 189.488 105.5 189.488 105.5" stroke="#3564B1" strokeWidth="3.93314" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <path d="M192.683 95.4473C192.683 146.943 150.939 188.687 99.445 188.687C47.9512 188.687 6.20721 146.943 6.20721 95.4473C6.20721 43.9522 47.9512 2.20721 99.445 2.20721C150.939 2.20721 192.683 43.9522 192.683 95.4473Z" stroke="#2B73AD" strokeWidth="4.41442" />
                                            <ellipse id="left_eye" cx="69.5184" cy="101.91" rx="14.5184" ry={checkEyes2 ? 2.5 : 14.91} fill="#023169" />
                                            <ellipse cx="64.0116" cy="92.101" rx="4.31628" ry="4.31606" fill="white" />
                                            <ellipse id="right_eye" cx="129.159" cy="101.91" rx="14.5184" ry={checkEyes2 ? 2.5 : 14.91} fill="#023169" />
                                            <ellipse cx="123.66" cy="92.101" rx="4.31628" ry="4.31606" fill="white" />
                                            <defs>
                                                <filter id="filter0_d_2558_317" x="31.1337" y="43.9468" width="135.807" height="135.813" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dy="7.86629" />
                                                    <feGaussianBlur stdDeviation="3.93314" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2558_317" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2558_317" result="shape" />
                                                </filter>
                                                <filter id="filter1_d_2558_317" x="0.168867" y="28.7236" width="199.154" height="94.4762" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dy="7.86629" />
                                                    <feGaussianBlur stdDeviation="3.93314" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2558_317" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2558_317" result="shape" />
                                                </filter>
                                                <linearGradient id="paint0_linear_2558_317" x1="173.125" y1="136.55" x2="76.5977" y2="54.5365" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#DAD212" />
                                                    <stop offset="1" stopColor="#157EFB" />
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_2558_317" x1="96.9983" y1="0.391846" x2="97.3906" y2="189.129" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#21B6F7" />
                                                    <stop offset="1" stopColor="#21B6F7" stopOpacity="0" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>

                                    {/* Imagem que renderiza a mão que fica do lado direito e cobre os olhos da Cris quando o cliente fica com focus na senha */}

                                    <img src={right_hand} className={checkHands ? "right_hand" : "right_hand2"} />

                                </div>

                                <h1>Faça seu login</h1>
                            </header>
                            <div className="form_login">
                                <label className="camp_email">
                                    <MdOutlineMailOutline className="icon_email" />
                                    <input className="input_email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email" />
                                </label>
                                <div className="camp_senha">
                                    < RiLockPasswordLine className="icon_senha" />
                                    <input className="input_pass" onFocus={animationFocus} onBlur={animationBlur} type={showpass ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" />


                                    <div className="svg_eye_password" >
                                        <input className="svg_eye_password_input" type="checkbox" onChange={checker} />
                                        <svg className="eye_pass" width="30" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 15.0109C2 15.0109 8.50545 2 19.89 2C31.2745 2 37.78 15.0109 37.78 15.0109" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M2 15.011C2 15.011 8.50545 28.0219 19.89 28.0219C31.2745 28.0219 37.78 15.011 37.78 15.011" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M19.8908 19.89C22.5855 19.89 24.7699 17.7056 24.7699 15.0109C24.7699 12.3163 22.5855 10.1318 19.8908 10.1318C17.1962 10.1318 15.0117 12.3163 15.0117 15.0109C15.0117 17.7056 17.1962 19.89 19.8908 19.89Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                        <svg className="eye_pass_slash" width="30" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2 2L37.78 37.78" stroke="#464646" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M10.4311 10.4487C4.97831 14.1567 2 19.8899 2 19.8899C2 19.8899 8.50545 32.4129 19.89 32.4129C23.558 32.4129 26.7193 31.1131 29.32 29.3509M18.101 7.4711C18.6831 7.40296 19.2796 7.36694 19.89 7.36694C31.2745 7.36694 37.78 19.8899 37.78 19.8899C37.78 19.8899 36.5424 22.2724 34.202 24.9591" stroke="#464646" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M23.4684 23.8905C22.5188 24.7403 21.2651 25.2571 19.8904 25.2571C16.9262 25.2571 14.5234 22.8543 14.5234 19.8901C14.5234 18.4165 15.1173 17.0817 16.0787 16.1119" stroke="#464646" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>

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
