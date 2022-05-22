import React from "react";
import Navbar from "./Navbar";
function Home()
{
    return(
        <>
        <Navbar/>
            <br/>
    <div className="card-deck">
      <div className="card">
        <div className="card-body">
<form method="post" className="was-validated">
  <div className="form-group" style={{width:"400px"}}>
    <label for="name">Name: </label>
    <input type="text" className="form-control" name="name" placeholder="Enter your Name here" required/>
    <div className="valid-feedback">Correct Name</div>
    <div className="invalid-feedback">Please enter your Name</div>
  </div>
  <div className="form-group" style={{width:"400px"}}>
      <label for="EMAIL">Email: </label>
      <input type="email" className="form-control" name="EMAIL" placeholder="Enter your email here" required/>
      <div className="valid-feedback">Correct Email</div>
      <div className="invalid-feedback">Please write proper email</div>
  </div>
  <div className="form-group" style={{width:"400px"}}>
    <label for="Phone">Phone: </label>
    <input type="number" className="form-control" name="Phone" placeholder="Enter your Phone number here" required/>
    <div className="valid-feedback">Correct phone number</div>
    <div className="invalid-feedback">Please enter your phone number</div>
  </div>
  <div className="form-group" style={{width:"400px"}}>
    <label for="PAS">Message: </label>
    <input type="textarea" className="form-control" name="PAS" placeholder="Enter your Password here" required/>
    <div className="valid-feedback">Thank You for letting us know</div>
    <div className="invalid-feedback">Please type if you have any suggestions</div>
  </div>
  <div className="form-group form-check">
    <label for="nm" className="form-check-label">
      <input type="checkbox" className="form-check-input" name="nm" required/>Do you agree to our terms and conditions
      <div className="valid-feedback">Thank You for accepting our terms and conditions</div>
      <div className="invalid-feedback">Please agree to our terms and conditions before proceeding</div>
    </label>
    
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
  <button type="reset" className="btn btn-warning">Clear</button>
</form>
</div>
</div>
<div className="card">
  <div className="card-body text-center" style={{color:"brown"}}>
    <h1><b>Healthy Food Recipies</b><br/><br/>
    <img src="https://static.toiimg.com/photo/81995088.cms" height="600" width="700"></img>
    </h1>
    <br/><br/>
  </div>
</div>
</div>
<br/><br/>
<h1 className="text-center" style={{color:"brown"}}>FoodPackages</h1>

    <div className="card-deck">
      
      <div className="card bg-secondary">
        <div className="card-body text-center">
          <img src="https://thehiddenveggies.com/wp-content/uploads/2017/03/chickpea-salad-sq-1.jpg" height="400" width="300"></img>
        </div>
      </div>
      
      <div className="card bg-warning text-white">
        <div className="card-body text-center">
          <img src="https://i.pinimg.com/originals/c6/d7/f1/c6d7f105e8a701286348c86290d42579.jpg" height="400" width="300"></img>
          </div>
      </div>
      
      <div className="card bg-secondary">
        <div className="card-body text-center">
          <img src="https://www.cookwithmanali.com/wp-content/uploads/2016/04/Moong-Dal-Khichdi.jpg" height="400" width="300"></img>
        </div> 
      </div>
      </div>
    
    <div className="card-deck">
      
      <div className="card bg-secondary">
        <div className="card-body text-center">
          <p className="card-text"><b>Chickpea Salad</b><br/>
          Chickpea salad, sometimes called hummus salad (Arabic: سلطة حمص), using the Arabic word for 'chickpea', is an salad in Arab cuisine.<br/>
           It consists of whole cooked chickpeas, lemon juice, garlic, tahini, salt, olive oil, and cumin.<br/>
          Variants may include coriander, sweet paprika, turmeric, pepper, chopped mint, chopped onions, or parsley.<br/>
          Chickpea salad is eaten by vegans worldwide.<br/>
        </p>
        </div>
      </div>
     
      <div className="card bg-warning text-white">
        <div className="card-body text-center">
          <p className="card-text"><b>Indian Dumplings</b><br/>
          In Asian cuisines, dumplings are delicate, bite-sized treats of different fillings wrapped in a thin layer of dough.<br/>
           They can be both savoury and sweet, and may be boiled, steamed and fried - the choice is yours! Known as jiaozi to the Chinese or gyoza to the Japanese -<br/>
            the dumpling is a popular Asian cuisine to many, regularly consumed and enjoyed.<br/>
          The dumpling dough is made of three main ingredients: flour, water and salt.<br/>
           But which flour you use depends on which dumpling you want to make.<br/>
            While most dumplings can be made using a standard ‘dumpling’ or ‘wheat’ flour, Har Gau (Chinese shrimp dumplings) are made with a mix of wheat and tapioca starch -<br/>
             and that’s just the start! In terms of the filling, dumplings are great because they are versatile, much like the Bao Bun.<br/>
              Whether you have a sweet tooth - or if you prefer a more savoury snack, you can make your dumpling to suit your taste and mood!<br/>
           </p>
        </div>
      </div>
      
      <div className="card bg-secondary">
        <div className="card-body text-center">
          <p className="card-text"><b>Khichdi</b><br/>
          Khichdi or Khichri is a dish in South Asian cuisine made of rice and lentils (dal),<br/>
           but other variations include bajra and mung dal khichri. In Indian culture, in several regions,<br/>
            especially in the northern areas, it is considered one of the first solid foods that babies eat.<br/>
             Hindus, mainly from north/northwest, who avoid eating grains during fasting, eat Sabudana khichri made from sago.<br/>
              In the southern part of India, however, the word khichri is not that popular.<br/>
               While people of Tamil Nadu and Andhra regions cook Pongal, and Kannadigas prepare Huggi which is mung dal Khichidi and Bisi bele bhath,<br/>
                a pigeon pea variation with vegetables, Keralites have no similar dish. <br/>
                Khichri is a salty porridge. Dalia is another similar sweet porridge made from the crushed wheat or barley mixed with sugar and milk.<br/>
Khichdi was the inspiration for Anglo-Indian kedgeree and was said to be related to the Egyptian koshary, though the latter has more Italian influence.<br/>
            <br/>
        </p>
        </div> 
      </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <h1 className="text-center" style={{color:"brown"}}>3 Steps to Healthy Eating</h1>
     
    <div className="card-deck">
      
      <div className="card bg-warning">
        <div className="card-body text-center">
          <p className="card-text"><b>1.</b><br/>
          Avoid foods with lots of solid fats.<br/>
           Choose lean meats over processed.<br/>
           Try grilling, steaming, broiling or baking, instead of frying.<br/>
            Switch to fat-free or low-fat dairy, and choose healthier cooking oils.<br/>
        </p>
        </div>
      </div>
      
      <div className="card bg-secondary text-white">
        <div className="card-body text-center">
          <p className="card-text"><b>2.</b><br/>
          Stick to drinks and foods with no added sugars.<br/>
           Water, skim milk or carbonated plain water with a slice of fresh fruit are good choices.<br/>
            Opt for fresh fruit when you want something sweet, and check labels to avoid added sugars.<br/>
           </p>
        </div>
      </div>
      
      <div className="card bg-warning">
        <div className="card-body text-center">
          <p className="card-text"><b>3.</b><br/>
          Limit salt by reading food labels.<br/>
           Season with herbs instead.<br/>
            Watch for sodium in packaged foods, breads, canned vegetables and soups.<br/>
        </p>
        </div> 
      </div>
      </div>   
      <br/><br/><br/>
      <br/>
      <button type="button" className="btn btn-dark" data-toggle="collapse" data-target="#demo">Click here to see one of the comments that was given to our resaurant.</button>

    <div id="demo" className="collapse">
      <h4>Vidhi Doshi</h4>
    Wanted to visit another restaurant but due to a long wait list ended up here, and the best decision in terms of restaurant so far.<br/>
           It is hands down the best veg italian food in dubai. From the options to the quality to ths quantity and the price and service as well.<br/>
            We were very very very pleased with everything.<br/>
The service- even if it was their closing time they did not rush anything with us. Polite staff and very helpful.<br/>
The ambiance- very calm and beautiful.<br/>
The food- we ordered the four cheese fondue, the spinach rice with paprika sauce, hand made ravioli and mediteranean pizza.<br/>
 The food was amazing. Everything was delicious specially the spinach rice and the fondue..<br/>
 the price range is great as it matches the quantity they serve and is very nomical compared to other italian restaurants in town.<br/>
Thank u team we had a great time and will surely visit again....<br/>
      </div>
        </>
    );
}
export default Home;