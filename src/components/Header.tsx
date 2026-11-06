"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <nav className="header-nav">
                <Link href="/" className="header-home">HOME</Link>
                <button className="header-menu-button" type="button" onClick={() => setIsMenuOpen((open) => !open)}>
                    <span className="material-symbols-outlined">{isMenuOpen ? "close" : "menu"}</span>
                </button>
                <div className={`header-links${isMenuOpen ? " is-open" : ""}`}>
                    <Link href="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
                    <Link href="/#projects" onClick={() => setIsMenuOpen(false)}>PROJECTS</Link>
                    <Link href="/#publishing" onClick={() => setIsMenuOpen(false)}>WORK</Link>
                    <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
                </div>
            </nav>
        </header>
    )
}
