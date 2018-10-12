class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.integer :price
      t.integer :year
      t.boolean :good

      t.timestamps
    end
  end
end
