"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navlink from "./Navlink";

import { FaChevronDown } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [openSubMenuId, setOpenSubMenuId] = useState(null);
  const [collegeNameIndex, setCollegeNameIndex] = useState(0);
  const menuId = usePathname();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const collegeNames = [
    "NARAIN SHRI HOMEOPATHIC & MEDICAL COLLEGE",
    " नारायण श्री होम्योपैथिक मेडिकल कॉलेज ",
  ];

  useEffect(() => {
    // Update isSmallScreen state on window resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the threshold as needed
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  let dropdownItems = [
    {
      name: "ABOUT US",
      values: [
        {
          name: "Welcome to NSHMC",
          link: "/institute/welcome",
        },
        {
          name: "Vision and Mission",
          link: "/institute/mission_vision",
        },
        {
          name: "Former Directors",
          link: "/institute/former_directors",
        },
        {
          name: "Campus and Facilities",
          link: "/institute/campus_facilities",
        },
        {
          name: "Contact Us",
          link: "/institute/contact",
        },
      ],
    },
    {
      name: "Affiliation and Approval",
      values: [
        {
          name: "Affiliation and Approval",
          link: "/affiliation",
        },
      ],
    },

    {
      name: "Administration",
      values: [
        {
          name: "Board of Governors",
          link: "/institute/bog",
        },
        // {
        //   name: "The Senate",
        //   link: "/institute/senate",
        // },
        {
          name: "Principal",
          link: "/principal",
        },
        {
          name: "Chairperson",
          link: "/institute/chairperson",
        },
        {
          name: "Director",
          link: "/institute/director",
        },
        // {
        //   name: "Finance Committee",
        //   link: "/institute/fc",
        // },
        // {
        //   name: "Building and Work Committee",
        //   link: "/institute/bwc",
        // },
      ],
    },
    {
      name: "Key Documents",
      values: [
        {
          name: "Rules and Regulations",
          link: "/students/rules_regulations",
        },
        {
          name: "Annual Reports",
          link: "/institute/annual_reports",
        },
      ],
    },
    {
      name: "Other Important Links",
      values: [
        {
          name: "Digital Payments",
          link: "https://www.pratibhaglobalschool.com/payments/login/40e032b8-a995-47ab-a854-c3aec4812c0e",
        },
        {
          name: "AICTE Regulations",
          link: "https://forms-peach.vercel.app/",
        },
      ],
    },

    {
      name: "Academic",
      values: [
        {
          name: "Academic Overview",
          link: "/academic/overview",
        },
        {
          name: "Academic Programs",
          link: "/academic/programs",
        },
        {
          name: "Academic Regulations",
          link: "/students/rules_regulations",
        },
        {
          name: "Academic Calendar",
          link: "/academic/calender",
        },
        // {
        //   name: "Curriculum and Syllabus",
        //   link: "/academic/syllabus",
        // },
      ],
    },
    {
      name: "Departments",
      values: [
        {
          name: "Mechanical Engineering",
          link: "/department/me",
        },
        {
          name: "Computer Science & Engineering",
          link: "/department/cse",
        },
        {
          name: "Electronics & Communication Engineering",
          link: "/department/ece",
        },
        {
          name: "Electrical & Electronics Engineering",
          link: "/department/eet",
        },
        {
          name: "Information Technology",
          link: "/department/it",
        },
      ],
    },
    {
      name: "Facilities",
      values: [
        {
          name: "Central Workshop",
          link: "/academic/central-workshop",
        },
        {
          name: "Central Research Facility",
          link: "/academic/central-research",
        },
        {
          name: "High Performance Computing",
          link: "/academic/hfc",
        },
      ],
    },
    {
      name: "Technical Service Units",
      values: [
        {
          name: "Health Care",
          link: "/health-center",
        },
        {
          name: "Lawn and Garden",
          link: "/academic/lawn",
        },
      ],
    },
    {
      name: "Hospital",
      values: [
        {
          name: "Placement Overview",
          link: "/placementview",
        },
        // {
        //   name: "Career Development Cell",
        //   link: "/cdc",
        // },
        // {
        //   name: "Leading Recruiters",
        //   link: "/leading_recruiters",
        // },
        // {
        //   name: "Regular Activities",
        //   link: "/regular_activite",
        // },
        // {
        //   name: "Placement Calendar and Process",
        //   link: "/placementcalender",
        // },
      ],
    },
    {
      name: "Students",
      values: [
        {
          name: "Why LNCT",
          link: "/why_lnct",
        },
        // {
        //   name: "Gallery",
        //   link: "/gallery",
        // },
        {
          name: "Campus Life",
          link: "/student/campuslife",
        },
        {
          name: "Academic Programs",
          link: "/academic/programs",
        },
        // {
        //   name: "Admission Process",
        //   link: "/admission",
        // },
      ],
    },
    {
      name: "Existing Students",
      values: [
        {
          name: "Rules and Regulations",
          link: "/students/rules_regulations",
        },
        {
          name: "Academic Calendar",
          link: "/academic/calender",
        },
        {
          name: "Time Table",
          link: "/institute/former_directors",
        },
        {
          name: "Online Fee Payment",
          link: "https://www.pratibhaglobalschool.com/payments/login/40e032b8-a995-47ab-a854-c3aec4812c0e",
        },
      ],
    },
    {
      name: "Other Related Links",
      values: [
        {
          name: "Internship Programs",
          link: "/placementcalender",
        },
        {
          name: "Library",
          link: "/institute/library",
        },
        {
          name: "Career Development Cell",
          link: "/cdc",
        },
      ],
    },

    {
      name: "For Students",
      values: [
        {
          name: "Student Testimonial",
          link: "student_testimonial",
        },
        {
          name: "Career",
          link: "/career/?college=LNCT",
        },
      ],
    },
    {
      name: "Events",
      values: [
        {
          name: "Events",
          link: "/events",
        },
        // {
        //   name: "Eminent",
        //   link: "/eminent",
        // },
        // {
        //   name: "Director's Message to Alumni",
        //   link: "/institute/contact",
        // },
      ],
    },
    {
      name: "Contact Us",
      values: [
        {
          name: "Contact",
          link: "/institute/contact",
        },
        // {
        //   name: "Centre for Technology Innovation and Industry Relations",
        //   link: "/relations",
        // },
        // {
        //   name: "High Performance Computing",
        //   link: "/highpc",
        // },
        // {
        //   name: "Industrial Consultancy",
        //   link: "/ic",
        // },
      ],
    },
  ];

  const navItems = [
    {
      main: "About Us",
      child: [
        {
          name: "Institute",
          subchild: [
            {
              name: "Welcome to NSHMC",
              link: "/institute/welcome",
            },
            {
              name: "Vision and Mission",
              link: "/institute/mission_vision",
            },
            {
              name: "Former Directors",
              link: "/institute/former_directors",
            },
            {
              name: "Campus and Facilities",
              link: "/institute/campus_facilities",
            },
            {
              name: "Contact Us",
              link: "/institute/contact",
            },
          ],
        },
        {
          name: "Administration",
          subchild: [
            {
              name: "Board of Governors",
              link: "/institute/bog",
            },
            // {
            //   name: "The Senate",
            //   link: "/institute/senate",
            // },
            {
              name: "Principal",
              link: "/principal",
            },
            {
              name: "Chairperson",
              link: "/institute/chairperson",
            },
            {
              name: "Director",
              link: "/institute/director",
            },
            // {
            //   name: "Finance Committee",
            //   link: "/institute/fc",
            // },
            // {
            //   name: "Building and Work Committee",
            //   link: "/institute/bwc",
            // },
          ],
        },
        {
          name: "Key Documents",
          subchild: [
            {
              name: "Rules and Regulations",
              link: "/students/rules_regulations",
            },
            {
              name: "Annual Reports",
              link: "/institute/annual_reports",
            },
          ],
        },
        {
          name: "Other Important Links",
          subchild: [
            {
              name: "Digital Payments",
              link: "https://www.pratibhaglobalschool.com/payments/login/40e032b8-a995-47ab-a854-c3aec4812c0e",
            },
            {
              name: "AICTE Regulations",
              link: "https://forms-peach.vercel.app/",
            },
          ],
        },
      ],
    },
    {
      main: "Affiliation and Approval",
      child: [
        {
          name: "Affiliation and Approval",
          subchild: [
            {
              name: "Affiliation and Approval",
              link: "/affiliation",
            },
          ],
        },
      ],
    },
    {
      main: "Academics",
      child: [
        {
          name: "Academic",
          subchild: [
            {
              name: "Academic Overview",
              link: "/academic/overview",
            },
            {
              name: "Academic Programs",
              link: "/academic/programs",
            },
            {
              name: "Academic Regulations",
              link: "/students/rules_regulations",
            },
            {
              name: "Academic Calendar",
              link: "/academic/calender",
            },
            // {
            //   name: "Curriculum and Syllabus",
            //   link: "/academic/syllabus",
            // },
          ],
        },
        {
          name: "Departments",
          subchild: [
            {
              name: "Mechanical Engineering",
              link: "/department/me",
            },
            {
              name: "Computer Science & Engineering",
              link: "/department/cse",
            },
            {
              name: "Electronics & Communication Engineering",
              link: "/department/ece",
            },
            {
              name: "Electrical & Electronics Engineering",
              link: "/department/eet",
            },
            {
              name: "Information Technology",
              link: "/department/it",
            },
          ],
        },
        {
          name: "Facilities",
          subchild: [
            {
              name: "Central Workshop",
              link: "/academic/central-workshop",
            },
            {
              name: "Central Research Facility",
              link: "/academic/central-research",
            },
            {
              name: "High Performance Computing",
              link: "/academic/hfc",
            },
          ],
        },
        {
          name: "Technical Service Units",
          subchild: [
            {
              name: "Health Care",
              link: "/health-center",
            },
            {
              name: "Lawn and Garden",
              link: "/academic/lawn",
            },
          ],
        },
      ],
    },
    {
      main: "Hospital",
      child: [
        {
          name: "Hospitals",
          subchild: [
            {
              name: "Narain Shree Hospital",
              link: "/hospital",
            },
          ],
        },
        // {
        //   name: "Overview",
        //   subchild: [
        //     {
        //       name: "Placement Overview",
        //       link: "/placementview",
        //     },
        //     {
        //       name: "Career Development Cell",
        //       link: "/cdc",
        //     },
        //     {
        //       name: "Leading Recruiters",
        //       link: "/leading_recruiters",
        //     },
        //     {
        //       name: "Regular Activities",
        //       link: "/regular_activite",
        //     },
        //     {
        //       name: "Placement Calendar and Process",
        //       link: "/placementcalender",
        //     },
        //   ],
        // },
        // {
        //   name: "For Students",
        //   subchild: [
        //     {
        //       name: "Student Testimonial",
        //       link: "student_testimonial",
        //     },
        //     {
        //       name: "Career",
        //       link: "/career/?college=LNCT",
        //     },
        //   ],
        // },
      ],
    },
    {
      main: "Students",
      child: [
        {
          name: "Prospective Students",
          subchild: [
            {
              name: "Why LNCT",
              link: "/why_lnct",
            },
            // {
            //   name: "Gallery",
            //   link: "/gallery",
            // },
            {
              name: "Campus Life",
              link: "/student/campuslife",
            },
            {
              name: "Academic Programs",
              link: "/academic/programs",
            },
            // {
            //   name: "Admission Process",
            //   link: "/admission",
            // },
          ],
        },
        {
          name: "Existing Students",
          subchild: [
            {
              name: "Rules and Regulations",
              link: "/students/rules_regulations",
            },
            {
              name: "Academic Calendar",
              link: "/academic/calender",
            },
            {
              name: "Time Table",
              link: "/institute/former_directors",
            },
            {
              name: "Online Fee Payment",
              link: "https://www.pratibhaglobalschool.com/payments/login/40e032b8-a995-47ab-a854-c3aec4812c0e",
            },
          ],
        },
        {
          name: "Other Related Links",
          subchild: [
            {
              name: "Internship Programs",
              link: "/placementcalender",
            },
            {
              name: "Library",
              link: "/institute/library",
            },
            {
              name: "Career Development Cell",
              link: "/cdc",
            },
          ],
        },
      ],
    },

    {
      main: "Events",
      child: [
        {
          name: "Events",
          subchild: [
            {
              name: "Events",
              link: "/events",
            },
          ],
        },
      ],
    },
    {
      main: "Contact US",
      child: [
        {
          name: "Contact US",
          subchild: [
            {
              name: "Contact US",
              link: "/institute/contact",
            },
          ],
        },
      ],
    },
    // {
    //   main: "Resources",
    //   child: [
    //     {
    //       name: "Resources",
    //       subchild: [
    //         {
    //           name: "Central Research Facility",
    //           link: "/crf",
    //         },
    //         {
    //           name: "Centre for Technology Innovation and Industry Relations",
    //           link: "/relations",
    //         },
    //         {
    //           name: "High Performance Computing",
    //           link: "/highpc",
    //         },
    //         {
    //           name: "Industrial Consultancy",
    //           link: "/ic",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];

  useEffect(() => {
    setOpenSubMenuId(null);
  }, [menuId]);

  // Function to toggle submenu
  const toggleSubMenu = (submenuId) => {
    setOpenSubMenuId(openSubMenuId === submenuId ? null : submenuId);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCollegeNameIndex((prevIndex) =>
        prevIndex === collegeNames.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const path = usePathname();

  return (
    <>
      {path.includes("admin") || path.includes("payments") ? (
        <></>
      ) : (
        <div className="text-white z-50 w-full">
          <div className="flex items-center justify-between p-2 bg-purple-900">
            <div className="items-center gap-4 hidden lg:flex">
              <p>Admissions</p>
              <p>Placement</p>
              <p>Careers</p>
            </div>

            <div className="flex items-center gap-4">
              <img src="/twitter.png" className="w-8 h-8 rounded-full" />
              <img src="/yt.png" className="w-8 h-8 rounded-full" />
              {/* <img src="/insta.png" className="w-8 h-8 rounded-full" /> */}
            </div>

            <div className="flex gap-2">
              <Link
                className="text-xs lg:px-4  lg:py-2 p-2  leading-none rounded-full hover:bg-green-300 hover:text-black border-2"
                href="/loginPage"
              >
                STAFF LOGIN
              </Link>
              <Link
                className="text-xs lg:px-4  lg:py-2 p-2  leading-none rounded-full hover:bg-green-300 hover:text-black border-2"
                href="http://1.22.218.13/AccSoft2/Login.aspx"
                target="_blank"
              >
                LOGIN
              </Link>
            </div>
            {isSmallScreen && (
              <div className="lg:hidden text-center">
                <button className="text-white p-2 " onClick={toggleMenu}>
                  {/* You can use any menu icon here */}
                  <button className="relative group">
                    <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-transparent ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                      <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                        <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
                        <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
                        <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
                      </div>
                    </div>
                  </button>
                </button>
              </div>
            )}
            {isSmallScreen && (
              <Sidebar
                isOpen={isMenuOpen}
                onClose={closeMenu}
                dropdownItems={dropdownItems}
              />
            )}
          </div>

          <div className="bg-gradient-to-r from-purple-500 to-purple-800 w-full">
            <div className="w-9/12 mx-auto flex items-center justify-between px-4 py-2">
              <div className="flex items-center gap-4 lg:flex-row flex-col">
                <div className="w-[90px] h-[90px] relative">
                  <Image
                    src="/LNMC-BPL.png"
                    layout="fill"
                    objectFit="contain"
                    alt="Logo"
                  />
                </div>
                <h1 className="text-2xl font-semibold">
                  {collegeNames[collegeNameIndex]}
                </h1>
              </div>

              {/* <div>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-full border border-white focus:outline-none focus:border-gray-300"
          />
        </div> */}
            </div>
          </div>

          {!isSmallScreen && (
            <div className="w-full bg-purple-900">
              <div className="flex flex-wrap w-full mx-auto gap-4 justify-center bg-purple-900 relative items-center">
                <Link href="/" className="text-3xl p-1">
                  <FaHome className="hover:scale-105 duration-500 hover:text-gray-400 cursor-pointer" />
                </Link>
                {navItems.map((item, index) => {
                  let dropdownWidth;
                  let dropdownLeft;
                  switch (item.main) {
                    case "About Us":
                      dropdownWidth = "w-[950px]";
                      dropdownLeft = "left-[-79px]";
                      break;
                    case "Academics":
                      dropdownWidth = "w-[870px]";
                      dropdownLeft = "left-[-460px]";
                      break;
                    case "Students":
                      dropdownWidth = "w-[690px]";
                      dropdownLeft = "left-20";
                      break;
                    case "Placement":
                      dropdownWidth = "w-[590px]";
                      dropdownLeft = "left-30";
                      break;
                    case "Alumni":
                      dropdownWidth = "w-60";
                      dropdownLeft = "left-40";
                      break;
                    case "Resources":
                      dropdownWidth = "w-[300px]";
                      dropdownLeft = "left-50";
                      break;
                    default:
                      dropdownWidth = "w-64";
                      dropdownLeft = "left-[-50px]";
                  }

                  return (
                    <div key={index} className="relative group z-50">
                      <Link
                        href="#"
                        className={`text-white font-semibold text-lg hover:text-gray-300 hover:bg-purple-700 flex gap-2 items-center px-3 py-4  ${
                          openSubMenuId === item.main ? "bg-purple-800" : ""
                        }`}
                        onClick={() => toggleSubMenu(item.main)}
                      >
                        {item.main}
                        <FaChevronDown size={15} />
                      </Link>

                      <div
                        className={`absolute top-full mt-2 p-3 bg-white shadow-lg rounded flex ${dropdownWidth} ${
                          openSubMenuId === item.main ? "" : "hidden"
                        }`}
                        style={{ left: dropdownLeft }}
                      >
                        {item.child.map((link, index) => (
                          <div key={index} className="p-2">
                            <h4 className="text-purple-700 font-bold text-lg">
                              <Link href="#">{link.name}</Link>
                            </h4>
                            <ul className="mt-2 space-y-2">
                              {link.subchild.map((navlink, index) => (
                                <li key={index}>
                                  <Navlink
                                    name={navlink.name}
                                    link={navlink.link}
                                  />
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

const Sidebar = ({ isOpen, onClose, dropdownItems }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  // Sidebar component
  const handleSidebarItemClick = (path) => {
    // Navigate to the specified path using router.push
    router.push(path);
    // Close the sidebar
    onClose();
  };

  return (
    <div>
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 max-w-full flex ">
              <div className="w-screen max-w-md">
                <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                  <button
                    onClick={onClose}
                    className="bg-black p-3 text-white text-xl font-bold"
                  >
                    Close
                  </button>
                  <div className="p-6">
                    {/* Dropdown items and values */}
                    <Link href="/">
                      <div className="font-bold p-5 text-lg">Home</div>
                    </Link>
                    {dropdownItems.map(({ name, values }, index) => (
                      <div key={name}>
                        <div
                          onClick={() => toggleDropdown(index)}
                          className="flex items-center cursor-pointer justify-between p-5"
                        >
                          <p className="font-bold text-purple-600">{name}</p>
                          {values.length > 0 && (
                            <div
                              className={`w-6 h-6 transition-transform border-2 ${
                                activeDropdown === index
                                  ? "transform rotate-180 border-2"
                                  : ""
                              }`}
                            >
                              {/* Insert your SVG icon here */}
                              <svg
                                fill="none"
                                stroke="purple"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </div>
                          )}
                        </div>
                        {activeDropdown === index && values.length > 0 && (
                          <ul className=" text-black">
                            {values.map((value, index) => (
                              <li key={index} className="py-2">
                                {/* Use handleSidebarItemClick to navigate and close the sidebar */}
                                <div
                                  onClick={() =>
                                    handleSidebarItemClick(value.link)
                                  }
                                  className="p-3 shadow-md rounded-lg bg-purple-100 text-purple-600"
                                >
                                  {value.name}
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                    <Link href="/contact-us">
                      <div className="font-bold p-5 text-lg">Contact Us</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
