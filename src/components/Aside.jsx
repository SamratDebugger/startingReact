

export const Aside = ({ isOpen, setIsOpen }) => {
    return (
        <aside className={`menu ${isOpen ? 'left-0' : 'left-100'}`} id="sideBar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Service</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
            <button onClick={() => setIsOpen(false)} id="close">close</button>
        </aside>
    )
}
