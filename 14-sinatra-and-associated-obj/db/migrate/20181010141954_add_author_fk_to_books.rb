class AddAuthorFkToBooks < ActiveRecord::Migration[5.2]
  def change
    change_column :books, :author, :integer
  end
end
