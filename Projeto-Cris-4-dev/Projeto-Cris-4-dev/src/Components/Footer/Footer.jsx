import initChat from "../../Server/Chat/initChat.js";
import reqChat from "../../Server/Chat/reqChat.js";
import "./Footer.css";

const conversation = await initChat();

console.log(`THREAD: ${conversation}`)

let answer;
let question;

function Footer({ active, onSaveTalk }) {

    // função que salva os dados e envia para renderizar na tela
    function saveData(pergunta, resposta) {
        const data = {
            pergunta, resposta
        }

        onSaveTalk(data)
    }

    // API que envia as mensagens para a OPENAI e responde o cliente
    async function sendMessage() {

        var message = document.getElementById('message-input')

        console.log(message)

        if (!message.value) {
            message.style.border = '3px solid red'
            message.placeholder = 'Escreva algo antes de enviar...'
            window.alert('Escreva algo antes de enviar...')
            return;
        } else {
            message.style.border = 'none'
            message.placeholder = 'Pergunte aqui...'

            var status = document.getElementById('status')
            var btnSubmit = document.getElementById('btn-submit')

            status.style.display = 'block'
            status.innerHTML = 'Carregando...'
            btnSubmit.disabled = true
            btnSubmit.style.cursor = 'not-allowed'
            message.disabled = true

            answer = await reqChat(conversation, message.value);

            question = message.value;

            saveData(question, answer);
        }

        if (answer) {
            btnSubmit.disabled = false;
            btnSubmit.style.cursor = 'pointer';
            message.disabled = false;
            message.value = '';
            status.style.display = 'none';
            message.focus()
        }
    }

    const getEnterKey = (e) => {
        if (e.key === 'Enter') {
            sendMessage()
        }
    }

    return (
        // Componentes do Footer
        <footer className={active ? "footerNormal" : "footerFull"}>
            <input autoFocus id="message-input" onKeyDown={getEnterKey} type="text " placeholder="Faça uma pergunta..." />
            <button id="btn-submit" onClick={sendMessage}>
                <img src="../src/assets/Vector2.png" alt="Imagem Botão de Enviar Mensagem" />
            </button>
        </footer>
    )
}

export default Footer;