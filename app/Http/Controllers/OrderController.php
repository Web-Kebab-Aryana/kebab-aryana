<?php

namespace App\Http\Controllers;

use App\Models\OrderDetail;
use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{

    // !notes: buat frontend ini contoh buat ambil order dengan id
    public function view($id)
    {

        $order = Order::find($id)->with('orderDetails.menu')->first();
        return $order;
    }

    public function store(Request $request)
    {
        // validation
        $request->validate([
            'customer_name' => 'required|min:3|max:255',
            'menus' => 'required|array',
            'menus.*.menu_id' => 'required|exists:menus,id',
            'menus.*.quantity' => 'required|integer|min:1',
            'menus.*.notes' => 'nullable|string|max:255',
        ]);

        // bikin order
        $order = Order::create([
            'customer_name' => $request->customer_name,
        ]);

        // masukin order detail
        $order->orderDetails()->createMany($request->menus);

        return response()->json([
            'message' => 'Order created',
            'order' => $order,
        ]);
    }

    public function destroy($id)
    {
        $order = Order::find($id);

        if (!$order) {
            return response()->json([
                'message' => 'Order not found',
            ], 404);
        }

        $order->delete();

        return response()->json([
            'message' => 'Order deleted',
        ]);
    }
}