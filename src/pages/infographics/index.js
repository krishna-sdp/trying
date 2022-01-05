import React from "react";
import { resourcesData } from "../../data/resources";
import Link from "next/link";
import Tab from "../../components/Resources/Tab";

export default function index() {
    return <Tab title="Infographics"/>
    // return (
    //     <div className="container-wrap">
    //         <div className="content-page pb5">
    //             <section className="resources-page pb2">
    //                 <h1 className="heading-hai regular-font main-heading-animation">Infographics</h1>
    //                 <section>
    //                     <div className="tabs  center ">
    //                         <div className="tabs__menu flex mb5 ">
    //                             <div
    //                                 for="section1"
    //                                 className="tabs__menu-item tc pr5 bg-white pt4 pb2 bg-animate hover-bg-white pointer "

    //                             >
    //                                 <Link href="/resources">
    //                                     <a className="tab-label active-tab pb2 ph2 regular-font">
    //                                         All
    //                                     </a>
    //                                 </Link>

    //                             </div>
    //                             <div
    //                                 for="section2"
    //                                 className="tabs__menu-item  tc pr5 pt4 pb2 bg-animate hover-bg-white pointer"
    //                             >

    //                                 <Link href="/blogs">
    //                                     <a className="tab-label  pb2 ph2 regular-font">
    //                                         Blog
    //                                     </a>
    //                                 </Link>

    //                             </div>
    //                             <div
    //                                 for="section3"
    //                                 className="tabs__menu-item  tc pr5 pt4 pb2 bg-animate hover-bg-white pointer"
    //                             >

    //                                 <Link href="/whitepapers">
    //                                     <a className="tab-label  pb2 ph2 regular-font">
    //                                         Whitepaper
    //                                     </a>
    //                                 </Link>
    //                             </div>
    //                             <div
    //                                 for="section3"
    //                                 className="tabs__menu-item  tc pr5 pt4 pb2 bg-animate hover-bg-white pointer"
    //                             >

    //                                 <Link href="/infographics">
    //                                     <a className="tab-label  pb2 ph2 regular-font">
    //                                         Infographics
    //                                     </a>
    //                                 </Link>
    //                             </div>
    //                         </div>
    //                         <div className="tabs__content pt4">
    //                             <div class=" center ">
    //                                 <div class="cf margin-5 " >
    //                                     {
    //                                         resourcesData.map((item, index) =>
    //                                             <div class="fl w-100 w-third-ns ph3 pv4" >
    //                                                 <article class="bg-white">
    //                                                 <Link href="/resources/infographics/infographic-1">
    //                                                     <img
    //                                                         src={`/assets/images/resources/${item.image}`}
    //                                                         class="w-100 db"
    //                                                         alt="Closeup photo of a tabby cat yawning."
    //                                                     />
    //                                                     </Link>
    //                                                     <div class="pt3 blog-title" >
    //                                                         <h2 className="medium-font" data-aos="fade-right">{item.tags}</h2>
    //                                                         <p className="blog-title regular-font" >
    //                                                             {item.subheading}
    //                                                         </p>
    //                                                         <small class="name db  semibold-font black">{item.name}</small>
    //                                                         <p className="time-done regular-font" >{item.time}</p>
    //                                                     </div>
    //                                                 </article>
    //                                             </div>
    //                                         )
    //                                     }
    //                                     {/* {[...Array(10)].map((elementInArray, index) => (
    //                   <div class="fl w-100 w-third-ns ph3 pv4">
    //                     <article class="bg-white   ">
    //                       <img
    //                        src="http://placekitten.com/g/600/300"
    //                         class="w-100 db"
    //                         alt="Closeup photo of a tabby cat yawning."
    //                       />
    //                       <div class="pt3 blog-title">
    //                         <h2 className="medium-font">MANAGING PARTNER</h2>
    //                         <p  className="blog-title regular-font">
    //                           5 Pillars of Effective Landing Page Design
    //                         </p>
    //                         <small class="name db  semibold-font black">Sheell Desae</small>
    //                         <p className="time-done regular-font">10 MIN AGO</p>
    //                       </div>
    //                     </article>
    //                   </div>
    //                 ))} */}
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </section>
    //             </section>
    //         </div>
    //     </div>
    // );
}
