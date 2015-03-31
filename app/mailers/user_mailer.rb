class UserMailer < ApplicationMailer
 def bid_email(user)
    @user = user
    @url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Offer accepted')
  end

end
