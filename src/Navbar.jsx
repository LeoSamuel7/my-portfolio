import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-black/80 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-blue-700">Leo Issaghoulian</h1>
      <div className="space-x-3 flex items-center">
        <a
          href="#home"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Home
        </a>
        <a
          href="#projects"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-full shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Contact
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full shadow hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          Resume
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
