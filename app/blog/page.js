
import "./Blog.css"
import "../globals.css"
import Rslider from "../components/Rslider"
import Blogcard from "../components/Blogcard"
export default function Planpage() {
  const imageList2 = [
    '/Assets/review.png',
   '/Assets/review.png',
 '/Assets/review.png',
  ]
  const blogs=[
     {
      title:'Mastering the art of cover letter',
      category:'Tips',
      image:'/Assets/i1.jpg',
   
    
    
    },
 {
      title:'How to Build a Resume That Stands Out',
      category:'Tips',
      image:'/Assets/blog1.png',
   
    
    
    }, {
      title:'How to Network Like a Pro in the ',
      category:'Insights',
      image:'/Assets/blog3.png',
   
    
    
    },
     {
      title:'How to Make a Hire-Worthy Profile',
      category:'Tips',
      image:'/Assets/i4.png',
   
    
    
    },
 {
      title:'Remote vs On-Site: What Suits You?',
      category:'Insight',
      image:'/Assets/i5.png',
   
    
    
    }, {
      title:'Freelancing 101: Get Your First Job',
      category:'Tips',
      image:'/Assets/i6.png',
   
    
    
    },
    
    
  
  
  ]
  return (
<div className="mainpage">
    <div className="breadcrumb bl-high">
    <a href="/">Home   </a>
    
    /
    <a href="/blog">  Our Blogs</a>
  </div>
 <h5 className='nomar'>Discover Insights and Tips <br /> for Your Future.</h5>
  <div className="blog-top">
    <img src="/Assets/blog.jpg" alt="" />
    <div className="bcard">
        <div className="bstatus">
            Technology
        </div>
        <h4>
            Top 5 Skills Clients Are Looking for in 2025Top 5 Skills Clients Are Looking for in 2025
        </h4>
        <p className="auth">     <img src="/Assets/auth.svg" alt="" />
        <strong>Jaoson Loo</strong>
  August 20, 2022</p>
    </div>
  </div>
  <div className="blogs">
    {blogs.map(val=>(
    <Blogcard blog={val} />
    ))}
  
  </div>
</div>



  
  )
}
