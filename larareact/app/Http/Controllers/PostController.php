<?php

namespace App\Http\Controllers;

use App\Events\PostCreated;
use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller {

	public function index(Request $request, Post $post) {
		$allPosts = $post->whereIn('user_id', $request->user()->following()->pluck('users.id')->push($request->user()->id))->with('user');

		$posts = $allPosts->orderBy('created_at', 'desc')->take(5)->get();

		return response()->json([
			'posts' => $posts,
		]);
	}

	public function create(Request $request, Post $post) {
		
		if($request->get('file'))
        {
           $image = $request->get('file');
           $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
           \Image::make($request->get('file'))->save(public_path('images/').$name);
		 }        
		 
		 $bodypost = $request->bodypost;

		 
        $fileupload = new Post;
        $fileupload->user_id=auth()->user()->id;
        if($request->get('file'))
        {
        $fileupload->images=$name;
        }
        $fileupload->body= $bodypost;
        $fileupload->save();
        
        return response()->json($post->with('user')->find($fileupload->id));

		
	}
}
