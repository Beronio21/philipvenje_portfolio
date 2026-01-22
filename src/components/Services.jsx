export default function Services() {
    
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Frontend & Full-Stack Development Services</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-default duration-500 dark:hover:bg-darkHover">
                    <h3 className="text-lg mb-4 text-gray-700 dark:text-white">Frontend Expertise</h3>
                    <ul className="list-disc pl-5 text-sm text-gray-600 leading-6 dark:text-white/80">
                        <li>React Application Development</li>
                        <li>Responsive Web Design</li>
                        <li>Component Architecture</li>
                        <li>UI/UX Implementation</li>
                        <li>Performance Optimization</li>
                    </ul>
                </div>

                <div className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-default duration-500 dark:hover:bg-darkHover">
                    <h3 className="text-lg mb-4 text-gray-700 dark:text-white">Full-Stack Solutions</h3>
                    <ul className="list-disc pl-5 text-sm text-gray-600 leading-6 dark:text-white/80">
                        <li>Node.js Backend Development</li>
                        <li>REST API Design</li>
                        <li>Database Architecture</li>
                        <li>Complete Web Applications</li>
                        <li>Deployment &amp; Maintenance</li>
                    </ul>
                </div>
            </div>

            <p className="text-center max-w-2xl mx-auto mt-6 font-Ovo">I deliver clean, functional code with attention to both user experience and technical excellence.</p>
        </div>
    )
}