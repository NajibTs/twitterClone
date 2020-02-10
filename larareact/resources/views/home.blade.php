@extends('layouts.app')

@section('content')
<div class="container">

  <div class="">
    <div id="root" style="margin-top:5%"></div>
    
  </div>

  {{-- <div class="col-md-6" style="padding-top:100px;margin-top:-24px;">
    <div class="row">

      <div class="col-md-4">
        <h4 class="text-primary">{{ Auth::user()->username }}</h4>
        <img src="{{ Auth::user()->avatar }}" alt="{{ Auth::user()->username }}" height="40">
      </div>

      <div class="col-md-4">
        @if(Auth::user()->following->count())<h4>Following</h4>
        @foreach($following as $user)
        <span><a href="{{ route('users', $user) }}"
            class="btn btn-sm btn-outline-primary">{{ $user->username }}</a></span>
        @endforeach
        @endif
      </div> --}}

      {{-- <div class="col-md-4">
        @if(Auth::user()->followers->count())<h4>Followers</h4>
        @foreach($followers as $user)
        <span><a style="color:green"  href="{{ route('users', $user) }}"
            class="btn btn-sm">{{ $user->username }}</a></span>
        @endforeach
        @endif
      </div> --}}
    </div>
  </div>

  <br>
  <!-- Button trigger modal -->
  {{-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
    Launch demo modal
  </button>
  
  <!-- Modal -->
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">Open modal for @fat</button>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open modal for @getbootstrap</button>
  
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">New message</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Recipient:</label>
              <input type="text" class="form-control" id="recipient-name">
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label">Message:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Send message</button>
        </div>
      </div>
    </div>
  </div> --}}

</div>
@endsection