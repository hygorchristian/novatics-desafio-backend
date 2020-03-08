const Route = use('Route')

/*
|--------------------------------------------------------------------------
| Points
|--------------------------------------------------------------------------
|
| Routes for the association between user and points resource
|
*/

Route.post('/points/add', 'PointController.store').validator('Point/CreatePoint').middleware(['auth'])
