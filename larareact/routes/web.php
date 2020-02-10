<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::group(['middleware' => ['auth']], function () {
	Route::get('/', 'TimelineController@index');
	Route::get('/posts', 'PostController@index');
	
	Route::post('/posts', 'PostController@create');
	Route::get('/posts/{id}', 'PostController@destroy')->name('delete');
	Route::post('/comment', 'CommentController@store')->name('comment');
	Route::get('/comment/{id}', 'CommentController@show');		
			

	Route::get('/users/{user}', 'UserController@index')->name('users');
	Route::get('/users/{user}/follow', 'UserController@follow')->name('users.follow');
	Route::get('/users/{user}/unfollow', 'UserController@unfollow')->name('users.unfollow');
	Route::POST('/search', 'UserController@search')->name('search');
	
});

Route::get('/home', 'HomeController@index')->name('home');
