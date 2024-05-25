<?php

use App\Http\Controllers\ContentController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\OrderController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\TransactionHistoryController;
use App\Http\Controllers\StatisticController;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::middleware(['auth', 'isVerified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    // page CMS
    Route::prefix('cms')->group(function () {
        Route::get('/', [StatisticController::class, 'index']);

        Route::get('/history', [TransactionHistoryController::class, 'view']);

        Route::get("/edit", [ContentController::class, 'index']);

        Route::get("/order", [OrderController::class, 'index']);
    });

    // page Client

    // api route, butuh auth
    Route::prefix('api')->group(function () {

        // Order routes - /api/orders
        Route::prefix('orders')->group(function () {
            Route::post('/', [OrderController::class, 'store'])->name('orders.store');
            Route::delete('/{id}', [OrderController::class, 'destroy'])->name('orders.destroy');
        });

        Route::prefix('menus')->group(function () {
            Route::post('/', [MenuController::class, 'store'])->name('menus.store');
            Route::put('/{id}', [MenuController::class, 'update'])->name('menus.update');
            Route::delete('/{id}', [MenuController::class, 'destroy'])->name('menus.destroy');
        });

        Route::prefix('transaction')->group(function () {
            Route::get('/', [TransactionHistoryController::class, 'view'])->name('transaction.view');
            Route::get('/{id}', [TransactionHistoryController::class, 'viewById'])->name('transaction.viewById');
            Route::delete('/{id}', [TransactionHistoryController::class, 'destroy'])->name('transaction.destroy');
        });


        Route::prefix('content')->group(function () {
            Route::put('/', [ContentController::class, 'edit'])->name('content.edit');
        });
    });

});

require __DIR__ . '/auth.php';