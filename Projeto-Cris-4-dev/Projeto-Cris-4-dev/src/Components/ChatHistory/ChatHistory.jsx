import ChatSave from "/src/Components/ChatSave/ChatSave.jsx";
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