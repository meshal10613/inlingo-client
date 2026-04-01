import React from "react";
import ILogo from "../assets/inlingo-removebg.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import { Bounce, toast } from "react-toastify";

const navLinks = [
    { to: "/", label: "Home" },
    { to: "/findTutors", label: "Find Tutors" },
    { to: "/addTutorials", label: "Add Tutorials" },
    { to: "/myTutorials", label: "My Tutorials" },
    { to: "/myBookedTutors", label: "Booked Tutors" },
    { to: "/aboutUs", label: "About Us" },
    { to: "/blogs", label: "Blogs" },
];

const socials = [
    {
        href: "https://www.facebook.com/meshal.67/",
        icon: <FaFacebook size={18} />,
        label: "Facebook",
        color: "hover:text-blue-500",
    },
    {
        href: "https://www.linkedin.com/in/10613-meshal",
        icon: <FaLinkedin size={18} />,
        label: "LinkedIn",
        color: "hover:text-blue-600",
    },
    {
        href: "https://github.com/meshal10613",
        icon: <FaGithub size={18} />,
        label: "GitHub",
        color: "hover:text-base-content",
    },
];

const Footer = () => {
    const handleForm = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        toast.success(`You're subscribed — welcome, ${email}!`, {
            position: "top-right",
            autoClose: 5000,
            theme: "light",
            transition: Bounce,
        });
        e.target.reset();
    };

    return (
        <footer className="bg-base-200 border-t border-base-300 mt-16">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-14 pb-6">
                {/* Top grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 pb-12 border-b border-base-300">
                    {/* Brand column */}
                    <div className="xl:col-span-1 flex flex-col gap-5">
                        <Link to="/" className="flex items-center gap-2.5">
                            <img
                                src={ILogo}
                                alt="Inlingo"
                                className="w-10 h-10 object-contain"
                            />
                            <span className="text-2xl font-bold text-[#7F3D27] tracking-wide leading-none">
                                Inlingo
                            </span>
                        </Link>

                        <p className="text-sm text-base-content/55 leading-relaxed max-w-xs">
                            Connecting language learners with expert tutors
                            worldwide. Learn any language, on your terms.
                        </p>

                        <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-base-content/60">
                                <svg
                                    className="w-4 h-4 flex-shrink-0 text-[#7F3D27]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <a
                                    href="tel:+8801764447574"
                                    className="hover:text-[#7F3D27] transition-colors"
                                >
                                    +880 1764 447574
                                </a>
                            </div>
                            <div className="flex items-center gap-2 text-base-content/60 min-w-0">
                                <svg
                                    className="w-4 h-4 flex-shrink-0 text-[#7F3D27]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a
                                    href="mailto:syedmohiuddinmeshal24@gmail.com"
                                    className="hover:text-[#7F3D27] transition-colors truncate text-xs"
                                >
                                    syedmohiuddinmeshal24@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h6 className="text-sm font-bold tracking-widest uppercase text-base-content/40">
                            Quick Links
                        </h6>
                        <ul className="space-y-2.5">
                            {navLinks.slice(0, 4).map(({ to, label }) => (
                                <li key={to}>
                                    <NavLink
                                        to={to}
                                        className={({ isActive }) =>
                                            `text-sm transition-colors duration-200 flex items-center gap-1.5 group ${isActive ? "text-[#7F3D27] font-medium" : "text-base-content/60 hover:text-[#7F3D27]"}`
                                        }
                                    >
                                        <span className="w-1 h-1 rounded-full bg-[#7F3D27]/40 group-hover:bg-[#7F3D27] transition-colors" />
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* More Links */}
                    <div className="flex flex-col gap-4">
                        <h6 className="text-sm font-bold tracking-widest uppercase text-base-content/40">
                            More
                        </h6>
                        <ul className="space-y-2.5">
                            {navLinks.slice(4).map(({ to, label }) => (
                                <li key={to}>
                                    <NavLink
                                        to={to}
                                        className={({ isActive }) =>
                                            `text-sm transition-colors duration-200 flex items-center gap-1.5 group ${isActive ? "text-[#7F3D27] font-medium" : "text-base-content/60 hover:text-[#7F3D27]"}`
                                        }
                                    >
                                        <span className="w-1 h-1 rounded-full bg-[#7F3D27]/40 group-hover:bg-[#7F3D27] transition-colors" />
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col gap-4">
                        <h6 className="text-sm font-bold tracking-widest uppercase text-base-content/40">
                            Stay Updated
                        </h6>
                        <p className="text-sm text-base-content/55 leading-relaxed">
                            Subscribe for offers, events, and language learning
                            tips.
                        </p>
                        <form
                            onSubmit={handleForm}
                            className="flex flex-col gap-2.5"
                        >
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="your@email.com"
                                className="input input-bordered input-sm w-full focus:border-[#7F3D27] focus:outline-none text-sm h-10"
                            />
                            <button
                                type="submit"
                                className="btn btn-sm bg-[#7F3D27] text-white border-[#7F3D27] hover:bg-[#6a3220] hover:border-[#6a3220] font-medium w-full transition-all duration-200"
                            >
                                Subscribe
                            </button>
                        </form>

                        {/* Social icons */}
                        <div className="flex items-center gap-3 mt-1">
                            {socials.map(({ href, icon, label, color }) => (
                                <Link
                                    key={label}
                                    to={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center bg-base-300 text-base-content/50 ${color} hover:bg-base-100 transition-all duration-200`}
                                >
                                    {icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs text-base-content/40">
                    <p>
                        © {new Date().getFullYear()} Inlingo. All rights
                        reserved.
                    </p>
                    <p>Built with ❤️ for language learners everywhere.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
