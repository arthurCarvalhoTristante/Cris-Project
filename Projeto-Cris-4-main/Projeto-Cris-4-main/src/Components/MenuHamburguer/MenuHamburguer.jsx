import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import "./MenuHamburguer.css"

// Estilização do Botão de DarkMode pois estamos usando uma biblioteca
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&::before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));

function MenuHamburguer({ active, changeMode, darkMode, handleTalk }) {

    // Funções onde são enviadas as perguntas e respostas das "Perguntas Frequentes"

    function q1() {
        const data = {
            pergunta: "O que é a crefisa?",
            resposta: "A Crefisa é uma instituição financeira que oferece serviços como empréstimo pessoal, empréstimo consignado, antecipação do benefício do INSS e cartão pré-pago. Ela é conhecida por oferecer soluções financeiras de forma rápida e fácil para seus clientes. Para mais informações, você pode acessar o site da Crefisa: https://www.crefisa.com.br/"
        }

        handleTalk(data)
    }

    function q2() {
        const data = {
            pergunta: "Quem é o Byron?",
            resposta: "O Byron é o mascote da Crefisa, uma instituição financeira brasileira. Ele é um cachorro e representa a marca em diversas campanhas publicitárias e eventos. O Byron é muito conhecido no Brasil por sua presença marcante nas propagandas da Crefisa, ajudando a promover os serviços da empresa."
        }

        handleTalk(data)
    }

    function q3() {
        const data = {
            pergunta: "Quais são as funcionalidades da Cris?",
            resposta: "Como assistente virtual focada em ajudar os clientes, tenho várias funcionalidades para atender às necessidades dos usuários. Aqui estão algumas delas: Responder a perguntas comuns, Atendimento ao cliente em tempo real"
        }

        handleTalk(data)
    }

    function q4() {
        const data = {
            pergunta: "O que é o CRIA?",
            resposta: "O CRIA é um Hub de inovação, fruto de uma parceria entre FAM e Crefisa."
        }

        handleTalk(data)
    }

    return (
        <>
            {/* Menu Hamburguer */}
            <div className={active ? "icon iconActive" : "icon"} onClick={changeMode}>
                <div className="hamburguer hamburguerIcon"></div>
            </div>
            <div className={active ? "menu menuOpen" : "menu menuClose"}>
                <div className={"darkmodeButton"}>
                    <FormGroup sx={{ ml: 1 / 2 }}>
                        <FormControlLabel
                            value="end"
                            control={<MaterialUISwitch onChange={darkMode} sx={{ m: 2, ml: 38 }} />}
                            labelPlacement="end"
                        />
                    </FormGroup>
                </div>
                {/* Perguntas frequentes e Lista das Perguntas Frequentes */}
                <div className="perguntasFrequentes">
                    <h3 id="textoPrimário">Perguntas frequentes</h3>

                    <div id="listaDasPerguntas">
                        <ul>
                            <button onClick={q1}><h3>O que é a Crefisa?</h3></button>
                            <button onClick={q2}><h3>Quem é o Byron?</h3></button>
                            <button onClick={q3}><h3>Quais são as funcionalidades da Cris?</h3></button>
                            <button onClick={q4}><h3>O que é o CRIA?</h3></button>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MenuHamburguer;