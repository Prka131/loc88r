/*Get "Home" Pages*/
module.exports.homeList = function(req,res){
  res.render('index', {title: 'Home'});
};
/*Get "Locations" Pages*/
module.exports.locationInfo = function(req,res){
  res.render('location-info', {title: 'location Info'});
};
/*Get "Review" Pages*/
module.exports.addReview = function(req,res){
  res.render('location-review-form', {title: 'Add review'});
};

module.exports.homeList= function(req,res){
  res.render('locations-list', {title: 'Home '});
};
