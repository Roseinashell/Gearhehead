import { Head, Link } from '@inertiajs/react';

export default function Landing({ auth }) {
    return (
        <>
            <Head title="Welcome" />

            <div className="bg-gray-50 dark:bg-black text-gray-800 dark:text-gray-200">

                <header className="w-full border-b border-gray-200/50 dark:border-gray-800/50">
                    <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-5">
                        <h1 className="text-2xl font-bold text-[#FF2D20]">Gearhehead</h1>

                        <nav className="flex items-center gap-6">
                            <a href="#features" className="hover:text-[#FF2D20] transition">Features</a>
                            <a href="#pricing" className="hover:text-[#FF2D20] transition">Pricing</a>
                            <a href="#testimonials" className="hover:text-[#FF2D20] transition">Testimonials</a>

                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="px-4 py-2 rounded-md bg-[#FF2D20] text-white hover:bg-[#d6241a] transition"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link href={route('login')} className="hover:text-[#FF2D20]">Login</Link>
                                    <Link
                                        href={route('register')}
                                        className="px-4 py-2 rounded-md bg-[#FF2D20] text-white hover:bg-[#d6241a] transition"
                                    >
                                        Get Started
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                <section className="pt-24 pb-32 text-center">
                    <div className="max-w-3xl mx-auto px-6">
                        <h1 className="text-5xl font-bold leading-tight">
                            Build Faster. Launch Smarter.  
                            <span className="text-[#FF2D20]"> Grow Bigger.</span>
                        </h1>
                        <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
                            A powerful platform designed to help you ship better products in record time.  
                            Automate, optimize, and scale effortlessly.
                        </p>

                        <div className="mt-10 flex justify-center gap-4">
                            <Link
                                href={route('register')}
                                className="px-8 py-4 rounded-lg bg-[#FF2D20] text-white text-lg hover:bg-[#d6241a] transition"
                            >
                                Start Free
                            </Link>
                            <a
                                href="#features"
                                className="px-8 py-4 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-lg"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </section>

                <section id="features" className="py-28">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center mb-14">Powerful Features</h2>

                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                {
                                    title: "Lightning Fast",
                                    text: "Built for speed with a powerful architecture optimized for real-time performance."
                                },
                                {
                                    title: "Automated Workflows",
                                    text: "Save time and scale your operations using fully automated processes."
                                },
                                {
                                    title: "Secure & Reliable",
                                    text: "Enterprise-grade security ensures your data stays safe and protected."
                                }
                            ].map((f, i) => (
                                <div key={i} className="p-8 bg-white dark:bg-zinc-900 rounded-xl shadow">
                                    <h3 className="text-2xl font-semibold mb-4 text-[#FF2D20]">{f.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">{f.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white dark:bg-zinc-900">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold mb-10">See It in Action</h2>
                        <img
                            src="https://via.placeholder.com/1200x600"
                            className="rounded-xl shadow-xl mx-auto"
                        />
                    </div>
                </section>
\
                <section id="testimonials" className="py-28">
                    <div className="max-w-7xl mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center mb-14">What Our Users Say</h2>

                        <div className="grid md:grid-cols-3 gap-10">
                            {[
                                {
                                    name: "Alex Johnson",
                                    text: "This platform cut our development time in half. Absolutely love it!"
                                },
                                {
                                    name: "Maria Lopez",
                                    text: "The automation tools are a game changer. Highly recommended."
                                },
                                {
                                    name: "Daniel Kim",
                                    text: "Super intuitive and fast. Perfect for startups trying to scale."
                                }
                            ].map((t, i) => (
                                <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow">
                                    <p className="text-gray-600 dark:text-gray-300 italic">"{t.text}"</p>
                                    <p className="mt-4 font-semibold text-[#FF2D20]">{t.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="pricing" className="py-28 bg-gray-100 dark:bg-zinc-800">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center mb-14">Simple Pricing</h2>

                        <div className="grid md:grid-cols-3 gap-10">
                            {[
                                { name: "Starter", price: "Free", features: ["Basic features", "Email support"] },
                                { name: "Pro", price: "$19/mo", features: ["Everything in Starter", "Advanced tools", "Priority support"] },
                                { name: "Enterprise", price: "$99/mo", features: ["All features", "Dedicated manager", "24/7 support"] }
                            ].map((p, i) => (
                                <div
                                    key={i}
                                    className="bg-white dark:bg-zinc-900 p-10 rounded-xl shadow-lg text-center"
                                >
                                    <h3 className="text-2xl font-bold">{p.name}</h3>
                                    <p className="text-4xl font-bold text-[#FF2D20] mt-4">{p.price}</p>

                                    <ul className="mt-6 space-y-2 text-gray-600 dark:text-gray-300">
                                        {p.features.map((f, index) => <li key={index}>{f}</li>)}
                                    </ul>

                                    <button className="mt-8 px-6 py-3 bg-[#FF2D20] text-white rounded-lg hover:bg-[#d6241a] transition">
                                        Choose Plan
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <footer className="py-12 text-center text-sm text-gray-500 dark:text-gray-400">
                    © {new Date().getFullYear()} MyProduct — All rights reserved.
                </footer>
            </div>
        </>
    );
}
