class PagesController < ApplicationController

  def index
  end
  def show
    @pages = Page.where(["lang = ?", I18n.locale])
    @page = Page.find(params[:id])
  end
end
