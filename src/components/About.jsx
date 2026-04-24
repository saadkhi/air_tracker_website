import { motion } from 'framer-motion';
import { MousePointer2, ZoomIn, XCircle, PenTool, Layout } from 'lucide-react';

const features = [
    {
        icon: <Layout className="text-secondary" />,
        title: "Presentation Control",
        desc: "Seamlessly navigate slides with Thumb Up (Previous) and Pinky Up (Next) gestures."
    },
    {
        icon: <ZoomIn className="text-secondary" />,
        title: "Dynamic Zoom",
        desc: "Zoom in with three fingers or zoom out with four fingers to focus on critical details."
    },
    {
        icon: <PenTool className="text-secondary" />,
        title: "Virtual Canvas",
        desc: "Toggle a drawing layer with Index and Pinky fingers to annotate your slides in real-time."
    },
    {
        icon: <MousePointer2 className="text-secondary" />,
        title: "Hand Tracking",
        desc: "Powered by MediaPipe for high-precision, low-latency gesture recognition."
    },
    {
        icon: <XCircle className="text-secondary" />,
        title: "Quick Exit",
        desc: "Close the application instantly by raising both your Thumb and Pinky fingers."
    }
];

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Magic at Your <span className="gradient-text">Fingertips</span></h2>
                    <p style={{ color: 'var(--text-dim)', maxWidth: '600px', margin: '0 auto' }}>
                        AIR-TRACKER transforms your workspace into a virtual command center using state-of-the-art computer vision.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card"
                            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                background: 'rgba(88, 101, 242, 0.1)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {f.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem' }}>{f.title}</h3>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem' }}>{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
