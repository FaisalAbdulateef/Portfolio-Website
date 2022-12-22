/*
Name: Faisal A Mohammed Abdulateef
Student Number: 163686215
Email: fabdulateef@myseneca.ca
Section: ZAA
*/

let errorStrings = [];

function otherPurpInput() {
    let break1 = document.createElement('br');
    break1.id = 'b1';
    let break2 = document.createElement('br');
    break2.id = 'b2';
    let break3 = document.createElement('br');
    break3.id = 'b3';
    let break4 = document.createElement('br');
    break4.id = 'b4';

    const element1 = document.createElement("label");
    const textNode = document.createTextNode("Other Purpose: ");
    element1.appendChild(textNode);
    element1.id = 'otherpurp';

    const element2 = document.createElement("input");
    element2.id = 'otherpurpinput';
    element2.name = 'otherpurpose';
    element2.type = 'text';
    element2.classList.add('format')

    document.querySelector(".contactButtons").appendChild(break1);
    document.querySelector(".contactButtons").appendChild(break2);
    document.querySelector(".contactButtons").appendChild(element1);
    document.querySelector(".contactButtons").appendChild(break3);
    document.querySelector(".contactButtons").appendChild(break4);
    document.querySelector(".contactButtons").appendChild(element2);
}

function removeOtherPurpInput() {
    let labelName = document.getElementById('otherpurp');
    let inputBox = document.getElementById('otherpurpinput');
    let buttonsDiv = document.querySelector(".contactButtons");
    let b1 = document.getElementById('b1');
    let b2 = document.getElementById('b2');
    let b3 = document.getElementById('b3');
    let b4 = document.getElementById('b4');

    buttonsDiv.removeChild(inputBox);
    buttonsDiv.removeChild(labelName);
    buttonsDiv.removeChild(b1);
    buttonsDiv.removeChild(b2);
    buttonsDiv.removeChild(b3);
    buttonsDiv.removeChild(b4);
}

let otherRadioButton = document.getElementById('other');
let jobOfferRadioButton = document.getElementById('jobOffer');
let schoolRadioButton = document.getElementById('school');

var increment = 0;

otherRadioButton.addEventListener('click', function() {
    if (increment == 0) {
        otherPurpInput();
        increment++;
    }
});

jobOfferRadioButton.addEventListener('click', function() {
    if (increment > 0) {
        removeOtherPurpInput();
        increment = 0;
    }
});

schoolRadioButton.addEventListener('click', function() {
    if (increment > 0) {
        removeOtherPurpInput();
        increment = 0;
    }
});

function checkLetters(stringValue, string) {
    let regex = /^[A-Za-z\s]+$/;
    if (!(stringValue.value.match(regex))) {
        errorStrings.push(string);
    }
}

function checkValid(stringValue, string) {
    result = true;
    if (stringValue.value === '' || stringValue.value == null) {
        errorStrings.push(`Please Enter Your ${string} Before Sending <br/>`);
        result = false;
    }

    return result;
}

function nameCheck() {
    const inputName = document.getElementById('name');
    if(checkValid(inputName, 'Name')) {
        checkLetters(inputName, 'Please Enter Your Name Without Symbols <br/>');
    }
}

function emailCheck() {
    const email = document.getElementById('email');
    if (checkValid(email, 'Email')) {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!(email.value.match(regex))) {
            errorStrings.push("Please Enter a Valid Email Address <br/>");
        }
    }    
}

function addressCheck() {
    const address = document.getElementById('address');
    if (checkValid(address, 'Street Address')) {
        if (address.value.length < 5) {
            errorStrings.push("Please Enter a Valid Street Address <br/>");
        }
    }
}

function cityCheck() {
    const city = document.getElementById('city');
    if(checkValid(city, 'City')) {
        checkLetters(city, 'Please Enter a Valid City Name <br/>');
    }
}

function postalCodeCheck() {
    const postalCode = document.getElementById('Postal Code');
    let regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (!(postalCode.value.match(regex))) {
        errorStrings.push("Please Enter Your Postal Code Before Sending <br/>");
    }
}

function messageCheck() {
    const message = document.getElementById('message');
    if (checkValid(message, 'Message')) {
        if (message.value.length < 25) {
            errorStrings.push("Your Message is Too Short! <br/>");
        }
    }
}

function otherPurposeCheck() {
    const otherPurp = document.getElementById('otherpurpinput');
    if (checkValid(otherPurp, 'otherpurpose')) {
        if (otherPurp.value.length < 5) {
            errorStrings.push("Your Other Purpose Message is Too Short! <br/>");
        }
    }
}

const form = document.getElementById('contactForm');
const errorElement = document.getElementById('reEnterInfo');

form.addEventListener('submit', (e) => {
    errorStrings = [];

    nameCheck();
    emailCheck();
    addressCheck();
    cityCheck();
    postalCodeCheck();
    messageCheck();

    if (increment > 0) {
        otherPurposeCheck();
    }

    if (errorStrings.length > 0) {
        e.preventDefault();
        errorElement.innerHTML = `
        <h3>Please Re-Enter Your Information</h3>
        <pre>${errorStrings.join('\r\n')}</pre>
        `;
    }
})

form.addEventListener('reset', (e) => {
    errorElement.innerHTML = '';
    errorStrings = [];
})
7