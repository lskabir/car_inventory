# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Origin.destroy_all
Car.destroy_all

domestic = Origin.create(name: 'Domestic')
import = Origin.create(name: 'Import')

Car.create([
  {make: 'Honda', model: 'CR-V', color: 'Brown', year: 2014, origin: import},
  {make: 'Honda', model: 'Civic', color: 'Silver', year: 2003, origin: import},
  {make: 'Chevy', model: 'Suburban', color: 'Blue', year: 2007, origin: domestic},
  {make: 'Ford', model: 'Mustang', color: 'Black', year: 1986, origin: domestic},
  {make: 'Audi', model: 'TT', color: 'Red', year: 2000, origin: import},
  {make: 'VW', model: 'Passat', color: 'Green', year: 2000, origin: import},
  {make: 'Jeep', model: 'Laredo', color: 'Beige', year: 2005, origin: domestic},
  {make: 'Buick', model: 'Park Avenue Ultra', color: 'White', year: 2005, origin: domestic}
])