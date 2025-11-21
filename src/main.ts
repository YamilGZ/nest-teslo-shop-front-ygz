import { connectToServer } from './socket-client'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h2>Websocket - Cliente</h2>

    <input id="jwt-token" placeholder="Json Web Token">
    <button id="btn-connect">Connect</button>

    <br>
    <br>
    <span id="server-status">offline</span>

    <ul id="clients-ul"></ul>

    <form id="message-form"> 
      <input type="text" id="message-input" placeholder="Message">
    </form>

    <h3>Messages</h3>
    <ul id="messages-ul"></ul>

  </div>
`

//connectToServer();

const btnConnect = document.querySelector<HTMLButtonElement>('#btn-connect');
const jwtToken = document.querySelector<HTMLInputElement>('#jwt-token');

btnConnect!.addEventListener('click', () => {

  if (jwtToken!.value.trim().length <= 0) return alert('JWT Token is required');

  connectToServer(jwtToken!.value.trim());
});