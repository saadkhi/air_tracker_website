import { motion } from 'framer-motion';
import { Download as DownloadIcon, Monitor, CheckCircle } from 'lucide-react';

const Download = () => {
    return (
        <section id="download" className="section">
            <div className="container">
                <div className="glass-card" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    alignItems: 'center',
                    padding: '4rem'
                }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to <span className="gradient-text">Upgrade?</span></h2>
                        <p style={{ color: 'var(--text-dim)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                            AIR-TRACKER is currently available as a standalone desktop application for Windows.
                            Experience the liberation of touch-free presenting today.
                        </p>

                        <ul style={{ listStyle: 'none', marginBottom: '2.5rem' }}>
                            {[
                                "Optimized for MS PowerPoint",
                                "Requires Windows 10/11",
                                "Works with any standard webcam",
                                "Lightweight & Portable"
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--text-dim)' }}>
                                    <CheckCircle size={18} className="text-primary" /> {item}
                                </li>
                            ))}
                        </ul>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a href="https://github.com/saadkhi/AIR-TRACKER" target="_blank" rel="noopener noreferrer" className="btn-primary">
                                <DownloadIcon size={20} /> Download for Windows
                            </a>
                        </div>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <div style={{
                            background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                            padding: '2px',
                            borderRadius: '20px'
                        }}>
                            <div style={{
                                background: 'var(--bg-dark)',
                                borderRadius: '18px',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}>
                                <Monitor size={80} className="text-primary" style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
                                <h4 style={{ marginBottom: '0.5rem' }}>Current Version: v1.0.0</h4>
                                <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                                    Stable Release | Built with Python
                                </p>
                            </div>
                        </div>

                        {/* Decoration */}
                        <div style={{
                            position: 'absolute',
                            bottom: '-20px',
                            right: '-20px',
                            width: '100px',
                            height: '100px',
                            background: 'var(--secondary)',
                            filter: 'blur(60px)',
                            opacity: 0.3,
                            zIndex: -1
                        }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Download;
