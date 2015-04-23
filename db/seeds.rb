# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)



User.delete_all
Advert.delete_all
Bid.delete_all

u1 = User.create(name: 'Paul Resende', email: 'paul@paul.com', role: 'buyer',
 profession: 'artist', password:'password', postcode: 'N16 8AT' )

u1 = User.create(name: 'James North', email: 'james@james.com', role: 'seller',
 profession: 'studio owner', password:'password', postcode: 'E2 8DA' )

a1 = Advert.create(name: 'James Studio Ad', sector: 'Photographic', address: '200 Kings Road', postcode: 'WC1 8AT', size: '200 sqft', facilities: 'lots of fun things!', availability: '1st & 2nd May', seller_id: "4")