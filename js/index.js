"use strict";

(function () {
const WOFwidget = document.getElementById("WOFwidget");


WOFwidget.innerHTML = `<div class="form mt-6">
    <form onsubmit="formSubmitHandler(event)"  action="#" class="user-form mx-auto">
    <div class="form-group">
        <label class="form-label" for="name">Name</label>
        <input oninput="strValidHadndler(event)" class="input" type="text" id="name" name="name" />
    </div>
    <div class="form-group">
        <label class="form-label" for="surname">Surname</label>
        <input oninput="strValidHadndler(event)" class="input" type="text" id="surname" name="Surname" />
    </div>
    <div class="form-group">
        <label class="form-label" for="email">Email</label>
        <input oninput="emailValidHadndler(event)" class="input" type="email" id="email" name="Email" />
    </div>
    <button class="btn btn-primary mt-2">REGISTER</button>
    </form>
</div>`;
})();
