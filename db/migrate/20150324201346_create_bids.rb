class CreateBids < ActiveRecord::Migration
  def change
    create_table :bids do |t|
      t.integer :advert_id
      t.integer :client_id
      t.datetime :date_time
      t.string :status
      t.integer :amount

      t.timestamps null: false
    end
  end
end
