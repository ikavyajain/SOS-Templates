<?php

namespace App\View\Components;

use Illuminate\View\Component;

class trendingorders extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public $trendingImage="",$active="",$trendingDay="",$trendingTitle="",$trendingCalories="",$trendingPersons="",$trendingPrice="";
    public function __construct($trendingImage,$active,$trendingDay,$trendingTitle,$trendingCalories,$trendingPersons,$trendingPrice)
    {
        //
        $this->$trendingImage=$trendingImage;
        $this->$active=$active;
        $this->$trendingDay=$trendingDay;
        $this->$trendingTitle=$trendingTitle;
        $this->$trendingCalories=$trendingCalories;
        $this->$trendingPersons=$trendingPersons;
        $this->$trendingPrice=$trendingPrice;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.trendingorders');
    }
}
