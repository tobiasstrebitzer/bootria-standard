class User extends Backbone.Model
    
class Users extends Backbone.Collection
  model: User
  url: 'http://search.twitter.com/search.json?q=obama&callback=?'
  parse: (response)->
    return response.results
