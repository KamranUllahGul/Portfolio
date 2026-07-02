// Tailwind script initialization
function initializeTailwind() {
    return {
        config(userConfig = {}) {
            return {
                configUser: userConfig,
                theme: {
                    extend: {
                        colors: {
                            android: '#34A853'
                        }
                    }
                }
            }
        },
        theme(userConfig = {}) {
            return {
                ...this.defaultTheme(),
                ...this.config(userConfig).theme
            }
        },
        defaultTheme() {
            return {
                extend: {}
            }
        }
    }
}

// Skills data - EASY TO CUSTOMIZE
const skillsData = [
    { name: "Kotlin", icon: "https://skillicons.dev/icons?i=kotlin" },
    { name: "Android", icon: "https://skillicons.dev/icons?i=androidstudio" },
    { name: "Jetpack Compose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg" },
    { name: "MVVM", icon: "https://ia601407.us.archive.org/19/items/mvvm_20260424_202604/MVVm.png" },
    { name: "Room", icon: "https://skillicons.dev/icons?i=sqlite" },
    { name: "Retrofit", icon: "https://ia600807.us.archive.org/7/items/retro-fit-icon/RetroFitIcon.png" },
    { name: "Koin", icon: "https://ia601408.us.archive.org/21/items/koin_20260424/Koin.png" },
    { name: "Coroutines", icon: "https://archive.org/download/coroutine/coroutine.png" },
    { name: "Firebase", icon: "https://skillicons.dev/icons?i=firebase" },
    { name: "GitHub Actions", icon: "https://skillicons.dev/icons?i=github" },
    { name: "Material 3", icon: "https://ia600406.us.archive.org/32/items/m_20260424/M.png" },
    { name: "Clean Architecture", icon: "https://skillicons.dev/icons?i=java" }
]

// Projects data - EASY TO CUSTOMIZE (add/remove as many as you want)
const projectsData = [
    {
        title: "Phone manager- cleaner",
        description: "Modern cleaner that inclkude modules like duplicates cleaner, whatsapp Cleaner, battery manager, Gallery and more",
        tech: ["Kotlin", "MVVM", "Xml", "SAF", "DocumentFile"],
        github: "",
        playstore: "#",
        image: "assets/phone_cleaner_img.jpg",
        color: "#"
    },
    {
        title: "Vr 360-Video Player",
        description: "For playing the Vr and 360° videos on phone wioth offline(Download) support",
        tech: ["Kotlin", "Xml", "FiresBase", "MD360 lib"],
        github: "#",
        playstore: "#",
        image: "assets/vr_img.jpg",
        color: "#"
    },
    {
        title: "Gold and Metal Detector",
        description: "All-in-one smart detector app to find gold, metal, and electromagnetic signals using your phone’s sensors.",
        tech: ["Kotlin", "Xml", "Sensor_Service"],
        github: "#",
        playstore: "#",
        image: "assets/gold_img.png",
        color: "#"
    },
    {
        title: "X-Ray Simulator",
        description: "Scan the entire human body with X-rays and explore all body parts in this fun, interactive educational simulator guided by Nurse Brown!",
        tech: ["java", "Xml", "Kotlin", "canva"],
        github: "#",
        playstore: "#",
        image: "assets/x-ray_img.jpg",
        color: "#"
    },
    {
        title: "Magnifier & Magnifying Glass",
        description: "used in build Camera to view and added digital Zoom to view small objects clearly",
        tech: ["java", "Kotlin", "Xml", "cameraX"],
        github: "#",
        playstore: "#",
        image: "assets/magnifier_img.jpg",
        color: "#"
    },
    {
        title: "Hidden Camera Detector",
        description: "Detect hidden cameras instantly and protect your privacy with smart scanning technology.",
        tech: ["java", "Kotlin", "Xml", "Sensor_Service"],
        github: "#",
        playstore: "#",
        image: "assets/hidden_camera_img.jpg",
        color: "#"
    },
     {
        title: "utility Tools/Bubble Measure Pro",
        description: "Turn your phone into a precision toolkit. Bubble level, laser level, ruler, protractor, plumb bob, compass, altimeter, and light meter — all in one sleek app.",
        tech: ["Kotlin", "Xml", "Sensor_Service","camera_sensor","Location_service"],
        github: "#",
        playstore: "#",
        image: "assets/measure_pro.jpg",
        color: "#"
    },
     {
        title: "Tap to Lock",
        description: "Lock your device with a simple gesture. Instant lock widget, custom configurations, accessibility shortcuts, and invisible home screen triggers — protect your screen and save your physical power button with a quick double tap.",
        tech: ["Kotlin", "Jetpack-Compsoe", "MaterialUI","Widget"],
        github: "#",
        playstore: "#",
        image: "assets/tap_to_lock.png",
        color: "#"
    },
    
     {
        title: "Screen Time Measure",
        description: "Master your digital habits with precise tracking. Real-time usage monitors, unlock counters, session tracking, and detailed analytical reports — take complete control of your digital well-being in one smart dashboard.",
        tech: ["Kotlin", "Jetpack-Compsoe", "MaterialUI","Widget","Sensor_Service"],
        github: "#",
        playstore: "#",
        image: "assets/tap_to_lock.png",
        color: "#"
    },

    // add more apps if needed
    // {
    //     title: "HealthSync - Fitness Tracker",
    //     description: "Fitness companion integrating Google Health Connect, charts, and AI-powered insights.",
    //     tech: ["Kotlin", "Compose", "Health Connect", "Coil"],
    //     github: "https://github.com/yourusername/healthsync",
    //     playstore: "#",
    //     image: "https://picsum.photos/id/301/600/400",
    //     color: "bg-rose-500"
    // }
]

// Render skills
function renderSkills() {
    const container = document.getElementById('skills-container')
    container.innerHTML = skillsData.map(skill => `
        <div class="bg-slate-800 hover:bg-slate-700 rounded-3xl p-6 flex flex-col items-center gap-4 transition-colors border border-transparent hover:border-[#34A853]/30">
            <img src="${skill.icon}" alt="${skill.name}" class="h-12 w-12">
            <span class="font-semibold text-lg">${skill.name}</span>
        </div>
    `).join('')
}

// Render projects
function renderProjects() {
    const container = document.getElementById('projects-container')
    container.innerHTML = projectsData.map(project => `
        <div class="card-hover bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden group">
            <div class="relative">
                <img src="${project.image}" alt="${project.title}" class="w-full h-56 object-cover">
                <div class="absolute top-4 right-4 ${project.color} text-white text-xs font-bold px-4 py-1 rounded-3xl">
                     
                 </div>
            </div>
            <div class="p-8">
                <h3 class="text-2xl font-semibold mb-2">${project.title}</h3>
                <p class="text-slate-400 mb-6">${project.description}</p>
                
                <div class="flex flex-wrap gap-2 mb-8">
                    ${project.tech.map(t => `<span class="text-xs bg-slate-800 px-4 py-2 rounded-3xl">${t}</span>`).join('')}
                </div>
                 <!--   for the repo and playstorebtn
                       <div class="flex gap-4">
                    <a href="${project.github}" target="_blank" 
                       class="flex-1 text-center py-4 bg-slate-800 hover:bg-slate-700 rounded-3xl font-medium flex items-center justify-center gap-2">
                        <i class="fab fa-github"></i> Repo
                    </a>
                    ${project.playstore !== '#' ? `
                    <a href="${project.playstore}" target="_blank" 
                       class="flex-1 text-center py-4 border border-[#34A853] text-[#34A853] hover:bg-[#34A853] hover:text-white rounded-3xl font-medium flex items-center justify-center gap-2">
                        <i class="fas fa-store"></i> Play Store
                    </a>` : ''}
                </div>

                -->
             


            </div>
        </div>
    `).join('')
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu')
    const icon = document.getElementById('mobile-icon')
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
        icon.classList.replace('fa-bars', 'fa-xmark')
    } else {
        menu.classList.add('hidden')
        icon.classList.replace('fa-xmark', 'fa-bars')
    }
}

// Initialize everything
function init() {
    initializeTailwind().theme()
    renderSkills()
    renderProjects()

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'))
            if (target) {
                e.preventDefault()
                target.scrollIntoView({ behavior: 'smooth' })
            }
        })
    })

    console.log('%c✅ Android Developer Portfolio Template loaded successfully!', 'color:#34A853; font-size:13px; font-family:monospace')
}

// Run immediately — DOM is already parsed since this script
// is loaded at the end of <body>, no need to wait for images/onload
init()