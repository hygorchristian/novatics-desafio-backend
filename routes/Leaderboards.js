const Route = use('Route')

/*
|--------------------------------------------------------------------------
| Leaderboards
|--------------------------------------------------------------------------
|
|
*/

Route.get('/leaderboards', 'LeaderboardController.index')
