class CreateCats < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :color
      t.string :breed
      t.string :image
      t.string :quote
      t.integer :floof
      t.timestamps
    end
  end
end
