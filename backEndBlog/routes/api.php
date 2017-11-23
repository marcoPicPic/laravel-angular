<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/blog', [
    'uses' => 'BlogController@postBlog'
]);

Route::get('/blogs', [
   'uses' => 'BlogController@getBlog'
]);

Route::put('/blog/{id}', [
    'uses' => 'BlogController@putBlog'
]);

Route::delete('/blog/{id}', [
    'uses' => 'BlogController@deleteBlog'
]);

Route::post('/user', [
   'uses' => 'UserController@signup'
]);
