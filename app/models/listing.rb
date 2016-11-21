class Listing < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  belongs_to :category
  belongs_to :user
  has_many :contacts
  has_many :comments
  mount_uploader :picture, PictureUploader

  def self.search(params)
    if params[:category_id]
      @listings = Listing.where(["category_id = ?", params[:category_id]])
    else
      @listings = Listing.where("title ILIKE :query OR description ILIKE :query", query: "%#{params[:keywords]}%")
    end
  end

  def title_verlan
    eltit = title.reverse
    if eltit==title
      "Hey it's a palyndrome"
    else
      "It's not a palyndrome"
    end
  end
end
