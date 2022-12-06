// import { Link } from "react-router-dom";
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { NavParent, KetoIcon, LeftItems, RightItems, DropDown, WhatappIcon, SearchIcon, Fundraiser } from "../../StyledComponents/NavBar/NavParent";
// import styles from "../NavBar/NavBar.module.css";
// import stylesp from "../NavBar/Profile.module.css"
// import { Profile } from "./Profile";
// import { debounce } from "lodash";
// import { useState } from "react";

// export function Sticky({ user }) {


//     let st = JSON.parse(localStorage.getItem("user"))
//     var u;
//     if (st) {
//         u = st.email;

//     }


//     const defaultHeaderClassName = "main_h";
//   const [headerClassName, setHeaderClassName] =useState(
//     defaultHeaderClassName
//   );
//   const [showHeader, setShowHeader] = useState(false);
//   const [isOpened, setIsOpened] = useState(false);

//   const didScrollPage = (e) => {
//     const headerStickyOffset = 100;
//     if (window.scrollY > headerStickyOffset) {
//       setShowHeader(true);
//     } else {
//       setShowHeader(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", debounce(didScrollPage, 0));

//     return () => {
//       window.removeEventListener("keydown", didScrollPage);
//     };
//   }, []);

//   const onClickMobileMenu = (e) => {
//     setIsOpened(!isOpened);
//   };

//  useEffect(() => {
//     setHeaderClassName(
//       `main_h ${showHeader ? "sticky" : ""} ${isOpened ? "open-nav" : ""}`
//     );
//   }, [isOpened, showHeader]);


//     //console.log(user);
//     return (
//         <>
//             <LeftItems>
//                 <div>


//                     <header className={headerClassName}>
//         <div className="row  flex">
//           <div>
//             <KetoIcon>
//                         <Link to="/">
//                             <div >
//                                 <img src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?w=70&dpr=1.0" alt="Keto_logo" />
//                             </div>
//                         </Link>
//                     </KetoIcon>
//           </div>

//           <div className="mobile-toggle" onClick={onClickMobileMenu}>
//             <span />
//             <span />
//             <span />
//           </div>

//           <nav>
//             <div className=" ">
//               <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 relative ">
//                 <div className=" flex items-center">
//                   <img src={air} alt="" className=" w-6" />
//                   <span className="pl-1 text-cyan-900 ">Flight</span>
//                 </div>

//                 <div className=" flex items-center">
//                   <img src={hotel} alt="" className="w-6" />
//                   <span className="pl-1 text-cyan-900 ">Hotel</span>
//                 </div>

//                 <div className=" flex items-center">
//                   <img src={tour} alt="" className="w-6" />
//                   <span className="pl-1 text-cyan-900 ">Tour</span>
//                 </div>
//               </div>
//               <div>
//                 {user ? (
//                   <div className=" flex items-center">
//                     <Link to="/profile" className=" font-medium">
//                       Profile
//                     </Link>
//                     <button
//                       onClick={logout}
//                       className=" text-cyan-900 font-medium ml-2"
//                     >
//                       Sign out
//                     </button>
//                   </div>
//                 ) : (
//                   <button
//                     onClick={toggleLogin}
//                     className=" bg-cyan-900 py-1 sm:py-2 px-2 sm:px-3 rounded text-white hover:bg-cyan-900 hover:border-cyan-900 border transition-all ease-in duration-300 hover:text-white"
//                   >
//                     <h6>Sign in</h6>
//                   </button>
//                 )}
//               </div>
//               {isLoginComponentOpen && (
//                 <Login toggleLogin={toggleLogin} setUser={setUser} />
//               )}
//             </div>
//           </nav>
//         </div>
//       </header>

//                     <KetoIcon>
//                         <Link to="/">
//                             <div >
//                                 <img src="https://ketto.gumlet.io/assets/images/logo-light-bg.svg?w=70&dpr=1.0" alt="Keto_logo" />
//                             </div>
//                         </Link>
//                     </KetoIcon>

//                     <div >
//                         <Link to="/browse">Browse Fundraisers</Link>
//                     </div>

//                     <div>
//                         <DropDown>
//                             <div className={styles.parent}>
//                                 <span> Fundraise For</span>
//                             </div>
//                             <div id={styles.hidden} >

//                                 <Link to="/browse">
//                                     <p  >Medical Treatment</p>
//                                     <p  >NGO / Charity</p>
//                                     <p >Other Cause</p>

//                                 </Link>



//                             </div>
//                             <div>
//                                 {/* <img src="https://pics.freeicons.io/uploads/icons/png/20305395141540882611-512.png" alt="DropDown-Icon" /> */}
//                                 <i className="fas fa-caret-down"></i>

//                             </div>
//                         </DropDown>
//                     </div>
//                     <div>
//                         <Link to="/howitworks">
//                             How It Works
//                         </Link>

//                     </div>

//                     <div>
//                         |
//                     </div>
//                     <SearchIcon >
//                         <div>
//                             <div className={styles.searchIconNav}>
//                                 <i class="fas fa-search"></i>
//                             </div>
//                             <div>
//                                 <span>Search</span>
//                             </div>
//                         </div>
//                     </SearchIcon >
//                 </div>
//             </LeftItems>
//             <RightItems>
//                 <div>
//                     <WhatappIcon>
//                         <div>
//                             <div>
//                                 <img src="https://pngimg.com/uploads/whatsapp/whatsapp_PNG95154.png" alt="WhatsApp Icon" />
//                             </div>
//                             <div>
//                                 <span>Chat</span>
//                             </div>
//                         </div>
//                     </WhatappIcon>
//                     <Fundraiser>
//                         <div>
//                             <Link to="/browse">
//                                 Start a Fundraiser
//                             </Link>

//                         </div>
//                     </Fundraiser>
//                     {
//                         user ?
//                             <div className={stylesp.profile}>
//                                 <Profile name={u} />
//                             </div> :
//                             <div>
//                                 <Link to="/login">
//                                     Sign in

//                                 </Link>
//                             </div>
//                     }



//                 </div>
//             </RightItems>
        
//         </>
//     )
// }