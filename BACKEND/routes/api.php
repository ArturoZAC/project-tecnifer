<?php

use App\Http\Controllers\BannerController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

//Routes - Users
Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);
Route::get('/users/{id}', [UserController::class, 'show']);
Route::post('/users-delete/{id}', [UserController::class, 'destroy']);
Route::post('/users-update/{id}', [UserController::class, 'update']);
Route::post('/login', [UserController::class, 'login']);

//Routes - Services
Route::get('/services', [ServiceController::class, 'index']);
Route::get('/services/{id}', [ServiceController::class, 'show']);

//Routes - Products
Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/{id}', [ProductController::class, 'show']);
Route::post('/products', [ProductController::class, 'store']);
Route::post('/products-update/{id}', [ProductController::class, 'update']);
Route::post('/products-delete/{id}', [ProductController::class, 'destroy']);

//Routes - Banners
Route::get('/banners', [BannerController::class, 'index']);
Route::get('/banners/{id}', [BannerController::class, 'show']);
Route::post('/banners', [BannerController::class, 'store']);
Route::post('/banners-update/{id}', [BannerController::class, 'update']);
Route::post('/banners-delete/{id}', [BannerController::class, 'destroy']);

Route::group(['middleware' => ['jwt.auth']], function () {
  Route::get('/renew-token', [UserController::class, 'renewToken']);
  Route::post('/services', [ServiceController::class, 'store']);
  Route::post('/services-update/{id}', [ServiceController::class, 'update']);
  Route::post('/services-delete/{id}', [ServiceController::class, 'destroy']);
});

Route::post('/enviar-contacto', [MailController::class, 'enviarContacto']);