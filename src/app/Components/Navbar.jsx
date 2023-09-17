import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-yellow-400">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content lg:hidden mt-3 z-[99] p-2 shadow bg-yellow-400 rounded-box w-52"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>About Us</summary>
                <ul className="p-2">
                  {/* <li>
                    <Link href="/mission">Mission & Vision</Link>
                  </li> */}
                  <li>
                    <a>FBCCI</a>
                  </li>
                  <li>
                    <a>FRIC</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/">Innovation</Link>
            </li>
            <li>
              <Link href="/">Research</Link>
            </li>
            <li>
              <Link href="/">Training</Link>
            </li>
            <li>
              <Link href="/">Incubation</Link>
            </li>
            <li>
              <Link href="/">Membership</Link>
            </li>
            <li>
              <Link href="/">Policy Paper</Link>
            </li>
            <li>
              <Link href="/">Publications</Link>
            </li>
            <li>
              <Link href="/">Event</Link>
            </li>
            <li>
              <Link href="/">Contact Us</Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Logo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-50">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>About Us</summary>

              <ul className="p-2">
                {/* <li>
                  <Link href="/mission">Mission & Vision</Link>
                </li> */}
                <li>
                  <details>
                    <summary>FBCCI</summary>
                    <ul className="p-2 dropdown-right">
                      <li>
                        <a>Brief History</a>
                      </li>
                      <li>
                        <a>Board of Directors</a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details>
                    <summary>FIRC</summary>
                    <ul className="p-2">
                      <li>
                        <Link href='/mission'>Mission & Vision</Link>
                      </li>
                      <li>
                        <a>Governing Body</a>
                      </li>
                      <li>
                        <Link href='/secretariat'>FIRC secretariat</Link>
                      </li>
                      <li>
                        <Link href='/expert'>Expert Panel</Link>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/">Innovation</Link>
          </li>
          <li>
            <Link href="/">Research</Link>
          </li>
          <li>
            <Link href="/">Training</Link>
          </li>
          <li>
            <Link href="/">Incubation</Link>
          </li>
          <li>
            <Link href="/membership">Membership</Link>
          </li>
          <li>
            <Link href="/">Policy Paper</Link>
          </li>
          <li>
            <Link href="/">Publications</Link>
          </li>
          <li>
            <Link href="/">Event</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
