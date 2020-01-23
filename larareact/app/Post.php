<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model {
	use SoftDeletes;
	protected $fillable = ['body'];
	protected $appends = ['humanCreatedAt'];

	public function user() {
		return $this->belongsTo(User::class);
	}
	public function comments() {
		return $this->hasMany(Comment::class);
	}

	public function getHumanCreatedAtAttribute() {
		return $this->created_at->diffForHumans();
	}
}
