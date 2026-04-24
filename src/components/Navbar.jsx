import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: isScrolled ? '1rem 0' : '1.5rem 0',
            background: isScrolled ? 'rgba(5, 5, 16, 0.8)' : 'transparent',
            backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none',
            transition: 'var(--transition-fast)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <a href="#home" style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '1px'
                }}>
                    AIR<span style={{ color: 'var(--primary)' }}>TRACKER</span>
                </a>

                <div style={{
                    display: 'flex',
                    gap: '2.5rem',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#download">Download</a>
                    <a href="#contributor">Contributor</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
