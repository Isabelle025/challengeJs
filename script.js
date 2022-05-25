const form = document.getElementById("form")
const button = document.getElementById("button")
const all_input = document.querySelectorAll(".case")
button.addEventListener("click", validate)



function validate() {

  all_input.forEach(element => {
    console.log(element)
    const span = document.createElement("SPAN");
    const message = document.createTextNode(`${element.id} cannot be empty`)
    span.appendChild(message);

    if (element.validity.valueMissing) {
      element.setAttribute("class", "form_input_invalid case");

      form.replaceChild(span, element.nextSibling);
      span.setAttribute("id", element.id+"_invalid");
      span.setAttribute("class", "form_span_invalid");
  } else {
      element.removeAttribute("class", "form_input_invalid");
      element_spanInvalid = document.getElementById(element.id+"_invalid");
      if (element_spanInvalid) {
          element_spanInvalid.remove();
      }
    }

  // console.log(document.getElementById("name").validity)
});
  
let input = document.getElementById("Email");
if (input.validity.typeMismatch) {
    const email_span = document.createElement("SPAN");
    const email_span_text = document.createTextNode("Looks like this is not an email");
    email_span.appendChild(email_span_text);    

    input.setAttribute("class", "form_input_invalid");
    form.replaceChild(email_span, input.nextSibling);
    email_span.setAttribute("id", "form_email_invalid_type");
    email_span.setAttribute("class", "form_span_invalid");
} else {
    email_spanInvalid = document.getElementById('form_email_invalid_type');
    if (email_spanInvalid) {
      input.removeAttribute("class", "form_input_invalid");
      email_spanInvalid.remove();
    }
}

}