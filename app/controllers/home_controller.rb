class HomeController < ApplicationController

  def index
    @save_me = "test de sauvetage"
    @pages = Page.where(["lang = ?", I18n.locale])
  end

  def search

    @save_me = "belle recherche coco !"

  end
end
