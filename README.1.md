# hw-w05-d05:  ToDo

![](https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif)

## Spec: 

PART 1:  Landing, Index, Show, New
1. Have a landing page that welcomes the user to your todo list.  The landing should have:
2. a link on the landing page that says "view list".  Clicking on it should lead to a `/todo` route, which renders an index page that lists of all items that need doing.
3. Clicking on an item in the list should lead you to a route `/todo/:id`, which is a `show` page to view the individual item. Each item has both a subject and a description.
4. At the top of the *INDEX* page (`/todo`) have a link that says "add new item" and leads to a `/new` route.
5. The `/new` route should have a form to add new items to the todo list. After the user adds a new item, redirect the user to the show page for that item.

PART 2: 
6. From the item view, click a button to edit.  The edit button should lead the user to a `/edit` route with a form where they can edit the subject and description for that item.
7. From the item view, click a button that says "done!" to delete (check off). Clicking this should remove the item from the database. After being deleted redirect the user to the index page.

## Guidance:
We have the spec, and below is some guidance if you wish.  Completing all these steps will get you through to the end.  That said, many may find that following these steps can be more confusing then going forth on your own.  It's up to you whether or not you follow them!

## Part 1 - Initialize the Project:
1. Create directories for MVC + DB, + Public.
2. Initialize a server file, index.js
3. Initialize Node (npm init)
4. Install dependencies
5. Setup index.js with all the .use, initializing app(), etc.
6. Create js files for models (js), controllers(js), db setup(js, and sql), views (html).

### tips: plan out what models and controllers you'd need ahead of time.  Diagram MVC?

## Part 2 - Set Up Database
1. create a seed.sql file.
2. in the seed file drop the database if it exists, create the database again and connect.
3. in seed file create the table you need for the database.  The table should include an id, subject, and content as columns.
4. in that seed file, set up some dummy data for the tables.
5. import our seed file into the db.
6. create a configuration file for connecting pgp to our db.


## Part 3 - Build Your Models for index, show and new.
1. Decide which routes will need a model.
2. suggestion: scaffold your functions. Write an empty function in our models file, one for each model that we'll need. Once the functions are written, write the methods themselves.
3. suggestion: open up a psql command line and try to build a query for each of the models from there before putting it in pg-promise.
4. Now that you've confirmed that the queries work, put them in your model as a PGP method.  
5. suggestion: un some console.logs in the pg-promise methods to make sure your getting the data you expect.  For example doing this will show you if your query worked:
 ```javascript
 .then(function(result){
   console.log(result);
 })
 ```

## Part 4 - Set up our controller for index, show, new
1. import models page.
2. Set up routes that we'll need.
3. Set up routes for .get for the views.  This includes the homepage view, the show all view, the show one view, the "new item" view  to render the `/new` form.
4. Set up route to `POST` data to the database.
5. Insert the correct models from Part 3 into their routes in the controller.
6. Set up mustache variables to pass the correct data to the view.


```javascript

// get routes:
.get('/' ...)
.get('/:id' ...)
.get('/new' ...)

.post('/new', ...)
```



### tips: Setup routes for views.  Setup routes for CRUD.  Have this planned out so we have clear targets for the next steps.



## Part 5 - Build Your Views for index, show and new.
1. Build a view for your landing page.
2. Build a view for your show all page.
3. Build a view for your show one page.
5. For your new page.
6. Connect all these views to the appropriate routes.
7. Connect your mustache template items from the views to the data from the models.

## Part 6 - Update your model to handle edit and delete:
1. Write methods in your model that handles editing existing items in the database and deleting items in the database.
2. Add those methods to your model object to be exported.
3. Update the routes in the controller to use these models.

## Part 7 - Update your controller to handle edit and delete.
1. Repeat the steps in part 4 for the `edit` and `delete` routes.  
2. The new routes should be:
```javascript
.get('/edit' ...)

.put('/:id', ...)
.delete(' /:id', ...)
```
3. Connect the correct model into their routes.
4. Set up mustache variables to pass the correct data to the view.


## Part 8 - Update your views for edit and delete:
1. Create a new view that renders the form used to edit an existing item.
2. Connect that new view to the correct route.  
3. Adjust the mustache variables as needed to display the correct data.
4. Update the show route to include a "delete" button. Connect that delete button to the `/delete` action.
5. Connect your mustache template items from the views to the data from the models.


# Due Date:
This homework is due on Tuesday 12/11 at midnight! You have two days to work on this. It is designed to be done in two nights, I would highly suggest trying to have the landing, index, show and new routes done tonight (10/10) while it is fresh on your mind.  Then you'll have edit and delete to do tomorrow.  The choice is yours, but budget your time wisely!
