// import React, { useState, useEffect } from 'react';
// import "./Navbar.css";
// import Home from '../SideBar/Home';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [click, setClick] = useState(false);

//     // Effect to disable scroll when sidebar is open
//     useEffect(() => {
//         if (click) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'unset';
//         }
//     }, [click]);

//     const toggleSidebar = () => {
//         setClick(!click);
//     };

//     const menu = (
//         <svg xmlns="http://www.w3.org/2000/svg" style={{marginTop: "10px", marginLeft: "30px"}} width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
//             <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
//         </svg>
//     );

//     return (
//         <div>
//             <div className='con1 bg-dark' style={{ color: {} }}>
//                 <h5 onClick={toggleSidebar}>{menu}</h5>
//                 <nav className="navbar navbar-expand-lg ">
//                     <div className="container-fluid bg-dark">
//                         <div className="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
//                             <form className="d-flex bg-dark" role="search">
//                                 <input className="form-control me-2 bg-dark" type="search" placeholder="Search" aria-label="Search" style={{color: "white", borderRadius: "30px"}} />
//                                 <button className="btn btn-outline-success" type="submit" style={{color: "white", borderRadius: "30px", padding: "0px !important", margin: "0px !important", height: "40px", border: "1px solid "}}>Search</button>
//                             </form>
//                         </div>
//                     </div>
//                 </nav>
//             </div>
            
//             <div className='mainContainer'>
//                 <div style={{ height: '50vh', position: 'absolute' }}></div>
//                 {
//                     click && (
//                         <div className='minicon1' style={{ position: 'absolute' }} >
//                             <h6 className='h6h'><Link className='h5h' to="/"  >Home</Link></h6>
//                             <h6 className='h6h'><Link className='h5h' to="/about">About</Link></h6>
//                             <h6 className='h6h'> <Link className='h5h' to="/contact">Contact</Link></h6>
//                         </div>
//                     )
//                 }
//             </div>
//          </div>
//     );
// };

// export default Navbar;



import React, { useState, useEffect, useRef } from 'react';
import "./Navbar.css";
// import Home from "../SidebarComponents/Home";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const sidebarRef = useRef(null);    

    useEffect(() => {
        // Function to handle clicks outside the sidebar
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setClick(false);
            }
        };

        // Attach event listener to the document body
        document.body.addEventListener('click', handleClickOutside);

        // Cleanup function to remove the event listener
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

    // Effect to disable scroll when sidebar is open
    useEffect(() => {
        if (click) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [click]);

    const toggleSidebar = (event) => {
        // Prevent click event propagation
        event.stopPropagation();
        setClick(!click);
    };

    const menu = (
        <svg xmlns="http://www.w3.org/2000/svg" style={{marginTop: "10px", marginLeft: "30px"}} width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
    );

    return (
        <div>
            <div className='con1 bg-dark' style={{ color: {} }}>
                <h5 onClick={toggleSidebar}>{menu}</h5>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid bg-dark">
                        <div className="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
                            <form className="d-flex bg-dark" role="search">
                                <input className="form-control me-2 bg-dark" type="search" placeholder="Search" aria-label="Search" style={{color: "white", borderRadius: "30px"}} />
                                <button className="btn btn-outline-success" type="submit" style={{color: "white", borderRadius: "30px", padding: "0px !important", margin: "0px !important", height: "40px", border: "1px solid "}}>Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            
            <div className='mainContainer'>
                <div style={{ height: '50vh', position: 'absolute' }}></div>
                {
                    click && (
                        <div ref={sidebarRef} className='minicon1' style={{ position: 'absolute' }} >
                            <h6 className='h6h'><Link className='h5h' to="/"  >Home</Link></h6>
                            <h6 className='h6h'><Link className='h5h' to="/about">About</Link></h6>
                            <h6 className='h6h'> <Link className='h5h' to="/contact">Contact</Link></h6>
                        </div>
                    )
                }
            </div>
         </div>
    );
};

export default Navbar;

// import React, { useState, useEffect, useRef } from 'react';
// import "./Navbar.css";
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     const [click, setClick] = useState(false);
//     const sidebarRef = useRef(null);

//     useEffect(() => {
//         // Function to handle clicks outside the sidebar
//         const handleClickOutside = (event) => {
//             if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//                 setClick(false);
//             }
//         };

//         // Attach event listener to the document body
//         document.body.addEventListener('click', handleClickOutside);

//         // Cleanup function to remove the event listener
//         return () => {
//             document.body.removeEventListener('click', handleClickOutside);
//         };
//     }, []);

//     // Effect to disable scroll when sidebar is open
//     useEffect(() => {
//         if (click) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'unset';
//         }
//     }, [click]);

//     const toggleSidebar = (event) => {
//         // Prevent click event propagation
//         event.stopPropagation();
//         setClick(!click);
//     };

//     const menu = (
//         <svg xmlns="http://www.w3.org/2000/svg" style={{ marginTop: "10px", marginLeft: "30px" }} width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
//             <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
//         </svg>
//     );

//     return (
//         <div>
//             <div className='con1 bg-dark' style={{ color: {} }}>
//                 <h5 onClick={toggleSidebar}>{menu}</h5>
//                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//                     <div className="container-fluid">
//                         <form className="d-flex mx-auto">
//                             <input className="form-control me-3" type="search" placeholder="Search" aria-label="Search" style={{ borderRadius: "30px" }} />
//                             <button className="btn btn-outline-success" type="submit" style={{ borderRadius: "30px" }}>Search</button>
//                         </form>
//                     </div>
//                 </nav>
//             </div>

//             <div className='mainContainer'>
//                 <div style={{ height: '50vh', position: 'absolute' }}></div>
//                 {
//                     click && (
//                         <div ref={sidebarRef} className='minicon1' style={{ position: 'absolute' }} >
//                             <h6 className='h6h'><Link className='h5h' to="/"  >Home</Link></h6>
//                             <h6 className='h6h'><Link className='h5h' to="/about">About</Link></h6>
//                             <h6 className='h6h'> <Link className='h5h' to="/contact">Contact</Link></h6>
//                         </div>
//                     )
//                 }
//             </div>
//         </div>
//     );
// };

// export default Navbar;

