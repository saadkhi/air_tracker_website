import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="section">
            <div className="container" style={{ position: 'relative' }}>
                {/* Abstract Background Glow */}
                <div style={{
                    position: 'absolute',
                    top: '-20%',
                    right: '-10%',
                    width: '400px',
                    height: '400px',
                    background: 'var(--primary)',
                    filter: 'blur(150px)',
                    opacity: 0.2,
                    zIndex: -1
                }}></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px' }}
                >
                    <span style={{
                        color: 'var(--primary)',
                        fontWeight: 800,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        letterSpacing: '4px',
                        marginBottom: '1rem',
                        display: 'block'
                    }}>
                        Touch-Free Innovation
                    </span>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        fontFamily: 'var(--font-display)'
                    }}>
                        Present Like the <br />
                        <span className="gradient-text">Future Has Arrived</span>
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-dim)',
                        marginBottom: '2.5rem',
                        maxWidth: '600px'
                    }}>
                        AIR-TRACKER leverages advanced computer vision to turn your hand gestures
                        into a powerful remote control for your PowerPoint presentations.
                        No hardware needed beyond your webcam.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#download" className="btn-primary">
                            Get Started Free
                        </a>
                        <a href="#about" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            fontWeight: 600,
                            gap: '0.5rem',
                            borderBottom: '1px solid transparent'
                        }} onMouseEnter={(e) => e.target.style.borderColor = 'var(--primary)'}
                            onMouseLeave={(e) => e.target.style.borderColor = 'transparent'}>
                            Learn more
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
