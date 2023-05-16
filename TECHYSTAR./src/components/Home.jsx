import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillInstagram, AiFillYoutube} from "react-icons/ai" 
const Home = () => {
  return (
  <> 
 <div className="home" id="home">
  <main>
    <h1>Techystar</h1>
    <p>Solution to all your problems</p>
  </main>
 </div>
 <div className="home2">
    <img src={vg} alt="graphics" />
   <div>
    <p>we are your and only solution to the   
        tech problems you face every day. we are leading tech company whose aim is to increase the problem solving ability in children.
         </p>
   </div> 
 </div>
 <div className="home3" id="about">
    <div>
        <h1>Who we are you ?</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores expedita velit esse delectus eius reprehenderit illum aliquid? Ipsum, minus accusantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus perferendis aut explicabo quasi dolor provident quibusdam aliquam aliquid culpa cum.   </p>
    </div>
 </div>

<div className="home4 " id="brands">
 <div>
  <h1>Brands</h1>
  <article>
  <div style={{animationDelay:"0.3s"}}>
    <AiFillGoogleCircle/>
    <p>Google</p>
  </div>
  <div style={{animationDelay:"0.5s"}}>
    <AiFillAmazonCircle/>
    <p>Amazon</p>
  </div>
  <div style={{animationDelay:"0.7s"}}>
    <AiFillInstagram/>
    <p>Instagram</p>
  </div>
  <div style={{animationDelay:"1s"}}>
    <AiFillYoutube/>
    <p>Youtube</p>
  </div>
</article>
</div>
</div>
    </>
  )
}

export default Home