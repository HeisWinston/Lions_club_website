const withAuth = (req, res, next) => {
    console.log("--------withAuth--------");
    console.log(req.session);
      // If the user is not logged in, redirect the request to the login route
      if (req.session.logged_in != true) {
        console.log("----------------");
        console.log(req.session.logged_in)
        res.redirect('/');
      } else {
        next();
      }
    };
    
    module.exports = withAuth;
    
   
  
  
  