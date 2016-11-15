class UserMailer < ApplicationMailer

  def new_contact(listing_id, email, message)
    @listing = Listing.find(listing_id)
    @client_email = email
    @client_firstname = @listing.user.first_name
    @client_lastname = @listing.user.last_name
    @message = message

    mail(to: @listing.user.email, subject: 'Réponse à votre annonce:')
  end

end
