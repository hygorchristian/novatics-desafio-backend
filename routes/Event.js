const Route = use('Route')

/*
|--------------------------------------------------------------------------
| Event
|--------------------------------------------------------------------------
|
| Routes for the Event resource
|
*/

Route.post('/events', 'EventController.store').validator('Event/CreateEvent').middleware(['auth'])
Route.get('/events', 'EventController.index')
Route.get('/events/:id', 'EventController.show')
Route.put('/events/:id', 'EventController.update').validator('Event/UpdateEvent').middleware(['auth'])
Route.delete('/events/:id', 'EventController.destroy').middleware(['auth'])
