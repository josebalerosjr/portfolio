export default function Hero() {
    return (
        <header>
            <h1>Jose Baleros Jr</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                .NET Software Engineer | API Integration Specialist
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
                Building scalable cloud-native solutions with measurable impact.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="mailto:josebalerosjr@outlook.com">josebalerosjr@outlook.com</a>
                <a href="https://linkedin.com/in/josebalerosjr" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/josebalerosjr-medu" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="./cv.pdf" download="Jose-Baleros-Jr-NET-Software-Engineer.pdf" style={{ fontWeight: 'bold' }}>Download CV (PDF)</a>
            </div>
        </header>
    );
}
