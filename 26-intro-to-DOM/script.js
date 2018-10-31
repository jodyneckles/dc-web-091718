console.log('connected')

function appendRow(tbody){
  let tr = document.createElement("tr")

  let tdfirstName = document.createElement("td")
  let tdlastName = document.createElement("td")
  let email = document.createElement("td")

  tdfirstName.innerText = "Melanie"
  tdlastName.innerText = "MacDonald"
  email.innerText = "mel@gmail.com"

  tr.appendChild(tdfirstName)
  tr.appendChild(tdlastName)
  tr.appendChild(email)

  tbody.appendChild(tr)
}
function appendWithHTML(tbody){
  let str = `<tr id="row-4">
    <td class="firstName">Melanie</td>
    <td class="lastName">Duong</td>
    <td data-id=${tbody} class="email">thuyan.duong@flatironschool.com</td>
  </tr>`

  tbody.innerHTML += str
}

function deleteRowHTML(row){
  row.innerHTML = ""
}
function deleteRow(tbody, row){
  tbody.removeChild(row)
}

document.addEventListener("DOMContentLoaded", function(){
  let tbody = document.querySelector("tbody")
  // appendRow(tbody)
  appendWithHTML(tbody)
    let row = document.querySelector("#row-4")
  // deleteRowHTML(row)
  // deleteRow(tbody,row)
})
