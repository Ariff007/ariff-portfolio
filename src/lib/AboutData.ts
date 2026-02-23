export const aboutData = {
    bio: [
        "I'm a data scientist and occasional developer with a deep passion for turning raw, complex data into intelligent systems that solve real-world problems. My work spans the full spectrum - from wrangling messy datasets and training machine learning models, to architecting scalable web applications and deploying production-grade AI pipelines.",
        "With a strong foundation in computational intelligence from IIUM, I've built hands-on experience across machine learning, natural language processing, computer vision, and cybersecurity analytics. I believe the most impactful engineers are those who can bridge the gap between cutting-edge research and practical engineering - and that's the space I thrive in.",
        "Outside of code, I'm drawn to the intersection of AI and security - understanding how intelligent systems can be both weapons and shields. I'm always exploring, always building, and always looking for the next hard problem worth solving.",
    ],

    education: [
        {
            institution: "International Islamic University Malaysia (IIUM)",
            degree: "Bachelor of Computer Science (Data Science & Computational Intelligence)",
            year: "2020 – 2024",
            description:
                "Focused on data science, machine learning, neural networks, and intelligent systems. Graduated with a strong academic record, conducting final-year research on deep learning for predictive analytics.",
        },
        {
            institution: "Kansai University",
            degree: "Exchange Student - Fall Semester",
            year: "2023 – 2024",
            description:
                "One semester of study at Kansai University in Japan. Studied Japanese Language and Culture, History, Economics along with Business Studies.",
        },
        {
            institution: "Center for Foundation Studies IIUM",
            degree: "Foundation in Engineering & Computer Science",
            year: "2019 – 2020",
            description:
                "Completed a rigorous one-year pre-university programme with emphasis on mathematics, physics, and chemistry, paving the way for a CS degree.",
        },
    ],

    experience: [
        {
            company: "PETRONAS",
            role: "Data Analyst",
            duration: "May 2025 – Present",
            achievements: [
                "Collected, analyzed, and interpreted HR data to provide actionable insights for workforce planning and decision-making.",
                "Developed and maintained HR KPI dashboards and reports to monitor key metrics such as turnover, recruitment efficiency, and employee engagement.",
                "Supported data-driven initiatives by identifying trends and patterns in employee performance, retention, and compensation.",
                "Collaborated with HR teams to optimize processes through predictive analytics and data modeling.",
                "Ensured data accuracy and compliance with organizational and regulatory standards in HR systems.",
                "Provided analytical support for talent acquisition, learning and development, and succession planning strategies.",
            ],
        },
        {
            company: "TotalEnergies",
            role: "Data Management & Analytics Intern",
            duration: "Dec 2024 – Feb 2025",
            achievements: [
                "Facilitated requirement-gathering sessions with stakeholders to define key metrics and data sources for the Safety Critical Element (SCE) Dashboard.",
                "Engineered an advanced Power BI dashboard, including the SCE Dashboard, ensuring seamless operation and delivering real-time Work Order (WO) monitoring for the entire department.",
                "Partnered with pillar leads on daily data management initiatives, enhancing lifecycle processes to improve data integrity and streamline workflows.",
                "Analyzed user behavior, identified inefficiencies, and implemented optimizations, reducing redundant steps and enhancing user experience.",
                "Validated dashboard insights with engineers and HSSE teams, refining data accuracy and ensuring alignment with safety compliance standards.",
            ],
        },
        {
            company: "SapuraOMV Upstream (Sarawak) Inc.",
            role: "Data Management & Analytics Intern",
            duration: "Aug 2024 – Dec 2024",
            achievements: [
                "Led the end-to-end development of the HSSE Emergency Response App, from gathering user requirements and designing the system to developing and deploying it on internal servers, ensuring a fast and reliable emergency response platform for the company.",
                "Collaborated with cross-functional teams and partners to define requirements, prioritize tasks, and document processes using CMMS, ensuring alignment with organizational goals.",
                "Conducted competitive analysis to extract insights, informing business decisions and optimizing process implementations.",
                "Maintained internal systems by assisting with five or more intranet updates, uploading banners, and managing various data-related tasks across departments.",
                "Resolved 50+ technical support cases, troubleshooting hardware and software issues, minimizing downtime and ensuring smooth daily operations.",
            ],
        },
    ],

    skills: {
        "Programming": ["C", "C++", "Python", "JavaScript", "TypeScript", "SQL", "Bash", "R"],
        "ML / AI": ["TensorFlow", "Keras", "Scikit-learn", "PyTorch", "OpenCV"],
        "Data Tools": ["Pandas", "NumPy", "Spark", "Power BI", "Tableau", "dbt"],
        "Web / Cloud": ["Azure", "AWS", "Next.js", "React", "FastAPI", "Docker", "GitHub Actions"],
        "Cybersecurity": ["Wireshark", "Nmap", "SIEM", "Anomaly Detection", "Threat Modelling"],
    },
} as const;

export type AboutData = typeof aboutData;
