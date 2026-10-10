var fullNameInput = document.getElementById("fullName");
var phoneInput = document.getElementById("phoneNumber");
var emailInput = document.getElementById("emailAddress");
var addressInput = document.getElementById("address");
var groupInput = document.getElementById("group");
var notesInput = document.getElementById("notes");
var favoriteInput = document.getElementById("contactFavorite");
var emergencyInput = document.getElementById("contactEmergency");
var closeButton = document.getElementById("closeButton");
var saveButton = document.getElementById("saveButton");


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
saveButton.addEventListener("click", addContact);