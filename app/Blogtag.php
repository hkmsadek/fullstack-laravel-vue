<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blogtag extends Model
{
    protected $fillable = ['tag_id', 'blog_id'];
    
}
