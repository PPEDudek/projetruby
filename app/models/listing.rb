class Listing < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  belongs_to :category
  mount_uploader :picture, PictureUploader
end
