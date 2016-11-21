class Contact < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  belongs_to :listing
  belongs_to :user

  def self.mymessages(user)
    #on affiche les contacts des listings qu'à créer le user
    Contact.joins('LEFT JOIN listings ON contacts.listing_id = listings.id')
           .where(['listings.user_id = ?', user.id])
           .order('contacts.created_at DESC')

  end

  def self.mycontacts(user)
    #on affiche les contacts du user
    Contact.where(['user_id = ?', user.id]).order('contacts.created_at DESC')
    #@contacts = user.contacts
  end

  def self.generate(params, user)
    Contact.create(message: params[:message], user_id: user.id, listing_id: params[:listing_id])
    UserMailer.new_contact(params[:listing_id], user.email, params[:message], user.id)
  end
end
