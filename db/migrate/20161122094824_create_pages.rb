class CreatePages < ActiveRecord::Migration[5.0]
  def change
    create_table :pages do |t|
        t.timestamps
        t.string :lang
        t.string :title
        t.string :content
    end
  end
end
