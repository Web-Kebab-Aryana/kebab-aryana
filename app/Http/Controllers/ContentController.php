<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Content;


class ContentController extends Controller
{
    // ini buat edit cms di dashboard edit page

    public function edit(Request $request)
    {

        $request->validate([
            'aboutus' => 'min:3|max:1024',
            'whatsapp_number' => 'min:3|max:255|regex:/^([0-9\s\-\+\(\)]*)$/',
            'location' => 'min:3|max:255',
            'coordinate' => 'min:3|max:255',
        ]);

        $content = Content::find(1);
        if (!$content) {
            return response()->json([
                'message' => 'Content not found. Please seed the database.',
            ], 404);
        }

        $content->update($request->only(['aboutus', 'whatsapp_number', 'location', 'coordinate']));
        $content->save();

        return response()->json([
            'message' => 'Content updated',
            'content' => $content,
        ]);
    }

}