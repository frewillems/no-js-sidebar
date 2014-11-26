<?php

class HomeController extends BaseController {

	protected $layout = 'master';
	
	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function showWelcome()
	{
		return View::make('hello');
	}
	
	public function index() {
		
		//print (Input::has('nojs') ? 1 : 0);
		//exit;
		
		return View::make('master', [
			
			'hasJavascript' => (Input::has('nojs') ? 0 : 1),
			'noJavascriptMeta' => '<meta http-equiv="refresh" content="0;url=' . Request::url() . '?nojs=true">'
		
		]);
	}

}
