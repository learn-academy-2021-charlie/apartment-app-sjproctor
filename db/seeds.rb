users = [
  {
    email: 'testing@test.com',
    password: 'testing123',
    password_confirmation: 'testing123'
  },
  {
    email: 'snow@mail.com',
    password: 'testing123',
    password_confirmation: 'testing123'
  }
]

users.each do |attribute|
  User.create attribute
end

apartments = [
  {
    street: '123 Street',
    city: 'SD',
    state: 'CA',
    manager: 'Joe',
    email: 'joe@testing.com',
    price: '1000',
    bedrooms: 2,
    bathrooms: 3,
    pets: 'all pets welcome'
  },
  {
    street: '456 Street',
    city: 'SD',
    state: 'CA',
    manager: 'Joe',
    email: 'joe@testing.com',
    price: '1000',
    bedrooms: 2,
    bathrooms: 3,
    pets: 'no snakes'
  }
]

first_user = User.where(email: 'testing@test.com').first

apartments.each do |attribute|
  first_user.apartments.create attribute
end
