import { Menu } from "lucide-react"


function App() {


  return (
    <header class="nav">
      <aside class="menu" id="sideBar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Service</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
        <button id="close">close</button>
      </aside>

      <button id="menuBtn"><Menu /> </button>
      <button id="button" class="btn">click here</button>
    </header>
  )
}

export default App
