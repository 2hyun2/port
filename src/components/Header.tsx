import Link from "next/link"

export default function Header() {
    return (
        <header>
            <nav className="header-nav">
                <Link href="/" className="header-home">HOME</Link>
                <div className="header-links">
                    <Link href="/#projects">PROJECTS</Link>
                    <Link href="/#publishing">WORK</Link>
                    <Link href="/#contact">CONTACT</Link>
                </div>
            </nav>
        </header>
    )
}
