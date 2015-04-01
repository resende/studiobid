class WelcomesController < ApplicationController

  # def index 
  #   @current_user = current_user
  # end 

  # def index
  #   if user_signed_in?
  #     # render dashboard
  #     # redirect_to welcomes_dashboard_path
  #   else
  #     render "index"
    
  #   end
  # end 
  
  def index 
    
    if user_signed_in?
      # render dashboard
      # redirect_to welcomes_dashboard_path
      @users = current_user.id
      @current_user_adverts = Advert.where(seller_id: current_user.id)
      @current_user_bids = Bid.where(client_id: current_user.id )
    else
      
    end
    # redirect_to new_user_session_path 
  end 
end 
