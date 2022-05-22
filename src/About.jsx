import React  from "react";
import Navbar from "./Navbar";
function About()
{
    return(
        <>
        <Navbar/>
        <h1 className="text-center">About Us</h1><br/>
        <br/>
        <div id="demo" className="carousel slide" data-ride="carousel">
   
   <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
    <li data-target="#demo" data-slide-to="3"></li>
  </ul>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://ae.top10place.com/img_files/544310135608123" alt="JSSPS" height="900" width="100%"></img>
      </div>
      <div className="carousel-item">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/16/b5/01/restaurant-ambience.jpg?w=800&h=600&s=1" alt="Anagha" height="900" width="100%"></img>
        </div>
        <div className="carousel-item">
          <img src="https://lh3.googleusercontent.com/-2VYxNJOaXco/V66_IS86G0I/AAAAAAAACBo/9Unjk5dHAvA/s640/blogger-image-1216268931.jpg" alt="Class" height="900" width="100%"></img>
          </div>
          <div className="carousel-item">
            <img src="https://spoonforklovenet.files.wordpress.com/2017/06/befunky-collage2.jpg?w=775" alt="rewards" height="900" width="100%"></img>
            </div>
</div>

<a className="carousel-control-prev" href="#demo" data-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</a>
<a className="carousel-control-next" href="#demo" data-slide="next">
  <span className="carousel-control-next-icon"></span>
</a>

</div>

<br/><br/>
<h1 className="text-center">Our Story</h1>
        <p className="text-center">With every bite, there is a tale from the delecasies of the indian origion or back in time to the Mughal Empire.<br/>
         Every dish has a story to tell. Ours is one of authenticity.<br/>
          We offer authentic Asian dining experience from the rich flavors of India to the streets of the Far East.<br/>
           With original recipes, using organic spices and employing indigenous techniques, we guarantee impeccable service and hospitality.


 A brain child of the owner Ms. Vishaka Suresh.<br/>
  It started with the vision of bringing the culinary treasures of his homeland, India, to the residents of Dubai.<br/>
   Over the years, we gradually incorporated cuisines and added to the catering service.<br/>
    Indian Foods is a family of dedicated professionals<br/>
     who are steadfast in providing a rich cultural experience through the dishes we serve with passion and commitment.</p><br/><br/>
     
     
        </>
    );
}
export default About;