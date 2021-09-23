DisplayRecipes(recipes);

const searchBar = document.getElementById("search--text");
const searchButton = document.getElementById("search--button");

var FindRecipe = [];

searchButton.addEventListener("click", function() {
  var text = searchBar.value;
  Research(text);
});
  
searchBar.addEventListener("change", function(event) {
  var text = event.target.value;
  Research(text);
});

function Research(text) {
  FindRecipe = [];
  for(var i=0; i<recipes.length; i++) {
    var entrance = text.toLowerCase();
    var title = recipes[i].name.toLowerCase();
    var appliance = recipes[i].appliance.toLowerCase();
    for(var j=0; j < recipes[i].ingredients.length; j++) {
      var Ingredient = recipes[i].ingredients[j].ingredient.toLowerCase();
      if(Ingredient.includes(entrance) && FindRecipe.every(VerifRecipe) == true) {
        FindRecipe.push(recipes[i]);
      }
    }
    for(var k=0; k < recipes[i].ustensils.length; k++) {
      var Ustensil = recipes[i].ustensils[k].toLowerCase();
      if(Ustensil.includes(entrance) && FindRecipe.every(VerifRecipe) == true) {
        FindRecipe.push(recipes[i]);
      }
    }
    if(title.includes(entrance) && FindRecipe.every(VerifRecipe) == true || appliance.includes(entrance) && FindRecipe.every(VerifRecipe) == true) {
      FindRecipe.push(recipes[i]);
    }
  }
  function VerifRecipe (element) {
    return element != recipes[i]; 
  }
  DisplayRecipes(FindRecipe);
}

function DisplayRecipes(recipes) {
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
    var Arrayname = document.createTextNode (recipes[i].name);
    atname.appendChild(Arrayname);
    var inserttime = document.createElement ("div");
    inserttime.classList = "card--time";
    inserttitle.appendChild(inserttime);
    var attime = document.createElement ("h3");
    attime.classList = "card--attime";
    inserttime.appendChild(attime);
    var logtime = document.createElement ("i");
    logtime.classList = "far fa-clock fa-md logtime";
    attime.appendChild(logtime);
    var Arraytime = document.createTextNode (recipes[i].time + " min");
    attime.appendChild(Arraytime);
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
      if (recipes[i].ingredients[j].quantity == undefined && recipes[i].ingredients[j].quantite == undefined) {
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
      if (recipes[i].ingredients[j].unit != undefined) {
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
}

Ingredientdown.addEventListener("click", function() {
  blue.style.display = "none";
  resblue.style.display = "flex";
  green.style.display = "flex";
  resgreen.style.display = "none";
  red.style.display = "flex";
  resred.style.display = "none";
  researchIngredient();
});

Ingredientup.addEventListener("click", function() {
  blue.style.display = "flex";
  resblue.style.display = "none";
});

Appliancedown.addEventListener("click", function() {
  green.style.display = "none";
  resgreen.style.display = "flex";
  blue.style.display = "flex";
  resblue.style.display = "none";
  red.style.display = "flex";
  resred.style.display = "none";
  researchAppliance();
});

Applianceup.addEventListener("click", function() {
  green.style.display = "flex";
  resgreen.style.display = "none";
});

Ustensildown.addEventListener("click", function() {
  red.style.display = "none";
  resred.style.display = "flex";
  green.style.display = "flex";
  resgreen.style.display = "none";
  blue.style.display = "flex";
  resblue.style.display = "none";
  researchUstensil();
});

Ustensilup.addEventListener("click", function() {
  red.style.display = "flex";
  resred.style.display = "none";
});

var k = 0;
var l = 0;
var m = 0;

function researchIngredient() {
  for(var i=1; i<4; i++) {
    var element = document.getElementById("Ingredient"+i);
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
  }
  ListIngredient = [];
  ArrayIngredient = [];
  var inputIngredient = document.getElementById("InputIngredient");
  var valueIngredient = inputIngredient.value.toLowerCase();
  for(var i=0; i<recipes.length; i++) {
    for(var j=0; j < recipes[i].ingredients.length; j++) {
      var ListIngredients = recipes[i].ingredients[j].ingredient;
      replacecreme = ListIngredients.replace("Crème fraiche", "Crème fraîche");
      replaceLait = replacecreme.replace("Lait de Coco", "Lait de coco");
      replaceCoulis = replaceLait.replace("Coulis de tomate", "Coulis de tomates");
      replaceTomates = replaceCoulis.replace("Coulis de tomatess", "Coulis de tomates");
      ListIngredient.push(replaceTomates);
    }
  }
  var FilterIngredient = ListIngredient.filter(function(ele , pos){
  return ListIngredient.indexOf(ele) == pos;
  });
  var j=0;
  function increment() {
    j++;
  }
  for(var i=0; i<FilterIngredient.length; i++) {
    if (FilterIngredient[i].toLowerCase().includes(valueIngredient)) {
      ArrayIngredient.push(FilterIngredient[i]);
    }
  }
  for(var i=0; i<ArrayIngredient.length; i++) {
    increment();
    var insertP = document.createElement("P");
    insertP.classList = "insertP";
    insertP.id= "PIngredient"+i;
    if (j==4) {
      j=1;
    }
    var Ingredient = document.createTextNode (ArrayIngredient[i]);
    var IdIngredient = document.getElementById("Ingredient"+j);
    IdIngredient.appendChild(insertP);
    insertP.appendChild(Ingredient);
    document.getElementById("PIngredient"+i).onclick = reply_click_Ingredient;
  }
}

InputIngredient.addEventListener("keyup", function() {
  researchIngredient();
});

function researchAppliance() {
  for(var i=1; i<4; i++) {
    var element = document.getElementById("Appliance"+i);
    while (element.firstChild) {
    element.removeChild(element.firstChild);
    }
  }
  ListAppliance = [];
  ArrayAppliance = [];
  var inputAppliance = document.getElementById("InputAppliance");
  var valueAppliance = inputAppliance.value.toLowerCase();
  for(var i=0; i<recipes.length; i++) {
    var casserole = recipes[i].appliance;
    replacecasserole = casserole.replace("Casserolle", "Casserole");
    replacecasserole1 = replacecasserole.replace("Casserole.", "Casserole");
    ListAppliance.push(replacecasserole1);
  }
  var FilterAppliance = ListAppliance.filter(function(ele , pos){
  return ListAppliance.indexOf(ele) == pos;
  });
  var j=0;
  function increment() {
    j++;
  }
  for(var i=0; i<FilterAppliance.length; i++) {
    if (FilterAppliance[i].toLowerCase().includes(valueAppliance)) {
      ArrayAppliance.push(FilterAppliance[i]);
    }
  }
  for(var i=0; i<ArrayAppliance.length; i++) {
    increment();
    var insertP = document.createElement("P");
    insertP.classList = "insertP";
    insertP.id= "P"+i;
    if (j==4) {
      j=1;
    }
    var Appliance = document.createTextNode (ArrayAppliance[i]);
    var IdAppliance = document.getElementById("Appliance"+j);
    IdAppliance.appendChild(insertP);
    insertP.appendChild(Appliance);
    document.getElementById("P"+i).onclick = reply_click_Appliance;
  }
}

InputAppliance.addEventListener("keyup", function() {
  researchAppliance();
});

function researchUstensil() {
  for(var i=1; i<4; i++) {
    var element = document.getElementById("Ustensil"+i);
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  ListUstensil = [];
  ArrayUstensil = [];
  var inputUstensil = document.getElementById("InputUstensil");
  var valueUstensil = inputUstensil.value.toLowerCase();
  for(var i=0; i<recipes.length; i++) {
    for(var j=0; j<recipes[i].ustensils.length; j++) {
      var ustensil = recipes[i].ustensils[j].toLowerCase();
      var ustensiluppercase = ustensil.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
      ListUstensil.push(ustensiluppercase);
    }
  }
  var FilterUstensil = ListUstensil.filter(function(ele , pos){
  return ListUstensil.indexOf(ele) == pos;
  });
  var j=0;
  function increment() {
    j++;
  }
  for(var i=0; i<FilterUstensil.length; i++) {
    if (FilterUstensil[i].toLowerCase().includes(valueUstensil)) {
      ArrayUstensil.push(FilterUstensil[i]);
    }
  }
  for(var i=0; i<ArrayUstensil.length; i++) {
    increment();
    var insertP = document.createElement("P");
    insertP.classList = "insertP";
    insertP.id= "PUstensil"+i;
    if (j==4) {
      j=1;
    }
    var Ustensil = document.createTextNode (ArrayUstensil[i]);
    var IdUstensil = document.getElementById("Ustensil"+j);
    IdUstensil.appendChild(insertP);
    insertP.appendChild(Ustensil);
    document.getElementById("PUstensil"+i).onclick = reply_click_Ustensil;
  }
}

InputUstensil.addEventListener("keyup", function() {
  researchUstensil();
});

ArrayFilterIngredient = [];
ArrayFilterAppliance = [];
ArrayFilterUstensil = [];
ArrayRecipe = [];
ArrayRecipeIngredient = [];
ArrayRecipeAppliance = [];
ArrayRecipeUstensil = [];

var reply_click_Ingredient = function() {
  filterline.style.display = "flex";
  var IdFilterIngredient = document.getElementById(this.id);
  var insertFilterIngredient = document.createElement ("div");
  insertFilterIngredient.classList = "filter--class blue";
  var insertTextIngredient = document.createElement ("div");
  insertFilterIngredient.appendChild(insertTextIngredient);
  var logcrossIngredient = document.createElement ("i");
  logcrossIngredient.classList = "far fa-times-circle";
  var FilterTextIngredient = document.createTextNode (IdFilterIngredient.innerHTML);
  insertTextIngredient.appendChild(FilterTextIngredient);
  insertFilterIngredient.appendChild(logcrossIngredient);
  function VerifIngredient (element) {
    return element != insertTextIngredient.innerHTML.toLowerCase(); 
  }
  if (ArrayFilterIngredient.length == 0 || ArrayFilterIngredient.every(VerifIngredient) == true) {
    logcrossIngredient.id = "crossIngredient" + l;
    insertFilterIngredient.id = "insertfilterIngredient" + l;
    ArrayFilterIngredient.push(insertTextIngredient.innerHTML.toLowerCase());
    filterbox.appendChild(insertFilterIngredient);
    var IdCrossIngredient = document.getElementById("crossIngredient" + l);
    var IdFilterIngredient = document.getElementById("insertfilterIngredient" + l);
    IdCrossIngredient.addEventListener("click", function() {
      IdFilterIngredient.style.display = "none";
      var IndexArrayFilterIngredient = ArrayFilterIngredient.indexOf(insertTextIngredient.innerHTML.toLowerCase());
      ArrayFilterIngredient.splice(IndexArrayFilterIngredient, 1);
      researchrecipes();
    });
    l++;
  }
  researchrecipes();
}

var reply_click_Ustensil = function() {
  filterline.style.display = "flex";
  var IdFilterUstensil = document.getElementById(this.id);
  var insertfilterUstensil = document.createElement ("div");
  insertfilterUstensil.classList = "filter--class red";
  var insertTextUstensil = document.createElement ("div");
  insertfilterUstensil.appendChild(insertTextUstensil);
  var logcrossUstensil = document.createElement ("i");
  logcrossUstensil.classList = "far fa-times-circle";
  var FilterTextUstensil = document.createTextNode (IdFilterUstensil.innerHTML);
  insertTextUstensil.appendChild(FilterTextUstensil);
  insertfilterUstensil.appendChild(logcrossUstensil);
  function VerifUstensil(element) {
    return element != insertTextUstensil.innerHTML.toLowerCase(); 
  }
  if (ArrayFilterUstensil.length == 0 || ArrayFilterUstensil.every(VerifUstensil) == true) {
    logcrossUstensil.id = "crossUstensil" + m;
    insertfilterUstensil.id = "insertfilterUstensil" + m;
    ArrayFilterUstensil.push(insertTextUstensil.innerHTML.toLowerCase());
    filterbox.appendChild(insertfilterUstensil);
    var IdCrossUstensil = document.getElementById("crossUstensil" + m);
    var IdFilterUstensil = document.getElementById("insertfilterUstensil" + m);
    IdCrossUstensil.addEventListener("click", function() {
      IdFilterUstensil.style.display = "none";
      var IndexArrayFilterUstensil = ArrayFilterUstensil.indexOf(insertTextUstensil.innerHTML.toLowerCase());
      ArrayFilterUstensil.splice(IndexArrayFilterUstensil, 1);
      researchrecipes();
    });
    m++;
  }
  researchrecipes();
}

var reply_click_Appliance = function() {
  filterline.style.display = "flex";
  var IdFilterAppliance = document.getElementById(this.id);
  var insertfilterAppliance = document.createElement ("div");
  insertfilterAppliance.classList = "filter--class green";
  var insertTextAppliance = document.createElement ("div");
  insertfilterAppliance.appendChild(insertTextAppliance);
  var logcrossAppliance = document.createElement ("i");
  logcrossAppliance.classList = "far fa-times-circle";
  var filtertxtAppliance = document.createTextNode (IdFilterAppliance.innerHTML);
  insertTextAppliance.appendChild(filtertxtAppliance);
  insertfilterAppliance.appendChild(logcrossAppliance);
  function VerifAppliance(element) {
    return element != insertTextAppliance.innerHTML; 
  }
  if (ArrayFilterAppliance.length == 0 || ArrayFilterAppliance.every(VerifAppliance) == true) {
    logcrossAppliance.id = "crossAppliance" + k;
    insertfilterAppliance.id = "insfiltAppliance" + k;
    ArrayFilterAppliance.push(insertTextAppliance.innerHTML);
    filterbox.appendChild(insertfilterAppliance);
    var IdCrossAppliance = document.getElementById("crossAppliance" + k);
    var IdFilterAppliance = document.getElementById("insfiltAppliance" + k);
    IdCrossAppliance.addEventListener("click", function() {
      IdFilterAppliance.style.display = "none";
      var IndexArrayFilterAppliance = ArrayFilterAppliance.indexOf(insertTextAppliance.innerHTML);
      ArrayFilterAppliance.splice(IndexArrayFilterAppliance, 1);
      researchrecipes();
    });
    k++;
  }
  researchrecipes();
}

function researchrecipes() {
  for(var i=0; i<recipes.length; i++) {
    var RecipeAppliance = recipes[i].appliance;
    replacecasserole = RecipeAppliance.replace("Casserolle", "Casserole");
    replacecasserole1 = replacecasserole.replace("Casserole.", "Casserole");
    var RecipeUstensil = recipes[i].ustensils;
    NewArrayIngredient = [];
    for(var j=0; j < recipes[i].ingredients.length; j++) {
     var RecipeIngredient = recipes[i].ingredients[j].ingredient;
     replacecreme = RecipeIngredient.replace("Crème fraiche", "Crème fraîche");
     replaceLait = replacecreme.replace("Lait de Coco", "Lait de coco");
     replaceCoulis = replaceLait.replace("Coulis de tomate", "Coulis de tomates");
     replaceTomates = replaceCoulis.replace("Coulis de tomatess", "Coulis de tomates");
     NewArrayIngredient.push(replaceTomates.toLowerCase());
    }
    if(ArrayFilterIngredient.length > 0 && ArrayFilterIngredient.every(CheckIngredient)) {
     ArrayRecipeIngredient.push(recipes[i]);
    }
    if(ArrayFilterUstensil.length > 0 && ArrayFilterUstensil.every(CheckUstensil)) {
      ArrayRecipeUstensil.push(recipes[i]);
    }
    if(ArrayFilterAppliance.length > 0 && ArrayFilterAppliance.every(CheckAppliance)) {
      ArrayRecipeAppliance.push(recipes[i])
    }
  }
  function CheckIngredient(Ingredient) {
    return NewArrayIngredient.includes(Ingredient);
  }
  function CheckAppliance(Appareil) {
    return replacecasserole1.includes(Appareil);
  }
  function CheckUstensil(Ustensil) {
    return RecipeUstensil.includes(Ustensil);
  }
  if(ArrayRecipeAppliance.length == 0) {
    var ArrayRecipe = ArrayRecipeIngredient.filter(ReCheck);
  }
  else if(ArrayRecipeIngredient.length == 0) {
    var ArrayRecipe = ArrayRecipeAppliance.filter(ReCheck);
  }
  else if(ArrayRecipeUstensil.length == 0) {
    var ArrayRecipe = ArrayRecipeIngredient.filter(Check);
  }
  else {
    var ArrayRecipeCheck = ArrayRecipeIngredient.filter(Check);
    var ArrayRecipe = ArrayRecipeCheck.filter(ReCheck);
  }
  function Check(e) {
    return ArrayRecipeAppliance.includes(e);
  }
  function ReCheck(e) {
    return ArrayRecipeUstensil.includes(e);
  }
  if (ArrayFilterIngredient.length == 0 && ArrayFilterAppliance.length == 0 && ArrayFilterUstensil.length == 0) {
    DisplayRecipes(recipes);
  }
  else if (ArrayFilterIngredient.length == 0 && ArrayFilterUstensil.length == 0 && ArrayFilterAppliance.length > 0) {
    DisplayRecipes(ArrayRecipeAppliance);
  }
  else if (ArrayFilterAppliance.length == 0 && ArrayFilterUstensil.length == 0 && ArrayFilterIngredient.length > 0) {
    DisplayRecipes(ArrayRecipeIngredient);
  }
  else if (ArrayFilterAppliance.length == 0 && ArrayFilterIngredient.length == 0 && ArrayFilterUstensil.length > 0) {
    DisplayRecipes(ArrayRecipeUstensil);
  }
  else {
    DisplayRecipes(ArrayRecipe);
  }
  ArrayRecipeIngredient = [];
  ArrayRecipeAppliance = [];
  ArrayRecipeUstensil = [];
  ArrayRecipe = [];
}