
import './Footer.css'
import '../globals.css'
export default function Footer() {

  return (
    <div className="footer">
       <div className="subfooter">
         <img src="/Assets/flogo.png" alt=""/>
         <div className="col1">
            <h4>Company</h4>
            <a href="/about"> About Us</a>
             <a href="/plan"> Plans</a>
        </div>
           <div className="col1">
            <h4>Resources</h4>
               <a href="/blog">Our Blog</a>
             <a href="/about"> About Us</a>
         </div>
           <div className="col1">
            <h4>Community</h4>
            <a href="/terms-and-conditions"> Terms & Conditions</a>
            <a href="/privacy"> Privacy Policy</a>
         </div>
       </div>
       <div className="socialfooter">
        <h4>©  Copyright 2025 All Right Reserved. City Force LLC</h4>
        <div className="social">
                    <img src="/Assets/abtn.png" alt=""/>
                            <img src="/Assets/gbtn.png" alt=""/>
        </div>
        <div className="social-icons">
          <a href="">  <img src="/Assets/1.svg" alt=""/></a>
             <a href="">  <img src="/Assets/2.svg" alt=""/></a>
             <a href="">  <img src="/Assets/3.svg" alt=""/></a>
             <a href="">  <img src="/Assets/4.svg" alt=""/></a>
            
        </div>
       </div>
     
    </div>
    
  );
}
