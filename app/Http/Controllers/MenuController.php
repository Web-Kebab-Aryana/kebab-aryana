<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Menu;


class MenuController extends Controller
{
    // ini buat tambah, edit, hapus menu di edit page
    public function store(Request $request)
    {
        $request->validate([
            'category' => 'required|min:3|max:255',
            'name' => 'required|min:3|max:255',
            'description' => 'required|min:3|max:1024',
            'price' => 'required|int|min:1000|max:1000000000',
            'image' => 'required|image|mimes:jpeg,png,jpg,svg|max:2048'
        ]);

        $menu = new Menu();
        $menu->category = $request->category;
        $menu->name = $request->name;
        $menu->description = $request->description;
        $menu->price = $request->price;
        $menu->image = $request->file('image')->store('menus', 'public');
        $menu->save();
        return response()->json([
            'message' => 'Menu created',
            'menu' => $menu,
        ]);
    }

    public function update(Request $request, $id)
    {
        $menu = Menu::find($id);
        if (!$menu) {
            return response()->json([
                'message' => 'Menu not found',
            ], 404);
        }

        $request->validate([
            'category' => 'min:3|max:255',
            'name' => 'min:3|max:255',
            'description' => 'min:3|max:1024',
            'price' => 'int|min:1000|max:1000000000',
            'image' => 'image|mimes:jpeg,png,jpg,svg|max:2048'
        ]);

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('menus', 'public');
            $menu->image = $imagePath;
        }

        $menu->update($request->only(['category', 'name', 'description', 'price']));

        $menu->save();

        return response()->json([
            'message' => 'Menu updated',
            'menu' => $menu,
        ]);
    }

    public function destroy($id)
    {
        $menu = Menu::find($id);

        if (!$menu) {
            return response()->json([
                'message' => 'Menu not found',
            ], 404);
        }

        $menu->delete();

        return response()->json([
            'message' => 'Menu deleted',
        ]);
    }
}