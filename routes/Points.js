const Route = use('Route')

/*
|--------------------------------------------------------------------------
| Points
|--------------------------------------------------------------------------
|
| Routes for the association between user and points resource
|
*/

Route.post('/users/:id/points', 'UserPointController.store').validator('Point/CreatePoint').middleware(['auth'])
Route.get('/users/:id/points', 'UserPointController.show')
