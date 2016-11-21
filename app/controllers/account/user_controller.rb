class Account::UserController < Account::AccountController
  def index
    @user = current_user
  end
  def update
    @user = User.find(params[:id])
    @user.update_attributes(user_params)
    redirect_to account_user_index_path
  end

  private
  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation)
  end
end
