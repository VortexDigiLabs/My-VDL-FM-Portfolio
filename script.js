// Data for Profiles
const profiles = {
    fm: {
        role: "Facilities Management Expert",
        summary: `A highly accomplished and results-driven Facilities Management professional with over 20 years of experience leading operations, maintenance, and capital projects for large-scale corporate and retail properties. Certified by the University of the Witwatersrand, with a proven track record of achieving 100% OHS compliance scores and managing multi-million Rand projects. An expert in preventative maintenance, budget control, and contractor management, recognized for calm crisis leadership and ensuring operational excellence.`,
        experience: [
            {
                title: "Facilities Manager",
                company: "The Capital Hotels & Apartments",
                date: "Aug 2023 – Nov 2024",
                desc: "Directed all facilities operations for extensive hotel properties, including 124 rooms and 11 meeting rooms. Led maintenance and security teams, executing robust preventative maintenance schedules. Ensured full compliance with health, safety, and fire regulations."
            },
            {
                title: "Senior Facilities Manager",
                company: "Blend Properties",
                date: "Mar 2022 – Aug 2022",
                desc: "Oversaw the complete facilities portfolio for an 83,000 m² corporate campus. Managed 10 generator sets, ensuring uninterrupted power supply during national load-shedding. Conducted rigorous site inspections to proactively manage risk and maintenance."
            },
            {
                title: "Facilities Manager",
                company: "Redefine Properties",
                date: "Apr 2013 – Jul 2019",
                desc: "Managed all operational aspects of Benmore Gardens Shopping Centre (24,000 m², 72 tenants). Achieved perfect 100% scores in multiple company-wide OHS Act compliance audits. Spearheaded major capital projects, including a R3.9m generator installation."
            }
        ],
        skills: [
            { name: "Facilities Management", icon: "fa-building" },
            { name: "OHS Compliance", icon: "fa-hard-hat" },
            { name: "Capital Projects", icon: "fa-project-diagram" },
            { name: "Budget Management", icon: "fa-coins" },
            { name: "Vendor Management", icon: "fa-handshake" },
            { name: "Technical Systems", icon: "fa-cogs" }
        ],
        projects: [
            {
                title: "Generator Installation",
                tags: ["Capital Project", "R3.9m", "Power Resilience"],
                desc: "Led the installation of a high-capacity generator system to ensure business continuity for a major shopping centre.",
                image: "assets/images/fm-project-1.jpg"
            },
            {
                title: "Smart Metering Implementation",
                tags: ["Efficiency", "R1.2m", "Sustainability"],
                desc: "Implemented a smart metering system to monitor and optimize utility consumption across the portfolio.",
                image: "assets/images/fm-project-2.jpg"
            },
            {
                title: "Parking System Upgrade",
                tags: ["Technology", "R2.4m", "Operations"],
                desc: "Managed the upgrade to a Skidata parking system, improving traffic flow and revenue management.",
                image: "assets/images/fm-project-3.jpg"
            }
        ]
    },
    ai: {
        role: "AI Consultant & PropTech Specialist",
        summary: `A unique AI Consultant and Digital Creator with a deep, 20-year foundation in Facilities and Property Management. I bridge the gap between physical infrastructure and digital intelligence, leveraging cutting-edge generative AI to enhance operational efficiency, create compelling digital content, and drive innovation in the PropTech space. Certified in Generative AI and armed with hands-on experience in prompt engineering, AI workflow design, and multimodal content creation.`,
        experience: [
            {
                title: "AI Consultant & Digital Content Creator",
                company: "Freelance / Vortex DigiLabs",
                date: "2023 – Present",
                desc: "Provide freelance consulting on generative AI adoption, specializing in prompt engineering and workflow automation. Develop AI-driven content pipelines for marketing and social media. Act as an early-access tester for emerging AI platforms."
            },
            {
                title: "Airbnb Host & Short-Term Rental Manager",
                company: "Self-Employed",
                date: "Feb 2025 – Present",
                desc: "Manage end-to-end operations of two rental units, utilizing digital and AI tools to optimize listing performance, automate guest messaging, and streamline logistics."
            },
            {
                title: "Career Transition & AI Upskilling",
                company: "Self-Study",
                date: "2022 – 2023",
                desc: "Completed a dedicated period of self-study focused on generative AI, prompt engineering, and digital creation. Obtained certifications from Outskill and Huggingface."
            }
        ],
        skills: [
            { name: "Generative AI", icon: "fa-brain" },
            { name: "Prompt Engineering", icon: "fa-terminal" },
            { name: "PropTech Strategy", icon: "fa-city" },
            { name: "Digital Content", icon: "fa-photo-video" },
            { name: "AI Automation", icon: "fa-robot" },
            { name: "Workflow Design", icon: "fa-sitemap" }
        ],
        projects: [
            {
                title: "Vortex DigiLabs",
                tags: ["AI Art", "Content Creation", "Brand Building"],
                desc: "Founder and creator of a social media portfolio showcasing AI-generated art and digital content.",
                image: "assets/images/ai-project-1.jpg"
            },
            {
                title: "AI Platform Beta Testing",
                tags: ["YUPP.ai", "Manus", "Innovation"],
                desc: "Provided critical early-stage feedback for innovative AI platforms, shaping feature development.",
                image: "assets/images/ai-project-2.jpg"
            },
            {
                title: "PropTech Integration Strategy",
                tags: ["Consulting", "Smart Buildings", "AI"],
                desc: "Developing strategies to integrate AI-driven analytics into traditional facility management workflows.",
                image: "assets/images/ai-project-3.jpg"
            }
        ],
        gallery: [
            "assets/images/gallery-1.jpg",
            "assets/images/gallery-2.jpg",
            "assets/images/gallery-3.jpg",
            "assets/images/gallery-4.jpg",
            "assets/images/gallery-5.jpg",
            "assets/images/gallery-6.jpg"
        ]
    }
};

// DOM Elements
const typingText = document.getElementById('typing-text');
const aboutContent = document.getElementById('about-content');
const experienceTimeline = document.getElementById('experience-timeline');
const skillsGrid = document.getElementById('skills-grid');
const projectsGrid = document.getElementById('projects-grid');
const gallerySection = document.getElementById('gallery');
const galleryGrid = document.getElementById('gallery-grid');
const modeBtns = document.querySelectorAll('.mode-btn');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// State
let currentMode = 'fm'; // Default mode

// Typing Effect
const typeWriter = (text, element, speed = 100) => {
    let i = 0;
    element.innerHTML = '';
    const type = () => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    type();
};

// Render Functions
const renderContent = (mode) => {
    const data = profiles[mode];

    // Update Typing Text
    typeWriter(data.role, typingText, 50);

    // Update About
    aboutContent.innerHTML = `<p>${data.summary}</p>`;

    // Update Experience
    experienceTimeline.innerHTML = data.experience.map(item => `
        <div class="timeline-item">
            <div class="timeline-date">${item.date}</div>
            <h3 class="timeline-title">${item.title}</h3>
            <div class="timeline-company">${item.company}</div>
            <p class="timeline-desc">${item.desc}</p>
        </div>
    `).join('');

    // Update Skills
    skillsGrid.innerHTML = data.skills.map(skill => `
        <div class="skill-card">
            <i class="fas ${skill.icon} skill-icon"></i>
            <div class="skill-name">${skill.name}</div>
        </div>
    `).join('');

    // Update Projects
    projectsGrid.innerHTML = data.projects.map(project => `
        <div class="project-card">
            <div class="project-image-container">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='https://via.placeholder.com/400x250?text=Project+Image'">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <p>${project.desc}</p>
            </div>
        </div>
    `).join('');

    // Update Gallery (Only for AI mode)
    if (mode === 'ai' && data.gallery) {
        gallerySection.style.display = 'block';
        galleryGrid.innerHTML = data.gallery.map(img => `
            <div class="gallery-item">
                <img src="${img}" alt="Gallery Image" onerror="this.style.display='none'">
            </div>
        `).join('');
    } else {
        gallerySection.style.display = 'none';
    }
};

// Event Listeners
modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        modeBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked
        btn.classList.add('active');

        // Update mode
        currentMode = btn.dataset.mode;

        // Update Theme Attribute for CSS
        body.setAttribute('data-theme', currentMode);

        // Render new content
        renderContent(currentMode);
    });
});

// Custom Cursor Logic
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Add some lag to the outline for a smooth effect
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Hover effects for cursor
document.querySelectorAll('a, button, .mode-btn').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.backgroundColor = 'transparent';
    });
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderContent(currentMode);
    body.setAttribute('data-theme', currentMode);
});
