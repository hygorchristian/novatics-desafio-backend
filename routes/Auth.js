const Route = use('Route')

/*
|--------------------------------------------------------------------------
| Permissions
|--------------------------------------------------------------------------
|
| Routes for the Permissions resource
|
*/

Route.post('/auth/github', 'AuthGithubController.store').validator('AuthGithub')
Route.delete('/auth', 'AuthController.destroy').middleware(['auth'])
