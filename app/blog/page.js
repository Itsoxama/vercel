
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
      image:'/Assets/blog1.png',
   
    
    
    },
 {
      title:'Mastering the art of cover letter',
      category:'Tips',
      image:'/Assets/blog1.png',
   
    
    
    }, {
      title:'Mastering the art of cover letter',
      category:'Tips',
      image:'/Assets/blog3.png',
   
    
    
    },   {
      title:'Mastering the art of cover letter',
      category:'Tips',
      image:'/Assets/blog1.png',
   
    
    
    },
 {
      title:'Mastering the art of cover letter',
      category:'Tips',
      image:'/Assets/blog1.png',
   
    
    
    }, {
      title:'Mastering the art of cover letter',
      category:'Tips',
      image:'/Assets/blog3.png',
   
    
    
    },
  
  
  ]
  return (
<div className="mainpage">
  <h5>Discover Insights and Tips for Your Future.</h5>
  <div className="blog-top">
    <img src="/Assets/blog.jpg" alt="" />
    <div className="bcard">
        <div className="bstatus">
            Technology
        </div>
        <h4>
            Top 5 Skills Clients Are Looking for in 2025Top 5 Skills Clients Are Looking for in 2025
        </h4>
        <p>August 20, 2022</p>
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
