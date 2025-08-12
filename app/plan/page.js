
import "./Plan.css"
import "../globals.css"
import Rslider from "../components/Rslider"
import { getPaymentPlans } from "../../lib/api"
import Planslider from "../components/Planslider"
export default async function Planpage() {

const paymentData=await getPaymentPlans()


  const imageList2 = [
    '/Assets/image.png',
       '/Assets/image2.png',
          '/Assets/image3.png',
  ]
  return (
<div className="mainpage">
  <div className="planinfo">
    <div className="planinfo1">
      <h4>Power Up Your Hiring With <span className="bl-high">
        Premium Plans</span></h4>
      <p>Gain access to exclusive hiring tools and premium features designed to streamline your recruitment process. Our tailored subscription plans help you find top talent faster, manage job postings efficiently, and enhance your employer brand—all while saving time and effort.
      </p>
      <button>Explore Plans</button>
    </div>

 <div className="planinfo2">
     <img src="/Assets/plan.png" alt="" />
    </div> 
     </div>

     <div className="discover">
      <div className="dis-top">
        <h4>Discover the Benefits of Our Subscription Plans</h4>
        <p>Our premium plan offers priority job placement, unlimited listings, and AI-powered candidate filtering. Simplify hiring with automated tracking, custom branding, and bulk emails. Plus, enjoy priority support and advanced job matching to find the best candidates faster.

        </p>
      </div>
      <div className="dis-card">
<div className="dis-item">
Priority Job Placement – Get noticed by top talent quickly.
</div>
<div className="dis-item">
Custom Branding – Showcase your company’s identity.
  </div>

<div className="dis-item">

Unlimited Listings – Post as many jobs as you need.
        
  </div>
  <div className="dis-item">
Bulk Emails – Reach candidates in bulk.
  </div>
<div className="dis-item">
Advanced Filtering – Filters to shortlist the best candidates.
  </div>

<div className="dis-item">
Better Matching – Find top candidates faster.
  </div>
<div className="dis-item">
Automated Tracking – Simplify your hiring process.
  </div>


<div className="dis-item">
Priority Support – Quick, expert assistance.
  </div>








      </div>

     </div>
<h5>Best Plans <span className="bl-high">

  For You</span></h5>


  <div className="plan-cards hideonmob"  >


    {paymentData.planData.data.slice(0, 3).map(val=>(
  <div className="plancard">
    {
      //<h4>{val.name}</h4>
    }  
    <h4>Monthly Plan</h4>
      <p>Billing Cycle: Every Month</p>
      <div className="plan-bbreak">

      </div>
      <h5>${val.price} <span>/month</span></h5>
      <h3>Features</h3>

      {val.features.map(val2=>(



   <div className="litem">
        <div className="crc">

        </div>
                        <p dangerouslySetInnerHTML={{ __html: val2}} />


      </div>
      ))}
    
    
    
      <a href="https://cfs.infibrain.com/Employee/Login">Choose Plan</a>
    </div>
    ))}
  
  </div>
  <div className="plan-cards hideondes">

    <Planslider plans={paymentData.planData.data.slice(0, 3)} />
  </div>
    <div className="planinfo reverse">
    <div className="planinfo1">
      <h4>Our <span className="bl-high">
        Premium</span> Features in Action</h4>
      <p>Our premium plan is packed with features that streamline the recruitment process from start to finish. With unlimited job listings, AI-driven candidate filtering, and automated application tracking, you can focus on what matters most—finding the perfect candidate. 

      
      </p>
      <p>The intuitive design makes it easy to post jobs, manage applications, and stay connected with top talent. Take a look at the screens below to see how our premium tools can transform your hiring experience and help you attract the best candidates with ease.

      </p>
     
    </div>

 <div className="planinfo2 ">
     <img src="/Assets/pre.png" alt="" />
    </div> 
     </div>
      <Rslider images={imageList2} />
</div>



  
  )
}
