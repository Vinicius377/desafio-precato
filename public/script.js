const subscribeForm = document.getElementById("subscribe")
const nameInput = document.getElementById("name-input")
const emailInput = document.getElementById("email-input")
const day = document.getElementById("day-message")
const message = document.getElementById("message")
const email = document.getElementById("email")

subscribeForm.addEventListener("submit", async e => {
  e.preventDefault()

  try {
    const response = await fetch("http://localhost:2222/sub", {
      headers: {
        ["Content-type"]: "application/json",
      },
      method: "post",
      body: JSON.stringify({
        name: nameInput.value,
        email: emailInput.value,
      }),
    })
    const result = await response.json()
    alert("usuario inscrito!")
    console.log(result)
    localStorage.setItem("id", result.id)
    email.innerHTML = result.email
    getMessage()
  } catch (e) {
    console.log(e)
  }
})

async function getMessage() {
  const id = localStorage.getItem("id")

  if (!id) return
  try {
    const response = await fetch(`http://localhost:2222/message`, {
      method: "post",
      headers: {
        ["Content-type"]: "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    })
    const result = await response.json()
    if (!result.position && !result.template_name) {
      throw new Error("result is undefined")
    }
    day.innerHTML = "Dia: " + result.position
    message.innerHTML = result.template_name
  } catch (e) {
    console.log(e)
  }
}

getMessage()

const messageForm = document.getElementById("create-message")
const templateName = document.getElementById("template-name")
const positionDay = document.getElementById("position-day")

messageForm.addEventListener("submit", async e => {
  e.preventDefault()
  console.log(positionDay.value, templateName)
  try {
    await fetch("http://localhost:2222/message/create", {
      headers: {
        ["Content-type"]: "application/json",
      },
      method: "post",
      body: JSON.stringify({
        template_name: templateName.value,
        position: positionDay.value,
      }),
    })
    getMessage()
    alert("mensagem criada!")
  } catch (e) {
    console.log(e)
  }
})
