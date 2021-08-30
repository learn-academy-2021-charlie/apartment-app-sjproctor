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
