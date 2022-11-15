# Getting Started with BOOKADOC

## How to run the project?

- Download repo
- Inside the repo folder do "npm i" or "yarn install"
- Now you can start checking what the app looks like :)

## Folder and File structure in the repo

The "src" folder contains the following folders:

- Assets: contains images (icons and photos) for the app
- Atoms: Very basic reusable components
- components: This folder contains the Components that will be rendered on the web app. Inside is possible to find each page folder and sometimes it could contain additional accessory components
- Molecules: Components built using Atoms and built with the purpose to have complex components that can be reusable for different situations
- Styles: Contains some helper files for (1) color definition, (2) Sections and Container styled components that can be reused for page layouts

Other relevant files:

- App.js: contains the route definitions for the App

## How does the app look like

The app is divided into a few pages:

- Landing page (LandingPage.js -> "/")
- Treatment section (TreatmentSelection.js -> "/treatment-selection"): the user can select a treatment and will be directed to the treatment-specific page
- Book appointment (BookAppointment.js -> "book-appointment/:treatment"): the user can book a doctor and date for the specific treatment selected before
- Final form submission (FinalFormSubmission.js -> "/final-form-submission"): where the user types user information and registers for the app
- Success page (SuccessPage.js -> "/success-page"): Where the user knows that the appointment was registered and the user can decide to start the process again
- Design system (DesignSystem.js -> "/design-system"): Not accessible to the user. It is possible to see most of the design elements used in the app

## Atoms folder

- Button: primary and secondary
- Checkbox: checkbox and possibility to give a text
- Dropdown: receives an array of elements and shows them after opening
- InputField: accepts different types of inputs
- Text: the general atomic element to use text and be able to modify text
- Title: collection of H1 to H6 elements created with styled-components