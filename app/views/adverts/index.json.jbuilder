json.array!(@adverts) do |advert|
  json.extract! advert, :id, :name, :sector, :address, :postcode, :size, :facilities, :seller_id, :date_time, :availability
  json.url advert_url(advert, format: :json)
end
