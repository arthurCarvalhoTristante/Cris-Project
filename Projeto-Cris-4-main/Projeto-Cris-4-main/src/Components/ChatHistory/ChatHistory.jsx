import ChatSave from "/src/Components/ChatSave/ChatSave.jsx";
import logoCris from "/src/assets/LogoCris.svg";
import logoCrisDark from "/src/assets/LogoCrisDarkMode.svg";
import "./ChatHistory.css";

function ChatHistory({ list, checkbox, active }) {

    const message = document.getElementById('message');

    function scroll() {
        const scrollInterval = setInterval(() => {
            message.scrollBy({
                top: 10000,
                left: 100,
                behavior: 'smooth'
            })
        }, 600)

        setTimeout(() => {
            clearInterval(scrollInterval)
        },  600);
    }
    
    
    return (
        // Componente auxiliador que utiliza o ChatSave para renderizar as mensagens na tela
    
        <section className={active ? "historyNormal" : "historyFull"}>
            <div id="message">

                <section className="sectionCris">
                    <div>
                        <img src={checkbox ? logoCris : logoCrisDark} alt="Logo da Cris" width="45px" height="45px" />
                    </div>
                <p id="cris">Eu sou a Cris, uma assistente virtual da Crefisa. Estou aqui para ajudar você com informações e procedimentos relacionados aos serviços da Crefisa. Como posso ajudar você hoje?</p>
                </section>

                {
                list.map((talk, index) => (
                    <>
                    <ChatSave key={index} logo={checkbox} question={talk.pergunta} answer={talk.resposta}/>
                    {scroll()}
                    </>
                    ))
                }
            </div>  
         </section>
            
    )
}

export default ChatHistory;