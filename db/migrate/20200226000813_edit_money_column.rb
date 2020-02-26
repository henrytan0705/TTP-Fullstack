class EditMoneyColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :money, :float
    add_column :users, :money, :float, null: false, :default => 5000.00
  end
end
