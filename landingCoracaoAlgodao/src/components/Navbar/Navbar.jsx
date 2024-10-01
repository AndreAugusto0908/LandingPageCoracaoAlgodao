import { Menu, X } from "lucide-react";
import { navItems } from "../../Constants/Index";
import { useState } from "react";

export default function Navbar({ scrollToSection, refs }) {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavBar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl tracking-tight">Coração de Algodão</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <button onClick={() => scrollToSection(refs[item.section])}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <button
              onClick={() => scrollToSection(refs.feedbackRef)}
              className="py-2 px-3 border rounded-md bg-blue-400"
            >
              Avaliar
            </button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavBar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-gray-100 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <button
                    onClick={() => {
                      scrollToSection(refs[item.section]);
                      toggleNavBar();
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <button
                onClick={() => {
                  scrollToSection(refs.feedbackRef);
                  toggleNavBar();
                }}
                className="px-4 py-2 border rounded-md bg-blue-400"
              >
                Avaliar
              </button>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
