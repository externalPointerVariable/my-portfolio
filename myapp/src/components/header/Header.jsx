import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NavItems, Container, Logo } from "../index";
import ThemeBtn from "./ThemeBtn";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/50 dark:bg-black/50 backdrop-blur-lg border-b border-black/10 dark:border-white/10">
      <Container className="mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-orange-600 dark:text-orange-500"
          >
            <Logo className="w-8 h-8" />
            <span>Abhi<span>
            <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Technologist.png"
            alt="Man Technologist"
            width="20"
            height="20"
            className="inline-block"
          /></span>Works</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {NavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:text-orange-600 dark:hover:text-orange-500 transition-colors ${
                  location.pathname === item.path
                    ? "text-orange-600 dark:text-orange-500"
                    : "text-gray-800 dark:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <ThemeBtn />

          <button
            className="md:hidden flex items-center p-2 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <X className="text-black dark:text-white h-6 w-6 transition-all duration-300 rotate-180 opacity-80" />
            ) : (
              <Menu className="text-black dark:text-white h-6 w-6 transition-all duration-300 rotate-0 opacity-100" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-black shadow-lg border-t border-gray-200 dark:border-gray-700 transition-all duration-300">
            {NavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-3 px-6 hover:text-orange-500 dark:hover:text-orange-500 transition-colors ${
                  location.pathname === item.path
                    ? "text-orange-500 dark:text-orange-500"
                    : "text-gray-800 dark:text-white"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </nav>
  );
}
