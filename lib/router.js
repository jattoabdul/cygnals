FlowRouter.route('/', {
   name: "home",
   action: function(){
       BlazeLayout.render('homeLayout', {main: 'home'});
   } 
});

FlowRouter.route('/about', {
   name: "about",
   action: function() {
       BlazeLayout.render('mainLayout',{main: 'about'});
   } 
});