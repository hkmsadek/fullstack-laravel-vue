<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function controllerMethod(){

        return response()->json([
            'msg' => 'We should return only json'
        ]);
       
    }
}
