require 'sinatra'
require 'pp'
require 'json'

set :public_folder, 'public'

before do
  response['Access-Control-Allow-Origin'] = '*'
end

post '/echo' do
    request.body.rewind
    request_payload = JSON.parse request.body.read

    request_payload['text']
end

post '/form' do
  "You said '#{params[:text]}'"
end

get '/contacts.json' do
  content_type :json

  {
    :contacts => [
      { name: 'joe', email: 'joe@gmail.com' },
      { name: 'mandy', email: 'mandy@gmail.com' },
      { name: 'barbara', email: 'barbara@hotmail.com' },
      { name: 'bill', email: 'bill@yahoo.com' },
    ]
  }.to_json
end

