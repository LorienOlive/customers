'use strict';

(function () {

fetch("https://randomuser.me/api/?results=12&nat=us")
  .then(
    function(response) {
      if (response.status !==200) {
        console.log("Looks like there was a problem. Status Code: " + response.status);
        return;
      }

      response.json().then(function(data) {
        for (let i = 0; i < 12; i++) {

        var firstName = data.results[i].name.first;
        var lastName = data.results[i].name.last;
        var email = data.results[i].email;
        var streetAddress = data.results[i].location.street;
        var city = data.results[i].location.city;
        var state = data.results[i].location.state;
        var zipCode = data.results[i].location.postcode;
        var phone = data.results[i].phone;
        var ssn = data.results[i].id.value;
        var profilePic = data.results[i].picture.large;
        var fullName = firstName + " " + lastName;
        var cityStateZip = city + ", " + state + " " + zipCode;

        var markup = `
                <div class="flex-container">
                   <ul>
                      <li class="pic"><img src=${profilePic}></li>
                      <li class="name">${fullName}</li>
                      <li class="email">${email}</li>
                      <li class="address1">${streetAddress}</li>
                      <li class="address2">${cityStateZip}</li>
                      <li class="phone">${phone}</li>
                      <li class="ssn">${ssn}</li>
                    </ul>
                  </div>
                  `
          var gridContainer = document.querySelector("#grid-container").innerHTML += markup;
          }
        })
      })
})();
