<?php

namespace App\Http\Controllers;

use App\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{

public function postBlog(Request $request)
{
    $blog = new Blog();
    $blog->content = $request->input('content');
    $blog->save();
    return response()->json(['blog' => $blog], 201);
}

public function getBlog()
{
    $blog = Blog::all();
    $response = [
      'blogs' => $blog
    ];
    return response()->json($response, 200);
}

public function putBlog(Request $request, $id)
{
    $blog = Blog::find($id);
    if (!$blog) {
        return response()->json(['message' => 'Document not found'], 404);
    }
    $blog->content = $request->input('content');
    $blog->save();
    return response()->json(['blog' => $blog], 200);
}

public function deleteBlog($id)
{
    $blog = Quote::find($id);
    $blog->delete();
    return response()->json(['message' => 'Blog deleted'], 200);
}
}
