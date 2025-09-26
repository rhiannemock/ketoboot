

# Form Testing
I realise I had used html and javascript to validate my form which was causing issues. The reason I originally chose javascript to do this was to change the button to submitted once form had been sent and i got a bit carried away. The following is the javascript i removed and went back to using html validation with the required on everything apart from the checkboxes for the experience.
I realise the action/method page is the way the user would know the information had been submitted i used target="_blank" to ensure it opened in a separate page.

/ Function to validate the form
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

Once these changes had been made I began testing the features individually as follows.

* Test 1
TEST
Submit button/action/method
Does the action/method work opening a new tab with the information when the submit button is pressed and the form is correctly completed?
EXPECTED RESULT
The browser will open a new window from code institute formdump to show the form had been submitted successfully.

RESULT-passed
i filled in the form and clicked submit. the browser opened another tab with the information i had entered correctly as intended.

* Test 2
TEST
Does the reset button clear all data in the form?
EXPECTED RESULT
The full form is cleared of all user input.

RESULT-passed
the reset button was pressed after form submission and the information i had entered was cleared from all of the input areas.

## error testing
* Test 3
TEST
name error
The name is missed and the submit button pressed.

i expect a prompt to the user to fill in the name.

RESULT
On pressing the submit button the browser scrolled back to the top of the screen and put a flasing curser in the name input box.
[link to error testing image for name](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/error-testing/name-missed.png)

* Test 4
TEST
email error
the email is missed and the submit button pressed.
EXPECTED RESULT
I expect a prompt to the user to fill in the email address.

RESULT-passed
The browser scrolled back to the email input with a flashing cursor to prompt the user to fill in the field.
![link to error testing image for email](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/form-testing/error-testing/email-missed.png)

* Test 5
TEST
Age select missed and the submit button pressed.
EXPECTED RESULT
I expect a prompt to the usere to select and age group.

RESULT-passed
The browser showed an alert pointing to the age select box prompting the user to select and age group.
![link to error testing image for age](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/form-testing/error-testing/age-missed.png)

* Test 6
TEST
Allergies radio button missed.
EXPECTED RESULT
I expect a prompt to the usere to select one of the radio buttons.

RESULT-passed
The browser displayed an alert pointing at the allergies section prompting the user to select an allergy.
at this point i realise this is required and i do not have a none option. This will be added and results can be found in the final tests section later in this document.
![link to error testing image for allergies](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/form-testing/error-testing/allergies-missed.png)

* Test 7
TEST
All age selections display correctly on submitted data.
EXPECTED RESULT
I expect all of the age groups to display correctly on the submitted data which is returned. withe the catagory of age and the data submitted next to it as follows.
age:18-24
age:25-34
age:35-44
age:45-54
age:55+

RESULT-passed
All age sections and the catagory were displayed correctly.
![18-24 age](https://rhiannemock.github.io/ketoboot/)
