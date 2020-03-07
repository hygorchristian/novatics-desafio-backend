const Route = use('Route')

/*
|--------------------------------------------------------------------------
| Pontuation
|--------------------------------------------------------------------------
|
| Routes for the Pontuation resource
|
*/

Route.post('/pontuations', 'PontuationController.store').validator('Pontuation/CreatePontuation').middleware(['auth'])
Route.get('/pontuations', 'PontuationController.index')
Route.get('/pontuations/:id', 'PontuationController.show')
Route.put('/pontuations/:id', 'PontuationController.update').validator('Pontuation/UpdatePontuation').middleware(['auth'])
Route.delete('/pontuations/:id', 'PontuationController.destroy').middleware(['auth'])
