document.addEventListener("DOMContentLoaded", function(){
  let formElement = document.querySelector('#my-form')
  formElement.addEventListener('submit', onSubmitForm)

  let nodes = document.querySelectorAll(".email")
  nodes.forEach(node => {
  	node.addEventListener('click', sendEmail)
  })

  let rows = document.querySelectorAll(".row-")
  rows.forEach(row => {
    row.addEventListener('click', showProfile)
  })
})

function showProfile(event){
  console.log(`showing profile: ${event.currentTarget.innerText}`)
}

function sendEmail(event){
  event.stopPropagation()
  console.log(`sending email to ${event.currentTarget.innerText}`)
}

function onSubmitForm(event){
  event.preventDefault()
  let tbody = document.querySelector("tbody")
  let firstName = document.getElementById('firstNameInput').value
  let lastName = document.getElementById('lastNameInput').value
  let emailText = document.getElementById('emailInput').value
  appendRow(tbody, firstName, lastName, emailText)
  let form = event.currentTarget
  form.reset()
}

function appendRow(tbody, firstName, lastName, email){
  let tr = document.createElement("tr")

  let tdfirstName = document.createElement("td")
  let tdlastName = document.createElement("td")
  let tdemail = document.createElement("td")
  tdemail.addEventListener('click', sendEmail)

  tdfirstName.innerText = firstName
  tdlastName.innerText = lastName
  tdemail.innerText = email

  tr.appendChild(tdfirstName)
  tr.appendChild(tdlastName)
  tr.appendChild(tdemail)

  tbody.appendChild(tr)
}










function appendWithHTML(tbody, firstName, lastName, email){
  let str = `
  <tr id="row-4">
    <td class="firstName">${firstName}</td>
    <td class="lastName">${lastName}</td>
    <td class="email">${email}</td>
  </tr>`
  tbody.innerHTML += str
}
