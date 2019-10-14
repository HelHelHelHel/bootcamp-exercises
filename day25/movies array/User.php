<?php
class User {
    //no executable code here- miust be in methods
    public $id = null;
    public $name = null;
    public $password = null;
    public $no_of_posts = null;

    public function dumpMe()
    {
        var_dump($this);
    }
}

