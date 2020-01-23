<?php
namespace App\Http\Controllers;
use App\Events\PostCreated;
use App\Post;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\File;

class PostController extends Controller {    
    public function index(Request $request, Post $post) {
        $allPosts = $post->whereIn('user_id', 
        $request->user()->following()->pluck('users.id')->push($request->user()->id))->with('user');        
        $posts = $allPosts->orderBy('created_at', 'desc')->take(10)->get();     
           return response()->json([
            'posts' => $posts,
        ]);
    }   
     public function create(Request $request, Post $post) {       
          if($request->get('file'))
        {
           $image = $request->get('file');
        //    dd($image);
           $name = time().'.' . explode('/', explode(':', substr($image, 0, strpos($image, ';')))[1])[1];
           \Image::make($request->get('file'))->save(public_path('images/').$name);
         }         
        
         if($request->get('video')){
            $v = $request->get('video');
            $video = file_get_contents($v);
            $videoPath = time().'.' . explode('/', explode(':', substr($v, 0, strpos($v, ';')))[1])[1];
            Storage::disk('public')->put($videoPath, $video);
            // $dest = 'public/';
            
        }      
        
        $fileupload = new Post;
        $fileupload->user_id=auth()->user()->id;
        if($request->get('file'))
        {
        $fileupload->images=$name;
        }
        if($request->get('video')){
            $fileupload->videos= $videoPath;
        }
        $fileupload->body= $request->bodypost;
        $fileupload->save();
        
        return response()->json($post->with('user')->find($fileupload->id));       
         // return the response
    }

    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        $post->delete();
        return back() ;
    }
}