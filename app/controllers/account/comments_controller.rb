class Account::CommentsController < ApplicationController
  def create
    @comment = Comment.create(
      user_id: current_user.id,
      message: params[:comment][:message],
      listing_id: params[:comment][:listing_id]
    )

    redirect_to listing_path(@comment.listing_id)
  end
end
