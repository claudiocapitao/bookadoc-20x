# Getting Started with BOOKADOC

## How to run the project?

- Download repo
- Inside the repo folder do "npm i" or "yarn install"
- Now you can start checking how the app looks like :)

## Folder and File structure in the repo

The "src" folder contains the following folders:

- Assest: contains images (icons and photos) for the app
- Atoms: Very basic reusable components
- components: This folder contains the the Components that will be rendered on the web app. Inside is possible to find each page folder and sometimes it could contain additionall accessory components
- Molecules: Components built using Atoms and built with the pourpose to have complex componnents that can be reusable for different situations
- Styles: Conatins some helper files for: (1) color definition; (2) Sections and Container styled components that can be reused for page layouts

Other relevant files:

- App.js: contains the routes definiitions for the App

## How does the app look like

The app is divided in a few pages:

- Landing page
- Treatment section: the user can select a treatment and will be directed to the treatment specific page
- Book appointment: the user can book a doctor and date for the specific treatment selected before
- Final form submission: where the user types user information and registers for the app
- Success page: Where the user know that the appointment was registered and the user can decide to start the proccess again
- Design system: can be found in '/design-system'. Not accesible to the user. It is possible to see most of the design elements used in the app
