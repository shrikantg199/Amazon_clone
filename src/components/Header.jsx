import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { GrMenu } from "react-icons/gr";
function Header() {
  return (
    <>
      <header className="header flex-wrap  ">
        <div className="navbar bg-[#131921] h-16  flex items-center ">
          <div className="logo w-2 h-10 hover:border-2 p-2"></div>

          <div className="add text-white  mt-3   ml-4 hover:border-2 p-2 ">
            <p className="text-xs ml-6">Delivering to Pune 411005</p>
            <div className="icon text-white text-xl flex ">
              <CiLocationOn />
              <p className="font-bold text-sm ml-1">Update Location</p>
            </div>
          </div>

          <div className="nav-search  ml-10  flex justify-evenly text-center  text-black ">
            <select
              className="h-10 bg-[#e6e6e6]  p-2 rounded-s-md"
              placeholder="All"
            >
              <option value="">All</option>
            </select>
            {/*input */}
            <input className="w-96 " type=" " />
            <div>
              <IoIosSearch className="bg-[#f2a747] w-12 h-10 rounded-e-md "></IoIosSearch>
            </div>
          </div>

          <div className="add text-white ml-2 hover:border-2 p-2 ">
            <p className="text-xs font-medium ">Hello,sign in </p>
            <div className="icon text-white text-xl flex">
              <p className="font-bold text-sm ">
                Account &
                <select
                  className="bg-transparent rounded-s-md"
                  placeholder="All"
                >
                  <option value="">List</option>
                </select>
              </p>
            </div>
          </div>

          <div className="add text-white ml-2 hover:border-2 p-2 ">
            <p className="text-xs font-medium ">Returns </p>
            <div className="icon text-white text-xl flex">
              <p className="font-bold text-sm ">& Orders</p>
            </div>
          </div>

          <div className="cart-icon text-white flex ml-2 hover:border-2 ">
            <LiaCartArrowDownSolid className="text-5xl" />
            <div className="text-white font-medium mt-6">
              <p>Cart</p>
            </div>
          </div>
        </div>
        <div className="nav-main flex bg-[#232f3e] text-center">
          <ul className="list flex text-white gap-6 ">
            <li className="menu-icon flex hover:border-2 p-1">
              <GrMenu className="mt-1" />
              All
            </li>
            <li className="hover:border-2 p-1">Fresh</li>
            <li className="hover:border-2 p-1">Amazon miniTV</li>
            <li className="hover:border-2 p-1">Sell</li>
            <li className="hover:border-2 p-1">Best Sellers</li>
            <li className="hover:border-2 p-1">Todays Deals</li>
            <li className="hover:border-2 p-1">Mobiles</li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
