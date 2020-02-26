class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :name, null: false
      t.string :ticker, null: false
      t.integer :quantity, null: false
      t.float :price, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    
    add_index :stocks, :name
    add_index :stocks, :ticker
    add_index :stocks, :user_id
  end
end
