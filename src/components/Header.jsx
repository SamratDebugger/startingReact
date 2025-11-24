import { Menu } from "lucide-react"
import { Aside } from "./Aside"
import { useState } from "react"


function Header() {

    const [isOpen, setIsOpen] = useState(false)
    console.log(isOpen);

    return (
        <header className="nav">
            <Aside isOpen={isOpen} setIsOpen={setIsOpen} />

            <button onClick={() => setIsOpen(true)} id="menuBtn"><Menu /> </button>
            <button id="button" className="btn">click here</button>
        </header>
    )
}

export default Header
