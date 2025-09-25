// Function to validate the form
function validateForm (event) {
  // Prevent the form from submitting by default
  event.preventDefault()

  let form = event.target
  let name = form.username.value.trim()
  let email = form.email.value.trim()
  let age = form.age.value
  let allergies = form.elements['allergies']
  let experience = form.elements['experience']
  let messageElement = document.getElementById('form-submitted')

  // Clear previous messages
  messageElement.innerText = ''
  messageElement.classList.remove('success', 'error')

  // --- Validation Logic ---
  // 1. Validate Name
  if (name === '') {
    setMessage('Please enter your name.', 'error')
    return false
  }

  // 2. Validate Email
  if (email === '' || !email.includes('@') || !email.includes('.')) {
    setMessage('Please enter a valid email address.', 'error')
    return false
  }

  // 3. Validate Age
  if (age === '') {
    setMessage('Please select your age group.', 'error')
    return false
  }

  // 4. Validate Allergies (Radio Buttons) google helped from here with the allergies and experience validation
  let isAllergySelected = false
  for (let i = 0; i < allergies.length; i++) {
    if (allergies[i].checked) {
      isAllergySelected = true
      break
    }
  }
  if (!isAllergySelected) {
    setMessage('Please select at least one allergy or select "None".', 'error')
    return false
  }

  // 5. Validate Experience (Checkboxes)
  let isExperienceSelected = false
  for (let i = 0; i < experience.length; i++) {
    if (experience[i].checked) {
      isExperienceSelected = true
      break
    }
  }
  if (!isExperienceSelected) {
    setMessage('Please select your experience level.', 'error')
    return false
  }

  // If all validations pass successfully
  setMessage('Success! Your form has been submitted.', 'success')
  document.getElementById('submitButton').innerText = 'Submitted!'
}

// Helper function to set the message and style
function setMessage (text, type) {
  let messageElement = document.getElementById('form-submitted')
  messageElement.innerText = text
  messageElement.classList.add(type)
}

// Function to reset the form and the message
function resetForm () {
  let messageElement = document.getElementById('form-submitted')
  messageElement.innerText = ''
  messageElement.classList.remove('success', 'error')
  document.getElementById('submitButton').innerText = 'Submit'
}
