class WelcomesController < ApplicationController

  def index
    if user_signed_in?
      # render dashboard
      redirect_to welcomes_dashboard_path
    else
      render "index"
    end
  end 

  def dashboard 
    # binding.pry
    @users = User.all
    @current_user_adverts = Advert.where(seller_id: current_user.id)
    @current_user_bids = Bid.where(client_id: current_user.id )
  end
end 
