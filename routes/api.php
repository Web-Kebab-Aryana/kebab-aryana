<?php

use App\Http\Controllers\OrderController;
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

});