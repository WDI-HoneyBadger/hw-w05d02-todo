# hw-w05-d05:  ToDo

![](https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif)

## Spec: 

1. Have a landing page.
2. Click on a link on the landing to see our active list.
3. Click on an item in the list to view the item.  Each item has both a subject and a description.
4. From the item view, click a button to edit.
5. From the item view, click a button to delete (check off).
6. Clicking the edit view pulls up a form where you can edit the subject and item description.


## Part 1 - Initialize the Project:
1. Create directories for MVC + DB, + Public.
2. Initialize a server file, index.js
3. Initialize Node (npm init)
4. Install dependencies
5. Setup index.js with all the .use, initializing app(), etc.
6. Create js files for models (js), controllers(js), db setup(js, and sql), views (html), public (js, css).

### tips: plan out what models and controllers you'd need ahead of time.  Diagram MVC?

## Part 2 - Set Up Database
1. doing command line things to setup a new database (createdb my_db_name_blah)
2. create a seed.sql file.
3. in seed file create the table you need for the database.  The table should include an id, subject, and content as columns.
4. in that seed file, set up some dummy data for the tables.
5. import our seed file into the db.
6. create a configuration file for connecting pgp to our db.

### tips: look at how this was done before.

## Part 3 - Set up our controller
1. import models page.
2. Setup empty routes that we'll need.  
3. Setup routes for .get for the views.  This includes the homepage view, the show all view, the show one view, show view for the edit form.
4. Setup routes for the API.  

```javascript

// for views:
.get('/' ...)
.get('/:id' ...)
.get('/edit' ...)
.get('/new' ...)

// for API:
.post('/new', ...)
.put('/:id', ...)
.delete(' /:id', ...)

```

### tips:  JUST DO IT.  Setup routes for views.  Setup routes for the API (REST).  Have this planned out so we have clear targets for the next steps.

## Part 4 - Build Your Models
1. Decide which routes will need a model.
2. Write an empty function in our models file, one for each model that well need.
3. Once the functions are written, write the methods themselves.
4. tip: open up a psql command line and try to build a query for each of the models from there before putting it in PGP.
5. Now that you've confirmed that the queries work, put them in your model as a PGP method.  
6. Run some console.logs in the PGP methods to make sure your getting the data you expect.
7. Connect your models in the controller file to the correct routes.

### tip: test your routes in postman.  Does a POST work?  Does findAll get the results the expect? Does PUT work?  TRY IT.  POSTMAN RULES.

## Part 5 - Build Your Views
1. Build a view for your landing page.
2. Build a view for your show all page.
3. Build a view for your show one page.
4. For your edit form.
5. For your new page.
6. Connect all these views to the appropriate routes.
7. Build the AJAX calls that are fired from actions in the views
8. Connect your mustache template items from the views to the data from the models.

### tip: console.log all the data at all the places.  console.log('HELLO FROM _______'), console.log(data)







