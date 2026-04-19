<?php

//use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

use App\Http\Controllers\HomeController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\EventController as AdminEventController;
use App\Http\Controllers\Admin\CategoryController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/tentang', function () {
    return '<h1>Ini Adalah Halaman Tentang Aplikasi Event Hub</h1>';
});
Route::get('/kontak', function () {
    return view('contact');
});
Route::get('/profil', function () {
    return view('profile');
});
Route::get('/katalog', function () {
    return view('catalog');
});
Route::get('/bantuan', function () {
    return view('help');
});


// RUTE USER
// detail event
Route::get('/event/{id}', [EventController::class, 'show']);
// checkout
Route::get('/checkout', [EventController::class, 'checkout']);
// ticket
Route::get('/ticket', [EventController::class, 'ticket']);

// RUTE ADMIN
// Route::get('/admin', [DashboardController::class, 'index']);
// Route::get('/admin/events', [AdminEventController::class, 'index']);
// Route::get('/admin/transactions', function () {
//     return view('admin.transactions');
// });

Route::group([
    'prefix' => 'admin',
    'as' => 'admin.'
], function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/events', [AdminEventController::class, 'index'])->name('events.index');
    Route::get('/transactions', function () {
        return view('admin.transactions');
        })->name('transactions');
    Route::get('/categories', [CategoryController::class, 'index'])->name('categories.index');
});