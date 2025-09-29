# ketogenesis 
For this project I decided to create a website about the ketogenic diet. A diet I have used previously and so know a good deal about it,how well it works the ups and downs, difficulties faced as well as all the amazing health benefits and how this particular diet differs from so many others.
I wanted to write this website for anyone having difficulty sticking to other heavily restrictive diets for weight loss or anyone suffering from the below symptoms. 
* The diet can help people with type 1 or type 2 diabetes keeping their blood sugars low. 
* It combats mental fatigue and brain fog so is great for menopause symptoms.
* Ketones give you energy so is good for lethargy.
* It helps reduce bloating and aid digestion so is excellent for IBS sufferers.
* The keto diet is a fabulous way to loose weight without feeling hungry as counting carbs rather than calories means you can eat alot more.
* It is suggested it also helps with seizures and epilepsy so would suggest anyone who is suffering from those illnesses to try it, however there needs to be more research done to officially confirm this.
## UX
### Strategy
Basic business goals objectives and user needs.

The current objective would be to provide an informative site with easy access to information, particularly how this particular diet differs from others, the health benefits and foods to eat and not to eat with tips for easy success.

Ideally the website that could be easily be added to in order to be able to make money from it in the future.
Maybe by charging a small subscription fee for the emails sent from the sign up form. Developing an app with paid for features or creating a store to buy keto foods, hampers or recipe books.

The user would need to be able to access information on what they can and cant eat quickly, for instance whilst preparing a meal or going food shopping.
They would need to know ...
* How the keto diet can benefit them.
* Which foods are and are not keto friendly.
* How to test if they are in ketosis.
* How they can get further information.
* Recipes that are keto friendly.
* Specifics an macros and how to record them.
* How to find out how many carbs are in their foods.

### Scope
what features are on and off the table.
The features of the website would be.
* The ability to sign up for email recipes so you dont get bored with eating the same things.
* Printable shopping list and meal log.
* Social media links to supportive pages with like minded people and discussions.
* An iframe video explaining the diet.
* Charts with write ups explaining macros.
* Recipe page with simple, delicious meals.
* A frequently asked questions section.
* A dropdown navigation menu at the top of every page.
  
I decided to start with only a couple of recipes so the website would be able to get up and running faster, more can be added later.
A shop or app could be added later, a macros calculator and keto menus with shopping lists could be a feature to use in the future also but would make it too large a project for now.

### Structure
Interaction design and information architecture.
The website would have started at what is now the introduction page but I decided to add a landing page as the main home page.
from there you can toggle  the navigation menu which has a list of links to the other pages.
introduction
about keto
sign up and
recipes
making a total of 5 pages.
The information flow then goes from a bold, attractive landing page with a quick but informative title and paragraph, through to a basic introduction on what the keto diet is and who /what it is good for, then to more details in the about keto page with the foods you can and cant eat,a video explanation and a questions and answers section, then through to a sign up page and finally some recipes.
The form I have made to be interactive with buttons to submit and reset the form and feedback on the validation and submission using javascript.
The questions and answers section on the about keto page has a read more/read less toggle to prevent the long list of words looking boring or monotonous.
The recipes page includes delicious images of the meals.


### Skeleton
Mock up /wireframes
I have created the wireframes for the website although the site has been modified based on being more visually pleasing with the 2 column of boxes going down the page on larger screens.
[Ketogenesis wireframe for desktop](https://rhiannemock.github.io/ketoboot/assets/ketogenesis-wireframes/keto-diet-desktop-wireframes.pdf)
[Ketogenesis wireframe for tablet](https://rhiannemock.github.io/ketoboot/assets/ketogenesis-wireframes/keto-diet-tablet-wireframes.pdf)
[Ketogenesis wireframe for mobile](https://rhiannemock.github.io/ketoboot/assets/ketogenesis-wireframes/keto-diet-mobile-wireframes.pdf)
I have also added a landing page which is not on the wireframes as i didnt like the first page being the introduction page.

### Surface
Color layout fonts images sequence identity
I want to create easy to read yet informative website. 
I chose to use separate boxed sections containing specific information and images relating to the information where necessary keeping this consistant on every page. Later on in the design i added a background and box-shadow,border radius of 10px for smooth rounded corners and a margin of 20px on each box giving the effect of floating over the background.
.wrapper .text-box {
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #232429;
    box-shadow: 0 1px 3px #00020b;
    margin: 20px 20px 20px 20px;
    border-radius: 10px;
    max-width: 100%;
}
On mobile and tablet they will be shown in a column going down the page, on desktop and larger it will split to 2 columns of boxes going down the page.
The navbar will toggle the menu and be at the top of every page. 
I have chosen dark grey and white with a pop of orange as my color scheme throughout all pages.  Using the orange for headings of the sections means the website can be easily scanned for what you are looking for.
I chose orange for the footer which will be the same on every page containing links to emails and social media.
The merriwether font was chosen for its modern look and easy readability.
All in all im aiming with this look for a website that is is modern, uncluttered and visually pleasing aswell as being easy to read and informative.


# TESTING
I have a list of ways of testing below that i will be using, these will be completed, changes made and final testing done once all changes have been made.

## Tests
1. Sign up form testing
2. responsiveness testing
3. wave testing
4. HTML and CSS testing using w3c and jigsaw
5. link testing page by page including images opening in a new window
6. browser compatability testing
7. lighthouse testing
   
   Once these tests are complete i will have a list of errors which will be worked on before the final testing phase.
# Form Testing

* Test 1
* 
TEST
Submit button/action/method
Does the action/method work opening a new tab with the information when the submit button is pressed and the form is correctly completed?

EXPECTED RESULT
The browser will open a new window from code institute formdump to show the form had been submitted successfully.


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

Once these changes had been made I began i retested this to get the following result.

RESULT-passed
i filled in the form and clicked submit. the browser opened another tab with the information i had entered correctly as intended.

* Test 2
  
TEST
Does the reset button clear all data in the form?

EXPECTED RESULT
The full form is cleared of all user input.

RESULT-passed
the reset button was pressed after form submission and the information i had entered was cleared from all of the input areas.

## Error testing
* Test 3
  
TEST
name required errors
The name is missed and the submit button pressed.

EXPECTED RESULT
i expect a prompt to the user to fill in the name.

RESULT
On pressing the submit button the browser scrolled back to the top of the screen and put a flasing curser in the name input box.
![link to error testing image for name](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/form-testing/error-testing/name-missed.png)

* Test 4
  
TEST
email required errors.
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
![18-24 age](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/form-testing/age-testing/18-24.png)
![25-34 age](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/form-testing/age-testing/25-34.png)
![35-44 age](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/form-testing/age-testing/35-44.png)
![45-54 age](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/form-testing/age-testing/55+.png)

* Test 8
  
TEST
All of the allergy radio buttons work as expected sending the correct data.

EXPECTED RESULT
The correct data is submitted for the correct selection under the allergies catagory as follows and only one radio button can be chosen, if another is clicked it will change to the other.
allergies:dairy
allergies:egg
allergies:gluten
allergies:nuts
allergies:shellfish

RESULT-passed
All allergies displayed correctly in the allergies catagory. Only one radio button can be pressed at a time.
![dairy allergy](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/form-testing/allergy-testing/dairy-allergy.png)
![egg allergy](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/form-testing/allergy-testing/egg-allergy.png)
![gluten allergy](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/form-testing/allergy-testing/gluten-allergy.png)
![nuts allergy](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/form-testing/allergy-testing/nuts-allergy.png)
![shellfish allergy](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/form-testing/allergy-testing/dairy-allergy.png)

* Test 9
  
TEST
Experience checkbox testing

EXPECTED RESULT
The data submitted is displayed correctly in the Experience catagory as below.
experience:beginner
experience:looked into it
experience:experienced

RESULT-passed
All of the experince levels checked displayed correctly with the experience catagory.

ADDITIONAL NOTE: if 2 checkboxes are checked it only displays the first one, at a later date i would probably change this to radio buttons to avoid complications.

![beginner checkbox](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/form-testing/experience-testing/beginner.png)
![looked into it checkbox](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/form-testing/experience-testing/looked-into-it.png)
![experienced checkbox](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/form-testing/experience-testing/experienced.png)

#### OVERALL RESULTS OF FORM TESTS/CHANGES NEEDED

A new radio button needs adding to the allergies section giving the option of no allergies.

## RESOLUTION/SCREEN SIZE TESTS/RESPONSIVENESS

P=Passed if a number is found see corresponding number below the table for more details.
The screens that are turnable ie phones and tablets have been also tested on the turned screen.

Screen | index.html | introduction.html | about-keto.html | sign-up.html | recipes.html
--- | --- | --- | --- | --- | ---
Samsung A9+ | P | P | P | P | P 
Samsung S25 | P | P | P | P | P
Iphone SE | P | P | P | P | P
Iphone 12 Pro | P | P | P | P | P
Iphone 14 Pro Max | P | P | P | P | P
Galaxy S8+ | P | P | P | P | P
Galaxt S20 Ultra | P | P | 2 & 3 | P | P
Ipad mini | P | P | P | P | P |
Ipad Pro | P | 1 | P | P | P |
My HP Laptop | P | P | P | P | P
1920 x 1080 (full hd) | P | P | P | P | P
1366 x 768 | P | P | P | P | P
2560 x 1440 (QUAD HD) | P | P | P | P | P
browser flex | P | P | P | P | P 

1 The footer was raised on the introduction page on the ipad pro, this was fixed by adding a margin under the wrapper to extend the page content pushing the footer to the bottom.

2 I wasnt happy with the way the images were displayed the different image resolutions were pushing the boxes out of line on larger screens after multiple ways of trying to align them i decided to add them into the text boxes with padding which seemed to work really well.
![images on a larger screen in the text box](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/resolutions/larger-screen-images.png)

3 iframe sizing needs fixing on smaller screens

4 a media query is needed for screen sizes over 3000px.

ADDITIONAL NOTE 
both 3 and 4 have been added to the fix and retest list for working on before the final testing.



# Wave testing

## index page

The first wave test showed

0 Errors

0 Contrast Errors

2 Alerts
1x possible heading and 1x redundant link

![index page wave test](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/wave-tests/index/index-wave.png)

The first for a possible heading is the paragraph at the top of the screen which says "welcome to" and the main heading h1 is styled into the center of the screen.

![index page screenshot](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/wave-tests/index/index-screenshot.png)

AS this is the style of the page i have decided not to change it.

The second alert was 1 redundant link. This is located in the bootstrap navbar at the top before the menu, i have removed the link as it is for the same page and was just meant as a reference to the current page, aria-current="home" and so doesnt need a link.

![index navbar image](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/wave-tests/index/index-navbar-link.png)

That alert has now been removed from wave when re run.

## Introduction page

The first wave on this page showed

0 Errors
0 Contrast Errors
1 Alert

The alert was that i had missed a level 1 heading.
![first wave on introduction](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/wave-tests/introduction/introduction-wave.png)
i changed the level 2 hewadings both to a level 1 heading.

I waved the page again and it had 1 alert, redundant links,
![second wave on introdution](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/wave-tests/introduction/introduction-wave-2.png)

so i removed the links in the paragraph as they were also in the navbar.

i waved the introduction page again
![third wave on introdution](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/wave-tests/introduction/introduction-wave-3.png)

It once again suggests there are redundant links and labels the home link

I looked through my code and i cannot find the redundant link
![introduction link navbar code](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/wave-tests/introduction/introduction-wave-3-code.png)
![introduction footer link code](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/wave-tests/introduction/introduction-wave-3-code-2.png)

I have decided to investigate this further when i do my link testing later in the testing list but cant currently see a fault.

## About keto page

The first wave test showed

1 Error

0 Contrast errors

3 Alerts

The first wave test showed that my toggle for read more/read less as an error, saying there were multiple form labels and also an alert that there was no fieldset for the form. I chose to change it for a details dropdown for better accessibility and less confusion.
![First wave on about keto page](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/wave-tests/about-keto-wave/about-keto-first-wave.png)

This fixed the error.

Another alert showed suspicious alt text.
I removed the image of from the alt text which fixed this issue.
![Suspicious alt text](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/wave-tests/about-keto-wave/about-keto-wave-suspicious-alt-text.png)

The final alert showed as a youtube video which i have decided to keep in the website.
![youtube video](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/wave-tests/about-keto-wave/about-keto-wave-image-of-removed.png)

## Sign up page

The sign up page showed no errors, contrast errors nor alerts.
![sign up page wave results](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/wave-tests/sign-up/sign-up-page-wave-clear.png)

## Recipes page

The recipes page showed no errors, contrast errors nor alerts.
![recipes page wave results](https://rhiannemock.github.io/ketoboot/assets/testing-screenshots/wave-tests/recipes-wave/recipes-wave-clear.png)

# LINK TESTING

## index page links

The links on the index page and the result of clicking the link are as follows.

![Links as shown on index page](https://rhiannemock.github.io/ketoboot/testing-screenshots/links-testing/index-links/index-page-links.png)

EXPECTED RESULTS-the internal links for

Introduction

About keto

Sign up

and Recipes

should open the corresponding page in the same browser window.

PRINTABLE LINKS

The 3 printables should open a printable image in a separate window.

SOCIAL MEDIA LINKS

The 3 social media links should open the corresponding social media sites in a separate window.

RESULTS

INTERNAL LINKS

The Introduction link opened the introduction page in the same window.

The About Keto link opened the About keto page in the same window.

The Sign up link opened the sign up page in the same window.

The recipes link opened the recipes page in the same window.

PRINTABLE LINKS

The printables didnt work on the github pages site, this is because i used relative links and so this has been changed.

The printable shopping list now opens in a separate window.

The printable meal log now opens in a separate window.

The printable meal plan now opens in a separate window.

SOCILA MEDIA LINKS






