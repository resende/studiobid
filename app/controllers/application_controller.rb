class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    if user_signed_in?
      render "dashboard"
    else
      render "index"
    end
  end 

  def dashboard
  end
  # def after_sign_in_path_for(resource_or_scope)
  #   session.fetch 'user_return_to', user_path
  # end


end
