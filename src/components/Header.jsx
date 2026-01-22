export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <img src="./assets/profile-img.png" alt="" className="rounded-full w-32" />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I&apos;m Philip Venje
                <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>
            <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-Ovo">Full-Stack Developer</h1>
            <p className="max-w-2xl mx-auto font-Ovo mt-4 font-bold">I turn business challenges into<br />simple, scalable solutions.</p>

            <p className="max-w-2xl mx-auto font-Ovo mt-6">Motivated Frontend Developer with full-stack experience seeking a Junior Frontend role. Skilled in React, JavaScript, and modern frontend development, with backend knowledge in Node.js, Express, and database systems. Committed to creating responsive, user-friendly interfaces while understanding complete application architecture. Focused on collaborative growth and delivering quality user experiences.</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact"
                    className="px-10 py-2.5 border rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center gap-2 dark:border-transparent">
                    contact me <img src="./assets/right-arrow-white.png" alt="" className="w-4 dark:invert" />
                </a>

                <a href="/assets/resume_philipvenje.pdf" target="_blank" rel="noopener noreferrer"
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
                    my resume <img src="./assets/download-icon.png" alt="" className="w-4 dark:invert" />
                </a>
            </div>
        </div>
    )
}