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
    var entrance = text.toLowerCase();
    var title = recipes[i].name.toLowerCase();
    var appliance = recipes[i].appliance.toLowerCase();
    for(var j=0; j < recipes[i].ingredients.length; j++) {
      var ing = recipes[i].ingredients[j].ingredient.toLowerCase();
      if(ing.includes(entrance) && recetteTrouvee.every(VerifRecipe) == true) {
        recetteTrouvee.push(recipes[i]);
      }
    }
    for(var k=0; k < recipes[i].ustensils.length; k++) {
      var ust = recipes[i].ustensils[k].toLowerCase();
      if(ust.includes(entrance) && recetteTrouvee.every(VerifRecipe) == true) {
        recetteTrouvee.push(recipes[i]);
      }
    }
    if(title.includes(entrance) && recetteTrouvee.every(VerifRecipe) == true || appliance.includes(entrance) && recetteTrouvee.every(VerifRecipe) == true) {
      recetteTrouvee.push(recipes[i]);
    }
  }
  function VerifRecipe (element) {
    return element != recipes[i]; 
  };
  
  afficherLesRecettes(recetteTrouvee);
}


function afficherLesRecettes(recipes) 
{
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
      var ingredientsquantity = document.createTextNode ((recipes[i].ingredients[j].quantity + " "));
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
Ingdown.addEventListener("click", function() {
  blue.style.display = "none";
  resblue.style.display = "flex";
  green.style.display = "flex";
  resgreen.style.display = "none";
  red.style.display = "flex";
  resred.style.display = "none";
  researchIng();
});
Ingup.addEventListener("click", function() {
  blue.style.display = "flex";
  resblue.style.display = "none";
});
Appdown.addEventListener("click", function() {
    green.style.display = "none";
    resgreen.style.display = "flex";
    blue.style.display = "flex";
    resblue.style.display = "none";
    red.style.display = "flex";
    resred.style.display = "none";
    researchApp();
});
Appup.addEventListener("click", function() {
    green.style.display = "flex";
    resgreen.style.display = "none";
});
Ustdown.addEventListener("click", function() {
  red.style.display = "none";
  resred.style.display = "flex";
  green.style.display = "flex";
  resgreen.style.display = "none";
  blue.style.display = "flex";
  resblue.style.display = "none";
  researchUst();
});
Ustup.addEventListener("click", function() {
  red.style.display = "flex";
  resred.style.display = "none";
});
var k = 0;
var l = 0;
var m = 0;
function researchIng() {
  for(var i=1; i<4; i++) {

    var element = document.getElementById("Ing"+i);
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
  }
  ListIng = [];
  TabIng = [];
  var inputing = document.getElementById("InputIng");
  var valueing = inputing.value;

  for(var i=0; i<recipes.length; i++) {
    for(var j=0; j < recipes[i].ingredients.length; j++) {
      var ListIngrédients = recipes[i].ingredients[j].ingredient;
      replacecreme = ListIngrédients.replace("Crème fraiche", "Crème fraîche");
      replaceLait = replacecreme.replace("Lait de Coco", "Lait de coco");
      replaceCoulis = replaceLait.replace("Coulis de tomate", "Coulis de tomates");
      replaceTomates = replaceCoulis.replace("Coulis de tomatess", "Coulis de tomates");
      ListIng.push(replaceTomates);
    }
  };
  var FilterIng = ListIng.filter(function(ele , pos){
  return ListIng.indexOf(ele) == pos;
  });
  var j=0;
  
  function increment() {
    j++;
  }
  for(var i=0; i<FilterIng.length; i++) {
    
    if (FilterIng[i].includes(valueing)) {
      
      TabIng.push(FilterIng[i]);
    }
  };
  for(var i=0; i<TabIng.length; i++) {
    increment();
    var insertP = document.createElement("P");
    insertP.classList = "insertP";
    insertP.id= "PIng"+i;
    if (j==4) {
      j=1;
    };
    var Ing = document.createTextNode (TabIng[i]);
    var IdIng = document.getElementById("Ing"+j);
    IdIng.appendChild(insertP);
    insertP.appendChild(Ing);
    document.getElementById("PIng"+i).onclick = reply_click_ing;
  };
};
InputIng.addEventListener("keyup", function() {
  researchIng();
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
    var casserole = recipes[i].appliance;
    replacecasserole = casserole.replace("Casserolle", "Casserole");
    replacecasserole1 = replacecasserole.replace("Casserole.", "Casserole");
    ListApp.push(replacecasserole1);
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
    document.getElementById("P"+i).onclick = reply_click_app;
  };
};
InputApp.addEventListener("keyup", function() {
  researchApp();
});
function researchUst() {
  for(var i=1; i<4; i++) {

    var element = document.getElementById("Ust"+i);
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
  }
  ListUst = [];
  TabUst = [];
  var inputust = document.getElementById("InputUst");
  var valueust = inputust.value;

  for(var i=0; i<recipes.length; i++) {
    for(var j=0; j<recipes[i].ustensils.length; j++) {
      var ustensile = recipes[i].ustensils[j];
      ListUst.push(ustensile);
    }
  };
  var FilterUst = ListUst.filter(function(ele , pos){
  return ListUst.indexOf(ele) == pos;
  });
  var j=0;
  
  function increment() {
    j++;
  }
  for(var i=0; i<FilterUst.length; i++) {
    
    if (FilterUst[i].includes(valueust)) {
      
      TabUst.push(FilterUst[i]);
    }
  };
  for(var i=0; i<TabUst.length; i++) {
    increment();
    var insertP = document.createElement("P");
    insertP.classList = "insertP";
    insertP.id= "PUst"+i;
    if (j==4) {
      j=1;
    };
    var Ust = document.createTextNode (TabUst[i]);
    var IdUst = document.getElementById("Ust"+j);
    IdUst.appendChild(insertP);
    insertP.appendChild(Ust);
    document.getElementById("PUst"+i).onclick = reply_click_ust;
  };
};
InputUst.addEventListener("keyup", function() {
  researchUst();
});
TabFilterIng = [];
TabFilterApp = [];
TabFilterUst = [];
recette = [];
TabRecetteIng = [];
TabRecetteApp = [];
TabRecetteUst = [];

var reply_click_ing = function() {
  filterline.style.display = "flex";
  var IdFilterIng = document.getElementById(this.id);
  var insertfilterIng = document.createElement ("div");
  insertfilterIng.classList = "filter--class blue";
  var insertfilterIngrédient = document.createElement ("div");
  var filtertxting = document.createTextNode (IdFilterIng.innerHTML);
  insertfilterIng.appendChild(insertfilterIngrédient);
  insertfilterIngrédient.appendChild(filtertxting);
  var logcrossIng = document.createElement ("i");
  logcrossIng.classList = "far fa-times-circle";
  insertfilterIng.appendChild(logcrossIng);
  function VerifIng (element) {
    return element != insertfilterIngrédient.innerHTML; 
  };
  if (TabFilterIng.length == 0 || TabFilterIng.every(VerifIng) == true) {
    logcrossIng.id = "crossIng" + l;
    insertfilterIng.id = "insfiltIng" + l;
    TabFilterIng.push(insertfilterIngrédient.innerHTML.toLowerCase());
    filterbox.appendChild(insertfilterIng);
    var IdCrossIng = document.getElementById("crossIng" + l);
    var IdFilterIng = document.getElementById("insfiltIng" + l);
    IdCrossIng.addEventListener("click", function() {
      IdFilterIng.style.display = "none";
      var IndexTabFilterIng = TabFilterIng.indexOf(insertfilterIngrédient.innerHTML);
      TabFilterIng.splice(IndexTabFilterIng, 1);
      researchrecipes();
    });
    l++;
  }
  researchrecipes();
};
var reply_click_ust = function() {
  filterline.style.display = "flex";
  var IdFilterUst = document.getElementById(this.id);
  var insertfilterUst = document.createElement ("div");
  insertfilterUst.classList = "filter--class red";
  var insertfilterustensil = document.createElement ("div");
  insertfilterUst.appendChild(insertfilterustensil);
  var logcrossUst = document.createElement ("i");
  logcrossUst.classList = "far fa-times-circle";
  var filtertxtUst = document.createTextNode (IdFilterUst.innerHTML);
  insertfilterustensil.appendChild(filtertxtUst);
  insertfilterUst.appendChild(logcrossUst);

  function VerifUst(element) {
    return element != insertfilterustensil.innerHTML; 
  };
  if (TabFilterUst.length == 0 || TabFilterUst.every(VerifUst) == true) {
    logcrossUst.id = "crossUst" + m;
    insertfilterUst.id = "insfiltUst" + m;
    TabFilterUst.push(insertfilterustensil.innerHTML);
    filterbox.appendChild(insertfilterUst);
    var IdCrossUst = document.getElementById("crossUst" + m);
    var IdFilterUst = document.getElementById("insfiltUst" + m);
    IdCrossUst.addEventListener("click", function() {
      IdFilterUst.style.display = "none";
      var IndexTabFilterUst = TabFilterUst.indexOf(insertfilterustensil.innerHTML);
      TabFilterUst.splice(IndexTabFilterUst, 1);
      researchrecipes();
    });
    m++;
  }
  researchrecipes();
};
var reply_click_app = function() {
  filterline.style.display = "flex";
  var IdFilterApp = document.getElementById(this.id);
  var insertfilterApp = document.createElement ("div");
  insertfilterApp.classList = "filter--class green";
  var insertfilterAppliance = document.createElement ("div");
  insertfilterApp.appendChild(insertfilterAppliance);
  var logcrossApp = document.createElement ("i");
  logcrossApp.classList = "far fa-times-circle";
  var filtertxtApp = document.createTextNode (IdFilterApp.innerHTML);
  insertfilterAppliance.appendChild(filtertxtApp);
  insertfilterApp.appendChild(logcrossApp);

  function VerifApp(element) {
    return element != insertfilterApp.innerHTML; 
  };
  if (TabFilterApp.length == 0 || TabFilterApp.every(VerifApp) == true) {
    logcrossApp.id = "crossApp" + k;
    insertfilterApp.id = "insfiltApp" + k;
    TabFilterApp.push(insertfilterAppliance.innerHTML);
    filterbox.appendChild(insertfilterApp);
    var IdCrossApp = document.getElementById("crossApp" + k);
    var IdFilterApp = document.getElementById("insfiltApp" + k);
    IdCrossApp.addEventListener("click", function() {
      IdFilterApp.style.display = "none";
      var IndexTabFilterApp = TabFilterApp.indexOf(insertfilterApp.innerHTML);
      TabFilterApp.splice(IndexTabFilterApp, 1);
      researchrecipes();
    });
    k++;
  }
  researchrecipes();
};
function researchrecipes() {
  for(var i=0; i<recipes.length; i++) {
    var recetteApp = recipes[i].appliance;
    var recetteUst = recipes[i].ustensils;
    NewTabIng = [];
    for(var j=0; j < recipes[i].ingredients.length; j++) {
     var recetteIng = recipes[i].ingredients[j].ingredient;
     NewTabIng.push(recetteIng.toLowerCase());
    };
    if(TabFilterIng.length > 0 && TabFilterIng.every(CheckIng)) {
     TabRecetteIng.push(recipes[i]);
    };
    if(TabFilterUst.length > 0 && TabFilterUst.every(CheckUst)) {
      TabRecetteUst.push(recipes[i]);
    };
    if(TabFilterApp.length > 0 && TabFilterApp.every(CheckApp)) {
      TabRecetteApp.push(recipes[i])
    };
  };

  console.log(TabFilterIng);

  function CheckIng(Ingredient) {
    return NewTabIng.includes(Ingredient);
  }
  function CheckApp(Appareil) {
    return recetteApp.includes(Appareil);
  }
  function CheckUst(Ustensile) {
    return recetteUst.includes(Ustensile);
  }
  if(TabRecetteApp.length == 0) {
    var TabRecette = TabRecetteIng.filter(ReCheck);
  }
  else if(TabRecetteIng.length == 0) {
    var TabRecette = TabRecetteApp.filter(ReCheck);
  }
  else if(TabRecetteUst.length == 0) {
    var TabRecette = TabRecetteIng.filter(Check);
  }
  else {
    var TabRecetteCheck = TabRecetteIng.filter(Check);
    var TabRecette = TabRecetteCheck.filter(ReCheck);
  }
  function Check(e) {
    return TabRecetteApp.includes(e);
  }
  function ReCheck(e) {
    return TabRecetteUst.includes(e);
  }
  if (TabFilterIng.length == 0 && TabFilterApp.length == 0 && TabFilterUst.length == 0) {
    afficherLesRecettes(recipes);
  }

  
  else if (TabFilterIng.length == 0 && TabFilterUst.length == 0 && TabFilterApp.length > 0) {
    afficherLesRecettes(TabRecetteApp);
  }
  else if (TabFilterApp.length == 0 && TabFilterUst.length == 0 && TabFilterIng.length > 0) {
    afficherLesRecettes(TabRecetteIng);
  }
  else if (TabFilterApp.length == 0 && TabFilterIng.length == 0 && TabFilterUst.length > 0) {
    afficherLesRecettes(TabRecetteUst);
  }
  else {
    afficherLesRecettes(TabRecette);
  }
  console.log(TabRecetteIng);
  console.log(TabRecetteApp);
  console.log(TabRecetteUst);
  console.log(TabRecette);
  TabRecetteIng = [];
  TabRecetteApp = [];
  TabRecetteUst = [];
  TabRecette = [];
}
