# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



User.delete_all
Advert.delete_all
# Bid.delete_all

u1 = User.create(name: 'Paul Resende', email: 'paul@paul.com', role: 'buyer',
 profession: 'artist', password:'password', postcode: 'E2 8DA' )

