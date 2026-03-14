import { react, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Mylogo from "./Mylogo.jsx";

import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

let data = {
  frist: "Dheerj dwivedi",
};
const Header = () => {
  const [media, setmedai] = useState(true);
  const [media2, setmedai2] = useState(false);

  let hendalclick = (e) => {
    // setmedai2(media2 === true ? false : true);
    // dusara tarika
    setmedai2((prev) => !prev);
  };
  let media3 = window.matchMedia("(max-width: 720px)");
  useEffect(() => {
    if (media3.matches == false) {
      setmedai(false);
    } else {
      setmedai(true);
    }
  }, []);

  return (
    <>
      <div className=" relative z-30">
        {media ? (
          <div className="flex justify-between m-2.5">
            <NavLink
              to={"/"}
              end
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              <Mylogo
                yourlatter={data}
                className="flex grow-0.4 relative z-20"
              />
            </NavLink>

            <button
              className="flex justify-center"
              onClick={(e) => hendalclick(e)}
            >
              {media2 ? (
                <div
                  className={`absolute -top-2 left-0 w-full h-50  bg-black text-[#E5F48C] transition-transform-all duration-500 ease-in-out
              `}
                >
                  <nav
                    className="decoration-none uppercase text-[#E5F48C] p-1.5 
      pr-3 -mt-2 sm:mt-5 mb-10 w-11/12 text-2xl gap-3 opacity-100 h-8 bg-black-950 mr-25 relative z-50
      font-[Audiowide]"
                  >
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        isActive ? "text-white" : "text-[#E5F48C]"
                      }
                      onclick={() => setmedai2(false)}
                      style={{ display: "block" }}
                    >
                      home
                    </NavLink>
                    <NavLink
                      to={"/about"}
                      className={({ isActive }) =>
                        isActive ? "text-white" : "text-[#E5F48C]"
                      }
                      style={{ display: "block" }}
                    >
                      About
                    </NavLink>
                    <NavLink
                      to={"/serves"}
                      className={({ isActive }) =>
                        isActive ? "text-white" : "text-[#E5F48C]"
                      }
                      style={{ display: "block" }}
                    >
                      Serves
                    </NavLink>
                    <NavLink
                      to={"/contant"}
                      className={({ isActive }) =>
                        isActive ? "text-white" : "text-[#E5F48C]"
                      }
                      style={{ display: "block" }}
                    >
                      contant
                    </NavLink>
                    <NavLink
                      to={"/mywark"}
                      className={({ isActive }) =>
                        isActive ? "text-white" : "text-[#E5F48C]"
                      }
                      style={{ display: "block" }}
                    >
                      Work
                    </NavLink>
                  </nav>
                </div>
              ) : (
                " "
              )}
              {media2 ? (
                <AiOutlineClose
                  className={`text-6xl text-white transition-all duration-1000 rotate-180`}
                />
              ) : (
                <AiOutlineBars
                  className={`text-5xl text-white transition-all duration-1000 rotate-0`}
                />
              )}
            </button>
          </div>
        ) : (
          <nav
            className="decoration-none uppercase text-[#E5F48C] p-1.5 
      m-auto pr-3 mt-8 sm:mt-5 mb-10 w-11/12 text-2xl gap-3 h-8 bg-black-950 flex justify-between 
      items-center font-[Audiowide]"
          >
            <NavLink
              to={"/"}
              end
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              <Mylogo yourlatter={data} className="flex grow-0.4" />
            </NavLink>
            <NavLink
              to={"/"}
              end
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              home
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/serves"}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              Serves
            </NavLink>
            <NavLink
              to={"/contant"}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              contant
            </NavLink>
            <NavLink
              to={"/mywark"}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              Work
            </NavLink>
          </nav>
        )}
      </div>
    </>
  );
};
export default Header;

// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import Mylogo from "./Mylogo.jsx";
// import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";

// let data = {
//   frist: "Dheerj dwivedi",
// };

// const Header = () => {
//   const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 720px)").matches);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // ✅ Handle screen resize properly
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 720px)");

//     const handleResize = (e) => {
//       setIsMobile(e.matches);
//       if (!e.matches) setMenuOpen(false); // close menu if switching to desktop
//     };

//     mediaQuery.addEventListener("change", handleResize);
//     return () => mediaQuery.removeEventListener("change", handleResize);
//   }, []);

//   const toggleMenu = () => setMenuOpen((prev) => !prev);

//   return (
//     <>
//     <div className="relative z-50">
//       {isMobile ? (
//         // ✅ Mobile Navbar
//         <header className="relative flex justify-between items-center px-4 py-3 bg-black text-[#E5F48C]">
//           {/* Logo */}
//           <NavLink to="/" end>
//             <Mylogo yourlatter={data} />
//           </NavLink>

//           {/* Hamburger Button */}
//           <button onClick={toggleMenu} className="z-50 relative">
//             {menuOpen ? (
//               <AiOutlineClose className="text-5xl text-white transition-transform duration-300 rotate-180" />
//             ) : (
//               <AiOutlineBars className="text-5xl text-white transition-transform duration-300 rotate-0" />
//             )}
//           </button>

//           {/* ✅ Animated Dropdown */}
//           <div
//             className={`absolute top-full left-0 w-full bg-black text-[#E5F48C] overflow-hidden transition-all duration-500 ease-in-out
//               ${menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
//           >
//             <nav className="flex flex-col gap-4 p-4 text-xl uppercase font-[Audiowide]">
//               <NavLink
//                 to="/"
//                 className={({ isActive }) => (isActive ? "text-white" : "text-[#E5F48C]")}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Home
//               </NavLink>
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) => (isActive ? "text-white" : "text-[#E5F48C]")}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 About
//               </NavLink>
//               <NavLink
//                 to="/serves"
//                 className={({ isActive }) => (isActive ? "text-white" : "text-[#E5F48C]")}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Services
//               </NavLink>
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) => (isActive ? "text-white" : "text-[#E5F48C]")}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Contact
//               </NavLink>
//             </nav>
//           </div>
//         </header>
//       ) : (
//         // ✅ Desktop Navbar
//         <nav
//           className="decoration-none uppercase text-[#E5F48C] p-1.5
//           m-auto pr-3 mt-8 sm:mt-5 mb-10 w-11/12 text-2xl gap-3 h-8 bg-black-950 flex justify-between
//           items-center font-[Audiowide]"
//         >
//           <NavLink to="/" end>
//             <Mylogo yourlatter={data} className="flex grow-0.4" />
//           </NavLink>
//           <NavLink to="/" end className={({ isActive }) => (isActive ? "text-white" : "text-[#E5F48C]")}>
//             Home
//           </NavLink>
//           <NavLink to="/about" className={({ isActive }) => (isActive ? "text-white" : "text-[#E5F48C]")}>
//             About
//           </NavLink>
//           <NavLink to="/serves" className={({ isActive }) => (isActive ? "text-white" : "text-[#E5F48C]")}>
//             Services
//           </NavLink>
//           <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-white" : "text-[#E5F48C]")}>
//             Contact
//           </NavLink>
//           <NavLink to="/mywork" className={({ isActive }) => (isActive ? "text-white" : "text-[#E5F48C]")}>
//             Work
//           </NavLink>
//         </nav>
//       )}
//       </div>
//     </>
//   );
// };

// export default Header;
