require 'sinatra'
require 'pp'
require 'json'

set :public_folder, 'public'

get '/intro' do
  return "Hello World!"
end

rooms = ["badal", "badal", "hermon"]

get '/rooms' do 
  content_type :json

  return rooms.to_json
end

post '/rooms' do
  request.body.rewind
  request_payload = JSON.parse request.body.read
  puts '--- add room'
  pp request_payload
  puts '--- end'

  rooms.push(request_payload["name"])
end
