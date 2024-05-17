<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = ['category', 'name', 'description', 'price', 'image'];
    public function orders()
    {
        return $this->belongsToMany(OrderDetail::class, 'order_id', 'menu_id',);
    }
}