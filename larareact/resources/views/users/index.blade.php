@extends('layouts.app')

@section('content')
<div class="container">
    <div class="twPc-div">
        <a class="twPc-bg twPc-block"></a>
    
        <div>
            <div class="twPc-button">
                @if (Auth::user()->isNotTheUser($user))
                    @if (Auth::user()->isFollowing($user))
                        <a href="{{ route('users.unfollow', $user) }}" 
                        class="twitter-follow-button btn btn-primary" data-show-count="false" 
                        data-size="large" data-show-screen-name="false" data-dnt="true">UnFollow </a>
                    @else
                        <a href="{{ route('users.follow', $user) }}" 
                        class="twitter-follow-button btn btn-success" data-show-count="false" 
                        data-size="large" data-show-screen-name="false" data-dnt="true">Follow </a>
                    @endif
                @endif
            </div>
            <a title={{$user->username}} href="https://twitter.com/mertskaplan" class="twPc-avatarLink">
                <img alt={{$user->username}} src="https://mertskaplan.com/wp-content/plugins/msk-twprofilecard/img/mertskaplan.jpg" class="twPc-avatarImg">
            </a>
    
            <div class="twPc-divUser">
                <div class="twPc-divName">
                    <h2>{{ $user->username }}</h2>
                </div>
                <span>
                    <a href="{{ route('users', $user) }}">@<span>{{ $user->username }}</span></a>
                </span>
            </div>
    
            <div class="twPc-divStats">
                <ul class="twPc-Arrange">
                    <li class="twPc-ArrangeSizeFit">
                        <a href="#" 
                        @if ($user->posts->count())
                            data-toggle="modal" data-target="#twittmodal" 
                        @endif
                        title="{{$user->posts->count()}} Tweet">
                            <span class="twPc-StatLabel twPc-block">Tweets</span>
                            <span class="twPc-StatValue">{{$user->posts->count()}}</span>
                        </a>
                    </li>
                    <li class="twPc-ArrangeSizeFit">
                        <a href="#" 
                        @if ($user->following->count())
                            data-toggle="modal" data-target="#followingModal"
                        @endif 
                        title="{{$user->following->count()}} Following">
                            <span class="twPc-StatLabel twPc-block">folloing</span>
                            <span class="twPc-StatValue">{{$user->following->count()}}</span>
                        </a>
                    </li>
                    <li class="twPc-ArrangeSizeFit">
                        <a href="#" 
                        @if ($user->followers->count())
                        data-toggle="modal" data-target="#followerModal" 
                        @endif
                        title="{{$user->followers->count()}} Followers">
                            <span class="twPc-StatLabel twPc-block">Followers</span>
                            <span class="twPc-StatValue">{{$user->followers->count()}}</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
      
      <!-- Modal -->
      <div class="modal fade" id="followingModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                @foreach($user->following as $folloing)
                    <span><a href="{{ route('users', $user) }}" class="btn btn-sm btn-outline-primary">{{ $folloing->username }}</a></span>
                @endforeach
            </div>
           
          </div>
        </div>
      </div>


      <div class="modal fade" id="followerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable " role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                @foreach($user->followers as $followers)
                    <span><a href="{{ route('users', $user) }}" class="btn btn-sm btn-outline-success">{{ $followers->username }}</a></span>
                @endforeach
            </div>
           
          </div>
        </div>
      </div>


      <div class="modal fade" id="twittmodal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
                    @foreach($user->posts as $post)
                        <div class="media">
                            <div class="media-left">
                                <img src={{$post->user->avatar}} class="media-object mr-2" />
                            </div>
                            <div class="media-body">
                                <div class="user">
                                    <a href="{{ route('users', $user) }}">
                                        <b>{{$post->user->username}}</b>
                                    </a>{{' '}}
                                    - {{$post->humanCreatedAt}}
                                </div>
                                <p>{{$post->body}}</p>
                            </div>
                        </div>
                    @endforeach
            </div>
          </div>
        </div>
      </div>
</div>
@endsection