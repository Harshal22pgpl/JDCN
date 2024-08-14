"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { loginPage } from "@/app/loginPage/page";
export default function Navbar() {
  const [openSubMenuId, setOpenSubMenuId] = useState(null);
  const [collegeNameIndex, setCollegeNameIndex] = useState(0);

  const collegeNames = [" LNCT ", "एसकेसी एलएनसीटी "];

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

  const handleStuffLogin = () => {
    router.push("/loginPage");
  };

  return (
    <div className=" text-white z-50">
      <div className="flex items-center justify-between p-2 bg-purple-700">
        <div className="items-center flex gap-4 ">
          <p className=" animate-pulse">Admissions</p>
          <p>Placement</p>
          <p>Careers</p>
        </div>

        <div className="items-center gap-4 flex w-8 h-8 ">
          <img src="/twitter.png" className="rounded-full"></img>
          <img src="/yt.png" className="rounded-full"></img>
          <img src="/insta.png" className="rounded-full"></img>
        </div>

        {/* Login button */}
        <div className="flex ">
          <Link
            className="text-xs px-4 py-2 leading-none rounded-full hover:bg-green-300 hover:text-black border-2"
            href="/admin/loginPage"
            onClick={handleStuffLogin}
          >
            STAFF LOGIN
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between px-4 bg-purple-700">
        {/* Logo and college name */}
        <div className="flex items-center gap-4">
          <div className="w-[100px] h-[100px] relative">
            <Image
              src="/logo1.png"
              layout="fill"
              objectFit="contain"
              alt="Logo"
            />
          </div>
          <h1 className="text-3xl font-semibold">
            {collegeNames[collegeNameIndex]}
          </h1>
          <div className="slogan">An Institute of National Importance</div>
        </div>

        {/* Search box */}
        <div>
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-full border border-white focus:outline-none focus:border-gray-300"
          />
        </div>
      </div>
      <div className="flex justify-around bg-purple-700 p-4">
        <div id="tmenu-institute">
          <a
            href="#"
            className="text-white"
            onClick={() => toggleSubMenu("institute")}
          >
            Institute
            <span className="submenu-indicator">
              <span className="submenu-indicator-chevron border-white"></span>
            </span>
          </a>
          <div
            className={`megamenu-panel absolute top-30 left-0 w-screen bg-purple-700 nav-submenu  ${
              openSubMenuId === "institute" ? "" : "hidden"
            }`}
          >
            <ul class=" flex justify-around list-none">
              <li class="py-4 ">
                <h5 class="text-lg font-semibold mb-2">
                  <a href="#" class="text-purple-500 text-lg p-2">
                    Institute
                  </a>
                </h5>
                <ul>
                  <li>
                    <a
                      id="submenu-welcome"
                      href="/institute/welcome"
                      class="text-gray-700 text-sm"
                    >
                      Institute
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-vision"
                      href="/institute/mission_vision"
                      class="text-gray-700 text-sm"
                    >
                      Vision and Mission
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-exdirectors"
                      href="/institute/former_directors"
                      class="text-gray-700 text-sm"
                    >
                      Former Directors
                    </a>
                  </li>

                  <li>
                    <a
                      id="submenu-campusfacility"
                      href="/institute/campus_facilities"
                      class="text-gray-700 text-sm"
                    >
                      Campus and Facilities
                    </a>
                  </li>

                  <li>
                    <a
                      id="submenu-gallery"
                      href="/Institute/Gallery"
                      class="text-gray-700 text-sm"
                    >
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-contactus"
                      href="/institute/contact"
                      class="text-gray-700 text-sm"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </li>
              <li class="py-4">
                <h5 class="text-lg font-semibold mb-2">
                  <a href="#" class="text-purple-500 text-lg p-2">
                    Administration
                  </a>
                </h5>
                <ul>
                  <li>
                    <a
                      id="submenu-council"
                      href="/Institute/NITsCouncil"
                      class="text-gray-700 text-sm"
                    >
                      Council for NITs
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-bog"
                      href="/institute/bog"
                      class="text-gray-700 text-sm"
                    >
                      Board of Governors
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-senate"
                      href="/Institute/Senate"
                      class="text-gray-700 text-sm"
                    >
                      The Senate
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-chairperson"
                      href="/institute/chairperson"
                      class="text-gray-700 text-sm"
                    >
                      Chairperson
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-director"
                      href="/institute/director"
                      class="text-gray-700 text-sm"
                    >
                      Director
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-nitradmin"
                      href="/Institute/NITRDirector"
                      class="text-gray-700 text-sm"
                    >
                      NITR Administration
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-fc"
                      href="/Institute/FC"
                      class="text-gray-700 text-sm"
                    >
                      Finance Committee
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-bwc"
                      href="/Institute/BWC"
                      class="text-gray-700 text-sm"
                    >
                      Buildings and Works Committee
                    </a>
                  </li>
                </ul>
              </li>
              <li class="py-4">
                <h5 class="text-lg font-semibold mb-2">
                  <a href="#" class="text-purple-500 text-lg p-2">
                    Key Documents
                  </a>
                </h5>
                <ul>
                  <li>
                    <a
                      id="submenu-actstatues"
                      href="/Institute/Act_Statutes"
                      class="text-gray-700 text-sm"
                    >
                      Act and Statutes
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-mcouncil"
                      href="/Institute/Minutes_NITCouncil"
                      class="text-gray-700 text-sm"
                    >
                      Minutes of NIT Council
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-mbog"
                      href="/Institute/Minutes_BOG"
                      class="text-gray-700 text-sm"
                    >
                      Minutes of BOG
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-mfc"
                      href="/Institute/Minutes_FC"
                      class="text-gray-700 text-sm"
                    >
                      Minutes of FC
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-mbwc"
                      href="/Institute/Minutes_BWC"
                      class="text-gray-700 text-sm"
                    >
                      Minutes of BWC
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-msenate"
                      href="/Institute/Minutes_Senate"
                      class="text-gray-700 text-sm"
                    >
                      Minutes of Senate
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-ruleregulation"
                      href="/Institute/Rules_Regulations"
                      class="text-gray-700 text-sm"
                    >
                      Rules and Regulations
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-annualreport"
                      href="/Institute/Annual_Reports"
                      class="text-gray-700 text-sm"
                    >
                      Annual Reports
                    </a>
                  </li>
                </ul>
              </li>
               <li class="py-4 ">
                <h5 class="text-lg font-semibold mb-2">
                  <a href="#" class="text-purple-500 text-lg p-2">
                    Institute
                  </a>
                </h5>
                <ul>
                  <li>
                    <a
                      id="submenu-welcome"
                      href="/institute/welcome"
                      class="text-gray-700 text-sm"
                    >
                      Institute
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-vision"
                      href="/institute/mission_vision"
                      class="text-gray-700 text-sm"
                    >
                      Vision and Mission
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-exdirectors"
                      href="/institute/former_directors"
                      class="text-gray-700 text-sm"
                    >
                      Former Directors
                    </a>
                  </li>

                  <li>
                    <a
                      id="submenu-campusfacility"
                      href="/institute/campus_facilities"
                      class="text-gray-700 text-sm"
                    >
                      Campus and Facilities
                    </a>
                  </li>

                  <li>
                    <a
                      id="submenu-gallery"
                      href="/Institute/Gallery"
                      class="text-gray-700 text-sm"
                    >
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-contactus"
                      href="/institute/contact"
                      class="text-gray-700 text-sm"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </li>
              <li class="py-4">
                <h5 class="text-lg font-semibold mb-2">
                  <a href="#" class="text-purple-500 text-lg p-2">
                    Accreditation
                  </a>
                </h5>
                <ul>
                  <li>
                    <a
                      id="submenu-nirf"
                      href="/Institute/NIRF"
                      class="text-gray-700 text-sm"
                    >
                      Data for NIRF
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-nba"
                      href="/Institute/NBA"
                      class="text-gray-700 text-sm"
                    >
                      Data for NBA
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-ariia"
                      href="/Institute/ARIIA"
                      class="text-gray-700 text-sm"
                    >
                      Data for ARIIA
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-qs"
                      href="/Institute/QS"
                      class="text-gray-700 text-sm"
                    >
                      Data for QS
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div id="tmenu-institute">
          <a
            href="#"
            className="text-white"
            onClick={() => toggleSubMenu("academics")}
          >
            Academics
            <span className="submenu-indicator">
              <span className="submenu-indicator-chevron border-white"></span>
            </span>
          </a>
          <div
            className={`megamenu-panel absolute top-30 left-0 w-screen bg-purple-400 nav-submenu  ${
              openSubMenuId === "academics" ? "" : "hidden"
            }`}
          >
            <ul class="flex justify-around ">
              <li>
                <ul>
                  <li>
                    <a className="text-purple-500 text-lg p-2 " href="">
                      Admissions
                    </a>
                  </li>
                  <li>
                    <a id="submenu-acadprograme" href="/Academic/UGProgramme">
                      Academic Programmes
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-acadregulations"
                      href="/Academic/AcademicRegulations"
                    >
                      Academic Regulations
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-acadcalendar"
                      href="/Academic/AcademicCalendar"
                    >
                      Academic Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-acadtimetable"
                      href="/Academic/AcademicTimeTable"
                    >
                      Academic Time Table
                    </a>
                  </li>
                </ul>
                <h5>
                  <a className="text-purple-500 text-lg p-2" href="">
                    Technical Service Units
                  </a>
                </h5>
                <ul>
                  <li>
                    <a id="submenu-hc" href="/HealthCentre">
                      Health Centre
                    </a>
                  </li>
                  <li>
                    <a id="submenu-lg" href="/LawnGarden">
                      Lawn and Garden
                    </a>
                  </li>
                  <li>
                    <a id="submenu-pd" href="/PlanningDevelopment/About">
                      Planning and Development
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <a className="text-purple-500 text-lg p-2" href="">
                    Departments
                  </a>
                </h5>
                <ul>
                  <li>
                    <a id="submenu-engineering" href="/Academic/Engineering">
                      Engineering
                    </a>
                  </li>
                  <li>
                    <a id="submenu-pa" href="/PA">
                      Planning and Architecture
                    </a>
                  </li>
                  <li>
                    <a id="submenu-science" href="/Academic/Science">
                      Science
                    </a>
                  </li>
                  <li>
                    <a id="submenu-hs" href="/HS">
                      Humanities and Social Science
                    </a>
                  </li>
                </ul>
                <h5>
                  <a className="text-purple-500 text-lg p-2" href="">
                    Academic Support Centres
                  </a>
                </h5>
                <ul>
                  <li>
                    <a id="submenu-cat" href="/CAT">
                      Centre for Automation Technology
                    </a>
                  </li>
                  <li>
                    <a id="submenu-cdc" href="/CDC">
                      Career Development Centre
                    </a>
                  </li>
                  <li>
                    <a href="https://library.nitrkl.ac.in/">
                      Biju Pattnaik Central Library
                    </a>
                  </li>
                  <li>
                    <a id="submenu-sac" href="/SAC">
                      Student Activity Centre
                    </a>
                  </li>
                  <li>
                    <a id="submenu-cic" href="/CIC">
                      Computer and Informatics Centre
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <a className="text-purple-500 text-lg p-2" href="">
                    Centres of Research
                  </a>
                </h5>
                <ul>
                  <li>
                    <a href="/Academic/BIC">
                      Bioinformatics and Computational Biology
                    </a>
                  </li>
                  <li>
                    <a href="/Academic/CVPR">
                      Computer Vision &amp; Pattern Recognition
                    </a>
                  </li>
                  <li>
                    <a href="/Academic/CETS">Excellence for Tribal Studies</a>
                  </li>
                  <li>
                    <a href="/Academic/CEPH">
                      Excellence on Public Health Nutrition
                    </a>
                  </li>
                  <li>
                    <a href="/Academic/CIER">
                      Industrial Electronics &amp; Robotics
                    </a>
                  </li>
                  <li>
                    <a href="/Academic/CDNM">Nanomaterials</a>
                  </li>
                  <li>
                    <a href="/Academic/PARC">
                      Poverty Alleviation Research Centre
                    </a>
                  </li>
                  <li>
                    <a href="/Academic/CRES">Renewable Energy Systems</a>
                  </li>
                  <li>
                    <a href="/Academic/STIC">
                      Space Technology Incubation Center
                    </a>
                  </li>
                  <li>
                    <a href="/Academic/SRC">Steel Research Centre</a>
                  </li>
                </ul>

                <h5>
                  <a className="text-purple-500 text-lg p-2" href="">
                    Facilities
                  </a>
                </h5>
                <ul>
                  <li>
                    <a href="javascript:void(0);">Central Workshop</a>
                  </li>
                  <li>
                    <a href="https://nitrkl.ac.in/crf/">
                      Central Research Facility
                    </a>
                  </li>
                  <li>
                    <a id="submenu-acadhpc" href="/HPCRkl">
                      High Performance Computing
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div id="tmenu-institute">
          <a
            href="#"
            className="text-white"
            onClick={() => toggleSubMenu("students")}
          >
            Students
            <span className="submenu-indicator">
              <span className="submenu-indicator-chevron border-white"></span>
            </span>
          </a>
          <div
            className={`megamenu-panel absolute top-30 left-0 w-screen bg-purple-400 nav-submenu ${
              openSubMenuId === "students" ? "" : "hidden"
            }`}
          >
            <ul class="flex justify-around ">
              <li>
                <h5>
                  <a className="text-purple-500 text-lg p-2 " href="">
                    Prospective Students
                  </a>
                </h5>
                <ul>
                  <li>
                    <a id="submenu-why" href="/Student/WhyNITR">
                      Why NIT Rourkela
                    </a>
                  </li>
                  <li>
                    <a href="/Institute/Gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="/Institute/CampusFacility">Campus Life</a>
                  </li>
                  <li>
                    <a
                      id="submenu-international"
                      href="/Student/InternationalStudents"
                    >
                      For International Students
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-finassist"
                      href="/Student/FinancialAssistance"
                    >
                      Financial Assistance
                    </a>
                  </li>
                  <li>
                    <a href="/Academic/UGProgramme">Academic Programmes</a>
                  </li>
                  <li>
                    <a href="/Academic/CurriculaSyllabi">
                      Curriculum and Syllabi
                    </a>
                  </li>
                  <li>
                    <a id="submenu-apply" href="/Student/How2Apply">
                      How to Apply
                    </a>
                  </li>
                  <li>
                    <a id="submenu-process" href="/Student/Process">
                      Admission Process
                    </a>
                  </li>
                  <li>
                    <a href="/Student/Advertisements">
                      Admission Advt. and Notices
                    </a>
                  </li>
                  <li>
                    <a href="/SRICCE/Career">Project Advt. and Notices</a>
                  </li>
                  <li>
                    <a id="submenu-faq1" href="/Student/FAQs">
                      FAQs
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <a className="text-purple-500 text-lg p-2 " href="">
                    Existing Students
                  </a>
                </h5>
                <ul>
                  <li>
                    <a href="/Academic/AcademicRegulations">
                      Rules and Regulations
                    </a>
                  </li>
                  <li>
                    <a id="submenu-forms" href="/Student/Forms">
                      Forms
                    </a>
                  </li>
                  <li>
                    <a href="/Academic/AcademicCalendar">Academic Calendar</a>
                  </li>
                  <li>
                    <a href="/Academic/AcademicTimeTable">Time Table</a>
                  </li>
                  <li>
                    <a id="submenu-holidays" href="/Academic/Holidays">
                      Holidays
                    </a>
                  </li>
                  <li>
                    <a href="https://eapplication.nitrkl.ac.in/nitris/">
                      Academic ERP (NITRis)
                    </a>
                  </li>
                  <li>
                    <a href="https://nitrkl.ac.in/parentconnect/">
                      Parent Connect
                    </a>
                  </li>
                  <li>
                    <a href="https://eapplication.nitrkl.ac.in/nitris/">
                      Examination and Results
                    </a>
                  </li>
                  <li>
                    <a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=1509159">
                      Online Fee Payment
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <a className="text-purple-500 text-lg p-2 " href="">
                    Other Related Links
                  </a>
                </h5>
                <ul>
                  <li>
                    <a id="submenu-abc" href="/Student/ABC">
                      UGC NAD / ABC Bureau
                    </a>
                  </li>
                  <li>
                    <a href="https://eapplication.nitrkl.ac.in/internship/">
                      Internship Programmes
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ics-nitrkl.in/">
                      Institute Counselling Service
                    </a>
                  </li>
                  <li>
                    <a href="/SAC">Student Activity Centre</a>
                  </li>
                  <li>
                    <a href="/CDC">Career Development Centre</a>
                  </li>
                  <li>
                    <a href="https://library.nitrkl.ac.in/">Central Library</a>
                  </li>
                  <li>
                    <a id="submenu-hall" href="/Hall">
                      Halls of Residence
                    </a>
                  </li>
                  <li>
                    <a href="https://mondaymorning.nitrkl.ac.in/">
                      Monday Morning NEWS
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div id="tmenu-institute">
          <a
            href="#"
            className="text-white"
            onClick={() => toggleSubMenu("faculty & staff")}
          >
            Faculty
            <span className="submenu-indicator">
              <span className="submenu-indicator-chevron border-white"></span>
            </span>
          </a>
          <div
            className={`megamenu-panel absolute top-30 left-0 w-screen bg-purple-400 nav-submenu ${
              openSubMenuId === "faculty & staff" ? "" : "hidden"
            }`}
          >
            <ul class="flex justify-around">
              <li>
                <h5>
                  <a className="text-purple-500 text-lg p-2" href="">
                    Prospective Employee
                  </a>
                </h5>
                <ul>
                  <li>
                    <a href="/Institute/Welcome">What is NITR</a>
                  </li>
                  <li>
                    <a id="submenu-whynitr" href="/FacultyStaff/WhyNITR">
                      Why Join NITR
                    </a>
                  </li>
                  <li>
                    <a href="https://website.nitrkl.ac.in/FacultyStaff/Career/">
                      Job Openings
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <a className="text-purple-500 text-lg p-2" href="">
                    Existing Employee
                  </a>
                </h5>
                <ul>
                  <li>
                    <a id="submenu-faculty" href="/FacultyStaff/Faculty">
                      Faculty Directory
                    </a>
                  </li>
                  <li>
                    <a id="submenu-officer" href="/FacultyStaff/Officer">
                      Officer Directory
                    </a>
                  </li>
                  <li>
                    <a id="submenu-staff" href="/FacultyStaff/Staff">
                      Staff Directory
                    </a>
                  </li>
                  <li>
                    <a href="/Institute/CampusFacility">Campus Life</a>
                  </li>
                  <li>
                    <a
                      id="submenu-ruleregulation"
                      href="/Institute/Rules_Regulations"
                    >
                      Rules and Regulations
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-circularnotices"
                      href="/FacultyStaff/CircularNotices"
                    >
                      Circular and Notices
                    </a>
                  </li>
                  <li>
                    <a
                      id="submenu-officialform"
                      href="/FacultyStaff/OfficialForm"
                    >
                      Official Forms
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <a className="text-purple-500 text-lg p-2" href="">
                    Useful Links
                  </a>
                </h5>
                <ul>
                  <li>
                    <a href="https://eapplication.nitrkl.ac.in/nitris/">
                      ERP (NITRis)
                    </a>
                  </li>
                  <li>
                    <a href="https://oac.nitrkl.ac.in/Hr%5Fpayroll/">
                      HR and Payroll
                    </a>
                  </li>
                  <li>
                    <a href="https://oac.nitrkl.ac.in/healthcentre/">
                      Health Centre
                    </a>
                  </li>
                  <li>
                    <a href="https://guesthouse.nitrkl.ac.in/Users/HomePage.aspx">
                      Guest House
                    </a>
                  </li>
                  <li>
                    <a id="submenu-sricce" href="/SRICCE">
                      SRICCE
                    </a>
                  </li>
                  <li>
                    <a id="submenu-purchase" href="/PurchaseSection">
                      Purchase and Store
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <h5>
                  <a className="text-purple-500 text-lg p-2" href="">
                    Retired Employee
                  </a>
                </h5>
                <ul>
                  <li>
                    <a href="https://eapplication.nitrkl.ac.in/nitris/PensionerLogin.aspx">
                      Pensioners
                    </a>
                  </li>
                  <li>
                    <a href="https://eapplication.nitrkl.ac.in/nitris/PensionerLogin.aspx">
                      Pensioner Life Certificate
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div id="tmenu-institute">
          <a
            href="#"
            className="text-white"
            onClick={() => toggleSubMenu("research")}
          >
            Research
            <span className="submenu-indicator">
              <span className="submenu-indicator-chevron border-white"></span>
            </span>
          </a>
          <div
            className={`megamenu-panel absolute top-30 left-0 w-screen bg-purple-400 nav-submenu ${
              openSubMenuId === "research" ? "" : "hidden"
            }`}
          >
            <ul class="nav-dropdown nav-submenu">
              <li>
                <a
                  id="submenu-publication"
                  href="/Research/PublicationsPatents"
                >
                  Publications and Patents
                </a>
              </li>
              <li>
                <a
                  id="submenu-sponsoredproject"
                  href="/Research/SponsoredProjects"
                >
                  Sponsored Projects
                </a>
              </li>
              <li>
                <a
                  id="submenu-consultancyproject"
                  href="/Research/ConsultancyProjects"
                >
                  Consultancy Projects
                </a>
              </li>
              <li>
                <a
                  id="submenu-continuingeducation"
                  href="/Research/ContinuingEducation"
                >
                  Continuing Education
                </a>
              </li>
              <li>
                <a id="submenu-conference" href="/Research/Conferences">
                  Conferences
                </a>
              </li>
              <li>
                <a id="submenu-workshops" href="/Research/Workshops">
                  Workshops
                </a>
              </li>
              <li>
                <a id="submenu-seminars" href="/Research/Seminars">
                  Seminars
                </a>
              </li>
              <li>
                <a id="submenu-ipic" href="/Research/IPIC">
                  Intellectual Property Innovation Centre
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="tmenu-institute">
          <a
            href="#"
            className="text-white"
            onClick={() => toggleSubMenu("alumni")}
          >
            Alumni
            <span className="submenu-indicator">
              <span className="submenu-indicator-chevron border-white"></span>
            </span>
          </a>
          <div
            className={`megamenu-panel absolute top-30 left-0 w-screen bg-purple-400 nav-submenu ${
              openSubMenuId === "alumni" ? "" : "hidden"
            }`}
          >
            <ul class="nav-dropdown nav-submenu">
              <li>
                <a id="submenu-alumnirelations" href="/AIIR/AlumniRelations">
                  Alumni Relations
                </a>
              </li>
              <li>
                <a id="submenu-givingback" href="/AIIR/GivingBack">
                  Giving back to Alma Mater
                </a>
              </li>
              <li>
                <a id="submenu-transcripts" href="/AIIR/Transcript">
                  Transcripts
                </a>
              </li>
              <li>
                <a id="submenu-transcripts" href="/AIIR/DirectorMessage">
                  Director&apos;s Message to Alumni
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="tmenu-institute">
          <a
            href="#"
            className="text-white"
            onClick={() => toggleSubMenu("resources")}
          >
            Resources
            <span className="submenu-indicator">
              <span className="submenu-indicator-chevron border-white"></span>
            </span>
          </a>
          <div
            className={`megamenu-panel absolute top-30 left-0 w-screen bg-purple-400 nav-submenu ${
              openSubMenuId === "resources" ? "" : "hidden"
            }`}
          >
            <ul class="nav-dropdown nav-submenu">
              <li>
                <a id="submenu-crf" href="/Resources/Central_Research_Facility">
                  Central Research Facility
                </a>
              </li>
              <li>
                <a id="submenu-industryrelation" href="/TIIR">
                  Centre for Technology Innovation and Industry Relations
                </a>
              </li>
              <li>
                <a id="submenu-ftbi" href="/Resources/FTBI">
                  Foundation for Technology and Business Incubation
                </a>
              </li>
              <li>
                <a id="submenu-acadhpc" href="/HPCRkl">
                  High Performance Computing
                </a>
              </li>
              <li>
                <a
                  id="submenu-industrialconsultancy"
                  href="/Resources/IndustrialConsultancy"
                >
                  Industrial Consultancy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
