class ListingsController < ApplicationController

  def index
    @save_me = "test de sauvetage"
    @listings= Listing.all

    respond_to do |format|
        format.html
        format.json { render json: @listings.to_json }
      end
  end

  def new

    @listing = Listing.new

  end
  def create
    @listing = Listing.new(listing_params)

    #respond_to do |format|
      if @listing.save
        #format.html { redirect_to @task, notice: 'Task was successfully created.' }
        #format.json { render :show, status: :created, location: @task }
        redirect_to @listing, notice: 'Listing was successfully created.'
      else
        render:new
        #format.html { render :new }
        #format.json { render json: @task.errors, status: :unprocessable_entity }
      end
    #end
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def listing_params
      params.require(:listing).permit(:title, :description, :picture, :price, :category_id)
    end
end
