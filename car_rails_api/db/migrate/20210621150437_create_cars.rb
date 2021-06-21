class CreateCars < ActiveRecord::Migration[6.1]
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.string :color
      t.integer :year
      t.integer :origin_id

      t.timestamps
    end
    add_index :cars, :origin_id
  end
end
