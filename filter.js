afficherLesRecettes(recipes);

const searchBar = document.getElementById("search--text");
const searchButton = document.getElementById("search--button");

var recetteTrouvee = [];

searchButton.addEventListener("click", function() {
    var text = searchBar.value;
    recherche(text);
  });
  
  searchBar.addEventListener("change", function(event) {
    var text = event.target.value;
    recherche(text);
  });

function recherche(text) {
  recetteTrouvee = [];
  for(var i=0; i<recipes.length; i++) {
    var entrance = text;
    var title = recipes[i].name;
    for(var j=0; j < recipes[i].ingredients.length; j++) {
        var ing = recipes[i].ingredients[j].ingredient;
      }
      
      var appliance = recipes[i].appliance;
      
    
      for(var k=0; k < recipes[i].ustensils.length; k++) {
        var ust = recipes[i].ustensils[k];
      }
    if(title.includes(entrance) || ing.includes(entrance) || appliance.includes(entrance) || ust.includes(entrance)) {
      recetteTrouvee.push(recipes[i]);
      
    }
  }
  afficherLesRecettes(recetteTrouvee);
}


function afficherLesRecettes(recipes) 
{
  console.log(recipes);
  var card = document.getElementById("card");
  card.innerHTML = "";
  for(var i=0; i<recipes.length; i++) {
    var insertdiv = document.createElement ("div");
    insertdiv.classList = "card--item";
    insertdiv.id = "div" + recipes[i].id;
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
    var ingredientslist = document.createElement ("ul");
    ingredientslist.classList = "card--ingredientslist";
    insertingredients.appendChild(ingredientslist);
    for(var j=0; j < recipes[i].ingredients.length; j++) {
      var insertlist = document.createElement ("li");
      var ingredientstxt = document.createTextNode (recipes[i].ingredients[j].ingredient);
      var ingredientstxt1 = document.createTextNode (recipes[i].ingredients[j].ingredient + ": ");
      var insertspan = document.createElement ("span");
      var ingredientsquantity = document.createTextNode ((recipes[i].ingredients[j].quantity));
      var ingredientsquantite = document.createTextNode ((recipes[i].ingredients[j].quantite));
      ingredientslist.appendChild(insertlist);
      if (recipes[i].ingredients[j].quantity==undefined && recipes[i].ingredients[j].quantite==undefined) {
        insertlist.appendChild(ingredientstxt);
      }
      else {
        insertlist.appendChild(ingredientstxt1);
      }
      if (recipes[i].ingredients[j].quantity==undefined) {
      }
      else {
        insertspan.appendChild(ingredientsquantity);
      }
      if (recipes[i].ingredients[j].quantite==undefined) {
      }
      else {
        insertspan.appendChild(ingredientsquantite);
      }
      insertlist.appendChild(insertspan);
      if (recipes[i].ingredients[j].unit==undefined) {
      
      }
      else {
        var unit = recipes[i].ingredients[j].unit;
        var replaceunit = unit.replace("grammes", "g");
        var replaceunit1 = replaceunit.replace("cuillères à soupe", "cuillères");
        var ingredientsunit = document.createTextNode (replaceunit1);
        insertspan.appendChild(ingredientsunit);
      }
    }
    var insertmeth = document.createElement ("div");
    insertmeth.classList = "card--meth";
    insertmenu.appendChild(insertmeth);
    var meth1 = document.createTextNode (recipes[i].description.split(" ").slice(0, 33).join(" ") + (" ..."));
    var meth2 = document.createTextNode (recipes[i].description);
    var nb = recipes[i].description.split(" ");
    if (nb.length < 33) {
      insertmeth.appendChild(meth2);
    }
    else {
      insertmeth.appendChild(meth1);
    }
    card.appendChild(insertdiv);
  }
};
Appdown.addEventListener("click", function() {
    green.style.display = "none";
    resgreen.style.display = "flex";
    researchApp();
});
Appup.addEventListener("click", function() {
    green.style.display = "flex";
    resgreen.style.display = "none";
});


function researchApp() {
  for(var i=1; i<4; i++) {
    var element = document.getElementById("App"+i);
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
  }
  ListApp = [];
  TabApp = [];
  var inputapp = document.getElementById("InputApp");
  var valueapp = inputapp.value;
  for(var i=0; i<recipes.length; i++) {
    ListApp.push(recipes[i].appliance);
  };
  var FilterApp = ListApp.filter(function(ele , pos){
  return ListApp.indexOf(ele) == pos;
  });
  var j=0;
  
  function increment() {
    j++;
  }
  for(var i=0; i<FilterApp.length; i++) {
    
    if (FilterApp[i].includes(valueapp)) {
      
      TabApp.push(FilterApp[i]);
    }
  };
  for(var i=0; i<TabApp.length; i++) {
    increment();
    var insertP = document.createElement("P");
    insertP.classList = "insertP";
    insertP.id= "P"+i;
    if (j==4) {
      j=1;
    };
    var App = document.createTextNode (TabApp[i]);
    var IdApp = document.getElementById("App"+j);
    IdApp.appendChild(insertP);
    insertP.appendChild(App);
    document.getElementById("P"+i).onclick = reply_click;
  };
};
InputApp.addEventListener("keyup", function() {
  researchApp();
});
var reply_click = function() {
  filterbox.style.display = "flex";
  var IdFilter = document.getElementById(this.id);
  var insertfilter = document.createElement ("div");
  insertfilter.classList = "filter--class green";
  var filtertxt = document.createTextNode (IdFilter.innerHTML);
  filterbox.appendChild(insertfilter);
  insertfilter.appendChild(filtertxt);

  
}