class CreateAdverts < ActiveRecord::Migration
  def change
    create_table :adverts do |t|
      t.string :name
      t.string :sector
      t.string :address
      t.string :postcode
      t.string :size
      t.string :facilities
      t.integer :seller_id
      t.datetime :date_time
      t.string :availability

      t.timestamps null: false
    end
  end
end
