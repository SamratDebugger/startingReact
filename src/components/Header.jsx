import { Menu } from "lucide-react";
import { Aside } from "./Aside";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRed, setIsRed] = useState(false);

  if (isRed) {
    document.body.classList.add("bgRed");
  } else {
    document.body.classList.remove("bgRed");
  }
  return (
    <header className="nav">
      <Aside isOpen={isOpen} setIsOpen={setIsOpen} />

      <button onClick={() => setIsOpen(true)} id="menuBtn">
        <Menu />{" "}
      </button>
      <button
        onClick={() => setIsRed((prev) => !prev)}
        id="button"
        className="btn"
      >
        click here
      </button>
    </header>
  );
}

export default Header;
