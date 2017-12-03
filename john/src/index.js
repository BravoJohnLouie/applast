  import React from 'react';
  import ReactDOM from 'react-dom';

  var first = ( 
      <div className='body'>
 <img className="cover" alt="" src="image/cover.png"/>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
      </div>
      );
    ReactDOM.render(first,document.getElementById('root'));  


function Appetizers(){
    let appetite = (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
    
      <div className="d">
      <button className="appetizer1" onClick={BuffaloChickenDip}>Buffalo Chicken Dip</button>
      <button className="appetizer2" onClick={Pepper}>Pepper Poppers</button>
      <button className="appetizer3" onClick={Homemade}>Homemade GuaCamole</button>
      <button className="appetizer4" onClick={Glaze}>Glaze Chicken Wings</button>
      <button className="appetizer5" onClick={CucumberStuff}>Cucumber-Stuff Cherry Tomatoes</button>
      <button className="appetizer6" onClick={HoneyGarlic}>Honey-Garlic Glaze Meatballs</button>
      <button className="appetizer7" onClick={Savory}>Savory Party Bread</button>
      <button className="appetizer8" onClick={Avocado}>Avocado Salsa</button>
      <button className="appetizer9" onClick={Fiest}>Fiest Pinwheels</button>
      <button className="appetizer10" onClick={Championship}>Championship Bean Din</button>
</div>
    </div>
      );
      ReactDOM.render(appetite,document.getElementById('root'));
};

function Famous(){
    let Dishes = (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
    
      <div className="d">
      <button className="appetizer1" onClick={sini}>Sinigang</button>
      <button className="appetizer2" onClick={Chicken}>Chicken Afritada</button>
      <button className="appetizer3" onClick={Chickenb}>Chicken Bistek</button>
      <button className="appetizer4" onClick={Sizzling}>Sizzling Pork Sisig</button>
      <button className="appetizer5" onClick={kare}>Kare-Kare</button>
      <button className="appetizer6" onClick={Kaldereta}>Kaldereta</button>
      <button className="appetizer7" onClick={shrimp}>Shrimp Lumpia</button>
      <button className="appetizer8" onClick={pork}>Pork Adobo</button>
      <button className="appetizer9" onClick={Bicol}>Bicol Express</button>
      <button className="appetizer10" onClick={Dinuguan}>Dinuguan at puto</button>
</div>
    </div>
      );
      ReactDOM.render(Dishes,document.getElementById('root'));
};
function Desserts(){
    let palamis = (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
    
      <div className="d">
      <button className="appetizer1" onClick={Chocolate}>Chocolate-Mint Bars</button>
      <button className="appetizer2" onClick={Class}>Classic Fudge-Walnut Brownies</button>
      <button className="appetizer3" onClick={Texas}>Texas Sheet Cake</button>
      <button className="appetizer4" onClick={Espresso}>Espresso Crinkles</button>
      <button className="appetizer5" onClick={tira}>Tiramisu</button>
      <button className="appetizer6" onClick={Blueberry}>Blueberry Cheesecake Ice Cream</button>
      <button className="appetizer7" onClick={peanut}>Peanut Butter Pie</button>
      <button className="appetizer8" onClick={Strawberry}>Strawberry-Almond Cream Tart</button>
      <button className="appetizer9" onClick={Roasted}>Roasted Banana Bars</button>
      <button className="appetizer10" onClick={Bourbon}>Bourbon-Pecan Tart</button>
</div>
    </div>
      );
      ReactDOM.render(palamis,document.getElementById('root'));
};
function Beverage(){
    let inumin = (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
    
      <div className="d">
      <button className="appetizer1" onClick={Baileys}>Baileys Delight</button>
      <button className="appetizer2" onClick={Irish}>Irish coffee</button>
      <button className="appetizer3" onClick={Kiwi}>Kiwi Margarita</button>
      <button className="appetizer4" onClick={Old}>Old Fashion</button>
      <button className="appetizer5" onClick={Mango}>Mango and Peach white Ice Tea</button>
      <button className="appetizer6" onClick={Chilled}>Chilled Darjeeling</button>
      <button className="appetizer7" onClick={Moskow}>Moskow Mule</button>
      <button className="appetizer8" onClick={fresh}>Fresh Raw Badam Milk</button>
      <button className="appetizer9" onClick={litchi}>Lichi Sorbet</button>
      <button className="appetizer10" onClick={Lychee}>Lychee and Dill Juice</button>
</div>
    </div>
      );
      ReactDOM.render(inumin,document.getElementById('root'));
};




function Pasta(){
    let pastas = (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
    
      <div className="d">
      <button className="appetizer1" onClick={pasta1}>Pasta With Cherry Tomato Sauce</button>
      <button className="appetizer2" onClick={pasta2}>Pasta With Butternut Squash</button>
      <button className="appetizer3" onClick={pasta3}>Ricotta Gnocchi With Asparagus</button>
      <button className="appetizer4" onClick={pasta4}>Shrimp Fra Diavolo</button>
      <button className="appetizer5" onClick={pasta5}>3-Ingredient Stovetop Macaroni and Cheese</button>
      <button className="appetizer6" onClick={pasta6}>Vegan Carbonara Pasta</button>
      <button className="appetizer7" onClick={pasta7}>Bucatini all'Amatriciana</button>
      <button className="appetizer8" onClick={pasta8}>Penne With Arrabbiata Sauce</button>
      <button className="appetizer9" onClick={pasta9}>Penne With Melted-Vegetable Sauce</button>
      <button className="appetizer10" onClick={pasta10}>Pesto Pasta With Potatoes and Green Beans</button>
</div>
    </div>
      );
      ReactDOM.render(pastas,document.getElementById('root'));
};



function pasta1(){
    let pasta01= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div>
   <span className="name">Pasta with Cherr Tomato Sauce</span>
  <img src="image/pasta1.jpg" alt="" className="BuffaloChickenimg"/>
   <span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="4" className="BuffaloChicken">
1 pound (450g) dry pasta
Kosher salt
4 medium cloves garlic, thinly sliced
6 tablespoons (90ml) extra-virgin olive oil, divided
1 1/2 pounds cherry tomatoes (about 2 pints; 750g)
1 ounce fresh basil leaves, roughly chopped (about 1 cup; 30g)
Freshly ground black pepper
Parmesan cheese, for serving

  </div>
  <span className="Instructions">Instructions</span>
  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

1.
Place pasta in a large skillet or sauté pan and cover with water and a big pinch of salt. Bring to a boil over high heat, stirring occasionally. Boil until just shy of al dente, about 1 minute less than the package instructions recommend.

2.
Meanwhile, heat garlic and 4 tablespoons (60ml) olive oil in a 12-inch skillet over medium heat, stirring frequently, until garlic is softened but not browned, about 3 minutes. Add tomatoes and cook, stirring, until tomatoes begin to burst. You can help them along by pressing on them with the back of a wooden spoon as they soften.

3.
Continue to cook until sauce is rich and creamy, about 5 minutes longer. Stir in basil and season to taste with salt and pepper.

4.
When pasta is cooked, drain, reserving 1 cup of pasta water. Add pasta to sauce and increase heat to medium-high. Cook, stirring and tossing constantly and adding reserved pasta water as necessary to adjust consistency to a nice, creamy flow. Remove from heat, stir in remaining 2 tablespoons (30ml) olive oil, and grate in a generous shower of Parmesan cheese. Serve immediately, passing extra Parmesan at the table.


  </div>
  </div>

   </div>
      );
      ReactDOM.render(pasta01,document.getElementById('root'));
};


function pasta2(){
    let pasta02= (

    <div >
<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div>
   <span className="name">Pasta with Butternut Squash</span>
  <img src="image/pasta2.jpg" alt="" className="BuffaloChickenimg"/>
   <span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="4" className="BuffaloChicken">
2 tablespoons extra-virgin olive oil (30ml)
1 pound butternut squash, peeled, seeded, and cut into 1/2-inch cubes (450g; about 1/2 large squash)
Kosher salt and freshly ground black pepper
2 tablespoons unsalted butter (30g)
1 small shallot, finely minced (about 1 ounce; 30g)
1 handful fresh sage leaves, finely minced (about 1/2 ounce; 15g)
1 tablespoon juice from 1 lemon (15ml)
1 pound small cupped, tubular, or ridged pasta such as orecchiette, penne, farfalle, or rotini (450g)
1 ounce grated fresh Parmigiano-Reggiano cheese (30g)
  </div>
  <span className="Instructions">Instructions</span>
  <div  disabled className="BuffaloChicken1" rows="4" cols="20">
1.
Heat olive oil in a large stainless steel or cast-iron skillet over high heat until very lightly smoking. Immediately add squash, season with salt and pepper, and cook, stirring and tossing occasionally, until well-browned and squash is tender, about 5 minutes. Add butter and shallots and continue cooking, stirring frequently, until butter is lightly browned and smells nutty, about 1 minute longer. Add sage and stir to combine (sage should crackle and let off a great aroma). Remove from heat and stir in lemon juice. Set aside.

2.
In a medium saucepan, combine pasta with enough room temperature or hot water to cover by about 2 inches. Season with salt. Set over high heat and bring to a boil while stirring frequently. Cook, stirring frequently, until pasta is just shy of al dente, about 2 minutes less than the package directions. Drain pasta, reserving a couple cups of the starchy cooking liquid.

3.
Add pasta to skillet with squash along with a splash of pasta water. Bring to a simmer over high heat and cook until the pasta is perfectly al dente, stirring and tossing constantly and adding a splash of water as needed to keep the sauce loose and shiny. Off heat, stir in Parmigiano-Reggiano. Adjust seasoning with salt and pepper and texture with more pasta water as needed. Serve immediately, topped with more cheese at the table.
  </div>
  </div>

   </div>
      );
      ReactDOM.render(pasta02,document.getElementById('root'));
};






function pasta3(){
    let pasta03= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div>
   <span className="name">Ricotta Gnocchi with Asparagus</span>
  <img src="image/pasta3.jpg" alt="" className="BuffaloChickenimg"/>
   <span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="4" className="BuffaloChicken">
1 tablespoon extra-virgin olive oil
4 ounces thinly sliced prosciutto, cut into thin ribbons
1/4 cup thinly sliced green garlic or scallions, white and pale green parts only (about 4)
2 medium cloves garlic, minced
1 pound asparagus, cut on a bias into 1 1/2-inch pieces
1 cup heavy cream
2 ounces grated Parmigiano-Reggiano cheese, divided
Kosher salt and freshly ground black pepper
1 teaspoon grated zest plus 1 tablespoon juice from 1 lemon, divided
2 tablespoons minced fresh chives
1 recipe ricotta gnocchi, prepared through the end of Step 4 (do not cook and do not make sauce)
  </div>
  <span className="Instructions">Instructions</span>
  <div  disabled className="BuffaloChicken1" rows="4" cols="20">
1.
Set a large pot of salted water over high heat. Meanwhile, heat olive oil in a large skillet or slope-sided saucepan over medium-high heat until shimmering. Add prosciutto and cook, stirring, until mostly crisp, about 2 minutes. Add scallions and garlic and cook, stirring, until fragrant, about 1 minute. Add asparagus and cook, tossing and stirring frequently, until asparagus is just starting to turn tender, about 2 minutes.

2.
Add heavy cream and half of Parmesan. Cook, stirring, until cream thickens and coats the asparagus pieces, about 4 minutes. Season to taste with salt and pepper.

3.
Add gnocchi to now-boiling pot of water, stir gently, and cook until gnocchi float for 30 seconds, about 3 minutes total. Drain gnocchi, reserving 1/4 cup of pasta cooking water. Add gnocchi, lemon juice, half of lemon zest, chives, and 2 tablespoons of cooking water to saucepan with sauce and bring to a hard boil, stirring gently. Add more pasta water to thin sauce to desired consistency. Serve immediately, topped with lemon zest and additional Parmesan cheese.


  </div>
  </div>

   </div>
      );
      ReactDOM.render(pasta03,document.getElementById('root'));
};






function pasta4(){
    let pasta04= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div>
   <span className="name">Shrimp Fra Diavolo</span>
  <img src="image/pasta4.jpg" alt="" className="BuffaloChickenimg"/>
   <span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="4" className="BuffaloChicken">
1/2 teaspoon kosher salt, plus more as needed
3/4 pound large shrimp (340g), shelled and deveined, shells reserved
Large pinch baking soda
6 tablespoons extra-virgin olive oil (90ml), divided
4 medium cloves garlic, thinly sliced
1 1/2 teaspoons dried oregano
1 to 2 teaspoons red chili flakes (see note)
2 tablespoons (30ml) brandy (optional)
1 (28-ounce; 795g) can whole peeled tomatoes and their juices, coarsely pureed or crushed by hand
1/2 cup bottled clam juice (120ml)
1 pound spaghetti (450g)
1/4 cup minced flat-leaf parsley leaves and tender stems (from 1 small bunch)

  </div>
  <span className="Instructions">Instructions</span>
  <div  disabled className="BuffaloChicken1" rows="4" cols="20">
1.
Bring a large pot of salted water to a boil. In a medium bowl, toss the shrimp well with the 1/2 teaspoon salt and the baking soda. Set aside.

2.
In a large skillet or sauté pan, heat 4 tablespoons olive oil over medium-high heat until shimmering, Add reserved shrimp shells and cook, stirring constantly, until they've all turned a reddish color, about 4 minutes. Off the heat, remove the shells using tongs, a slotted spatula, and/or a slotted spoon, allowing any excess oil to drain back into skillet as you go; discard the shells. You should still have plenty of oil left in the skillet.

3.
Return the skillet to medium-high heat, add the shrimp, and cook, stirring and turning occasionally, until shrimp are just starting to brown in spots and are almost fully cooked through, about 3 minutes. Off the heat, transfer shrimp to a plate and set aside.

4.
Return the skillet to medium-low heat. Add garlic, oregano, and chili flakes and cook, stirring, until garlic is just beginning to turn golden, about 3 minutes. Add brandy, if using, and cook until almost fully evaporated. Add tomatoes and clam juice and bring to a simmer. Season with salt.

5.
Boil the pasta in the pot of salted water until al dente. Drain, reserving about 1 cup of the pasta cooking water, and add pasta to the sauce along with a splash of the pasta cooking water. Add shrimp and cook over medium-high heat, stirring, until the sauce reduces and clings to pasta and the shrimp are fully heated through; add more pasta water as necessary if the sauce becomes too dry. Season with salt, if necessary.

6.
Stir in parsley and remaining 2 tablespoons olive oil. Serve right away.



  </div>
  </div>

   </div>
      );
      ReactDOM.render(pasta04,document.getElementById('root'));
};







function pasta5(){
    let pasta05= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div>
   <span className="name">3-Ingredient Stovetop Macaroni with Cheese</span>
  <img src="image/pasta5.jpg" alt="" className="BuffaloChickenimg"/>
   <span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="4" className="BuffaloChicken">
6 ounces (170g) elbow macaroni
Salt
6 ounces (180ml) evaporated milk
6 ounces (170g) grated mild or medium cheddar cheese, or any good melting cheese, such as Fontina, Gruyère, or Jack

  </div>
  <span className="Instructions">Instructions</span>
  <div  disabled className="BuffaloChicken1" rows="4" cols="20">
1.
Place macaroni in a medium saucepan or skillet and add just enough cold water to cover. Add a pinch of salt and bring to a boil over high heat, stirring frequently. Continue to cook, stirring, until water has been almost completely absorbed and macaroni is just shy of al dente, about 6 minutes.

2.
Immediately add evaporated milk and bring to a boil. Add cheese. Reduce heat to low and cook, stirring continuously, until cheese is melted and liquid has reduced to a creamy sauce, about 2 minutes longer. Season to taste with more salt and serve immediately.

  </div>
  </div>

   </div>
      );
      ReactDOM.render(pasta05,document.getElementById('root'));
};



function pasta6(){
    let pasta06= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div>
   <span className="name">Vegan Carbonara Pasta</span>
  <img src="image/pasta6.jpg" alt="" className="BuffaloChickenimg"/>
   <span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="4" className="BuffaloChicken">
7 ounces silken tofu (1/2 of a 14-ounce block; 200g)
1/2 cup (120ml) sauerkraut brine (see note)
1/4 cup nutritional yeast (1/2 ounce; 15g)
1 tablespoon (15ml) white miso
Generous pinch cayenne pepper or red chili flakes
3 generous dashes (about 1/4 teaspoon) smoked paprika
2 teaspoons (8g) freshly ground black pepper
1 tablespoon (15ml) white wine vinegar or fresh juice from 1 lemon
Kosher salt
1/2 cup (120ml) extra-virgin olive oil, divided
4 ounces (115g) king oyster mushrooms, stems and caps sliced into 1/2-inch "lardons"
1 pound (450g) dry spaghetti or penne

  </div>
  <span className="Instructions">Instructions</span>
  <div  disabled className="BuffaloChicken1" rows="4" cols="20">
1.
In a blender, combine tofu, sauerkraut brine, nutritional yeast, miso, cayenne or chili flakes, smoked paprika, black pepper, and vinegar or lemon juice. Blend at high speed, stopping to scrape down sides if necessary, until a very smooth, silky sauce forms. Season with salt. Add 1/4 cup (60ml) olive oil and blend in at low speed just until emulsified.

2.
In a large sauté pan, heat remaining 1/4 cup (60ml) olive oil over medium-high heat until shimmering. Add mushrooms and cook, stirring, until browned, about 6 minutes.

3.
In a pot of salted boiling water, cook pasta until just al dente. Transfer pasta to pan with mushrooms, reserving pasta-cooking water. Pour on just enough creamy sauce to coat all the pasta, then add about 1/4 cup (60ml) pasta-cooking water. Cook over medium heat, stirring, until sauce forms a silky glaze that coats pasta. Serve.


  </div>
  </div>

   </div>
      );
      ReactDOM.render(pasta06,document.getElementById('root'));
};




function pasta7(){
    let pasta07= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div>
   <span className="name">Bucatini all'Amatriciana</span>
  <img src="image/pasta7.jpg" alt="" className="BuffaloChickenimg"/>
   <span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="4" className="BuffaloChicken">
1 tablespoon (15ml) extra-virgin olive oil
6 ounces (170g) guanciale, cut into slices about 1/8 inch thick and then into 3/4- by 1/4-inch strips (see note above)
Pinch red pepper flakes
1/4 cup (60ml) dry white wine
1 (15-ounce; 425g) can whole peeled tomatoes, preferably San Marzano, crushed by hand
Kosher salt and freshly ground black pepper
1 pound (450g) dried bucatini pasta (see note above)
1 ounce (30g) grated Pecorino Romano cheese, plus more for serving
  </div>
  <span className="Instructions">Instructions</span>
  <div  disabled className="BuffaloChicken1" rows="4" cols="20">
1.
In a large skillet, heat olive oil over medium-high heat until shimmering. Add guanciale and pepper flakes and cook, stirring, until lightly browned, about 5 minutes. Add wine and cook, scraping up any browned bits on bottom of pan, until nearly evaporated, about 3 minutes.

2.
Add tomatoes and bring to a simmer. Season with salt and pepper.

3.
Meanwhile, boil pasta in salted water until just shy of al dente, about 1 minute less than package recommends. Using tongs, transfer pasta to sauce, along with 1/4 cup pasta cooking water. Cook over high heat, stirring and tossing rapidly, until pasta is al dente and sauce has thickened and begins to coat noodles. Remove from heat, add cheese, and stir rapidly to incorporate. Season to taste with more salt and pepper. Serve right away, passing more cheese at the table.



  </div>
  </div>

   </div>
      );
      ReactDOM.render(pasta07,document.getElementById('root'));
};





function pasta8(){
    let pasta08= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div>
   <span className="name">Penne with Arrabbiata Sauce</span>
  <img src="image/pasta8.jpg" alt="" className="BuffaloChickenimg"/>
   <span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="4" className="BuffaloChicken">
Kosher salt
1 pound (450g) penne pasta
3 tablespoons (45ml) extra-virgin olive oil, plus more as desired
1 medium clove garlic, crushed
As much crushed red pepper as you dare (see note above)
1 (15-ounce; 400g) can whole peeled tomatoes, preferably San Marzano, crushed by hand (see note above)
2 ounces (60g) finely grated Parmesan cheese, plus more for serving
Small handful minced flat-leaf parsley leaves
  </div>
  <span className="Instructions">Instructions</span>
  <div  disabled className="BuffaloChicken1" rows="4" cols="20">
1.
In a medium saucepan of boiling salted water, cook penne until just short of al dente, about 1 minute less than the package recommends.

2.
Meanwhile, in a large skillet, combine oil, garlic, and pepper flakes. Cook over medium heat until garlic is very lightly golden, about 5 minutes. (Adjust heat as necessary to keep it gently sizzling.)

3.
Add tomatoes, stir to combine, and bring to a bare simmer. When pasta is ready, transfer it to sauce using a strainer or slotted spoon. (Alternatively, drain pasta through a colander, reserving 1 cup of cooking water. Add drained pasta to sauce.)

4.
Add about 1/4 cup pasta water to sauce and increase heat to bring pasta and sauce to a vigorous simmer. Cook, stirring and shaking the pan and adding more pasta water as necessary to keep sauce loose, until pasta is perfectly al dente, 1 to 2 minutes longer. (The pasta will cook more slowly in the sauce than it did in the water.)

5.
Continue cooking pasta until sauce thickens and begins to coat noodles, then remove from heat and toss in cheese and parsley, stirring vigorously to incorporate. Stir in a drizzle of fresh olive oil, if desired. Season with salt and serve right away, passing more cheese at the table


  </div>
  </div>

   </div>
      );
      ReactDOM.render(pasta08,document.getElementById('root'));
};





function pasta9(){
    let pasta09= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div>
   <span className="name">Penne with Melted-Vegetable Sauce</span>
  <img src="image/pasta9.jpg" alt="" className="BuffaloChickenimg"/>
   <span className="Ingredients">Ingredients</span>
     <div disabled rows="4" cols="4" className="BuffaloChicken">
Kosher salt
1 large russet potato (about 12 ounces), peeled and cut into 1/4-inch dice
2 medium carrots, peeled and cut into 1/4-inch dice (about 3/4 cups)
3 ounces string beans, trimmed and cut into 1/4-inch dice (about 3/4 cup)
1/2 small fennel bulb, trimmed and cut into 1/4-inch dice (about 1/2 cup)
1 small red onion, cut into 1.4-inch dice (about 3/4 cup)
1 pound dried penne
2 to 4 medium cloves garlic, minced (see note above)
3/4 cup extra-virgin olive oil (see note above)
1/4 cup minced parsley
Freshly ground black pepper
Grated Parmigiano-Reggiano, for serving
  </div>
  <span className="Instructions">Instructions</span>
  <div  disabled className="BuffaloChicken1" rows="4" cols="20">
1.
In a medium pot of salted boiling water, cook potato until a piece is easily crushed between fingers, about 5 minutes. Using fine strainer, transfer to large mixing bowl. Working one vegetable at a time, continue by boiling carrots, string beans, fennel, and onion until each is well done, about 5 minutes each; add each vegetable to mixing bowl as it is ready.

2.
Add penne to boiling water and cook until al dente, following timing on package. Drain, reserving 1 cup of cooking water.

3.
Meanwhile, add garlic, olive oil, and parsley to vegetables, and mix thoroughly until potatoes have broken down for form a chunky puree. Season with salt and pepper.

4.
Add penne and a healthy grating of Parmigiano-Reggiano to vegetable sauce and stir to combine, adding cooking water 1 tablespoon at a time if sauce is too thick. Spoon into bowls, top with additional grated cheese, and serve.

  </div>
  </div>

   </div>
      );
      ReactDOM.render(pasta09,document.getElementById('root'));
};







function pasta10(){
    let pasta010= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div>
   <span className="name">Pesto Pasta with Potatoes and Green Beans</span>
  <img src="image/pasta9.jpg" alt="" className="BuffaloChickenimg"/>
   <span className="Ingredients">Ingredients</span>
     <div disabled rows="4" cols="4" className="BuffaloChicken">
Kosher salt
1 pound (450g) dried pasta, such as trenette, linguine, or mafalde
5 ounces peeled Yukon Gold potato (140g; about 1/2 medium), cut into 3/4-inch cubes
4 ounces (110g) green beans or haricots verts (about 20 green beans or 30 haricots verts), stems trimmed and cut into 1-inch lengths on a bias
1 recipe pesto sauce
Extra-virgin olive oil, for drizzling
Grated Parmigiano Reggiano, for serving

  </div>
  <span className="Instructions">Instructions</span>
  <div  disabled className="BuffaloChicken1" rows="4" cols="20">
1.
In a large pot of salted boiling water, boil pasta, potato, and green beans until pasta is al dente and potato and green beans are very tender. Drain, reserving 1 cup cooking water, and transfer pasta, potato, and green beans to a large mixing or serving bowl.

2.
Add pesto sauce to pasta along with 1/4 cup pasta cooking water. Toss well to emulsify pesto and pasta water into a creamy sauce. Add more pasta water, 1 tablespoon at a time, as needed, if pasta is too dry. Drizzle in fresh olive oil, if desired. Serve with Parmigiano Reggiano on the side
  </div>
  </div>

   </div>
      );
      ReactDOM.render(pasta010,document.getElementById('root'));
};











function BuffaloChickenDip(){
    let BuffaloChicken= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div>
   <span className="name">Buffalo Chicken Dip</span>
  <img src="image/appetizer1.jpg" alt="" className="BuffaloChickenimg"/>
   <span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
  INGREDIENTS
• 1 package (8 ounces) cream cheese, softened
• 1 cup cooked chicken breast
• 1/2 cup Buffalo wing sauce
• 1/2 cup ranch or blue cheese salad dressing
• 2 cups shredded Colby-Monterey Jack cheese
• French bread baguette slices, celery ribs or tortilla chips

  </div>
  <span className="Instructions">Instructions</span>
  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.


  </div>
  </div>

   </div>
      );
      ReactDOM.render(BuffaloChicken,document.getElementById('root'));
};

function Pepper(){
    let Poppers= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Pepper Poppers</span>
  <img src="image/appetizer2.jpg" alt="" className="BuffaloChickenimg"/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
• 1 package (8 ounces) cream cheese, softened
• 1 cup shredded sharp cheddar cheese
• 1 cup shredded Monterey Jack cheese
• 6 bacon strips, cooked and crumbled
• 1/4 teaspoon salt
• 1/4 teaspoon garlic powder
• 1/4 teaspoon chili powder
• 1 pound fresh jalapenos, halved lengthwise and seeded
• 1/2 cup dry bread crumbs
• Sour cream, onion dip or ranch salad dressing


  </div>  <span className="Instructions">Instructions</span>

   <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIDIRECTIONS
In a large bowl, combine the cheeses, bacon and seasonings; mix well. Spoon about 2 tablespoonfuls into each pepper half. Roll in bread crumbs.
Place in a greased 15x10x1-in. baking pan. Bake, uncovered, at 325° for 15 minutes for spicy flavor, 25 minutes for medium and 35 minutes for mild. Serve with sour cream, dip or dressing. Yield: about 2 dozen.
Editor's Note: Wear disposable gloves when cutting hot peppers; the oils can burn skin. Avoid touching your face.
Originally published as Pepper Poppers in Taste of Home August/September 1998, p64

Dad In Coma For 19 Years Wakes Up And Reveals TruthLifeDaily.com

NUTRITIONAL FACTS
3 each: 273 calories, 21g fat (13g saturated fat), 63mg cholesterol, 454mg sodium, 10g carbohydrate (1g sugars, 2g fiber), 12g protein.



  </div>
  </div>

   </div>
      );
      ReactDOM.render(Poppers,document.getElementById('root'));
};

function Homemade(){
    let GuaCamole= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Homemade Guacamole</span>
  <img src="image/appetizer3.jpg" alt="" className="BuffaloChickenimg"/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
• 3 medium ripe avocados, peeled and cubed
• 1 garlic clove, minced
• 1/4 to 1/2 teaspoon salt
• 2 medium tomatoes, seeded and chopped, optional
• 1 small onion, finely chopped
• 1/4 cup mayonnaise, optional
• 1 to 2 tablespoons lime juice
• 1 tablespoon minced fresh cilantro


  </div>  <span className="Instructions">Instructions</span>

   <div  disabled className="BuffaloChicken1" rows="4" cols="20">
DIRECTIONS
Mash avocados with garlic and salt. Stir in remaining ingredients. Yield: 2 cups.
Originally published as Homemade Guacamole in TasteofHome.com 2017






  </div>


  </div>

   </div>
      );
      ReactDOM.render(GuaCamole,document.getElementById('root'));
};

function Glaze(){
    let Chickenwing= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Chicken Glaze Wings</span>
  <img src="image/appetizer4.jpg" alt="" className="BuffaloChickenimg"/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
• 12 whole chicken wings* (about 2-1/2 pounds)
• 1/2 cup barbecue sauce
• 1/2 cup honey
• 1/2 cup soy sauce
  </div>  <span className="Instructions">Instructions</span>

   <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Cut chicken wings into three sections; discard wing tip section. Place in a greased 13-in. x 9-in. baking dish. Combine barbecue sauce, honey and soy sauce; pour over wings. Bake, uncovered, at 350° for 50-60 minutes or until chicken juices run clear.Yield: 4 servings.
Editor's Note: Uncooked chicken wing sections (wingettes) may be substituted for whole chicken wings.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(Chickenwing,document.getElementById('root'));
};
function CucumberStuff(){
    let Cherrytomatoe= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Cucumber-Stuffed Cherry Tomatoes</span>
  <img src="image/appetizer5.jpg" alt="" className="BuffaloChickenimg"/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
  INGREDIENTS
• 24 cherry tomatoes
• 1 package (3 ounces) cream cheese, softened
• 2 tablespoons mayonnaise
• 1/4 cup finely chopped peeled cucumber
• 1 tablespoon finely chopped green onion
• 2 teaspoons minced fresh dill

  </div>  <span className="Instructions">Instructions</span>

   <div  disabled className="BuffaloChicken1" rows="4" cols="20">
DIRECTIONS
Cut a thin slice off the top of each tomato. Scoop out and discard pulp; invert tomatoes onto paper towels to drain.
In a small bowl, combine cream cheese and mayonnaise until smooth; stir in the cucumber, onion and dill. Spoon into tomatoes. Refrigerate until serving. Yield: 2 dozen.
Originally published as Cucumber-Stuffed Cherry Tomatoes in Simple & Delicious June/July 2010, p52

By Brand - Name Women Shoes at Up to 72% Off!ZALORA

NUTRITIONAL FACTS
1 stuffed tomato: 25 calories, 2g fat (1g saturated fat), 4mg cholesterol, 18mg sodium, 1g carbohydrate (1g sugars, 0 fiber), 0 protein. Diabetic Exchanges: 1/2 fat.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(Cherrytomatoe,document.getElementById('root'));
};
function HoneyGarlic(){
    let Meatballs= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Honey-Garlic Glaze Meatballs</span>
  <img src="image/appetizer6.jpg" alt="" className="BuffaloChickenimg"/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
  INGREDIENTS
• 2 large eggs
• 3/4 cup milk
• 1 cup dry bread crumbs
• 1/2 cup finely chopped onion
• 2 teaspoons salt
• 2 pounds ground beef
• 4 garlic cloves, minced
• 1 tablespoon butter
• 3/4 cup ketchup
• 1/2 cup honey
• 3 tablespoons soy sauce

  </div>  <span className="Instructions">Instructions</span>

   <div  disabled className="BuffaloChicken1" rows="4" cols="20">
DIRECTIONS
1.In a large bowl, combine eggs and milk. 

2.Add the bread crumbs, onion and salt. 

3.Crumble beef over mixture and mix well. Shape into 1-in. balls. 

4.Place on greased racks in shallow baking pans. Bake, uncovered, at 400° for 12-15 minutes or until meat is no longer pink.

5.Meanwhile, in a large saucepan, saute garlic in butter until tender. 

6.Stir in the ketchup, honey and soy sauce. Bring to a boil. 

7.Reduce heat; cover and simmer for 5 minutes. 

8.Drain meatballs; add to sauce. Carefully stir to evenly coat. 

9.Cook for 5-10 minutes. 

10.Yield: 5-1/2 dozen.

NUTRITIONAL FACTS
3 each: 152 calories, 7g fat (3g saturated fat), 49mg cholesterol, 515mg sodium, 13g carbohydrate (8g sugars, 0 fiber), 10g protein.



  </div>
  </div>

   </div>
      );
      ReactDOM.render(Meatballs,document.getElementById('root'));
};
function Savory(){
    let Partybread= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Savory Party Bread</span>
  <img src="image/appetizer7.jpg" alt="" className="BuffaloChickenimg"/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
• 1 unsliced round loaf sourdough bread (1 pound)
• 1 pound Monterey Jack cheese
• 1/2 cup butter, melted
• 1/2 cup chopped green onions
• 2 to 3 teaspoons poppy seeds



  </div>  <span className="Instructions">Instructions</span>

   <div  disabled className="BuffaloChicken1" rows="4" cols="20">
DIRECTIONS
1.Preheat oven to 350°. 

2.Cut bread widthwise into 1-in. 

3.slices to within 1/2 in. of bottom of loaf. 

4.Repeat cuts in opposite direction. 

5.Cut cheese into 1/4-in. slices; cut slices into small pieces. 

6.Place cheese in cuts.


7.In a small bowl, mix butter, green onions and poppy seeds; drizzle over bread. 

8.Wrap in foil; place on a baking sheet. 

9.Bake 15 minutes. Unwrap; bake 10 minutes longer or until cheese is melted. Yield: 8 servings.

Test Kitchen Tips
•  Take a page from the "magnificent everything bagel" by adding 1 teaspoon each of dried garlic, onion and sesame seeds to the butter mixture.
•  Get little hands involved by having them place cheese in the bread.
•  Make it your own by switching up the cheese (we love smoked Gouda and gooey Brie), customizing seasonings, and adding meaty mix-ins. Bacon, diced salami or ham with sliced olives are all great choices.
Originally published as Savory Party Bread in Taste of Home February/March 1998, p64

NUTRITIONAL FACTS
1 serving: 481 calories, 31g fat (17g saturated fat), 91mg cholesterol, 782mg sodium, 32g carbohydrate (1g sugars, 2g fiber), 17g protein.



  </div>
  </div>

   </div>
      );
      ReactDOM.render(Partybread,document.getElementById('root'));
};
function Avocado(){
    let Salsa= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Avocado Salsa</span>
  <img src="image/appetizer8.jpg" alt="" className="BuffaloChickenimg"/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
• 1-2/3 cups (about 8-1/4 ounces) frozen corn, thawed
• 2 cans (2-1/4 ounces each) sliced ripe olives, drained
• 1 medium sweet red pepper, chopped
• 1 small onion, chopped
• 5 garlic cloves, minced
• 1/3 cup olive oil
• 1/4 cup lemon juice
• 3 tablespoons cider vinegar
• 1 teaspoon dried oregano
• 1/2 teaspoon salt
• 1/2 teaspoon pepper
• 4 medium ripe avocados, peeled
• Tortilla chips


  </div>  <span className="Instructions">Instructions</span>

   <div  disabled className="BuffaloChicken1" rows="4" cols="20">
DIRECTIONS
1.Combine corn, olives, red pepper and onion. In another bowl, mix the next seven ingredients. 

2.Pour over corn mixture; toss to coat. Refrigerate, covered, overnight.

3.Just before serving, chop avocados; stir into salsa. 

4.Serve with tortilla chips. Yield: about 7 cups.

NUTRITIONAL FACTS
1/4 cup: 82 calories, 7g fat (1g saturated fat), 0 cholesterol, 85mg sodium, 5g carbohydrate (1g sugars, 2g fiber), 1g protein. Diabetic Exchanges: 1-1/2 fat.


  </div>
  </div>

   </div>
      );
      ReactDOM.render(Salsa,document.getElementById('root'));
};
function Fiest(){
    let Pinwheels= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Fiest Pinwheels</span>
  <img src="image/appetizer9.jpg" alt="" className="BuffaloChickenimg"/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
• 1 package (8 ounces) cream cheese, softened
• 1/2 cup sour cream
• 1/4 cup picante sauce
• 2 tablespoons taco seasoning
• Dash garlic powder
• 1 can (4-1/2 ounces) chopped ripe olives, drained
• 1 can (4 ounces) chopped green chilies
• 1 cup (4 ounces) finely shredded cheddar cheese
• 1/2 cup thinly sliced green onions
• 8 flour tortillas (10 inches)
• Salsa

  </div>  <span className="Instructions">Instructions</span>

   <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
1.In a small bowl, beat cream cheese, sour cream, picante sauce, taco seasoning and garlic powder until smooth. Stir in olives, chilies, cheese and onions. 

2.Spread about 1/2 cup on each tortilla.

3.Roll up jelly-roll style; wrap in plastic. Refrigerate for 2 hours or overnight.

4.Slice into 1-in. pieces. 

5.Serve with salsa. Yield: about 5 dozen.


NUTRITIONAL FACTS
3 each: 170 calories, 9g fat (5g saturated fat), 22mg cholesterol, 402mg sodium, 15g carbohydrate (1g sugars, 3g fiber), 5g protein.

  </div>
  </div>

   </div>
      );
      ReactDOM.render(Pinwheels,document.getElementById('root'));
};
function Championship(){
    let Bean= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Championship Bean Dip</span>
  <img src="image/appetizer10.jpg" alt="" className="BuffaloChickenimg"/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
• 1 can (16 ounces) refried beans
• 1 cup picante sauce
• 1 cup shredded Monterey Jack cheese
• 1 cup shredded cheddar cheese
• 3/4 cup sour cream
• 3 ounces cream cheese, softened
• 1 tablespoon chili powder
• 1/4 teaspoon ground cumin
• Tortilla chips and salsa

  </div>  <span className="Instructions">Instructions</span>

   <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
1.In a large bowl, combine the first eight ingredients; transfer to a 1-1/2-qt. slow cooker.

2.Cover and cook on high for 2 hours or until heated through, stirring once or twice. Serve with tortilla chips and salsa.Yield: 4-1/2 cups.

3.Originally published as Championship Bean Dip in Taste of Home February/March 1998, p29


NUTRITIONAL FACTS
2 tablespoons: 57 calories, 4g fat (2g saturated fat), 12mg cholesterol, 151mg sodium, 3g carbohydrate (1g sugars, 1g fiber), 2g protein.


  </div>
  </div>

   </div>
      );
      ReactDOM.render(Bean,document.getElementById('root'));
};
function sini(){
    let gang= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Sinigang</span>
  <img src="image/dish1.jpg" alt="" className="BuffaloChickenimg"/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
• 1 1/2 lbs or 650 g of pork belly, cut into large cubes
• 3-4 cups chicken stock
• 2 stalks lemongrass, lower 1/3 bruised with the back of a knife
• 3 kaffir lime leaves
• 2-3 Tbsps fish sauce, or to taste
• 1-2 small red chilies, chopped (reserve some for garnish)
• 1 large white onion, quartered
• 2 medium tomatoes, quartered
• 1 thumb-sized ginger, sliced
• 1/2 cup coconut milk (add more or less to taste)
• 3 Tbsps tamarind paste, or to taste (diluted with some simmering broth)
• 2 Tbsps fresh calamansi juice, or to taste
• 2 tsps brown sugar
• 3 large green chilies, chopped or left whole (reserve some chopped, for garnish)
• 1 bunch string beans, cut into 2-inch lengths
• 1 large chayote, peeled and cut into large chunks
• 1 bunch kangkong/water spinach or spinach, washed and drained

  </div>  <span className="Instructions">Instructions</span>

   <div  disabled className="BuffaloChicken1" rows="4" cols="20">


Directions
1.  In heavy bottomed pot over medium-high heat, brown pork cubes on all sides then transfer to plate. Remove excess oil/fat from pot and return to heat. Add in ginger and onion, then sauté for a few seconds or until fragrant. Put back pork cubes and add in 2 Tbsps fish sauce and stir for a few seconds. Pour in stock and lemongrass and allow it to come to a full boil.
2.  Cover and reduce heat to simmer. Add chili, lime leaves, and tomatoes. Simmer until pork is tender (about 30-40 minutes).
3.  Add in diluted tamarind paste, calamansi juice, brown sugar, fish sauce, and coconut milk. Test soup for spice and salt, adding more chili and/or fish sauce (instead of salt) as desired. If too sour, add 1 tsp brown sugar. If too salty, add a squeeze of calamansi juice. Add more coconut milk if you want your soup richer/creamier, or if it’s too spicy for your taste.
4.  Add in rest of vegetables except kangkong or spinach. Simmer for another 8-10 minutes or until vegetables are crisp tender.
5.  Turn off heat, add in kangkong or spinach, cover, then wait for a minute or so before serving. Garnish with both red and green chilies. Serve with steamed white rice.


NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(gang,document.getElementById('root'));
};

function Chicken(){
    let Afritada= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Chicken Afritada</span>
  <img src="image/dish2.jpg" alt="" className="BuffaloChickenimg"/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS

3 pounds chicken (legs, thighs or whole) cut up into serving parts
1 medium onion, peeled and sliced
4 to 5 cloves garlic, peeled and minced
3 to 4 peppercorns, cracked
juice of 2 lemons
¼ cup soy sauce
1 tablespoon oil
1 cup water
2 tablespoons liver spread
salt to taste

 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

Instructions
Wash chicken and drain well. In a bowl, combine chicken, onions, garlic, peppercorns, lemon juice and soy sauce. Massage marinade into meat and marinate in the refrigerator for about 1 hour. Drain chicken and squeeze excess liquid. Reserve marinade and aromatics.
In a wok or wide skillet over medium heat, heat oil. Add chicken and reserved onions and garlic from the marinade. Cook, stirring regularly, for about 7 to 10 minutes or until chicken is lightly browned and juices run clear.
Add reserved marinade and water and bring to a boil. Lower heat, cover, and continue to cook for about 30 to 40 minutes or until chicken is cooked through and sauce is reduced. Add liver spread and stir to dissolve. Cook for about 3 to 5 minutes or until sauce is thickened. Season with salt to taste. Garnish with sliced onion rings, if desired. Serve hot.




  </div>

  </div>

   </div>
      );
      ReactDOM.render(Afritada,document.getElementById('root'));
};

function Chickenb(){
    let Bistek= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Chicken Bistek</span>
  <img src="image/dish3.jpg" alt="" className="BuffaloChickenimg"/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS

2 lb (900g) chicken drumsticks , skin on
3-4 small potatoes , peeled and cubed
1 carrot , chopped
1 yellow bell pepper , sliced into strips
3 cloves garlic , chopped
1 red onion , chopped
1 14 oz. (400g) can tomato puree
1 8 oz. (225g) can pineapple chunks , reserve syrup, drained
2 tablespoons soy sauce
3 dried bay leaves
1/2 cup green peas
salt and pepper , to taste
6 tablespoons cooking oil , divided

 </div>  <span className="Instructions">Instructions</span>

   <div  disabled className="BuffaloChicken1" rows="4" cols="20">
Instructions
In a big pan over medium heat, heat 4 tablespoons of oil. Add potatoes and cook for about 1 minute. Then add carrot and cook for about 2 minutes. Add bell pepper and cook for about 1 minute. Remove all vegetables from pan and drain on paper towels.
Warm the remaining 2 tablespoons of oil in the same pan over medium heat. Add onion and garlic and cook for 1-2 minutes. Then add chicken and brown it slightly. Add the tomato puree, pineapple syrup, soy sauce, and bay leaves. Bring to a boil, cover and simmer for about 20 minutes, or until the chicken is almost tender. Stir occasionally.
Add potatoes, yellow bell pepper, carrots, and pineapple chunks and continue to cook for 5-6 minutes, or until the potatoes are cooked. Add the green peas, season with salt and pepper and cook for 2 minutes more. Serve hot. Enjoy!
 

  </div>
  </div>

   </div>
      );
      ReactDOM.render(Bistek,document.getElementById('root'));
};
function Sizzling(){
    let Sisig= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Sizzling Pork Sisig</span>
  <img src="image/dish4.jpg" alt="" className="BuffaloChickenimg"/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
6 pieces (or 400g) pork cheeks *
400g pork belly
1 cup coconut vinegar **
3 bay leaves
1/2 tsp salt 
1/2 tsp pepper
water
4 tbsp soy sauce
3 tbsp coconut vinegar **
2 tbsp butter
2 tbsp oil
1 thumb sized ginger (minced)
6 cloves of garlic
4 tbsp mayonnaise
1/2 red onion (diced)
2 cups pork crackling (chopped)
4 birds eye chillies (sliced)
1 egg
2 - 3 calamansi (halved)

Instructions
 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">


1. Place pork cheeks and belly in a small pot with the 1 cup vinegar, bay leaves, salt and pepper. Add enough water to just cover and boil for 20 minutes. Drain liquid and set pork aside to cool. You could do this step the night before too, if you want.

2. Heat up a grill pan on the stove and grill the pork pieces on all sides until charred and crispy (approx. 20 minutes). Can do this step on an outdoor BBQ if you have one.

3. Remove pork from grill and dice finely. Mixed diced pork in a bowl with soy sauce, 3 tbsp vinegar and butter. 

4. Heat up a pan and add the oil. Saute the ginger and garlic until fragrant. Stir in the diced pork mixture. Allow pork to crisp up before stirring/turning to cook the other side till crisp too. Stir in the mayonnaise.

5. Heat up a hot plate, if using. Once hot, add the pork onto the plate. Sprinkle with onion, pork crackling and chillies. Make some room in the middle of the plate and add the egg. Serve with calamansi (or substitute). Complete this step directly in the pan if you're not using the hot plate. Eat immediately with steamed rice.



  </div>
  </div>

   </div>
      );
      ReactDOM.render(Sisig,document.getElementById('root'));
};


function kare(){
    let care= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Kare-Kare</span>
  <img src="image/dish5.jpg" alt="" className="BuffaloChickenimg"/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
2 pounds oxtail, cut into serving size
water
1 banana heart
2 large eggplant, ends trimmed and cut into 1-inch thick
1 bundle long beans (sitaw), cut into 3-inch lengths
1 bundle pechay, ends trimmed and leaves separated
¼ cup rice flour
1-1/2 tablespoons annatto powder
1-1/2 cups chunky peanut butter
1 tablespoon oil
1 medium onion, peeled and sliced thinly
4 to 5 cloves garlic, peeled and minced
2 tablespoons fish sauce
salt and pepper to taste
shrimp paste

Instructions
Rinse oxtail under cold, running water and with a knife, trim excess fat. In a deep pot, place oxtails and enough water to cover. Over medium heat, bring to a boil, skimming any scum that accumulates to top. Lower heat, cover and simmer, adding more water as needed to maintain 6 cups, for about 2 to 3 hours or until oxtails are easily pierced with a fork. Drain oxtail, reserving about 6 cups broth.
Peel and discard the outer, fibrous skin layers of banana heart until you reach the lighter, softer core. Trim off stem and discard. Cut banana core into half and into fourths. In a bowl of cold salted water, place cut banana and soak for about 15 to 20 minutes. Using hands, squeeze to release bitter sap. Rinse with cold water and drain well, discarding liquid.
In a pot over medium heat, bring about 4 cups water to a boil. Add banana heart and blanch for about 1 minute. With a slotted spoon, remove from liquid and set aside. Add eggplant and blanch for about 1 minute. With a slotted spoon, remove from liquid and set aside. Add long beans and blanch for about 1 minute. With a slotted spoon, remove from liquid and set aside. Add pechay and blanch for about 30 seconds. With a slotted spoon, remove from liquid and set aside.
In a skillet over medium heat, add rice flour and cook, stirring occasionally, until lightly browned and toasted. In a bowl, combine toasted rice flour and ¼ cup reserved broth and whisk until smooth.
In a small bowl, combine annatto powder and ¼ cup reserved broth. Stir until powder is dissolved and color has dispersed.
In a bowl, combine peanut butter and ½ cup of reserved broth and stir until well-blended.
In a large pot over medium heat, heat oil. Add onions and garlic and cook until limp and aromatic. Add oxtail and cook, stirring occasionally, until lightly browned. Add fish sauce and cook for about 2 to 3 minutes.
Add the remaining 5 cups of reserved broth and bring to a simmer. Add annatto water, rice flour mixture and peanut butter mixture, stirring well to combine. Season with salt and pepper to taste. Continue to simmer for about 10 minutes or until it begins to slightly thicken. Add blanched vegetables and cook for about 2 to 3 minutes or until heated through and tender yet crisp. Serve hot with shrimp paste on the side.
 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(care,document.getElementById('root'));
};

function Kaldereta(){
    let beefKadereta= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Kaldereta</span>
  <img src="image/dish6.jpg" alt="" className="BuffaloChickenimg"/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
1 ½ lbs stewing beef, cut into 1 inch cubes
½ cup vinegar
6 whole peppercorns, crushed
4 cloves garlic, crushed
4 tablespoons vegetable oil
1 onion, sliced
1 cup tomato sauce
1 bay leaf
2 teaspoons sea salt
1 teaspoon sugar
2 cups water or more, as needed
1 red bell pepper, cut into strips
1 small carrot, peeled and diced
1 potato, peeled and diced
1 teaspoon Tabasco sauce or your favorite hot sauce
¼ cup liver spread
½ cup frozen peas
Grated cheddar cheese (optional)

Instructions
In a bowl, combine vinegar, crushed peppercorns and garlic. Stir in the beef, cover with plastic wrap and let marinate in the fridge for 1 hour.
While the beef is marinating, prepare all the vegetables needed for this dish.
After an hour, remove the beef from the marinade and let it drain for few minutes.
Using a heavy pan, brown the beef in hot oil a few pieces at a time. Transfer into a plate and set aside.
Using the same pan, sauté the onion until translucent. Return the browned beef to the pan. Add tomato sauce, bay leaf, salt, sugar and water. Bring to a boil, lower the heat, cover and simmer for 1 ½ to 2 hours or until the beef is tender, stirring constantly and adding more water as needed.
Add the red pepper, potato, carrot and hot sauce. Cover and simmer for 10 more minutes.
Add the liver paste and green peas. Stir and cook for another 5 minutes.
Transfer into a serving plate and top with grated cheese, if using.
Serve as is or with steamed rice.
Enjoy!
 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(beefKadereta,document.getElementById('root'));
};




function shrimp(){
    let Lumpia= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Shrimp Lumpia</span>
  <img src="image/dish7.png" alt="" className="BuffaloChickenimg"/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
Makes 30

prep tim- 1 hour, cook time- 20 minutes

1 pound ground pork

30 large shrimp

4 cloves garlic, minced 

1/2 cup chopped onion

1/2 cup grated carrots

1/2 cup chopped water chestnuts 

1/2 cup chopped green onions

1/2 cup thinly sliced green cabbage 

1 teaspoon ground black pepper

1 teaspoon salt 

1 teaspoon garlic powder

1 teaspoon camaron molido (ground shrimp, optional)

1 teaspoon soy sauce

1 egg

1 egg white, for sealing rolls

30 lumpia wrappers/spring roll wrappers (MENLO brand are my favorite but any will do as long as they are of the paper-thin variety. NOT egg roll wrappers as they are too thick and have a bubbly texture that doesn't quite work with this recipe)

2-4 cups vegetable oil, for frying  

VINEGAR DIPPING SAUCE:
1/2 cup white vinegar

3 garlic cloves, crushed

Salt and black pepper to taste

1. Prepare  your vegetables by chopping your onion and green onion, and mincing your garlic and water chestnuts. Thinly slice cabbage. Grate carrots 

2. In a large bowl, combine ground pork, onion, garlic, carrot, green onion, cabbage, pepper, salt, garlic powder, soy sauce, egg and ground shrimp. Ground shrimp is sometimes hard to find, I usually get mine at a Filipino grocery store,  or in the Mexican spice section of the supermarket. Rest assured, the Lumpia will still be delicious without it. 

3. Peel and devein the shrimp, leaving the tail intact. To straighten the shrimp for the lumpia and to make sure they don't curl up as much while cooking I made little "release cuts" inside each shrimp. It's super simple- I make 2 slits, starting with the middle and then another about an inch over (away from the tail)

4. Separate the wrappers and keep the ones not in use from drying out by laying a damp cloth over them. Place about 2 heaping tablespoons of the meat mixture onto each wrapper and getting wrapping! Seal the edge with egg white. 

5. Heat a heavy skillet over medium heat, add oil and heat for about 5 minutes. Make sure oil is hot enough before adding lumpia by testing the edge of one. If it bubbles and sizzles, it's ready! Fry them until they are a nice golden brown color, about 3-5 minutes on each side. Drain on paper towels.

6. Serve with vinegar dipping sauce for an authentic Filipino flavor, or a sweet chili sauce which can be found at most Asian supermarkets.

Instructions
1
Prepare  your vegetables by chopping your onion and green onion, and mincing your garlic and water chestnuts. Thinly slice cabbage. Grate carrots 

2
In a large bowl, combine ground pork, onion, garlic, carrot, green onion, cabbage, pepper, salt, garlic powder, soy sauce, egg and ground shrimp. Ground shrimp is sometimes hard to find, I usually get mine at a Filipino grocery store,  or in the Mexican spice section of the supermarket. 

3
Peel and devein the shrimp, leaving the tail intact. To straighten the shrimp for the lumpia and to make sure they don't curl up as much while cooking I made little "release cuts" inside each shrimp. It's super simple- I make 2 slits, starting with the middle and then another about an inch over (away from the tail)

4
Separate the wrappers and keep the ones not in use from drying out by laying a damp cloth over them. Place 1 heaping tablespoons of the meat mixture onto each wrapper, one shrimp on top, and ger wrapping! As you roll, be sure to keep it as tight and compact as possible without breaking the wrapper. This will keep the fillings from falling out during the frying process.  Seal the edge with beaten egg white. 

5
Heat a heavy skillet over medium heat, add enough oil so that it's 2 inches deep and heat for about 5 minutes. Make sure oil is hot enough before adding lumpia by testing the edge of one. If it bubbles and sizzles, it's ready! Fry them until they are a nice golden brown color, about 3-5 minutes on each side. Drain on paper towels.

6
Serve with vinegar dipping sauce for an authentic Filipino flavor, or a sweet chili sauce which can be found at most Asian supermarkets.
 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(Lumpia,document.getElementById('root'));
};

function pork(){
    let Adobo= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Pork Adobo</span>
  <img src="image/dish8.jpg" alt="" className="BuffaloChickenimg"/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
3 pounds pork belly
1 ½ cups vinegar
½ cup soy sauce
10 garlic cloves (around 1 whole head of garlic), smashed
1 tablespoon whole black peppercorns
1 teaspoon coarse salt
8-10 dried bay leaves
1 tablespoon olive oil


Instructions
1.Place the pork, vinegar, soy sauce, bay leaves, salt, peppercorns, and seven of the smashed garlic cloves in a shallow pot over medium heat. Add one cup water, plus more if necessary, to barely cover the meat. Bring to a boil, then reduce the heat to medium and simmer for 1 hour.

2.Use a slotted spoon to remove the pork and set aside. Allow the broth to continue simmering.

3.In a large skillet or flat griddle, heat the olive oil over medium-high heat. Add the remaining garlic cloves. Add pork and sear each piece on both sides until golden brown.

4.Return pork to the pot, and reduce the sauce by simmering for another hour to half an hour, stirring occasionally, until the sauce thickens to your liking.
 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(Adobo,document.getElementById('root'));
};

function Dinuguan(){
    let puto= (

    <div >

<img className="cover1" alt="" src="image/cover1.png"/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Dinuguan with Puto</span>
  <img src="image/dish9.jpg" alt="" className="BuffaloChickenimg"/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
2 lbs. pork shoulder, cubed
1 lb. pork large intestine, cleaned thoroughly (optional)
1 to 1½ cups pig blood
2 to 3 pieces banana pepper
2 thumbs ginger, minced
1 medium yellow onion, diced
6 cloves garlic, crushed and chopped
2 cups water
¾ cup cane or white vinegar
1 piece pork cube (optional)
3 tablespoons cooking oil
Salt and ground black pepper to taste


Instructions

1.Heat the oil in a cooking pot.

2.Saute the garlic, onion, and ginger.

3.Add the intestine. Saute for 3 minutes.

4.Add the pork. Cook until light brown.

5.Pour the water in and add the pork cube. Let it boil. Simmer until the pork becomes tender.

6.Pour the vinegar in the cooking pot. Let it re-boil.

7.Add the banana peppers. Cook for 3 minutes.

8.Stir-in the pig blood and make sure to continuously stir during the first minute to avoid the blood from forming. Cook in low to medium heat for 15 to 20 minutes.

9.Add salt and pepper to taste.

Serve with puto. Share and enjoy!
 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>
  <a href="https://youtube/6o0lJvp_dgU"><p>https://youtu.be/6o0lJvp_dgU</p></a>

   </div>
      );
      ReactDOM.render(puto,document.getElementById('root'));
};

function Bicol(){
    let Express= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Bicol Express</span>
  <img src="image/dish10.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
3 cups coconut milk
2 lbs pork belly, cut into strips
½ cup Shrimp Paste
1 tbsp Garlic, minced
6 pieces Thai chili or Serrano pepper
3 tablespoons minced ginger
1 medium onion, minced
2 tablespoons cooking oil
Salt and Pepper to taste

Instructions

1.Heat a pan and then pour-in the cooking oil.

2.Sauté the garlic, onion, and ginger

3.Add the pork and then continue cooking for 5 to 7 minutes or until the color becomes light brown

4.Put-in the shrimp paste and Thai chili or Serrano pepper. Stir.

5.Pour the coconut milk in. Bring to a boil. Simmer for 40 minutes or until the pork is tender

6.Add salt and ground black pepper to taste

Serve Hot. Enjoy!
 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(Express,document.getElementById('root'));
};




function Chocolate(){
    let mint= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Chocolate-Mint Bars</span>
  <img src="image/dessert1.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
Bottom layer:
4 1/2 ounces all-purpose flour (about 1 cup
1/2 teaspoon salt
1 cup granulated sugar
1/2 cup egg substitute
1/4 cup butter, melted
2 tablespoons water
1 teaspoon vanilla extract
2 large eggs, beaten
1 (16-ounce) can chocolate syrup
Cooking spray
Mint layer
2 cups powdered sugar 
1/4 cup butter,melted 
2 tablespoons fat-free milk 
1/2 teaspoon peppermint extract 
2 drops green food coloring
Glaze: 
3/4 cup semisweet chocolate chips 
3 tablespoons butte

Instructions

Step 1
Preheat oven to 350°.

Step 2
To prepare bottom layer, weigh or lightly spoon flour into a measuring cup; level with a knife.
 Combine flour and salt; stir with a whisk. Combine granulated sugar, egg substitute, ¼ cup melted butter,
  2 tablespoons water, vanilla, eggs, and chocolate syrup in a medium bowl; stir until smooth. 
  Add flour mixture to chocolate mixture, stirring until blended. 
  Pour batter into a 13 x 9 inch metal baking pan coated with cooking spray. 
  Bake at 350° for 23 minutes or until a wooden pick inserted in center comes out almost clean. 
  Cool completely in pan on a wire rack.

Step 3
To prepare mint layer, combine powdered sugar, 
¼ cup melted butter, and next 3 ingredients (through food coloring) in a medium bowl; 
beat with a mixer until smooth. Spread mint mixture over cooled cake.

Step 4
To prepare glaze, combine chocolate chips and 3 tablespoons butter in a medium microwave-safe bowl.
Microwave at HIGH 1 minute or until melted, stirring after 30 seconds.
Let stand 2 minutes. Spread chocolate mixture evenly over top. Cover and refrigerate until ready to serve. Cut into 20 pieces.

 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(mint,document.getElementById('root'));
};


function Class(){
    let walnuts= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Classic Fudge-Walnut Brownies</span>
  <img src="image/dessert2.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
3.38 ounces all-purpose flour (about 3/4 cup) 

1 cup granulated sugar 

3/4 cup unsweetened cocoa 

1/2 cup packed brown sugar 

1/2 teaspoon baking powder 

1/4 teaspoon salt 

1 cup bittersweet chocolate chunks, divided 

1/3 cup fat-free milk 6 tablespoons butter, melted 

1 teaspoon vanilla extract 2 large eggs, lightly beaten 

1/2 cup chopped walnuts, divided 

Cooking spray

Instructions

Step 1
Preheat oven to 350°.

Step 2
Weigh or lightly spoon flour into dry measuring cups; level with a knife.
 Combine flour and next 5 ingredients (through salt) in a large bowl.
  Combine 1/2 cup chocolate and milk in a microwave-safe bowl; microwave at HIGH 1 minute, stirring after 30 seconds.
   Stir in butter, vanilla, and eggs. Add milk mixture, 1/2 cup chocolate, and 1/4 cup nuts to flour mixture; stir to combine.

Step 3
Pour the batter into a 9-inch square metal baking pan coated with cooking spray;
 sprinkle with remaining 1/4 cup nuts. Bake at 350° for 22 minutes or until a wooden pick inserted in center comes out with moist crumbs clinging. 
 Cool in pan on a wire rack. Cut into 20 pieces.
 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(walnuts,document.getElementById('root'));
};





function Texas(){
    let sheet= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Buffalo Chicken Dip</span>
  <img src="image/dessert3.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
Cooking spray 

2 teaspoons all-purpose flour 

2 cups all-purpose flour (about 9 ounces) 

2 cups granulated sugar 

1 teaspoon baking soda 

1 teaspoon ground cinnamon 

1/4 teaspoon salt 

3/4 cup water 1/2 cup butter 

1/2 cup unsweetened cocoa, divided 

1/2 cup low-fat buttermilk 

1 tablespoon vanilla extract, divided 

2 large eggs 

6 tablespoons butter 

1/3 cup fat-free milk 

3 cups powdered sugar 

1/4 cup chopped pecans, toasted

Instructions

Step 1
Preheat oven to 375°.

Step 2
Coat a 13 x 9-inch pan with cooking spray, and dust with 2 teaspoons flour. Set aside.

Step 3
Lightly spoon 2 cups flour into dry measuring cups; level with a knife.
 Combine 2 cups flour and next 4 ingredients (through salt) in a large bowl,
  stirring well with a whisk. Combine 3/4 cup water, 1/2 cup butter,
   and 1/4 cup cocoa in a small saucepan; bring to a boil, stirring frequently.
    Add to flour mixture. Beat at medium speed with an electric mixer until well blended.
     Add buttermilk, 1 teaspoon vanilla, and eggs; beat well. Pour batter into the prepared pan.
      Bake at 375° for 22 minutes or until a wooden pick inserted in center comes out clean. Place on a wire rack.

Step 4
Combine 6 tablespoons butter, fat-free milk, and remaining 1/4 cup cocoa in a saucepan; bring to a boil, stirring constantly.
 Remove from heat. Gradually stir in powdered sugar and remaining 2 teaspoons vanilla. Spread over hot cake. Sprinkle cake with pecans. Cool completely on wire rack.
 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(sheet,document.getElementById('root'));
};






function Espresso(){
    let Crinkles= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Buffalo Chicken Dip</span>
  <img src="image/dessert4.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
Cooking spray 

4.5 ounces all-purpose flour (about 1 cup) 


1 1/4 cups powdered sugar, divided 


1/4 cup unsweetened cocoa 1


 1/4 teaspoons baking powder 


 1/8 teaspoon salt 


 5 1/4 teaspoons canola oil 


 1 1/2 ounces unsweetened chocolate, chopped 


 1 teaspoon instant espresso granules 


 3/4 cup packed brown sugar 


 3 tablespoons light-colored corn syrup 


 1 1/2 teaspoons vanilla extract 


 2 large egg whites


Instructions
Step 1
Weigh or lightly spoon flour into dry measuring cups; level with a knife.
Combine flour, 3/4 cup powdered sugar, cocoa, baking powder,
and salt in a medium bowl; stir with a whisk. 
Combine oil and chocolate in a small saucepan over low heat;
cook until chocolate melts, stirring constantly. 
Add espresso granules to pan; stir until blended. 
Remove from heat. Pour chocolate mixture into a large bowl; cool 5 minutes.
Stir in brown sugar, syrup, and vanilla. Add egg whites, stirring with a whisk.
Add flour mixture to egg mixture, stirring gently just until combined. Cover; chill at least 2 hours or overnight.

Step 2
Preheat oven to 350°.

Step 3
Roll dough into 1-inch balls. Dredge balls in remaining 1/2 cup powdered sugar; 
place balls 2 inches apart on 2 baking sheets lined with parchment paper. 
Bake at 350° for 10 minutes or until tops are cracked and almost set.
 Cool cookies on pan 2 minutes or until set; remove from pan. Cool cookies on a wire rack.
 

 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(Crinkles,document.getElementById('root'));
};



function tira(){
    let misu= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Buffalo Chicken Dip</span>
  <img src="image/dessert5.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS


2/3 cup sugar 

3 cups whipping cream, divided 

2 large eggs 

2 egg yolks 

1 tablespoon all-purpose flour 

1/2 vanilla bean, split 


1 (16-ounce) package mascarpone cheese 


3/4 cup brewed espresso 


3 tablespoons Marsala 


1 (7-ounce) package dried ladyfingers 


3 tablespoons powdered sugar 


1 tablespoon cocoa


Instructions
Step 1
Stir together sugar, 2 cups whipping cream, and next 4 ingredients in a heavy saucepan. 
Cook over medium heat, stirring constantly, 20 minutes or until thickened. Cool completely. 
Discard vanilla bean; cool. Whisk in mascarpone.

Step 2
Stir together espresso and Marsala. Dip each ladyfinger in coffee mixture, and place in a 13- x 9-inch baking dish. 
Pour mascarpone mixture over ladyfingers.

Step 3
Beat remaining 1 cup whipping cream at high speed with an electric mixer until foamy; gradually add powdered sugar, 
beating until soft peaks form. Spoon over mascarpone mixture, and sprinkle with cocoa. Cover and chill 2 hours.

Step 4
Note: Espresso can be prepared by stirring together 1 cup hot water and 1/2 cup ground expresso coffee. 
Let stand 5 minutes; pour through a wire-mesh strainer lined with a coffee filter into a glass measuring cup, discarding grounds. 
Measure 3/4 cup.

Step 5
Note: We used Bellino Savoiardi ladyfingers.
 

 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(misu,document.getElementById('root'));
};



function Blueberry(){
    let berry= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Buffalo Chicken Dip</span>
  <img src="image/dessert6.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS


2 cups granulated sugar 

3/4 cup (6 ounces) 

1/3-less-fat cream cheese, softened 

4 large egg yolks 

3 cups 2% reduced-fat milk 

1 cup half-and-half 

3 cups fresh blueberries, coarsely chopped 

1/4 cup powdered sugar 1/4 cup water


Instructions
Step 1
Combine first 3 ingredients in a large bowl; beat with a mixer at high speed until smooth. 
Combine milk and half-and-half in a medium, heavy saucepan; bring to a boil. Remove from heat. 
Gradually add half of hot milk mixture to cheese mixture, stirring constantly with a whisk. Return milk mixture to pan. 
Cook over medium-low heat 5 minutes or until a thermometer registers 160°, stirring constantly. Place pan in an ice-filled bowl. 
Cool completely, stirring occasionally.

Step 2
Combine blueberries, powdered sugar, and 1/4 cup water in a small saucepan; bring to a boil. 
Reduce heat, and simmer for 10 minutes or until mixture thickens slightly, stirring frequently. 
Remove from heat, and cool completely.

Step 3
Stir blueberry mixture into milk mixture. 
Pour mixture into the freezer can of an ice-cream freezer; freeze according to manufacturer's instructions. 
Spoon ice cream into a freezer-safe container; cover and freeze for 1 hour or until firm.

 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(berry,document.getElementById('root'));
};





function peanut(){
    let butter= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Buffalo Chicken Dip</span>
  <img src="image/dessert7.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
1 cup powdered sugar 

1 cup natural-style, reduced-fat creamy peanut butter (such as Smucker's) 

1 (8-ounce) block 1/3-less-fat cream cheese, softened 

1 (14-ounce) can fat-free sweetened condensed milk 

12 ounces frozen fat-free whipped topping, thawed 

2 (6-ounce) reduced-fat graham cracker crusts 

20 teaspoons fat-free chocolate sundae syrup

Instructions
Combine powdered sugar, peanut butter, and cream cheese in a large bowl; 
beat with a mixer at medium speed until smooth. Add milk; beat until combined.
 Fold in whipped topping. Divide mixture evenly between crusts; 
 chill 8 hours or until set (pies will have a soft, fluffy texture). 
 Cut into wedges; drizzle with chocolate syrup
 </div>

<span className="Instructions">Instructions</span>
  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(butter,document.getElementById('root'));
};


function Strawberry(){
    let Almond= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div>
  <img src="image/dessert8.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS

Crust: 

36 honey graham crackers (about 9 sheets) 

2 tablespoons sugar 2 tablespoons butter, melted 

4 teaspoons water Cooking spray Filling: 

2/3 cup light cream cheese 

1/4 cup sugar 

1/2 teaspoon vanilla extract 

1/4 teaspoon almond extract Topping: 

6 cups small fresh strawberries, divided 

2/3 cup sugar 1 tablespoon cornstarch 

1 tablespoon fresh lemon juice 

2 tablespoons sliced almonds, toasted

Instructions
Step 1
Preheat oven to 350°.

Step 2
To prepare crust, place crackers in a food processor; process until crumbly. Add 2 tablespoons sugar, butter, and water; pulse just until moist. 
Place mixture in a 9-inch round removable-bottom tart pan coated with cooking spray, pressing into bottom and up sides of pan to 3/4 inch. 
Bake at 350° for 10 minutes or until lightly browned. Cool completely on a wire rack.

Step 3
To prepare filling, combine cream cheese, 1/4 cup sugar, and extracts in a medium bowl; stir until smooth. Spread mixture evenly over bottom of tart shell.

Step 4
To prepare topping, place 2 cups strawberries in food processor; process until pureed. Combine strawberry puree, 2/3 cup sugar, 
and cornstarch in a small saucepan over medium heat, stirring with a whisk. Bring to a boil, stirring constantly. Reduce heat to low; cook 1 minute. 
Remove glaze from heat, and cool to room temperature, stirring occasionally.

Step 5
Combine 4 cups strawberries and juice; toss to coat. Arrange berries, bottoms up, in a circular pattern over filling. 
Spoon half of glaze evenly over berries (reserve remaining glaze for another use). Sprinkle nuts around edge. Cover and chill 3 hours.

Step 6
Note: You can use either an 8 x 12-inch rectangular pan or a 9-inch round tart pan. The recipe also works with a 9-inch springform pan and a 10-inch pie plate.

 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(Almond,document.getElementById('root'));
};



function Roasted(){
    let banana= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Buffalo Chicken Dip</span>
  <img src="image/dessert9.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS


Bars: 

2 cups sliced ripe banana (about 3 medium) 

1/3 cup packed dark brown sugar 

1 tablespoon butter, chilled and cut into small pieces 

9 ounces cake flour (about 2 1/4 cups) 

3/4 teaspoon baking soda 

1/2 teaspoon baking powder 

1/4 cup nonfat buttermilk 

1 teaspoon vanilla extract 

1/2 cup butter, softened 

1 1/4 cups granulated sugar 

2 large eggs Baking spray with flour Frosting: 

1/4 cup butter 2 cups powdered sugar 

1/3 cup (3 ounces) 

1/3-less-fat cream cheese, softened 

1 teaspoon vanilla extract 

1/4 cup chopped pecans, toasted


Instructions
Step 1
Preheat oven to 400°.

Step 2
To prepare bars, combine banana, brown sugar, and 1 tablespoon butter in an 8-inch square baking dish. Bake at 400° for 35 minutes, stirring after 17 minutes. Cool slightly.

Step 3
Reduce the oven temperature to 375°.

Step 4
Weigh or lightly spoon cake flour into dry measuring cups; level with a knife. Combine 9 ounces (about 2 1/4 cups) flour, soda, 
and baking powder in a medium bowl. Combine banana mixture, buttermilk, and 1 teaspoon vanilla in another medium bowl. 
Place 1/2 cup butter and granulated sugar in a large bowl; beat with a mixer at medium speed until well blended. 
Add eggs to granulated sugar mixture; mix well. Add flour mixture to sugar mixture alternating with banana mixture, beginning and ending with flour mixture.

Step 5
Pour batter into a 13 x 9–inch baking pan coated with baking spray. Bake at 375° for 20 minutes or until a wooden pick inserted in center comes out clean. 
Cool completely in pan on a wire rack.

Step 6
To prepare frosting, melt 1/4 cup butter in a small saucepan over medium heat; cook 4 minutes or until lightly browned. Cool slightly. 
Combine browned butter, powdered sugar, cream cheese, and 1 teaspoon vanilla in a medium bowl; beat with a mixer until smooth. Spread frosting over cooled bars. Sprinkle with pecans.

 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(banana,document.getElementById('root'));
};


function Bourbon(){
    let tart= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Buffalo Chicken Dip</span>
  <img src="image/dessert10.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS


1 cup packed light brown sugar 

3/4 cup dark corn syrup 

3 tablespoons all-purpose flour 

2 tablespoons bourbon 

2 tablespoons molasses 

1 tablespoon butter, melted 

1/2 teaspoon vanilla extract 

1/4 teaspoon salt 

2 large eggs 

1 large egg white 

2/3 cup pecan halves 

1/2 (15-ounce) package refrigerated pie dough (such as Pillsbury) 

Cooking spray 

1/2 ounce bittersweet chocolate, chopped


Instructions
Step 1
Preheat oven to 350°.

Step 2
Combine first 10 ingredients, stirring well with a whisk. Stir in pecans. 
Roll dough into a 13-inch circle; fit into a 9-inch removable-bottom tart pan coated with cooking spray. 
Trim excess crust using a sharp knife. Spoon sugar mixture into prepared crust. Bake at 350° for 45 minutes or until center is set. Cool completely on a wire rack.

Step 3
Place chocolate in a microwave-safe bowl; microwave at HIGH 1 minute. Stir until smooth. Drizzle chocolate over tart.
 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(tart,document.getElementById('root'));
};




































function Baileys(){
    let Delight= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Buffalo Chicken Dip</span>
  <img src="image/beverage1.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS


1/2 Cup Baileys

1/2 Cup Milk

1 Cinnamon Stick

4-5 Cardamoms

1 Tbsp Dark Chocolate, grated


Instructions

1.Heat milk in a saucepan along with cinnamon and cardamons to develop flavour.

2.Pour Bailey's in a tall glass and add the flavoured milk to it. Mix well using a fork.

3.Finish with grated chocolate on top.4.Serve hot.
 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(Delight,document.getElementById('root'));
};





function Irish(){
    let coffee= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Buffalo Chicken Dip</span>
  <img src="image/beverage2.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS

50 Ml Unsweetened Cold Whipping Cream
2 Tbsp Soft Brown Sugar
50 Ml Irish Whisky
1 Cup Freshly Brewed Coffee
To sprinkle Nutmeg (optional)
Instructions
1.Fill a tall glass (traditionally with a stem) with hot boiling water, leave to stand and then pour away the water.2.Whip the cream until the bubbles disappear and it has just started to thicken and form ribbons underneath the whisk. Put back in the refrigerator.3.Dissolve the sugar in 2 tablespoons of hot water in a small pan and bring to a boil. Add some freshly brewed rich coffee and stir. Then remove from heat and stir in the whisky.4.Pour the mixture of whisky, sugar and coffee into the bottom of the pre-heated glass.5.Take the cold cream out of the fridge, whisk once again, then pour it on over the back of a spoon (to prevent it from sinking) until you hit the rim of the glass.6.Grate a little nutmeg over the top and serve immediately.
 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(coffee,document.getElementById('root'));
};

function Kiwi(){
    let Margarita= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Buffalo Chicken Dip</span>
  <img src="image/beverage3.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS

60ml of tequila
15 ml of orange liquor
15 ml of lime juice
10 ml of sugar syrup
2 Tbsp of fresh kiwi pulp



Instructions

1. Blend the ingredients together and serve in a salt rimmed Margarita glass



 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(Margarita,document.getElementById('root'));
};

function Old(){
    let Fashion= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Buffalo Chicken Dip</span>
  <img src="image/beverage4.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS
60 ml of bourbon Whiskey
1 sugar cube
3 drops of angostura bitters
4-5 cubes of ice
3 orange peels

Instructions

1. Muddle the orange peels, sugar and Angostura bitters together.

2. Then add 3-4 cubes of ice, Bourbon whiskey and drink up

 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(Fashion,document.getElementById('root'));
};

function Mango(){
    let Peach= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Buffalo Chicken Dip</span>
  <img src="image/beverage5.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS

10 glasses of purified water
5-6 of white tea bags
2 peaches (pitted and diced)
1 cup of mango (chopped)
1 tbsp honey (optional)


Instructions
1. Boil water in a large saucepan, and remove from heat.

2. Steep the white tea bags for about 7 minutes, then transfer tea to a large mixing bowl. Allow the tea to cool down for 30 minutes approximately.

3. Mix chopped peaches, mango, and 1 tbsp of honey (to taste) in a smaller mixing bowl

4. Then transfer the fruits to a large pitcher, and pour the cooled tea into the pitcher.

5. Stir to combine, chill in the refrigerator and serve over ice.
 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(Peach,document.getElementById('root'));
};



function Chilled(){
    let Darjeeling= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Buffalo Chicken Dip</span>
  <img src="image/beverage6.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS

8 tsp of darjeeling first flush tea
4 cups of water
4 tsp of honey
1 lime for lime juice and zest
Mango (preferably ripe Alphonso mango, peeled and sliced)
Instructions
1.1. Bring water to a boil, and then remove from fire to cool.2.2. Then add the tea leaves to a large pot and allow to steep for 4-5 minutes.3.3. Strain tea into a clean jug and keep in the deep freezer.4.4. Add honey, lime juice and zest from 1 lime to the tea.5.5. Add iced water (sans the ice) to the tea to make enough for 4 glasses and also to dilute the tea which would otherwise be very intensely flavoured.6.6. Add mangoes and mint to the chilled tea and serve in tall glasses.
 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(Darjeeling,document.getElementById('root'));
};



function Moskow(){
    let Mule= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Buffalo Chicken Dip</span>
  <img src="image/beverage7.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS

45 ml of vodka
15 ml of lime juice
30 ml of ginger lime cordial
2 wedges of lime
7Up/Sprite & soda to top


Instructions
1.1. Pour vodka, lime juice, ginger lime cordial in a copper mug full of ice.2.2. Top it off with half soda, half 7 up or sprite.3.3. Stir and garnish with a cucumber stick and fresh mint.
 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(Mule,document.getElementById('root'));
};

function fresh(){
    let Raw= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Buffalo Chicken Dip</span>
  <img src="image/beverage8.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS

1 cup organic raw almonds soaked for 8-12 hours
4 cups of purified water
Instructions
1.Place the raw almonds in a glass bowl or large jar, and cover with filtered water for 8 hours or more. Cover with lid.2.Rinse the nuts several times to remove any of the anti-nutrients and enzyme inhibitors. If soaking for more than 8 hours, make sure you rinse and soak a few times.3.Pour boiling water over the almonds and let them sit for five minutes. Drain. Skins should peel off easily.4.Put almonds and water in a powerful blender and start blending at low speed. Blend them with less water for 1 - 2 minutes in the beginning, so they become a really smooth paste.5.Add the remaining water. Blend everything together for another 2-3 minutes, until it is completely smooth and frothy.6.Use a fine mesh strainer or place 3 or 4 layers of fine mesh cloth over a metal strainer set over a bowl,jar or jug. Pour small amounts of the almond milk through the strainer into the bowl. Use a spoon or spatula to press down on the strainer and move the solids around.7.Once most of the milk has passed through the strainer, gather up the mesh cloth and gently squeeze it to remove excess liquid.8.You'll be left with really fine almond meal inside the mesh cloth. You can discard it, or you can dry it out in a very low oven and use it in place of almond flour in baking recipes!
 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(Raw,document.getElementById('root'));
};


function litchi(){
    let Sorbet= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Buffalo Chicken Dip</span>
  <img src="image/beverage9.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS

Ingredients:
500g of fresh litchi
100g of caster sugar
1 1/2 cups of water
1/2 lime for lime juice
Instructions
1.1. Put the litchi in a pan with the water and sugar, and bring to a boil. Mix well, making sure the sugar has dissolved fully. Then allow it to cool.2.2. When the compote has cooled, deseed the litchis and keep aside the syrup.3.3. Mix the litchi flesh with the sugar syrup and blend in the lime juice. Chuck them into the food processor and blitz until everything is chopped and of even consistency. Then if you like, press everything through a sieve for extra smoothness.4.4. Freeze the mixture until solid.5.5. Once solid, smash up the sorbet and churn again for 5-10 minutes. Freeze overnight and then serve.6.Note: You may if you like, add a dash of vodka, for an alcohol-laced sorbet.
 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(Sorbet,document.getElementById('root'));
};

function Lychee(){
    let dill= (

    <div >

<img className="cover1" src="image/cover1.png" alt=""/>
<h1 className="Enjoy">Enjoy Cooking!</h1>
<div className="scrollmenu" >
  <a onClick={Appetizers}>Appetizers</a>
  <a onClick={Famous}>Famous Dishes</a>
  <a onClick={Desserts}>Desserts</a>
  <a onClick={Beverage}>Beverage</a>
  <a onClick={Pasta}>Pasta</a>
</div>
  <div> <span className="name">Buffalo Chicken Dip</span>
  <img src="image/beverage10.jpg" className="BuffaloChickenimg" alt=""/><span className="Ingredients">Ingredients</span>
  <div disabled rows="4" cols="30" className="BuffaloChicken">
 INGREDIENTS

250 gm lychees
1 lime, juiced
A few sprigs of dill
4-5 ice cubes
Instructions
.1. Peel and deseed the lychees. Place them in a blender along with the remaining ingredients and blend for a few seconds.2.2. Strain into a glass, top up with ice cubes and garnish with a sprig of dill.
 </div>  <span className="Instructions">Instructions</span>

  <div  disabled className="BuffaloChicken1" rows="4" cols="20">

DIRECTIONS
Preheat oven to 350°. Spread cream cheese into an ungreased shallow 1-qt. baking dish. Layer with chicken, wing sauce and salad dressing. Sprinkle with cheese.
Bake, uncovered, 20-25 minutes or until cheese is melted. Serve with baguette slices. Yield: about 2 cups.

Test Kitchen Tips
•  Shredded rotisserie chicken works well.
•  If you want an ooey-gooey top with very little browning, cover with foil when baking.



NUTRITIONAL FACTS
2 tablespoons (calculated without dippers): 156 calories, 13g fat (7g saturated fat), 38mg cholesterol, 484mg sodium, 2g carbohydrate (1g sugars, 0 fiber), 7g protein.




  </div>
  </div>

   </div>
      );
      ReactDOM.render(dill,document.getElementById('root'));
};
