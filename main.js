var fullNameInput = document.querySelector("#fullName");
var phoneInput = document.querySelector("#phoneNumber");
var emailInput = document.querySelector("#emailAddress");
var addressInput = document.querySelector("#address");
var groupInput = document.querySelector("#group");
var notesInput = document.querySelector("#notes");
var favoriteInput = document.querySelector("#contactFavorite");
var emergencyInput = document.querySelector("#contactEmergency");
var groupInput = document.querySelector("#group");
var closeButton = document.querySelector("#closeButton");
var saveButton = document.querySelector("#saveButton");
var favoriteBtn = document.querySelector(".favoriteBtn");
var emergencyBtn = document.querySelector(".emergencyBtn");
var heartBtn = document.querySelector(".heartBtn");
var starIcon = document.querySelector(".star-icon");
var myForm = document.getElementById("myForm");
var updatedIndex;
var contacts = loadContacts();








function loadContacts() {
    if (localStorage.getItem("contacts")) {
        return JSON.parse(localStorage.getItem("contacts"));
    }
    else {
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
  localStorage.setItem("contacts", JSON.stringify(contacts))
  displayContacts();
}

function displayContacts() {
    var contentToRender = "";
    for (var i = 0; i < contacts.length; i++) {
        contentToRender += `
        <div class="col-lg-6 bg-white rounded-4 shadow-sm p-3 mb-3">
                  <div class="d-flex gap-2">
                    <div
                      class="img-card position-relative bg-linear-orange rounded-3 d-flex align-items-center justify-content-center"
                    >
                    <p class="fw-semibold fs-5 text-white">A</p>
                      <div
                        class="star-icon rounded-circle bg-gold border border-2 border-white icon icon-top d-flex align-items-center justify-content-center position-absolute"
                      >
                        <i
                          class="fa-solid fa-star fa-2xs fa-stack-1x fa-inverse position-static"
                        ></i>
                      </div>
                      <div
                        class="heart-icon position-absolute rounded-circle bg-danger border border-2 border-white icon icon-bottom d-flex align-items-center justify-content-center"
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
                 ${contacts[i]?.emailAddress ?` <div class="d-flex align-items-center gap-2 mt-3">
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
                  </div>` : ""}
                  ${contacts[i]?.address ?` <div class="d-flex align-items-center gap-2 my-3">
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
                  </div>` : ""}
                 <div
                    class="d-flex align-items-center gap-2 border-bottom pb-3"
                  >
                    ${contacts[i]?.address ?` <p
                      class="bg-light-green p-1 rounded-3 fw-medium fs-10 text-green"
                    >
                      ${contacts[i].group}
                    </p>` : ""}
                    <p
                      class="bg-light-red p-1 rounded-3 fw-medium fs-10 text-red"
                    >
                      <i class="fas fa-heart-pulse"></i>
                      Emergency
                    </p>
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
                      <button
                        class="rounded-3 border-0 bg-light-purple icon-footer d-flex align-items-center justify-content-center"
                      >
                        <i
                          class="fa-solid fa-envelope text-main fa-sm fa-stack-1x fa-inverse position-static"
                        ></i>
                      </button>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                      <button onclick="favoriteBtnClick(this)"
                        class="favoriteBtn rounded-3 border-0 bg-white icon-footer d-flex align-items-center justify-content-center"
                      >
                        <i
                          class="fa-regular fa-star text-gray fa-sm fa-stack-1x fa-inverse position-static"
                        ></i>
                      </button>
                      <button
                        class="heartBtn rounded-3 border-0 bg-white icon-footer d-flex align-items-center justify-content-center"
                      >
                        <i
                          class="fa-regular fa-heart text-gray fa-sm fa-stack-1x fa-inverse position-static"
                        ></i>
                      </button>
                      <button
                        class="emergencyBtn rounded-3 border-0 bg-light-red icon-footer d-flex align-items-center justify-content-center d-none"
                      >
                        <i
                          class="fa-solid fa-heart-pulse text-red fa-sm fa-stack-1x fa-inverse position-static"
                        ></i>
                      </button>
                      <button onClick="updateContact()"
                        class="rounded-3 border-0 icon-footer bg-white d-flex align-items-center justify-content-center"
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
    document.getElementById("contactsContainer").innerHTML = contentToRender;
}

function favoriteBtnClick(btn) {
  var favoriteBtn = btn.querySelector(".fa-star");
  if (favoriteBtn.classList.contains("text-gray")) {
    favoriteBtn.classList.remove("fa-regular");
    favoriteBtn.classList.remove("text-gray");
    favoriteBtn.classList.add("text-gold");
    favoriteBtn.classList.add("fas");
    favoriteBtn.classList.add("bg-light-orange");
    starIcon.classList.remove("d-none");
  }
  else {
    favoriteBtn.classList.add("text-gray");
    favoriteBtn.classList.add("fa-regular");
    favoriteBtn.classList.remove("text-gold");
    favoriteBtn.classList.remove("fas");
    favoriteBtn.classList.remove("bg-light-orange");
    starIcon.classList.add("d-none"); 
  }
}

saveButton.addEventListener("click", addContact);
saveButton.addEventListener("click", function(){
  myForm.reset();
});
 displayContacts();
 
function deleteContact(index){
  contacts.splice(index,1);
  localStorage.setItem("contacts",JSON.stringify(contacts));
  displayContacts() 
    
}
function updateContact(){
  console.log("hiiiiiiiiiiiiii");
  
    
}