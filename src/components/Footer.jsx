const Footer = () => {
    return (
        <footer style={{
            padding: '4rem 0',
            borderTop: '1px solid var(--glass-border)',
            background: 'var(--bg-dark)',
            textAlign: 'center'
        }}>
            <div className="container">
                <div style={{
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    marginBottom: '1rem',
                    fontFamily: 'var(--font-display)'
                }}>
                    AIR<span style={{ color: 'var(--primary)' }}>TRACKER</span>
                </div>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                    Bridging the gap between intent and action through computer vision.
                </p>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>
                    &copy; {new Date().getFullYear()} AIR-TRACKER. Created by Saad Ali. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
