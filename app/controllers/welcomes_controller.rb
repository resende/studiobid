class WelcomesController < ApplicationController
  def dashboard 
   @adverts = Advert.all 
   @bids = Bid.all 
   @users = User.all
   
  end
end 
