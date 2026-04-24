import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Contributor = () => {
    return (
        <section id="contributor" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>The <span className="gradient-text">Architect</span></h2>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="glass-card" style={{
                        maxWidth: '500px',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
                            margin: '0 auto 1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '3rem',
                            fontWeight: 900,
                            color: 'white'
                        }}>
                            S
                        </div>

                        <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Saad Ali</h3>
                        <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '1rem' }}>
                            Software Engineer & Data Analyst
                        </p>
                        <p style={{ color: 'var(--text-dim)', marginBottom: '2rem' }}>
                            Specializing in Python, AI/ML, and Computer Vision.
                            Saad is passionate about building tools that bridge the gap between human intent and digital execution.
                        </p>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                            <a href="https://github.com/saadkhi" target="_blank" rel="noopener noreferrer" style={{ opacity: 0.7 }}>
                                <Github size={24} />
                            </a>
                            <a href="#" style={{ opacity: 0.7 }}>
                                <Linkedin size={24} />
                            </a>
                            <a href="#" style={{ opacity: 0.7 }}>
                                <Mail size={24} />
                            </a>
                        </div>

                        {/* Inner Glow */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-50px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '200px',
                            height: '100px',
                            background: 'var(--primary)',
                            filter: 'blur(80px)',
                            opacity: 0.1,
                            zIndex: -1
                        }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contributor;
