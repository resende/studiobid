class Bid < ActiveRecord::Base

belongs_to :advert
belongs_to :client, :class_name => 'User', :foreign_key => 'client_id'

end
