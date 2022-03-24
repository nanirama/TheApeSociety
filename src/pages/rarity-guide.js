import React from "react";
import {Link } from "gatsby";
import Layout from "../components/layout";

import Logo from "../assets/images/logo.png";
import JoannesIcon from "../assets/images/joannes-icon.png";
import Icon1 from "../assets/images/crown-icon.png";


function RarityGuidePage() {
  return (
    <Layout>
     

      <section className="flex">
        
      <div className="w-full max-w-4xl mx-auto">
        <div className="rarity_bg w-full py-3 px-4">
        <div className="flex items-center justify-between">      
        <Link to="/">
        <img
          alt=""
          className="w-32"
          src={Logo}
        />
        </Link>
        <img
          alt=""
          className="w-12"
          src={JoannesIcon}
        />
        </div>
<div className="text-center mb-5">
    <h2 className="text-2xl mb-3">Rarity Guide</h2>
<h5>Attributes</h5>
    </div>

    <div className="flex md:flex-row flex-col">
      <div className="lg:w-1/3 w-full px-3">
<h6 className="mb-4">Hats</h6>

<div className="flex flex-wrap">
<div className="icon md:w-1/2 w-full mb-4 flex items-center text-sm leading-tight"> 
<img alt="" className="border-2 mr-2" src={Icon1}/>
crown<br/>0.50%  
</div>
<div className="icon md:w-1/2 w-full mb-4 flex items-center text-sm leading-tight"> 
<img alt="" className="border-2 mr-2" src={Icon1}/>
Feather Hat<br/>0.50%  
</div>
<div className="icon md:w-1/2 w-full mb-4 flex items-center text-sm leading-tight"> 
<img alt="" className="border-2 mr-2" src={Icon1}/>
Halo<br/>0.50%  
</div>

</div>


      </div>


      <div className="lg:w-1/3 w-full px-3">
<h6>Hats</h6>
      </div>

      <div className="lg:w-1/3 w-full px-3">
<h6>Hats</h6>
      </div>









      </div>


            </div>
        
        </div>
      





      </section>

      
    </Layout>
  );
}

export default RarityGuidePage;
