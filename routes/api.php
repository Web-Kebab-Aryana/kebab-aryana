<?php

use App\Http\Controllers\OrderController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\TransactionHistoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// private route, butuh auth
Route::middleware('auth:sanctum')->group(function () {

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
});
