json.array!(@bids) do |bid|
  json.extract! bid, :id, :advert_id, :client_id, :date_time, :status, :amount
  json.url bid_url(bid, format: :json)
end
