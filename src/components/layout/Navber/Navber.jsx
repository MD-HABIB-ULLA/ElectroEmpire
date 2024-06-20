import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiMenu2Line } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuUser } from "react-icons/lu";
import { NavLink } from "react-router-dom";
const Navber = () => {
  const list = (
    <div className="hidden md:block">
      {" "}
      <ul className="flex   gap-6 flex-wrap justify-center items-center text-black  text-xl">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              ` text-base  px-3 py-2 h-full mx-2 ${
                isActive ? " text-white bg-black rounded-md " : ""
              } `
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              ` text-base  px-3 py-2 h-full mx-2 ${
                isActive ? " text-white bg-black rounded-md " : ""
              } `
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutus"
            className={({ isActive }) =>
              ` text-base  px-3 py-2 h-full mx-2 ${
                isActive ? " text-white bg-black rounded-md " : ""
              } `
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              ` text-base  px-3 py-2 h-full mx-2 ${
                isActive ? " text-white bg-black rounded-md " : ""
              } `
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tracking"
            className={({ isActive }) =>
              ` text-base  px-3 py-2 h-full mx-2 ${
                isActive ? " text-white bg-black rounded-md " : ""
              } `
            }
          >
            Order Tracking
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              ` text-base  px-3 py-2 h-full mx-2 ${
                isActive ? " text-white bg-black rounded-md " : ""
              } `
            }
          >
            Our Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/emiService"
            className={({ isActive }) =>
              ` text-base  px-3 py-2 h-full mx-2 ${
                isActive ? " text-white bg-black rounded-md " : ""
              } `
            }
          >
            EMI Service
          </NavLink>
        </li>
      </ul>
    </div>
  );

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
      console.log(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {/* learge navber */}
      <div
        className=" bg-dodgerBlue bg-cover bg-no-repeat  "
        style={{
          backgroundImage:
            "url(https://www.electroempire.com/images/style-3/custom/blue-Temptation-Header.png)",
        }}
      >
        {/* first navber  */}
        <div className=" border-b-[1px] py-2 border-black border-opacity-40">
          <div className="navbar  m-auto gap-4 container">
            <div className="">
              {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
              <img
                src="https://i.ibb.co/1bNLXSq/2024-06-20-00-22-00-Hayna-Logo-removebg-preview.png"
                className="h-12"
                alt=""
              />
            </div>

            <div className=" flex-1  w-full flex gap-4 justify-end px-2">
              {/* search input  */}
              <div className="w-full md:block hidden">
                <div className="flex w-full  relative   ">
                  <button className="px-4 text-black font-bold left-0 absolute py-1 items-center bg-white rounded-l-md flex gap-2 border-r">
                    All <IoIosArrowDown />
                  </button>
                  <input
                    type="text"
                    placeholder="Search here"
                    className="flex-1 px-4 pl-20 py-1 w-full  outline-none rounded-md "
                  />
                  <button className="bg-black px-4 py-1 right-0 absolute rounded-r-md text-white">
                    Search
                  </button>
                </div>
              </div>
              {/* shoping icon  */}
              <div className="relative">
                <HiOutlineShoppingBag className="text-3xl text-black" />
                <p className="bg-black text-white px-1 text-sm -bottom-2 -right-1 rounded-full text-center absolute">
                  0
                </p>
              </div>
              {/* sign up section */}
              <div className="flex items-center gap-2">
                <LuUser className="text-3xl text-black" />
                <div className="lg:block hidden">
                  <div className="flex font-bold  ">
                    <p className="border-r-2 pr-3 text-black">Login</p>
                    <p className="pl-3 text-black">Signup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second navber */}
        <div className="container m-auto flex items-center py-3 ">
          <div className="flex gap-2 items-center px-4">
            <RiMenu2Line className="text-2xl text-black" />{" "}
            <p className="text-black font-bold md:block hidden">
              Shop by categories
            </p>
          </div>
          <div className="flex-1">
            {list}
            <div className="w-full block md:hidden px-4 ">
              <div className="flex w-full  relative   ">
                <input
                  type="text"
                  placeholder="Search here"
                  className="flex-1 px-4 py-1 w-full  outline-none rounded-md "
                />
                <button className="bg-black px-4 py-1 right-0 absolute rounded-r-md text-white">
                  Search
                </button>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      {/* small navber */}
      {scrolled && (
        <div className=" w-full bg-dodgerBlue top-0 fixed z-20 transition-all ease-in-out duration-500 ">
          <div className=" border-b-[1px] py-2 border-black border-opacity-40">
            <div className="navbar  m-auto gap-4 container">
              <div className="flex gap-2 items-center px-4">
                <RiMenu2Line className="text-2xl text-black" />{" "}
                <p className="text-black font-bold md:block hidden">
                  Shop by categories
                </p>
              </div>

              <div className=" flex-1  w-full flex gap-4 justify-end px-2">
                {/* search input  */}
                <div className="w-full ">
                  <div className="flex w-full  relative   ">
                    <input
                      type="text"
                      placeholder="Search here"
                      className="flex-1 px-4 pl-4 py-1 w-full  outline-none rounded-md "
                    />
                    <button className="bg-black px-4 py-1 right-0 absolute rounded-r-md text-white">
                      Search
                    </button>
                  </div>
                </div>
                {/* shoping icon  */}
                <div className="relative">
                  <HiOutlineShoppingBag className="text-3xl text-black" />
                  <p className="bg-black text-white px-1 text-sm -bottom-2 -right-1 rounded-full text-center absolute">
                    0
                  </p>
                </div>
                {/* sign up section */}
                <div className="md:block hidden">
                  <div className="flex items-center gap-2">
                    <LuUser className="text-3xl text-black" />
                    <div className="lg:block hidden">
                      <div className="flex font-bold  ">
                        <p className="border-r-2 pr-3 text-black">Login</p>
                        <p className="pl-3 text-black">Signup</p>
                      </div>
                    </div>
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

export default Navber;
