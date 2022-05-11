import React from "react";
import "../ResponsiveMenu/minimenu.css";

const Menu = () => {
  // return (
  //   <div>
  //     <div style={{ display: "flex" }}>
  //       <svg
  //         style={{ margin: "5%" }}
  //         width="30"
  //         height="40"
  //         viewBox="0 0 23 15"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           d="M0.625 14.7959H22.375V12.3792H0.625V14.7959ZM0.625 8.75423H22.375V6.33757H0.625V8.75423ZM0.625 0.295898V2.71257H22.375V0.295898H0.625Z"
  //           fill="#4BA4F0"
  //         />
  //       </svg>
  //       <div class="row" style={{ marginRight: "1rem", marginBottom: "30px" }}>
  //         <div>
  //           <div class="input-group sm-form form-1 right">
  //             <input
  //               style={{ borderRadius: "30px", marginRight: "100px" }}
  //               class="form-control my-0 py-1"
  //               type="text"
  //               placeholder="Search Here"
  //               aria-label="Search"
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <ul>
  //       <li>
  //         <a>All Products</a>
  //         <ul style={{ display: "flex", flexDirection: "column" }}>
  //           <li>
  //             <a href="#">Mobile Devices</a>
  //             <h6
  //               style={{
  //                 paddingTop: "15px",
  //                 color: "#4BA4F0",
  //                 fontWeight: "500",
  //                 fontSize: "18px",
  //               }}
  //             >
  //               Brands
  //             </h6>
  //             <p style={{ paddingTop: "15px" }}>
  //               <a href="#">Apple</a>
  //             </p>
  //             <p>
  //               <a href="#">Huawei</a>
  //             </p>
  //             <p>
  //               <a href="#">LG</a>
  //             </p>
  //             <p>
  //               <a href="#">Nokia</a>
  //             </p>
  //             <p>
  //               <a href="#">Samsung</a>
  //             </p>
  //             <a>
  //               <p style={{ fontSize: "15px" }}>see more</p>
  //             </a>
  //             <h6
  //               style={{
  //                 paddingTop: "240px",
  //                 color: "#4BA4F0",
  //                 fontWeight: "500",
  //                 fontSize: "18px",
  //               }}
  //             >
  //               Categories
  //             </h6>
  //             <p style={{ paddingTop: "15px" }}>
  //               <a href="#">Accessories</a>
  //             </p>
  //           </li>
  //           <li>
  //             <a href="#">Laptops</a>
  //             <p style={{ paddingTop: "85px" }}>
  //               <a href="#">Acer</a>
  //             </p>
  //             <p>
  //               <a href="#">Asus</a>
  //             </p>
  //             <p>
  //               <a href="#">Dell</a>
  //             </p>
  //             <p>
  //               <a href="#">HP</a>
  //             </p>
  //             <p>
  //               <a href="#">Lenovo</a>
  //             </p>
  //             <p>
  //               <a href="#">Mac</a>
  //             </p>
  //             <p>
  //               <a href="#">Microsoft Surface</a>
  //             </p>
  //             <a>
  //               <p style={{ fontSize: "15px" }}>see more</p>
  //             </a>
  //             <p style={{ paddingTop: "182px" }}>
  //               <a href="#">Accessories</a>
  //             </p>
  //           </li>
  //           <li>
  //             <a href="#">Tablets</a>
  //             <p style={{ paddingTop: "85px" }}>
  //               <a href="#">Acer</a>
  //             </p>
  //             <p>
  //               <a href="#">Apple</a>
  //             </p>
  //             <p>
  //               <a href="#">Asus</a>
  //             </p>
  //             <p>
  //               <a href="#">Huawei</a>
  //             </p>
  //             <p>
  //               <a href="#">Lenovo</a>
  //             </p>
  //             <p>
  //               <a href="#">LG</a>
  //             </p>
  //             <p>
  //               <a href="#">Microsoft</a>
  //             </p>
  //             <p>
  //               <a href="#">Samsung</a>
  //             </p>
  //             <a>
  //               <p style={{ fontSize: "15px" }}>see more</p>
  //             </a>
  //             <p style={{ paddingTop: "167px" }}>
  //               <a href="#">Accessories</a>
  //             </p>
  //           </li>
  //           <li>
  //             <a href="#">Game Consoles</a>
  //             <p style={{ paddingTop: "60px" }}>
  //               <a href="#">Nintendo Switch</a>
  //             </p>
  //             <p>
  //               <a href="#">Playstation 4</a>
  //             </p>
  //             <p>
  //               <a href="#">Playstation 5</a>
  //             </p>
  //             <p>
  //               <a href="#">PSP</a>
  //             </p>
  //             <p>
  //               <a href="#">Xbox</a>
  //             </p>
  //             <p>
  //               <a href="#">Xbox One</a>
  //             </p>
  //             <p>
  //               <a href="#">Xbox 360</a>
  //             </p>
  //             <a>
  //               <p style={{ fontSize: "15px" }}>see more</p>
  //             </a>
  //             <p style={{ paddingTop: "135px" }}>
  //               <a href="#">Accessories</a>
  //             </p>
  //           </li>
  //           <li>
  //             <a href="#">Audio</a>
  //             <p style={{ paddingTop: "85px" }}>
  //               <a href="#">Anker</a>
  //             </p>
  //             <p>
  //               <a href="#">Apple</a>
  //             </p>
  //             <p>
  //               <a href="#">Bang & Olufsen</a>
  //             </p>
  //             <p>
  //               <a href="#">Beats</a>
  //             </p>
  //             <p>
  //               <a href="#">Beno</a>
  //             </p>
  //             <p>
  //               <a href="#">Bose</a>
  //             </p>
  //             <p>
  //               <a href="#">JBL</a>
  //             </p>
  //             <p>
  //               <a href="#">Logitech</a>
  //             </p>
  //             <p>
  //               <a href="#">Samsung</a>
  //             </p>
  //             <p>
  //               <a href="#">Sony</a>
  //             </p>
  //             <a>
  //               <p style={{ fontSize: "15px" }}>see more</p>
  //             </a>
  //             <p style={{ paddingTop: "66px" }}>
  //               <a href="#">Accessories</a>
  //             </p>
  //             <p>
  //               <a href="#">Earphones</a>
  //             </p>
  //             <p>
  //               <a href="#">Headphones</a>
  //             </p>
  //             <p>
  //               <a href="#">Radio</a>
  //             </p>
  //             <p>
  //               <a href="#">Speakers</a>
  //             </p>
  //           </li>
  //           <li>
  //             <a href="#">Wearables</a>
  //             <p style={{ paddingTop: "85px" }}>
  //               <a href="#">Apple</a>
  //             </p>
  //             <p>
  //               <a href="#">Huawei</a>
  //             </p>
  //             <p>
  //               <a href="#">Samsung</a>
  //             </p>
  //             <a>
  //               <p style={{ fontSize: "15px" }}>see more</p>
  //             </a>
  //             <p style={{ paddingTop: "365px" }}>
  //               <a href="#">VR Headsets</a>
  //             </p>
  //             <p>
  //               <a href="#">Watch</a>
  //             </p>
  //             <p>
  //               <a href="#">Wristbands</a>
  //             </p>
  //           </li>
  //           <li>
  //             <a href="#">Others</a>
  //           </li>
  //         </ul>
  //       </li>
  //       <li>
  //         <a>Mobile Devices</a>
  //       </li>
  //       <li>
  //         <a>Laptops</a>
  //       </li>
  //       <li>
  //         <a>Tablets</a>
  //       </li>
  //       <li>
  //         <a>Game Consoles</a>
  //       </li>
  //       <li>
  //         <a>Audio</a>
  //       </li>
  //       <li>
  //         <a>Wearables</a>
  //       </li>
  //       <li>
  //         <a>Others</a>
  //       </li>
  //     </ul>
  //     {/* <div class="row" style={{marginRight:"1rem", marginBottom:"30px"}}>
  //               <div>
  //                   <div class="input-group sm-form form-1 right">
  //                       <input style={{borderRadius:"30px", marginRight:"100px"}} class="form-control my-0 py-1" type="text" placeholder="Search Here" aria-label="Search" />
  //                   </div>
  //               </div>
  //           </div> */}
  //   </div>
  // );
};

export default Menu;
