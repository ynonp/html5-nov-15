require 'sinatra'
require 'sinatra/cross_origin'
require 'json'


options "*" do
  response.headers['Access-Control-Allow-Origin'] = '*'
  response.headers["Allow"] = "HEAD,GET,PUT,POST,DELETE,OPTIONS"

  response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"

  200
end

items = [
  { :id => 0, :name => "Bill", :tagline => "hello bill" },
  { :id => 1, :name => "Jane", :tagline => "Jane she is a clerk" },
]
next_id = 2

post '/' do
  response.headers['Access-Control-Allow-Origin'] = '*'
  request.body.rewind
  @payload = JSON.parse request.body.read
  name = @payload['name'] || 'anonymous'
  tagline = @payload['tagline'] || 'no tagline'

  new_item = { :id => next_id, :name => name, :tagline => tagline }
  items << new_item
  next_id += 1

  new_item.to_json
end

get '/' do
  response.headers['Access-Control-Allow-Origin'] = '*'
  items.to_json
end
