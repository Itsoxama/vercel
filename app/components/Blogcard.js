
import './Blogcard.css'
import '../globals.css'

export default function Blogcard({blog}) {

  return (
   <div className="blog-card">
    <img src={blog.image} alt="" />
    <div className="blog-tag">
        {blog.category}
    </div>
    <h4>{blog.title}</h4>
    <a href="">Learn More <img src="/Assets/got.png" alt="" /> </a>
 
   </div>
    
  );
}
