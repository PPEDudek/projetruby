class Account::ContactsController < Account::AccountController
  def index
    @contacts = Contact.mycontacts(current_user)
  end
end
