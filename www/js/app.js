
(function() {
  var Flickr, FlickrCollection, Tweet, TweetCollection, User, Users,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  User = (function(_super) {

    __extends(User, _super);

    function User() {
      return User.__super__.constructor.apply(this, arguments);
    }

    return User;

  })(Backbone.Model);

  Users = (function(_super) {

    __extends(Users, _super);

    function Users() {
      return Users.__super__.constructor.apply(this, arguments);
    }

    Users.prototype.model = User;

    Users.prototype.url = 'http://search.twitter.com/search.json?q=obama&callback=?';

    Users.prototype.parse = function(response) {
      return response.results;
    };

    return Users;

  })(Backbone.Collection);

  jQuery(function() {
    var photos, tweets;
    tweets = new TweetCollection;
    photos = new FlickrCollection;
    return $("#bootria-content").bria().navbar({
      cls: "navbar-fixed-top"
    }).brand({
      title: "BootRIA"
    }).item({
      title: "About",
      active: true
    }).dropdown({
      title: "Settings"
    }).item({
      title: "Profile"
    }).item({
      title: "Security"
    }).item({
      title: "System"
    }).divider().item({
      title: "Logout"
    }).end().end().container().hero().heading("BootRIA", 2).span("Build rich internet applications with Twitter Bootstrap").end().row().div({
      cls: "span3"
    }).heading("JavaScript", 3).p("BootRIA is written natively in JavaScript and runs on every browser.").end().div({
      cls: "span3"
    }).heading("Simple API", 3).p("While being easy to use, BootRIA remains flexible and extensible.").end().div({
      cls: "span3"
    }).heading("Readability", 3).p("While writing your Web Applications with BootRIA your code remains readable by design.").end().div({
      cls: "span3"
    }).heading("API-ready", 3).p("Easily integrate your own or third party webservices like Twitter, Facebook and Flickr.").end().end().heading("Alerts", 3).row().div({
      cls: "span3"
    }).alert({
      title: "Info",
      message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
      cls: "alert-info"
    }).end().div({
      cls: "span3"
    }).alert({
      title: "Error",
      message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
      cls: "alert-error"
    }).end().div({
      cls: "span3"
    }).alert({
      title: "Success",
      message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.",
      cls: "alert-success"
    }).end().div({
      cls: "span3"
    }).alert({
      title: "Warning",
      message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."
    }).end().end().end().container().heading("Recent tweets about JavaScript", 3).table({
      cls: "table-condensed"
    }).loop({
      collection: tweets,
      id: "tweets"
    }, function(composer) {
      return composer.tr().td().span("@from_user").html(":").end().td().span("@text").end().end();
    }).end().btn({
      title: "Refresh",
      click: function() {
        bria.PackageView.getById("tweets").reload();
        return false;
      }
    }).heading("Behind the code", 4).tag({
      tag: "pre",
      cls: "prettyprint",
      text: '.table()\n  .loop {collection: tweets}, (composer)->\n    composer.tr()\n      .td()\n        .span("@from_user")\n      .end()\n    .td()\n      .span("@text")\n    .end()\n  .end()\n.end()\n'
    }).end().container().heading("Recent photos from flickr", 3).thumbnails().loop({
      collection: photos,
      id: "photos"
    }, function(composer) {
      return composer.thumbnail().tooltip("@title").img({
        src: "%http://farm<%= farm %>.staticflickr.com/<%= server %>/<%= id %>_<%= secret %>_s.jpg",
        width: 75,
        height: 75
      }).end();
    }).end().btn({
      title: "Refresh",
      click: function() {
        bria.PackageView.getById("photos").reload();
        return false;
      }
    }).heading("Behind the code", 4).tag({
      tag: "pre",
      cls: "prettyprint",
      text: '.thumbnails()\n  .loop {collection: photos}, (composer)->\n    composer.thumbnail().tooltip("@title")\n      .img({src: "%http://farm<%= farm %>.staticflickr.com/<%= server %>/<%= id %>_<%= secret %>_s.jpg"})\n    .end()\n.end()'
    }).hero().heading("BootRIA", 3).span("Build rich internet applications with Twitter Bootstrap").end().end();
  });

  Tweet = (function(_super) {

    __extends(Tweet, _super);

    function Tweet() {
      return Tweet.__super__.constructor.apply(this, arguments);
    }

    return Tweet;

  })(Backbone.Model);

  TweetCollection = (function(_super) {

    __extends(TweetCollection, _super);

    function TweetCollection() {
      return TweetCollection.__super__.constructor.apply(this, arguments);
    }

    TweetCollection.prototype.model = Tweet;

    TweetCollection.prototype.url = 'http://search.twitter.com/search.json?q=javascript&rpp=5&callback=?';

    TweetCollection.prototype.parse = function(response) {
      return response.results;
    };

    return TweetCollection;

  })(Backbone.Collection);

  Flickr = (function(_super) {

    __extends(Flickr, _super);

    function Flickr() {
      return Flickr.__super__.constructor.apply(this, arguments);
    }

    return Flickr;

  })(Backbone.Model);

  FlickrCollection = (function(_super) {

    __extends(FlickrCollection, _super);

    function FlickrCollection() {
      return FlickrCollection.__super__.constructor.apply(this, arguments);
    }

    FlickrCollection.prototype.model = Flickr;

    FlickrCollection.prototype.url = "http://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ad03a4374d038c747d1c1722a40316b1&per_page=30&format=json&jsoncallback=?";

    FlickrCollection.prototype.parse = function(response) {
      return response.photos.photo;
    };

    return FlickrCollection;

  })(Backbone.Collection);

}).call(this);
