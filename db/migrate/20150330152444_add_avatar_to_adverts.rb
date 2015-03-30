class AddAvatarToAdverts < ActiveRecord::Migration
  def change
    add_column :adverts, :avatar, :string
  end
end
