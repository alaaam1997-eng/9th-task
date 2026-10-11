var fullNameInput = document.querySelector("#fullName");
var phoneInput = document.querySelector("#phoneNumber");
var emailInput = document.querySelector("#emailAddress");
var addressInput = document.querySelector("#address");
var groupInput = document.querySelector("#group");
var notesInput = document.querySelector("#notes");
var favoriteInput = document.querySelector("#contactFavorite");
var emergencyInput = document.querySelector("#contactEmergency");
var closeButton = document.querySelector("#closeButton");
var saveButton = document.querySelector("#saveButton");


function loadContacts() {
    if (localStorage.getItem("contacts")) {
        return JSON.parse(localStorage.getItem("contacts"));
    }
    else {
        return [];
    }
}

var contacts = loadContacts();
function addContact() {
    var newContact = {
    fullName: fullNameInput.value,
    phoneNumber: phoneInput.value,
    emailAddress: emailInput.value,
    address: addressInput.value,
    group: groupInput.value,
    notes: notesInput.value,
    contactFavorite: favoriteInput.checked,
    contactEmergency: emergencyInput.checked,
  };
  contacts.push(newContact);
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function displayContacts() {
    var contentToRender = "";
    for (var i = 0; i < contacts.length; i++) {
        contentToRender += `
            <div class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">${contacts[i].fullName}</h5>
                <p class="card-text">
                  <strong>Phone:</strong> ${contacts[i].phoneNumber}<br />
                  <strong>Email:</strong> ${contacts[i].emailAddress}<br />
                  <strong>Address:</strong> ${contacts[i].address}<br />
                  <strong>Group:</strong> ${contacts[i].group}<br />
                  <strong>Notes:</strong> ${contacts[i].notes}<br />
                  <strong>Favorite:</strong> ${contacts[i].contactFavorite ? "Yes" : "No"}<br />
                  <strong>Emergency:</strong> ${contacts[i].contactEmergency ? "Yes" : "No"}
                </p>
              </div>
            </div>
          `;
    }
    document.getElementById("contactsContainer").innerHTML = contentToRender;
}
saveButton.addEventListener("click", addContact);