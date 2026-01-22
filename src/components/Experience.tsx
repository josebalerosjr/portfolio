const experiences = [
    {
        company: "MIMS Pte. Ltd.",
        role: "Software Engineer",
        period: "2022 – Present",
        achievements: [
            "Delivered 50+ production releases with zero downtime",
            "Improved responsiveness by 40% with Redis + Cloudflare",
            "Maintained 99.99% uptime post-release",
            "Implemented SEO strategies and Google Tag Manager (GTM)"
        ],
        link: "https://education.mims.com"
    },
    {
        company: "PTT Philippines Corp.",
        role: "MIS Developer",
        period: "2019 – 2022",
        achievements: [
            "Automated accounting workflows via SAP API integration (60% effort reduction)",
            "Built Power Apps mobile app for safety monitoring",
            "Managed SQL Server and IIS deployments"
        ]
    },
    {
        company: "Subic Water",
        role: "IT Specialist",
        period: "2017 – 2019",
        achievements: [
            "Led automation initiatives reducing manual effort",
            "Developed internal .NET applications (Accountability Monitoring, Document Management, Ticketing System)"
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience">
            <h2>Work Experience</h2>
            <div>
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <div className="experience-header">
                            <h3>{exp.role} – {exp.company}</h3>
                            <span className="experience-date">{exp.period}</span>
                        </div>
                        <ul>
                            {exp.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                            ))}
                        </ul>
                        {exp.link && (
                            <p style={{ marginTop: '0.5rem' }}>
                                <a href={exp.link} target="_blank" rel="noopener noreferrer">{exp.link}</a>
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
