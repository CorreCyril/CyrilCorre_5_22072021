for(var i=0; i<50; i++) {
  var insertdiv = document.createElement ("div");
  insertdiv.classList = "card--item";
  var insertmenu = document.createElement ("div");
  insertmenu.classList = "card--menu";
  insertdiv.appendChild(insertmenu);
  var inserttitle = document.createElement ("div");
  inserttitle.classList = "card--title";
  insertmenu.appendChild(inserttitle);
  var insertname = document.createElement ("div");
  insertname.classList = "card--name";
  inserttitle.appendChild(insertname);
  var atname = document.createElement ("h2");
  atname.classList = "card--atname";
  insertname.appendChild(atname);
  var tabname = document.createTextNode (recipes[i].name);
  atname.appendChild(tabname);
  var inserttime = document.createElement ("div");
  inserttime.classList = "card--time";
  inserttitle.appendChild(inserttime);
  var attime = document.createElement ("h3");
  attime.classList = "card--attime";
  inserttime.appendChild(attime);
  var logtime = document.createElement ("i");
  logtime.classList = "far fa-clock fa-md logtime";
  attime.appendChild(logtime);
  var tabtime = document.createTextNode (recipes[i].time + " min");
  attime.appendChild(tabtime);
  var insertingredients = document.createElement ("div");
  insertingredients.classList = "card--ingredients";
  insertmenu.appendChild(insertingredients);

  for(var j=0; j<3; j++) {
    var ingredientstxt = document.createTextNode (recipes[i].ingredients[j].ingredient + ": ");
    var ingredientsquantity = document.createTextNode (recipes[i].ingredients[j].quantity);
    var ingredientsunit = document.createTextNode (recipes[i].ingredients[j].unit);
    var insertline = document.createElement ("br");

    insertingredients.appendChild(ingredientstxt);
    insertingredients.appendChild(ingredientsquantity);
    insertingredients.appendChild(ingredientsunit);
    insertingredients.appendChild(insertline);
      
  }
  var insertmeth = document.createElement ("div");
  insertmeth.classList = "card--meth";
  insertmenu.appendChild(insertmeth);
  var meth1 = document.createTextNode (recipes[i].description.split(" ").slice(0, 33).join(" ") + (" ..."));
  var meth2 = document.createTextNode (recipes[i].description);
  var nb = recipes[i].description.split(" ");
  console.log(nb.length);
  
    
  
  insertmeth.appendChild(meth1);
  card.appendChild(insertdiv);
}



