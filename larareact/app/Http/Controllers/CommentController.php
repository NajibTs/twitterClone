<?php

namespace App\Http\Controllers;
use App\Comment;
use App\Post;
use Illuminate\Http\Request;
use Auth;class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request,Comment $Comments) {  


      } 
       /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Comment $Comment)
    {
    $addcomment = new Comment;
    $addcomment->user_id = auth()->user()->id;
$addcomment->username = auth()->user()->username;
    $addcomment->post_id = $request->post_id;
    //rand(1,20) ;
    $addcomment->comments = $request->comments;
    $addcomment->save();
    return response()->json($Comment->with('user')->find($addcomment->id));
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $id)
    {
        // $id = $request->user()->posts()->id;
        // dd($id);
       $post = Post::find($id);
    //    dd($post);
        $allcomment = $post->comments;
        // dd($allcomment);
        $Comments = $allcomment;
        
        return response()->json([
        'comments' => $Comments,
        ]);
    }    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function edit(Comment $comment)
    {
        //
    }    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        //
    }
}


