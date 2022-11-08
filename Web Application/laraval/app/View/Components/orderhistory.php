<?php

namespace App\View\Components;

use Illuminate\View\Component;

class orderhistory extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public $id="",$orderId="",$name="",$dateTime="",$orderUser="",$orderImage1="",$orderTitle1="",$orderText1="",$orderTitle2="",$orderTitle3="",$orderImage2="",$orderTitle4="",$orderText2="",$orderTitle5="",$orderTitle6="",$orderText3="",$orderTitle7="";
    public function __construct($id,$orderId,$name,$dateTime,$orderUser,$orderImage1,$orderTitle1,$orderText1,$orderTitle2,$orderTitle3,$orderImage2,$orderTitle4,$orderText2,$orderTitle5,$orderTitle6,$orderText3,$orderTitle7)
    {
        //
        $this->$id = $id;
        $this->$orderId = $orderId;
        $this->$name = $name;
        $this->$dateTime = $dateTime;
        $this->$orderUser = $orderUser;
        $this->$orderImage1 = $orderImage1;
        $this->$orderText1 = $orderText1;
        $this->$orderTitle1 = $orderTitle1;
        $this->$orderTitle2 = $orderTitle2;
        $this->$orderTitle3 = $orderTitle3;
        $this->$orderTitle4 = $orderTitle4;
        $this->$orderImage2 = $orderImage2;
        $this->$orderText2 = $orderText2;
        $this->$orderText3 = $orderText3;
        $this->$orderTitle5 = $orderTitle5;
        $this->$orderTitle6 = $orderTitle6;
        $this->$orderTitle7 = $orderTitle7;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view('components.orderhistory');
    }
}
