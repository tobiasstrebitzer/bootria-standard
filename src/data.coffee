class Tweet extends Backbone.Model
    
class TweetCollection extends Backbone.Collection
  model: Tweet
  url: 'http://search.twitter.com/search.json?q=javascript&rpp=5&callback=?'
  parse: (response)->
    return response.results
    
class Flickr extends Backbone.Model

class FlickrCollection extends Backbone.Collection
  model: Flickr
  url: "http://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ad03a4374d038c747d1c1722a40316b1&per_page=30&format=json&jsoncallback=?"
  parse: (response)->
    return response.photos.photo
