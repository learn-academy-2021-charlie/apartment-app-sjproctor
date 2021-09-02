# Apartment App

### Setup
- Made a Rails app, and db
- $ rails new apartment_app -d postgresql -T
- $ cd apartment_app
- $ rails db:create
- Added the remote from github, created default branch

### Installs
- Branch: adding-devise
- Adding RSpec:
  - $ bundle add rspec-rails
  - $ rails generate rspec:install
- Adding Devise:
- $ bundle add devise
- $ rails generate devise:install
- $ rails generate devise User
- $ rails db:migrate

### Apartment Model
- $ rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string user_id:integer
- Define relationship between User and Apartment
- Created seeds

### Adding React
- Branch: adding-react
- $ bundle add react-rails
- $ rails webpacker:install
- $ rails webpacker:install:react
- $ rails generate react:install
- $ rails generate react:component App
- $ rails generate controller Home
- Created index.hmtl.erb in the view folder for home
- Call react component in index.html.erb
- Added root in routes file
- Passed in devise info to App.js
- $ yarn add react-router-dom
- Configured the devise signout route to be a get request
- Checked the sign in and sign out routes with conditional rendering


### User Stories

#### Devise and Header Stories
- Story: As a un-registered guest, I can go to registration page with a form and register as a new user (done)
  - Devise, navigation from Header component
- Story: As a registered user who has not logged in, I can go to a login page (done)
  - Devise, navigation from Header component
- Story: As a logged in user, I should be able to log out (done)
  - Devise, navigation from Header component
- Story: As an un-registered guest on the website, I can see a header element at the top of each page containing navigation to the other pages (done)
  - Header component
- Process:
  - Header component (done)
  - Styling (done)
  - Navigation to Devise (done)
  - Navigation Index (done)
    - Create index page, basic code
    - Define the route to index page
  - Testing the Header (done)
    - $ yarn add jest
    - $ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
    - Add this to the package.json:
    ```
    "jest": {
      "roots": [
        "app/javascript/components"
      ]
    }
    ```
- Styling on the header (done)
  - Styles for logo: gray: #D2D2CF, red: #8B0000
  - Updated color schemes
- Added image to Home page (done)


#### Read
- Story: As an un-registered guest on the website, I can go to a web page and see a list of available apartments. Apartments have: a street designation, a city, state, a manager's name, manager's contact email, monthly rental price, bedrooms, bathrooms, and whether they allow pets
  - Index
- Story: As an un-registered guest on the website, I can click on an apartment to view its details
  - Show
- Process:
  - Branch: read-functionality
  - Have an index page but nothing on it yet (done)
  - Route to Index (done)
  - Use mock data to display app apartments (done)
    - Styling (done)
  - Create a show page with mock data (done)
  - Routing to show with just one apartment using mock data (done)
    - Styling (done)
  - Add endpoint for index (done)
  - Add specs for index endpoint (done)
  - Add fetch request for index (done)
  - Remove mock data (done)
  - Added Font Awesome Icons (done)
    - $ `yarn add @fortawesome/fontawesome-svg-core`
    - $ `yarn add @fortawesome/free-solid-svg-icons`
    - $ `yarn add @fortawesome/react-fontawesome`
    - import { faHome, faCity } from "@fortawesome/free-solid-svg-icons";
    - import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    - In JSX: <FontAwesomeIcon icon={faHome} />
    - In JSX: <FontAwesomeIcon icon={faCity} />

#### Create
- Story: As a logged in user, I can go to a new apartment page with a form and create a new apartment
  - Create, only if you are logged_in, Devise, link is only in the nav if you are logged in (done)
  - Add route for newapartment that is only available to users who are logged in (done)
  - Add create controller method and strong params (done)
  - Add request specs for create (done)
  - Add validation for presence of all attributes (done)
  - Add model specs for validations (done)

#### Protected Show
- Just the apartments that belong to the current user
  - MyApartment component
  - Route that is protected
  - Conditionally rendered link
  - Filter state object based on current user id
  - Use code from index to make the view for protected index

#### Update
- Story: As a logged in user, I can edit the information for any apartment I have created, but I cannot edit the information for apartments that belong to someone else
  - Edit, only apartments with the foreign key of the current user
