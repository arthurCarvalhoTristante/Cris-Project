import "./ChatSave.css";

function ChatSave({ question, answer, logo }) {


    return (
        // Componente chamado ChatSave, ele é chamado quando precisa renderizar uma mensagem na tela, os parametros passados para ele é um objeto que contém 2 chaves, a primeira sendo a pergunta e a segunda sendo a resposta
        <>
            <section className="sectionUser">
                <p id="user">{question}</p>
            </section>

            <section className="sectionCris">
                <div>
                    <img src={logo ? "../src/assets/LogoCris.svg" : "../src/assets/LogoCrisDarkMode.svg"} alt="Logo da Cris" width="45px" height="45px" />
                </div>
                <p id="cris">{answer}</p>
            </section>

        </>
    )
}

export default ChatSave;