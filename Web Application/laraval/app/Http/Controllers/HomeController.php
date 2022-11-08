<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{



    public function index(Request $request)
    {
        return view('dashboards.dashboard');
    }
    public function admindashboard(Request $request)
    {
        return view('dashboards.admindashboard');
    }
    public function restaurantdashboard(Request $request)
    {
        return view('dashboards.restaurantdashboard');
    }

    /*
     * extras
     */
    public function privacypolicy(Request $request)
    {
        return view('extra.privacypolicy');
    }
    public function termsofservice(Request $request)
    {
        return view('extra.termsofservice');
    }

    /*
     * ui elements
     */

    
    public function uihelperclasses()
    {
        return view('uielements.uihelperclasses');
    }


    public function uitabs()
    {
        return view('uielements.uitabs');
    }
    public function uigrid()
    {
        return view('uielements.uigrid');
    }

    public function uicards()
    {
        return view('uielements.uicards');
    }

    public function uimodal()
    {
        return view('uielements.uimodal');
    }

    public function uialerts()
    {
        return view('uielements.uialerts');
    }

    public function uiavatars()
    {
        return view('uielements.uiavatars');
    }

    public function uibadges()
    {
        return view('uielements.uibadges');
    }
    public function uiboxshadow()
    {
        return view('uielements.uiboxshadow');
    }

    

    public function uiimages()
    {
        return view('uielements.uiimages');
    }

    

    public function uibuttons()
    {
        return view('uielements.uibuttons');
    }
    public function uibuttonsgroup()
    {
        return view('uielements.uibuttonsgroup');
    }

    public function uicarousel()
    {
        return view('uielements.uicarousel');
    }

    public function uipopovers()
    {
        return view('uielements.uipopovers');
    }

    public function uitooltips()
    {
        return view('uielements.uitooltips');
    }
    public function uicolor()
    {
        return view('uielements.uicolor');
    }


    

    public function uibreadcrumb()
    {
        return view('uielements.uibreadcrumb');
    }

    public function uilistgroup()
    {
        return view('uielements.uilistgroup');
    }

    public function uipagination()
    {
        return view('uielements.uipagination');
    }

    public function uitypography()
    {
        return view('uielements.uitypography');
    }


    public function uiprogressbars()
    {
        return view('uielements.uiprogressbars');
    }

    
    public function uinotifications()
    {
        return view('uielements.uinotifications');
    }

    public function uiembedvideo()
    {
        return view('uielements.uiembedvideo');
    }

    



    /*
     * Pages Routs
     */
    public function addtocart(Request $request)
    {
        return view('specialpages.addtocart');
    }

    public function customerreview(Request $request)
    {
        return view('specialpages.customerreview');
    }

    public function dishdetail(Request $request)
    {
        return view('specialpages.dishdetail');
    }

    public function menu(Request $request)
    {
        return view('specialpages.menu');
    }

    public function orderdetail(Request $request)
    {
        return view('specialpages.orderdetail');
    }

    public function orderhistory(Request $request)
    {
        return view('specialpages.orderhistory');
    }
    public function restaurantdetail(Request $request)
    {
        return view('specialpages.restaurantdetail');
    }


    /*
     * Widget Routs
     */
    public function widgetbasic(Request $request)
    {
        return view('widget.widgetbasic');
    }
    public function widgetchart(Request $request)
    {
        return view('widget.widgetchart');
    }
    public function widgetcard(Request $request)
    {
        return view('widget.widgetcard');
    }

    /*
     * Maps Routs
     */
    public function google(Request $request)
    {
        return view('maps.google');
    }
    public function vector(Request $request)
    {
        return view('maps.vector');
    }

    /*
     * Auth Routs
     */
    public function signin(Request $request)
    {
        return view('auth.signin');
    }
    public function signup(Request $request)
    {
        return view('auth.signup');
    }
    public function confirmmail(Request $request)
    {
        return view('auth.confirmmail');
    }
    public function recoverpw(Request $request)
    {
        return view('auth.recoverpw');
    }
    public function userprivacysetting(Request $request)
    {
        return view('app.userprivacysetting');
    }

    /*
     * App Page Routs
     */

    public function userprofile(Request $request)
    {
        return view('app.userprofile');
    }

    public function useradd(Request $request)
    {
        return view('app.useradd');
    }

    public function userlist(Request $request)
    {
        return view('app.userlist');
    }
    public function useraccountsetting(Request $request)
    {
        return view('app.useraccountsetting');
    }
    public function userprofilesetting(Request $request)
    {
        return view('app.userprofilesetting');
    }

    /*
     * Error Page Routs
     */

    public function error404(Request $request)
    {
        return view('errors.error404');
    }

    public function error500(Request $request)
    {
        return view('errors.error500');
    }
    public function maintenance(Request $request)
    {
        return view('errors.maintenance');
    }
    
    /*
     * Form Page Routs
     */
    public function formelement(Request $request)
    {
        return view('form.formelement');
    }

    public function formwizard(Request $request)
    {
        return view('form.formwizard');
    }

    public function formvalidation(Request $request)
    {
        return view('form.formvalidation');
    }

     /*
     * Table Page Routs
     */
    public function bootstraptable(Request $request)
    {
        return view('table.bootstraptable');
    }

    public function tabledata(Request $request)
    {
        return view('table.tabledata');
    }

    /*
     * Icons Page Routs
     */

    public function solid(Request $request)
    {
        return view('icons.solid');
    }

    public function outline(Request $request)
    {
        return view('icons.outline');
    }

    public function dualtone(Request $request)
    {
        return view('icons.dualtone');
    }

}
