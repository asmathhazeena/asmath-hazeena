import { Beaker, Microscope, Dna, FileText, Award, BookOpen, Users, Activity } from 'lucide-react';
import nihLogo from '../../public/assets/nih_logo.png';
import pcsirLogo from '../../public/assets/pcsir_logo.png';
import venusLogo from '../../public/assets/venus_lanka_logo.png';
import pafLogo from '../../public/assets/paf_iast_logo.png';

export const portfolioData = {
    hero: {
        name: "Asmath",
        title: "Biomedical Sciences Graduate | Clinical & Diagnostic Research",
        summary: "Biomedical Sciences graduate with a strong focus on research-driven problem-solving and laboratory practice. Experienced in molecular biology, diagnostic assay development, biomaterials, and bioinformatics. Proven ability in designing experiments, validating data, and translating scientific concepts into workable solutions.",
        email: "asmath_haz@yahoo.com",
        phone: "(+94) 760354600",
        location: "Batticaloa, Sri Lanka",
        linkedin: "https://www.linkedin.com/in/asmath-hazeena-6479ba308/",
        cvLink: "#",
        image: "../../public/assets/profile.jpg"
    },
    experience: [
        {
            id: 1,
            role: "Intern",
            organization: "National Institute of Health (NIH), Islamabad",
            duration: "Internship",
            logo: nihLogo,
            description: "Processed and handled medical samples in diagnostic laboratory settings.",
            certificate: "../../public/assets/certificates/nih_internship.pdf",
            responsibilities: [
                "Gained practical experience in molecular diagnostics and laboratory workflows.",
                "Provided data entry and patient record management support.",
                "Assisted patients at reception, enhancing communication and customer service skills."
            ]
        },
        {
            id: 2,
            role: "Quality Control Trainee",
            organization: "PCSIR, Peshawar",
            duration: "Trainee",
            logo: pcsirLogo,
            description: "Assisted in analytical testing of industrial, environmental, and food samples.",
            certificate: "../../public/assets/certificates/pcsir_trainee.pdf",
            responsibilities: [
                "Learned techniques for water and air quality testing, mineral analysis, and food safety.",
                "Gained knowledge of standardized testing methods for industrial applications."
            ]
        },
        {
            id: 3,
            role: "MLT Assistant",
            organization: "Venus Lanka Hospital, Sri Lanka",
            duration: "Assistant",
            logo: venusLogo,
            description: "Participated in clinical diagnostic procedures in hematology, microbiology, and biochemistry.",
            certificate: "../../public/assets/certificates/venus_lanka_assistant.pdf",
            responsibilities: [
                "Assisted in sample collection, handling, and laboratory testing.",
                "Gained understanding of laboratory workflows and quality control processes."
            ]
        },
        {
            id: 4,
            role: "Biomedical Research Assistant",
            organization: "PAF-IAST, Pakistan",
            duration: "Academic Role",
            logo: pafLogo,
            description: "Observed and learned the fundamentals of biomedical instrumentation and diagnostic tools.",
            certificate: "../../public/assets/certificates/paf_iast_research.pdf",
            responsibilities: [
                "Gained exposure to laboratory practices and medical technologies during early academic training."
            ]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Diagnostic Kit Development for Liver Function Biomakers",
            description: "Developed a prototype diagnostic kit for liver function testing (AST/ALT). Optimized reagents and reaction conditions for reliable results and compared with commercial kits.",
            technologies: ["Biochemical Assays", "Reagent Optimization", "Data Analysis"],
            category: "Research"
        },
        {
            id: 2,
            title: "Antimicrobial Bandage Development",
            description: "Developed antimicrobial bandages for diabetic ulcers using chitosan and silver nanoparticles. Combined lab experiments with computational analysis of bacterial protein interactions.",
            technologies: ["Nanotechnology", "Microbiology", "Computational Analysis"],
            category: "Research"
        },
        {
            id: 3,
            title: "Water Purification System",
            description: "Developed a low-cost, eco-friendly filtration system to recycle wastewater into safe, clean water. Focused on contaminant removal and microbial elimination.",
            technologies: ["Environmental Science", "Product Development", "Sustainability"],
            category: "Innovation"
        },
        {
            id: 4,
            title: "Website Development",
            description: "Designed and developed a functional website demonstrating proficiency in HTML and CSS, focusing on responsive layout and usability.",
            technologies: ["HTML", "CSS", "UI/UX Design"],
            category: "Tech"
        }
    ],
    skills: {
        laboratory: [
            { name: "Diagnostic Assay Development", level: 90 },
            { name: "Molecular Biology", level: 85 },
            { name: "Hematology & Microbiology", level: 85 },
            { name: "Biomaterials & Nanotech", level: 80 },
            { name: "Quality Control (QC)", level: 85 }
        ],
        data: [
            { name: "SPSS / GraphPad Prism", level: 90 },
            { name: "PyMol / ChimeraX / Rasmol", level: 85 },
            { name: "AutoDock Tools / Discovery Studio", level: 80 },
            { name: "Microsoft Office", level: 95 }
        ],
        soft: [
            "Analytical Thinking",
            "Technical Precision",
            "Troubleshooting",
            "Leadership",
            "Scientific Writing",
            "Team Coordination"
        ]
    },
    awards: [
        {
            id: 1,
            title: "Dean's List of Honour",
            issuer: "PAF-IAST",
            year: "2023",
            certificate: "../../public/assets/certificates/deans_list_2023.pdf"
        },
        {
            id: 11,
            title: "Dean's List of Honour",
            issuer: "PAF-IAST",
            year: "2024",
            certificate: "../../public/assets/certificates/deans_list_2024.pdf"
        },
        {
            id: 12,
            title: "Dean's List of Honour",
            issuer: "PAF-IAST",
            year: "2025",
            certificate: "../../public/assets/certificates/deans_list_2025.pdf"
        },
        {
            id: 2,
            title: "Inter-Varsity Business Idea Competition",
            issuer: "PAF-IAST",
            year: "Certificate of Appreciation",
            certificate: "../../public/assets/certificates/business_idea_competition.pdf"
        }
    ],
    certificates: [
        {
            id: 1,
            name: "Docking, Homology Modeling & Active Site Prediction",
            platform: "DISCOVERY BOULEVARD",
            year: "2025",
            certificate: "../../public/assets/certificates/docking_homology.pdf"
        },
        {
            id: 2,
            name: "Basic Laboratory Course",
            platform: "PAF-IAST",
            year: "2022",
            certificate: "../../public/assets/certificates/basic_lab_course.pdf"
        },
        {
            id: 3,
            name: "Python for Beginners",
            platform: "SimpliLearn",
            year: "2022",
            certificate: "../../public/assets/certificates/python_beginners.pdf"
        },
        {
            id: 4,
            name: "Bio risk Management Workshop",
            platform: "PAF-IAST",
            year: "Workshop",
            certificate: "../../public/assets/certificates/biorisk_workshop.pdf"
        },
        {
            id: 5,
            name: "Integrative Life Sciences Conference",
            platform: "NUST",
            year: "Participation",
            certificate: "../../public/assets/certificates/nust_conference.pdf"
        }
    ],
    education: [
        {
            id: 1,
            degree: "BS Biomedical Sciences",
            institution: "Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology",
            duration: "Haripur, Pakistan",
            details: "Extensive hands-on laboratory and research experience. Final Year Project: 'Indigenous Manufacturing of Prototype Diagnostic Kits for Liver Function Biomarkers'."
        },
        {
            id: 2,
            degree: "GCE A/Levels",
            institution: "BT/Vincent Girls’ High School",
            duration: "Batticaloa, Sri Lanka",
            details: "Specialized in Physics, Chemistry, and Biology. Grades: Biology (A), Chemistry (B), Physics (C)."
        }
    ],
    leadership: [
        {
            id: 1,
            role: "Event Management Head",
            organization: "PAF-IAST DigiSkillsDev",
            description: "Led event management activities for the 2024-2025 term."
        },
        {
            id: 2,
            role: "Active Member",
            organization: "UEMS (Event Management Society)",
            description: "Active member contributing to university events from 2022 to 2025."
        },
        {
            id: 3,
            role: "Voluntary Blood Donation",
            organization: "Blood Donation Camp 2025",
            description: "Certificate of Appreciation for voluntary contribution.",
            certificate: "/assets/certificates/blood_donation.pdf"
        }
    ]
};
