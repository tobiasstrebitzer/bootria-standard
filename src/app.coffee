#<< users
jQuery ->

  # Instanciate tweets collection
  tweets = new TweetCollection

  # Instanciate flickr collection
  photos = new FlickrCollection
      
  # Compose Application
  $("#bootria-content").bria()
    # Navigation bar
    .navbar({cls: "navbar-fixed-top"})
      .brand({title: "BootRIA"})
      .item({title: "About", active: true})
      .dropdown({title: "Settings"})
        .item({title: "Profile"})
        .item({title: "Security"})
        .item({title: "System"})
        .divider()
        .item({title: "Logout"})
      .end()
    .end()
    .container()
      # Hero unit
      .hero()
        .heading("BootRIA", 2)
        .span("Build rich internet applications with Twitter Bootstrap")
      .end()
      # Blocks
      .row()
        .div({cls: "span3"})
          .heading("JavaScript", 3)
          .p("BootRIA is written natively in JavaScript and runs on every browser.")
        .end()
        .div({cls: "span3"})
          .heading("Simple API", 3)
          .p("While being easy to use, BootRIA remains flexible and extensible.")
        .end()
        .div({cls: "span3"})
          .heading("Readability", 3)
          .p("While writing your Web Applications with BootRIA your code remains readable by design.")
        .end()
        .div({cls: "span3"})
          .heading("API-ready", 3)
          .p("Easily integrate your own or third party webservices like Twitter, Facebook and Flickr.")
        .end()
      .end()
      # Alerts
      .heading("Alerts", 3)
      .row()
        .div({cls: "span3"})
          .alert({title: "Info", message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.", cls: "alert-info"})
        .end()
        .div({cls: "span3"})
          .alert({title: "Error", message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.", cls: "alert-error"})
        .end()
        .div({cls: "span3"})
          .alert({title: "Success", message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.", cls: "alert-success"})
        .end()
        .div({cls: "span3"})
          .alert({title: "Warning", message: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est."})
        .end()
      .end()
    .end()
    # Recent tweets (twitter collection)
    .container()
      .heading("Recent tweets about JavaScript", 3)
      .table({cls: "table-condensed"})
        .loop {collection: tweets, id: "tweets"}, (composer)->
          composer.tr()
            .td()
              .span("@from_user").html(":")
            .end()
            .td()
              .span("@text")
            .end()
          .end()
      .end()
      .btn
        title: "Refresh"
        click: -> 
          bria.PackageView.getById("tweets").reload()
          return false
      .heading("Behind the code", 4)
      .tag({tag: "pre", cls: "prettyprint", text: '.table()\n  .loop {collection: tweets}, (composer)->\n    composer.tr()\n      .td()\n        .span("@from_user")\n      .end()\n    .td()\n      .span("@text")\n    .end()\n  .end()\n.end()\n'})
    .end()
    # Recent photos (flickr collection)
    .container()
      .heading("Recent photos from flickr", 3)
      .thumbnails()
        .loop {collection: photos, id: "photos"}, (composer)->
          composer.thumbnail().tooltip("@title")
            .img({src: "%http://farm<%= farm %>.staticflickr.com/<%= server %>/<%= id %>_<%= secret %>_s.jpg", width: 75, height: 75})
          .end()
      .end()
      .btn
        title: "Refresh"
        click: -> 
          bria.PackageView.getById("photos").reload()
          return false
      .heading("Behind the code", 4)
      .tag({tag: "pre", cls: "prettyprint", text: '.thumbnails()\n  .loop {collection: photos}, (composer)->\n    composer.thumbnail().tooltip("@title")\n      .img({src: "%http://farm<%= farm %>.staticflickr.com/<%= server %>/<%= id %>_<%= secret %>_s.jpg"})\n    .end()\n.end()'})
      # Footer
      .hero()
        .heading("BootRIA", 3)
        .span("Build rich internet applications with Twitter Bootstrap")
      .end();
    .end()
