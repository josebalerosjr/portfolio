const skillCategories = [
    {
        title: "Backend & Frameworks",
        skills: ["C#", ".NET 8", "ASP.NET Core", "Blazor", "Entity Framework Core"]
    },
    {
        title: "Cloud & DevOps",
        skills: ["Azure", "Docker", "Kubernetes", "GitHub Actions", "CI/CD"]
    },
    {
        title: "Frontend",
        skills: ["React", "TypeScript", "HTML5", "CSS3", "Bootstrap"]
    },
    {
        title: "Database",
        skills: ["SQL Server", "Stored Procedures", "Optimization"]
    }
];

export default function Skills() {
    return (
        <section id="skills">
            <h2>Core Competence</h2>
            <div className="skills-grid">
                {skillCategories.map((category) => (
                    <div key={category.title} className="skills-category">
                        <h3>{category.title}</h3>
                        <div>
                            {category.skills.map((skill) => (
                                <span key={skill} className="tag">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
