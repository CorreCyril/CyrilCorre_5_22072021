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
  recipes.forEach(function(element) {
    var entrance = text.toLowerCase();
    var title = element.name.toLowerCase();
    var appliance = element.appliance.toLowerCase();
    element.ingredients.forEach(function(elementingredient) {
      var Ingredient = elementingredient.ingredient.toLowerCase();
      if(Ingredient.includes(entrance) && FindRecipe.every(VerifRecipe) == true) {
        FindRecipe.push(element);
      }
    });
    element.ustensils.forEach (function(elementustensil) {
      var Ustensil = elementustensil.toLowerCase();
      if(Ustensil.includes(entrance) && FindRecipe.every(VerifRecipe) == true) {
        FindRecipe.push(element);
      }
    });
    if(title.includes(entrance) && FindRecipe.every(VerifRecipe) == true || appliance.includes(entrance) && FindRecipe.every(VerifRecipe) == true) {
      FindRecipe.push(element);
    }
    function VerifRecipe (index) {
      return index != element; 
    }
  });
  DisplayRecipes(FindRecipe);
}
function DisplayRecipes(recipes) {
  var card = document.getElementById("card");
  card.innerHTML = "";
  recipes.forEach(function(element) {
    var insertdiv = document.createElement ("div");
    insertdiv.classList = "card--item";
    insertdiv.id = "div" + element.id;
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
    var Arrayname = document.createTextNode (element.name);
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
    var Arraytime = document.createTextNode (element.time + " min");
    attime.appendChild(Arraytime);
    var insertingredients = document.createElement ("div");
    insertingredients.classList = "card--ingredients";
    insertmenu.appendChild(insertingredients);
    var ingredientslist = document.createElement ("ul");
    ingredientslist.classList = "card--ingredientslist";
    insertingredients.appendChild(ingredientslist);
    element.ingredients.forEach(function(elementingredient) {
      var insertlist = document.createElement ("li");
      var ingredientstxt = document.createTextNode (elementingredient.ingredient);
      var ingredientstxt1 = document.createTextNode (elementingredient.ingredient + ": ");
      var insertspan = document.createElement ("span");
      var ingredientsquantity = document.createTextNode ((elementingredient.quantity + " "));
      var ingredientsquantite = document.createTextNode ((elementingredient.quantite));
      ingredientslist.appendChild(insertlist);
      if (elementingredient.quantity == undefined && elementingredient.quantite == undefined) {
        insertlist.appendChild(ingredientstxt);
      }
      else {
        insertlist.appendChild(ingredientstxt1);
      }
      if (elementingredient.quantity != undefined) {
        insertspan.appendChild(ingredientsquantity);
      }
      if (elementingredient.quantite != undefined) {
        insertspan.appendChild(ingredientsquantite);
      }
      insertlist.appendChild(insertspan);
      if (elementingredient.unit != undefined) {
        var unit = elementingredient.unit;
        var replaceunit = unit.replace("grammes", "g");
        var replaceunit1 = replaceunit.replace("cuillères à soupe", "cuillères");
        var ingredientsunit = document.createTextNode (replaceunit1);
        insertspan.appendChild(ingredientsunit);
      }
    });
    var insertmeth = document.createElement ("div");
    insertmeth.classList = "card--meth";
    insertmenu.appendChild(insertmeth);
    var meth1 = document.createTextNode (element.description.split(" ").slice(0, 33).join(" ") + (" ..."));
    var meth2 = document.createTextNode (element.description);
    var nb = element.description.split(" ");
    if (nb.length < 33) {
      insertmeth.appendChild(meth2);
    }
    else {
      insertmeth.appendChild(meth1);
    }
    card.appendChild(insertdiv);
  });
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
  recipes.forEach(function(element) {
    element.ingredients.forEach(function(elementingredient) {
      var ListIngredients = elementingredient.ingredient;
      replacecreme = ListIngredients.replace("Crème fraiche", "Crème fraîche");
      replaceLait = replacecreme.replace("Lait de Coco", "Lait de coco");
      replaceCoulis = replaceLait.replace("Coulis de tomate", "Coulis de tomates");
      replaceTomates = replaceCoulis.replace("Coulis de tomatess", "Coulis de tomates");
      ListIngredient.push(replaceTomates);
    });
  });
  var FilterIngredient = ListIngredient.filter(function(ele , pos){
  return ListIngredient.indexOf(ele) == pos;
  });
  var j=0;
  function increment() {
    j++;
  }
  FilterIngredient.forEach(function(elementFilterIngredient) {
    if (elementFilterIngredient.toLowerCase().includes(valueIngredient)) {
      ArrayIngredient.push(elementFilterIngredient);
    }
  });
  for(var n=0; n<ArrayIngredient.length; n++) {
    increment();
    var insertP = document.createElement("P");
    insertP.classList = "insertP";
    insertP.id= "PIngredient"+n;
    if (j==4) {
      j=1;
    }
    var Ingredient = document.createTextNode (ArrayIngredient[n]);
    var IdIngredient = document.getElementById("Ingredient"+j);
    IdIngredient.appendChild(insertP);
    insertP.appendChild(Ingredient);
    document.getElementById("PIngredient"+n).onclick = reply_click_Ingredient;
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
  recipes.forEach(function(element) {
    var casserole = element.appliance;
    replacecasserole = casserole.replace("Casserolle", "Casserole");
    replacecasserole1 = replacecasserole.replace("Casserole.", "Casserole");
    ListAppliance.push(replacecasserole1);
  });
  var FilterAppliance = ListAppliance.filter(function(ele , pos){
  return ListAppliance.indexOf(ele) == pos;
  });
  var j=0;
  function increment() {
    j++;
  }
  FilterAppliance.forEach(function(elementFilterAppliance) {
    if (elementFilterAppliance.toLowerCase().includes(valueAppliance)) {
      ArrayAppliance.push(elementFilterAppliance);
    }
  });
  for(var n=0; n<ArrayAppliance.length; n++) {
    increment();
    var insertP = document.createElement("P");
    insertP.classList = "insertP";
    insertP.id= "P"+n;
    if (j==4) {
      j=1;
    }
    var Appliance = document.createTextNode (ArrayAppliance[n]);
    var IdAppliance = document.getElementById("Appliance"+j);
    IdAppliance.appendChild(insertP);
    insertP.appendChild(Appliance);
    document.getElementById("P"+n).onclick = reply_click_Appliance;
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
  recipes.forEach(function(element) {
    var ustensil = element.ustensils;
    var replaceustensil = ustensil.map(function(elementustensil) {
      return elementustensil.toLowerCase();
    });
    replaceustensil.forEach(function(elementustensil) {
      var FirstLetter = elementustensil.charAt(0);
      replaceupperustensil = elementustensil.replace(FirstLetter, FirstLetter.toUpperCase());
      ListUstensil.push(replaceupperustensil);
    });
  });
  var FilterUstensil = ListUstensil.filter(function(ele , pos){
  return ListUstensil.indexOf(ele) == pos;
  });
  var j=0;
  function increment() {
    j++;
  }
  FilterUstensil.forEach(function(elementfilterustensil) {
    if (elementfilterustensil.toLowerCase().includes(valueUstensil)) {
      ArrayUstensil.push(elementfilterustensil);
    }
  });
  for(var n=0; n<ArrayUstensil.length; n++) {
    increment();
    var insertP = document.createElement("P");
    insertP.classList = "insertP";
    insertP.id= "PUstensil"+n;
    if (j==4) {
      j=1;
    }
    var Ustensil = document.createTextNode (ArrayUstensil[n]);
    var IdUstensil = document.getElementById("Ustensil"+j);
    IdUstensil.appendChild(insertP);
    insertP.appendChild(Ustensil);
    document.getElementById("PUstensil"+n).onclick = reply_click_Ustensil;
  }
}

InputUstensil.addEventListener("keyup", function() {
  researchUstensil();
});

ArrayFilterIngredient = [];
ArrayFilterAppliance = [];
ArrayFilterUstensil = [];
Recipe = [];
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
    var IdFilterIngredients = document.getElementById("insertfilterIngredient" + l);
    IdCrossIngredient.addEventListener("click", function() {
      IdFilterIngredients.style.display = "none";
      var IndexArrayFilterIngredient = ArrayFilterIngredient.indexOf(insertTextIngredient.innerHTML.toLowerCase());
      ArrayFilterIngredient.splice(IndexArrayFilterIngredient, 1);
      researchrecipes();
    });
    l++;
  }
  blue.style.display = "flex";
  resblue.style.display = "none";
  researchrecipes();
};

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
    var IdFilterUstensils = document.getElementById("insertfilterUstensil" + m);
    IdCrossUstensil.addEventListener("click", function() {
      IdFilterUstensils.style.display = "none";
      var IndexArrayFilterUstensil = ArrayFilterUstensil.indexOf(insertTextUstensil.innerHTML.toLowerCase());
      ArrayFilterUstensil.splice(IndexArrayFilterUstensil, 1);
      researchrecipes();
    });
    m++;
  }
  red.style.display = "flex";
  resred.style.display = "none";
  researchrecipes();
};

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
    var IdFilterAppliances = document.getElementById("insfiltAppliance" + k);
    IdCrossAppliance.addEventListener("click", function() {
      IdFilterAppliances.style.display = "none";
      var IndexArrayFilterAppliance = ArrayFilterAppliance.indexOf(insertTextAppliance.innerHTML);
      ArrayFilterAppliance.splice(IndexArrayFilterAppliance, 1);
      researchrecipes();
    });
    k++;
  }
  green.style.display = "flex";
  resgreen.style.display = "none";
  researchrecipes();
};

function researchrecipes() {
  recipes.forEach(function(elementrecipes) {
    var RecipeAppliance = elementrecipes.appliance;
    replacecasserole = RecipeAppliance.replace("Casserolle", "Casserole");
    replacecasserole1 = replacecasserole.replace("Casserole.", "Casserole");
    NewArrayIngredient = [];
        
    elementrecipes.ingredients.forEach(function(elementrecipesingredients) {
     var RecipeIngredient = elementrecipesingredients.ingredient;
     replacecreme = RecipeIngredient.replace("Crème fraiche", "Crème fraîche");
     replaceLait = replacecreme.replace("Lait de Coco", "Lait de coco");
     replaceCoulis = replaceLait.replace("Coulis de tomate", "Coulis de tomates");
     replaceTomates = replaceCoulis.replace("Coulis de tomatess", "Coulis de tomates");
     NewArrayIngredient.push(replaceTomates.toLowerCase());
    });
    var RecipeUstensil = elementrecipes.ustensils.map(function(elementustensil) {
      return elementustensil.toLowerCase();
    });
    ArrayFilterIngredient.forEach(function(elementArrayFilterIngredient) {
      if(ArrayFilterIngredient.length > 0 && NewArrayIngredient.includes(elementArrayFilterIngredient)) {
        ArrayRecipeIngredient.push(elementrecipes);
      }
    });
    ArrayFilterUstensil.forEach(function(elementArrayFilterUstensil) {
      if(ArrayFilterUstensil.length > 0 && RecipeUstensil.includes(elementArrayFilterUstensil)) {
        ArrayRecipeUstensil.push(elementrecipes);
      }
    });
    ArrayFilterAppliance.forEach(function(elementArrayFilterAppliance) {
      if(ArrayFilterAppliance.length > 0 && replacecasserole1.includes(elementArrayFilterAppliance)) {
        ArrayRecipeAppliance.push(elementrecipes);
      }
    });
  });
  var ArrayFilterRecipeIngredient = ArrayRecipeIngredient.filter(function(ele , pos){
    return ArrayRecipeIngredient.indexOf(ele) == pos;
  });
  var ArrayFilterRecipeUstensil = ArrayRecipeUstensil.filter(function(ele , pos){
    return ArrayRecipeUstensil.indexOf(ele) == pos;
  });
  ArrayRecipe = ArrayFilterRecipeIngredient.concat(ArrayRecipeAppliance, ArrayFilterRecipeUstensil);
  var ArrayFilterRecipe = ArrayRecipe.filter(function(ele , pos){
    return ArrayRecipe.indexOf(ele) == pos;
  });
  if (ArrayFilterIngredient.length == 0 && ArrayFilterAppliance.length == 0 && ArrayFilterUstensil.length == 0) {
    DisplayRecipes(recipes);
  }
  else if (ArrayFilterIngredient.length == 0 && ArrayFilterUstensil.length == 0 && ArrayFilterAppliance.length > 0) {
    DisplayRecipes(ArrayRecipeAppliance);
  }
  else if (ArrayFilterAppliance.length == 0 && ArrayFilterUstensil.length == 0 && ArrayFilterIngredient.length > 0) {
    DisplayRecipes(ArrayFilterRecipeIngredient);
  }
  else if (ArrayFilterAppliance.length == 0 && ArrayFilterIngredient.length == 0 && ArrayFilterUstensil.length > 0) {
    DisplayRecipes(ArrayFilterRecipeUstensil);
  }
  else {
    DisplayRecipes(ArrayFilterRecipe);
  }
  ArrayRecipeIngredient = [];
  ArrayRecipeAppliance = [];
  ArrayRecipeUstensil = [];
  ArrayRecipe = [];
}