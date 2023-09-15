import { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.scss';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.logo}>HELLO</div>
                <div className={styles.menuIcon} onClick={handleMenuOpen}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <div className={styles.navElementsDesktop}>
                    <ul>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.url} className={styles.navLink}>
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`${styles.navElementsMobile} ${menuOpen && styles.active}`}>
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link href={link.url} className={styles.navLink}>
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;