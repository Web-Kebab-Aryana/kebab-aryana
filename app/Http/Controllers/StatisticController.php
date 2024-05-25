<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Order;
use App\Models\Menu;


class StatisticController extends Controller
{
    // ini buat statistik di dashboard


    public function index()
    {

        // history
        $orders = Order::all()->sortByDesc('created_at')->take(5);

        $transactions = [];
        foreach ($orders as $order) {
            $total = $order->orderDetails->sum(function ($orderDetail) {
                return $orderDetail->menu->price * $orderDetail->quantity;
            });

            $transaction = [
                'id' => $order->id,
                'customer_name' => $order->customer_name,
                'total' => $total,
                'transaction_date' => $order->created_at
            ];

            $transactions[] = $transaction;
        }

        // cards: [revenue bulanan, revenue harian, total menu];
        $revenueBulanan = Order::whereMonth('created_at', date('m'))->get()->reduce(function ($carry, $order) {
            return $carry + $order->orderDetails->sum(function ($orderDetail) {
                return $orderDetail->menu->price * $orderDetail->quantity;
            });
        }, 0);

        $revenueHarian = Order::whereDate('created_at', date('Y-m-d'))->get()->reduce(function ($carry, $order) {
            return $carry + $order->orderDetails->sum(function ($orderDetail) {
                return $orderDetail->menu->price * $orderDetail->quantity;
            });
        }, 0);
        $totalMenu = Menu::count();

        // bar plot: [total order harian, total order bulanan, total menu terjual perhari]
        $totalOrderBulanan = Order::whereMonth('created_at', date('m'))->count();
        $totalOrderHarian = Order::whereDate('created_at', date('Y-m-d'))->count();
        $totalMenuTerjualPerHari = Order::whereDate('created_at', date('Y-m-d'))->get()->reduce(function ($carry, $order) {
            return $carry + $order->orderDetails->sum('quantity');
        }, 0);

        return Inertia::render('CMS/Dashboard', [
            'transactions' => $transactions,
            'cards' => [
                'revenueBulanan' => $revenueBulanan,
                'revenueHarian' => $revenueHarian,
                'totalMenu' => $totalMenu
            ],
            'barPlot' => [
                'totalOrderBulanan' => $totalOrderBulanan,
                'totalOrderHarian' => $totalOrderHarian,
                'totalMenuTerjualPerHari' => $totalMenuTerjualPerHari
            ]
        ]);
    }

}