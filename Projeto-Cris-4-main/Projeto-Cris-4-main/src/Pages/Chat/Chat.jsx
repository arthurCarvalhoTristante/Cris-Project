import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import ChatHistory from "../../Components/ChatHistory/ChatHistory.jsx";
import MenuHamburger from "../../Components/MenuHamburguer/MenuHamburguer.jsx";
import Logout from '../../Components/FormLogout/logout.jsx';
import { useState } from "react";
import "./chat.css";



function Chat({ setAuthenticated, escondeClick, mostraClick, mostraForm }) {


  // Função onde eu pego o HTML padrão do site e Atribuo uma class chamada "darkmode" para mudar as cores no CSS

  const $html = document.querySelector('html')
  const [logo, setLogo] = useState(true)

  function darkMode() {
    $html.classList.toggle('darkmode')
    setLogo(!logo)

  }

  // Váriavel e função onde eu crio e salvo uma nova lista cada vez que o usuário faz uma pergunta
  const [list, setList] = useState([])

  function handleTalk(talk) {
    let newList = [...list]

    newList.push(talk)
    setList(newList)
    console.log(list)
  }


  // Váriavel onde eu crio um useState para mudar o estado do Menu Hamburger
  const [active, setMode] = useState(true)
  const changeMode = () => {
    setMode(!active)
  }


  return (
    <>
      {/* Chamada do Header */}
      <Header checkbox={logo} mostraClick={mostraClick} />

      {/* Chamada do Menu Hamburger */}
      <MenuHamburger active={active} changeMode={changeMode} darkMode={darkMode} handleTalk={handleTalk} />

      {/* Chamada do histórico de perguntas e respostas */}
      <ChatHistory list={list} checkbox={logo} active={active} />

      {/* Chamada do Logout */}
      {mostraForm ? <Logout setAuthenticated={setAuthenticated} escondeClick={escondeClick} /> : console.log('') }

      {/* Chamada do Footer */}
      <Footer active={active} onSaveTalk={handleTalk}/>

    </>
  )
}

export default Chat;

