import style from '../css/NavBar.module.css'
const NavBar = () => {
    return (
        <nav className={style.navBar}>
            <ul className={style.navList}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;