<?php

namespace App\View\Components;

use Illuminate\View\Component;

class categorymenu extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public $active="",$categoryTitle="",$categoryImage="",$oldPrice="",$categoryPrice="",$rating="";
    public function __construct($rakesh,$active,$categoryTitle,$categoryImage,$oldPrice,$categoryPrice,$rating)
    {
        //
        $this->$active=$active;
        $this->$categoryTitle=$categoryTitle;
        $this->$categoryImage=$categoryImage;
        $this->$oldPrice=$oldPrice;
        $this->$categoryPrice=$categoryPrice;
        $this->$rating=$rating;


    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.categorymenu');
    }
}
