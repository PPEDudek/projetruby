class Contact < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  belongs_to :listing
  belongs_to :user

  def self.generate(params, user)
    Contact.create(message: params[:message], user_id: user.id, listing_id: params[:listing_id])
    UserMailer.new_contact(params[:listing_id], user.email, params[:message])
  end
end
