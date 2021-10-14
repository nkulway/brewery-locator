const favoritesList = document.querySelector(".favorites");

const randomImg = new Array();

randomImg[0] =
  "https://images.unsplash.com/photo-1555658636-6e4a36218be7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80";
randomImg[1] =
  "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJld2VyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[2] =
  "https://images.unsplash.com/photo-1524587253133-266042ff67d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnJld2VyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[3] =
  "https://images.unsplash.com/photo-1559526642-c3f001ea68ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnJld2VyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[4] =
  "https://images.unsplash.com/photo-1494346480775-936a9f0d0877?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YnJld2VyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[5] =
  "https://images.unsplash.com/photo-1513828646384-e4d8ec30d2bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[6] =
  "https://images.unsplash.com/photo-1584225064536-d0fbc0a10f18?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnJld2VyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[7] =
  "https://images.unsplash.com/photo-1600347992445-98410acd88a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[8] =
  "https://images.unsplash.com/photo-1574713600544-ca13b5d573d5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[9] =
  "https://images.unsplash.com/photo-1573730037815-baace9b29fce?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[10] =
  "https://images.unsplash.com/photo-1600347992445-98410acd88a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[11] =
  "https://images.unsplash.com/photo-1584225065152-4a1454aa3d4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJyZXdlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
randomImg[12] =
  "https://images.unsplash.com/photo-1513828170880-00eeeac21306?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[13] =
  "https://images.unsplash.com/photo-1603666413723-fd8b35434cba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[14] =
  "https://images.unsplash.com/photo-1623937228271-992646fb0fba?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[15] =
  "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[16] =
  "https://images.unsplash.com/photo-1625264412785-7c94942908a5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[17] =
  "https://images.unsplash.com/photo-1551837818-f52fc6991b70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[18] =
  "https://images.unsplash.com/photo-1572913017567-02f0649bc4fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[19] =
  "https://images.unsplash.com/photo-1533646281814-761f53fc5483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJyZXdlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
randomImg[20] =
  "https://images.unsplash.com/photo-1600956306204-d6a5c6aab472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGJyZXdlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
randomImg[21] =
  "https://images.unsplash.com/photo-1623051425306-70cfe23fe75e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[22] =
  "https://images.unsplash.com/photo-1545878587-bd777063c414?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJyZXdlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
randomImg[23] =
  "https://images.unsplash.com/photo-1535419342184-f4bd555a3c73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGJyZXdlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
randomImg[24] =
  "https://images.unsplash.com/photo-1532634786-c8f8c46a0062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJyZXdlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
randomImg[25] =
  "https://images.unsplash.com/photo-1566445916077-82abb7023af7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[26] =
  "https://images.unsplash.com/photo-1628361747763-78c68afe7fbc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[27] =
  "https://images.unsplash.com/photo-1594152032829-a443a4cd7390?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[28] =
  "https://images.unsplash.com/photo-1492955509702-333ba94989e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[29] =
  "https://images.unsplash.com/photo-1605673393926-d95a8995e3de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[30] =
  "https://images.unsplash.com/photo-1605673393926-d95a8995e3de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[31] =
  "https://images.unsplash.com/photo-1532377611310-4564e426e7c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[32] =
  "https://images.unsplash.com/photo-1578575737417-7f4ca1df16cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[33] =
  "https://images.unsplash.com/photo-1445140463371-d8036feedc2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[34] =
  "https://images.unsplash.com/photo-1545287072-469f3761413c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGJyZXdlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
randomImg[35] =
  "https://images.unsplash.com/photo-1606025753288-8295fa3c25e6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxicmV3ZXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

function displayRandom() {
  let number = Math.floor(Math.random() * randomImg.length);
  return number;
}
console.log(displayRandom());

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  //gets favorites from the local storage and then converts to an array
  const favorites = JSON.parse(localStorage.getItem("favorites"));
  console.log(favorites);
  //creates an HTML element for each brewery in the local storage
  const favoritesArray = favorites.map((favorite) => {
    return `<div class="card clear" data-name = "${
      favorite.name
    }" style=" background-color: #f2c025; width: 18rem; box-shadow: 3px 3px 3px;">
        <img class="card-img-top" src="${
          randomImg[displayRandom()]
        }" alt="Card image cap" style="height: 250px;">
    <div class="card-body d-flex flex-column ">
    <a style ="text-decoration: none;" href="${
      favorite.website_url
    }" target="_blank" class="card-link">
      <h5 class="card-title">${favorite.name}</h5>
      </a>
      <h6 class="card-subtitle mb-2 text-muted">${favorite.city}, ${
      favorite.state
    }</h6>
      <h6 class="card-subtitle mb-2 text-muted">${favorite.street}</h6>
      <h6 class="card-subtitle mb-2 text-muted">phone: ${favorite.phone}</h6>
      
      <button class="remove btn btn-outline-danger  mt-auto ">Remove </button>
      
    </div>
  </div>
  `;
  });

  //joins array into a string
  favoritesList.innerHTML = favoritesArray.join("");
});

//allows you to remove an element from the favorites list
document.addEventListener("click", (e) => {
  //   e.preventDefault();
  if (e.target.classList.contains("remove")) {
    const target = document.querySelector(".clear");

    //removing element from local storage and HTML

    //First, get the current data in the local storage and turn it into an array
    let favoriteList = JSON.parse(localStorage.getItem("favorites"));

    //find the object that you want to remove. This will return the object that matches the name of the card where the remove button is clicked
    const elementRemoved = favoriteList.find((element) => {
      return element.name === target.dataset.name;
    });

    //loop through the local storage. If the name matches the name of object that you want to remove, splice that object from the array
    for (let i = 0; i < favoriteList.length; i++) {
      if (favoriteList[i].name === elementRemoved.name) {
        favoriteList.splice(i, 1);
      }
    }

    //turn the local storage array back into JSON
    favoriteList = JSON.stringify(favoriteList);
    //Reset the local storage to the new JSON object that has removed the desired item
    localStorage.setItem("favorites", favoriteList);
    //Remove HTML
    target.remove();
  }
});

// initialize jQuery document ready
jQuery(document).ready(function ($) {
  // once the document is ready in the DOM this function will run
  let thehours = new Date().getHours();
  // use the built in time class and convert hours of the day into (0-23)
  if (thehours >= 0 && thehours < 17) {
    // jQuery captures the "main" id and add's a class that we will manipulate in css
    $("#main").addClass("day");
    // repeate the process if its later in the day
  } else if (thehours >= 17 && thehours < 24) {
    $("#main").addClass("night");
  }
});