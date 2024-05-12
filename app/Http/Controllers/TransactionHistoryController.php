<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;


class TransactionHistoryController extends Controller
{
    // bikin buat selectable date nya, jadi bisa di filter by Day, Week, Month, Year
    public function view()
    {
        $orders = Order::all();

        $transactions = [];

        foreach ($orders as $order) {
            $total = $order->orderDetails->sum(function($orderDetail){
                return $orderDetail->menu->price * $orderDetail->quantity;
            });

            $transaction = [
                'id'=> $order->id,
                'customer_name' => $order->customer_name,
                'total' => $total,
                'transaction_date' => $order->created_at
            ];

            $transactions[] = $transaction;
        }

        return $transactions;
    }

    public function viewById($id)
    {
        $order = Order::find($id);

        $total = $order->orderDetails->sum(function ($orderDetail) {
            return $orderDetail->menu->price * $orderDetail->quantity;
        });

        $transaction = [
            'id' => $order->id,
            'customer_name' => $order->customer_name,
            'total' => $total,
            'transaction_date' => $order->created_at
        ];

        return $transaction;

    }
}