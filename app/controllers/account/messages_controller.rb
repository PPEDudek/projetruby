class Account::MessagesController < Account::AccountController
  def index
    @contacts = Contact.mymessages(current_user)
  end
end
