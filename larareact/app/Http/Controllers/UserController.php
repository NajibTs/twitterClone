<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller {
	public function index(User $user) {
		return view('users.index', compact('user'));
	}

	public function follow(Request $request, User $user) {
		if ($request->user()->canFollow($user)) {
			$request->user()->following()->attach($user->id);
		}
		return redirect()->back();
	}

	public function unfollow(Request $request, User $user) {
		if ($request->user()->canUnFollow($user)) {
			$request->user()->following()->detach($user->id);
		}
		return redirect()->back();
	}
	public function search(Request $request) {
		$search = $request->searches;
		// dd($search);
		if ($search==null || $search=='') {
			return back();
		} else {
			$users = USER::where('username','LIKE',"%$search%")
			->orderBy("id","desc")->get();
			// dd($users);
			$countResult = $users->count();
			$retVal = ($countResult > 0 ) ? 
			[
				"success"=>true,
				"users"=>$users,
				"count"=>$countResult
			] : 
			[
				"success"=>false,
				"noResult"=>"Sorry, No Result"
			] ;
			return response()->json($retVal);
		}
		



	}
}
