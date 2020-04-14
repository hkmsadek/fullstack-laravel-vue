<?php

use Illuminate\Support\Facades\Route;

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



Route::post('app/create_tag', 'AdminController@addTag');
Route::get('app/get_tags', 'AdminController@getTag');
Route::post('app/edit_tag', 'AdminController@editTag');
Route::post('app/delete_tag', 'AdminController@deleteTag');
Route::post('app/upload', 'AdminController@upload');
Route::post('app/delete_image', 'AdminController@deleteImage');

Route::get('/', function(){
    return view('welcome');
});
Route::any('{slug}', function(){
    return view('welcome');
});