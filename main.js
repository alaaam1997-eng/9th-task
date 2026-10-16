var fullNameInput = document.querySelector("#fullName");
var phoneInput = document.querySelector("#phoneNumber");
var emailInput = document.querySelector("#emailAddress");
var addressInput = document.querySelector("#address");
var groupInput = document.querySelector("#group");
var notesInput = document.querySelector("#notes");
var favoriteInput = document.querySelector("#contactFavorite");
var emergencyInput = document.querySelector("#contactEmergency");
var groupInput = document.querySelector("#group");
var fullNameInputUpdate = document.querySelector("#fullNameUpdate");
var phoneInputUpdate = document.querySelector("#phoneNumberUpdate");
var emailInputUpdate = document.querySelector("#emailAddressUpdate");
var addressInputUpdate = document.querySelector("#addressUpdate");
var groupInputUpdate = document.querySelector("#groupUpdate");
var notesInputUpdate = document.querySelector("#notesUpdate");
var favoriteInputUpdate = document.querySelector("#contactFavoriteUpdate");
var emergencyInputUpdate = document.querySelector("#contactEmergencyUpdate");
var groupInputUpdate = document.querySelector("#groupUpdate");
var closeButton = document.querySelector("#closeButton");
var saveButton = document.querySelector("#saveButton");
var updatedButton = document.querySelector("#updatedButton");
var favoriteBtn = document.querySelector(".favoriteBtn");
var emergencyBtn = document.querySelector(".emergencyBtn i");
var heartBtn = document.querySelector(".heartBtn");
var starIcon = document.querySelector(".starIcon");
var heartIcon = document.querySelector(".heartIcon");
var myForm = document.querySelector("#myForm");
var nameAlert = document.querySelector(".alert");
var updatedIndex;
var contacts = loadContacts();
var noContacts = document.querySelector(".row-noContacts");

function loadContacts() {
  if (localStorage.getItem("contacts")) {
    return JSON.parse(localStorage.getItem("contacts"));
  } else {
    return [];
  }
}

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
  displayContacts();}


function displayContacts() {
  var contentToRender = "";
  if (contacts.length > 0) {
    for (var i = 0; i < contacts.length; i++) {
      var isEmer = contacts[i].contactEmergency;
      var isFav = contacts[i].contactFavorite;

      contentToRender += `
        <div class="col-lg-5 bg-white rounded-4 shadow-sm p-3 mb-3 ">
                  <div class="d-flex gap-2">
                    <div
                      class="img-card position-relative bg-linear-orange rounded-3 d-flex align-items-center justify-content-center"
                    >
                    <p class="fw-semibold fs-5 text-white">A</p>
                      <div
                        class="starIcon rounded-circle bg-gold border border-2 border-white icon icon-top d-flex align-items-center justify-content-center position-absolute ${isFav == false ? "d-none" : ""}"
                      >
                        <i
                          class="fa-solid fa-star fa-2xs fa-stack-1x fa-inverse position-static"
                        ></i>
                      </div>
                      <div
                        class="heart-icon position-absolute rounded-circle bg-danger border border-2 border-white icon icon-bottom d-flex align-items-center justify-content-center ${isEmer == false ? "d-none" : ""}"
                      >
                        <i
                          class="fa-solid fa-heart-pulse fa-2xs fa-stack-1x fa-inverse position-static"
                        ></i>
                      </div>
                    </div>
                    <div>
                      <p class="fw-semibold fs-6 text-dark-gray">${contacts[i].fullName}</p>
                      <div class="d-flex align-items-center gap-2">
                         <div
                          class="rounded-3 bg-light-blue icon d-flex align-items-center justify-content-center"
                        >
                        
                          <i
                            class="fa-solid fa-phone text-blue fa-2xs fa-stack-1x fa-inverse position-static"
                          ></i>
                        </div>
                        <p class="fw-normal fs-14 text-light-gray">
                          ${contacts[i].phoneNumber}
                        </p>
                      </div>
                    </div>
                  </div>
                 ${
                   contacts[i]?.emailAddress
                     ? ` <div class="d-flex align-items-center gap-2 mt-3">
                    <div
                      class="rounded-3 bg-light-purple icon d-flex align-items-center justify-content-center"
                    >
                      <i
                        class="fa-solid fa-envelope text-main fa-2xs fa-stack-1x fa-inverse position-static"
                      ></i>
                    </div>
                    <p class="fw-normal fs-14 text-light-gray">
                       ${contacts[i].emailAddress}
                    </p>
                  </div>`
                     : ""
                 }
                  ${
                    contacts[i]?.address
                      ? ` <div class="d-flex align-items-center gap-2 my-3">
                    <div
                      class="rounded-3 bg-light-green icon d-flex align-items-center justify-content-center"
                    >
                      <i
                        class="fa-solid fa-location-dot text-green fa-2xs fa-stack-1x fa-inverse position-static"
                      ></i>
                    </div>
                    <p class="fw-normal fs-14 text-light-gray">
                       ${contacts[i].address}
                    </p>
                  </div>`
                      : ""
                  }
                 <div
                    class="d-flex align-items-center gap-2 border-bottom pb-3"
                  >
                    ${
                      contacts[i]?.address
                        ? ` <p
                      class="bg-light-green p-1 rounded-3 fw-medium fs-10 text-green"
                    >
                      ${contacts[i].group}
                    </p>`
                        : ""
                    }
                    ${
                      contacts[i]?.contactEmergency
                        ? `<p class= "bg-light-red p-1 rounded-3 fw-medium fs-10 text-red">
                      <i class="fas fa-heart-pulse"></i>
                      Emergency
                    </p>`
                        : ""
                    }
                  </div>
                  <div class="d-flex align-items-center justify-content-between pt-3">
                    <div class="d-flex align-items-center gap-2">
                      <button
                        class="rounded-3 border-0 bg-light-green icon-footer d-flex align-items-center justify-content-center"
                      >
                        <i
                          class="fa-solid fa-phone text-green fa-sm fa-stack-1x fa-inverse position-static"
                        ></i>
                      </button>
                      ${
                        contacts[i]?.emailAddress
                          ? `<button
                        class="rounded-3 border-0 bg-light-purple icon-footer d-flex align-items-center justify-content-center"
                      >
                        <i
                          class="fa-solid fa-envelope text-main fa-sm fa-stack-1x fa-inverse position-static"
                        ></i>
                      </button>`
                          : ""
                      }
                    </div>
                    <div class="d-flex align-items-center gap-2">
                      ${
                        contacts[i]?.contactFavorite
                          ? `<button onclick="favoriteBtnClick(this, ${i})"
                        class="favoriteBtn rounded-3 border-0 bg-light-orange icon-footer d-flex align-items-center justify-content-center"
                      >
                        <i
                          class="fa-solid fa-star text-gold fa-sm fa-stack-1x fa-inverse position-static"
                        ></i>
                      </button>`
                          : `<button onclick="favoriteBtnClick(this, ${i})"
                        class="favoriteBtn rounded-3 border-0 bg-white icon-footer d-flex align-items-center justify-content-center"
                      >
                        <i
                          class="fa-regular fa-star text-gray fa-sm fa-stack-1x fa-inverse position-static"
                        ></i>
                      </button>`
                      }
                      ${
                        contacts[i]?.contactEmergency
                          ? ` <button onclick="emergencyBtnClick(this, ${i})"
                        class="heartBtn rounded-3 border-0 bg-light-red icon-footer d-flex align-items-center justify-content-center"
                      >
                        <i
                          class="fa-solid fa-heart-pulse text-red fa-sm fa-stack-1x fa-inverse position-static"
                        ></i>
                      </button>`
                          : `<button onclick="emergencyBtnClick(this, ${i})"
                        class="heartBtn rounded-3 border-0 bg-white icon-footer d-flex align-items-center justify-content-center"
                      >
                        <i
                          class="fa-regular fa-heart text-gray fa-sm fa-stack-1x fa-inverse position-static"
                        ></i>
                      </button>`
                      }
                      
                      <button onClick="setFormForUpdate(${i})"
                        class="rounded-3 border-0 icon-footer bg-white d-flex align-items-center justify-content-center" data-bs-toggle="modal" data-bs-target="#editModal"
                      >
                        <i
                          class="fa-solid fa-pen text-gray fa-sm fa-stack-1x fa-inverse position-static"
                        ></i>
                      </button>
                      <button onClick="deleteContact(${i})"
                        class="rounded-3 border-0 icon-footer bg-white d-flex align-items-center justify-content-center"
                      >
                        <i
                          class="fa-solid fa-trash text-gray fa-sm fa-stack-1x fa-inverse position-static"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
          `;
    }
    noContacts.classList.replace("d-block", "d-none");

    document.querySelector(".row-contactsContainer").innerHTML =
      contentToRender;
  } else {
    noContacts.classList.replace("d-none", "d-block");
    document.querySelector(".row-contactsContainer").innerHTML =
      contentToRender;
  }
}

function emergencyBtnClick(btn, index) {
  contacts[index].contactEmergency = !contacts[index].contactEmergency;
  var heartBtn = btn.querySelector(".fa-sm");
  if (heartBtn.classList.contains("text-gray")) {
    heartBtn.classList.remove("fa-regular");
    heartBtn.classList.remove("fa-heart");
    heartBtn.classList.add("fa-heart-pulse");
    heartBtn.classList.remove("text-gray");
    heartBtn.classList.add("text-red");
    heartBtn.classList.add("fa-solid");
    heartBtn.classList.add("bg-light-red");
    heartBtn.classList.remove("bg-white");
  } else {
    heartBtn.classList.remove("text-red");
    heartBtn.classList.add("text-gray");
    heartBtn.classList.remove("fa-solid");
    heartBtn.classList.add("fa-regular");
    heartBtn.classList.remove("fa-heart-pulse");
    heartBtn.classList.add("fa-heart");
    heartBtn.classList.remove("bg-light-red");
    heartBtn.classList.add("bg-white");
  }

  localStorage.setItem("contacts", JSON.stringify(contacts));
  displayContacts();
}
function favoriteBtnClick(btn, index) {
  contacts[index].contactFavorite = !contacts[index].contactFavorite;
  var favoriteBtn = btn.querySelector(".fa-star");
  if (favoriteBtn.classList.contains("text-gray")) {
    favoriteBtn.classList.remove("fa-regular");
    favoriteBtn.classList.remove("text-gray");
    favoriteBtn.classList.add("text-gold");
    favoriteBtn.classList.add("fa-solid");
    favoriteBtn.classList.add("bg-light-orange");
  } else {
    favoriteBtn.classList.add("text-gray");
    favoriteBtn.classList.add("fa-regular");
    favoriteBtn.classList.remove("text-gold");
    favoriteBtn.classList.remove("fa-solid");
    favoriteBtn.classList.remove("bg-light-orange");
  }
  localStorage.setItem("contacts", JSON.stringify(contacts));
  displayContacts();
}

saveButton.addEventListener("click", addContact);
saveButton.addEventListener("click", function () {
  myForm.reset();
});
displayContacts();

function deleteContact(index) {
  contacts.splice(index, 1);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  displayContacts();
}

function setFormForUpdate(index) {
  updatedIndex = index;
  fullNameInputUpdate.value = contacts[index].fullName;
  phoneInputUpdate.value = contacts[index].phoneNumber;
  emailInputUpdate.value = contacts[index].emailAddress;
  addressInputUpdate.value = contacts[index].address;
  groupInputUpdate.value = contacts[index].group;
  notesInputUpdate.value = contacts[index].notes;
  emergencyInputUpdate.checked = contacts[index].contactEmergency;
  favoriteInputUpdate.checked = contacts[index].contactFavorite;
}

function updateContact() {
  contacts[updatedIndex].fullName = fullNameInputUpdate.value;
  contacts[updatedIndex].phoneNumber = phoneInputUpdate.value;
  contacts[updatedIndex].emailAddress = emailInputUpdate.value;
  contacts[updatedIndex].address = addressInputUpdate.value;
  contacts[updatedIndex].group = groupInputUpdate.value;
  contacts[updatedIndex].notes = notesInputUpdate.value;
  contacts[updatedIndex].contactEmergency = emergencyInputUpdate.value;
  contacts[updatedIndex].contactFavorite = favoriteInputUpdate.value;
  (localStorage.setItem("contacts", JSON.stringify(contacts)),
    displayContacts(contacts));
  myForm.reset();
}
updatedButton.addEventListener("click", updateContact);

function validateContact(element , regex) {
  if (regex.test(element.value)) {
    element.nextElementSibling.classList.replace("d-block", "d-none");
  } else {
    element.nextElementSibling.classList.replace("d-none", "d-block");
  }
}


fullNameInputUpdate.addEventListener("keydown", function () {
  validateContact(fullNameInputUpdate,/^[A-Za-z ]{2,50}$/);
});
fullNameInput.addEventListener("keydown", function () {
  validateContact(fullNameInput,/^[A-Za-z ]{2,50}$/);
});
phoneInput.addEventListener("keydown", function () {
  validateContact(phoneInput,/^01[0125][0-9]{8}$/);
});
phoneInputUpdate.addEventListener("keydown", function () {
  validateContact(phoneInputUpdate,/^01[0125][0-9]{8}$/);
});
emailInput.addEventListener("keydown", function () {
  validateContact(emailInput,/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
});
emailInputUpdate.addEventListener("keydown", function () {
  validateContact(emailInputUpdate,/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
});

