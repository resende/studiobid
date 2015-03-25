class Advert < ActiveRecord::Base

has_many :bids
has_many :clients, through: :bids
belongs_to :seller, :class_name => 'User', :foreign_key => 'seller_id'

end
