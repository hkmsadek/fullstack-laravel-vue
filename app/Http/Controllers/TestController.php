<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Validator;

class TestController extends Controller
{
    public function controllerMethod(){

        return response()->json([
            'msg' => 'We should return only json'
        ]);
       
    }
    public function test(){
        return response()->json([
            'msg' => 'some error occured'
        ], 422);
    }
    
}
