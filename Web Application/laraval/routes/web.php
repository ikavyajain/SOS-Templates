<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

require __DIR__.'/auth.php';

Route::get('/', function () {
    return view('dashboards.dashboard');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

// Dashboard Routes
  Route::get('/dashboard', [HomeController::class, 'index'])->name('dashboard');
  Route::get('admindashboard', [HomeController::class, 'admindashboard'])->name('admindashboard');
  Route::get('restaurantdashboard', [HomeController::class, 'restaurantdashboard'])->name('restaurantdashboard');

  //App Details Page => 'special-pages'], function() {
  Route::group(['prefix' => 'specialpages'], function() {
    //Example Page Routs
    Route::get('dishdetail', [HomeController::class, 'dishdetail'])->name('specialpages.dishdetail');
    Route::get('addtocart', [HomeController::class, 'addtocart'])->name('specialpages.addtocart');
    Route::get('customerreview', [HomeController::class, 'customerreview'])->name('specialpages.customerreview');
    Route::get('menu', [HomeController::class, 'menu'])->name('specialpages.menu');
    Route::get('orderdetail', [HomeController::class, 'orderdetail'])->name('specialpages.orderdetail');
    Route::get('orderhistory', [HomeController::class, 'orderhistory'])->name('specialpages.orderhistory');
    Route::get('restaurantdetail', [HomeController::class, 'restaurantdetail'])->name('specialpages.restaurantdetail');
  });


  //Auth pages Routs
  Route::group(['prefix' => 'auth'], function() {
    Route::get('signin', [HomeController::class, 'signin'])->name('auth.signin');
    Route::get('signup', [HomeController::class, 'signup'])->name('auth.signup');
    Route::get('confirmmail', [HomeController::class, 'confirmmail'])->name('auth.confirmmail');
    Route::get('recoverpw', [HomeController::class, 'recoverpw'])->name('auth.recoverpw');
  
  });
  
  //User pages Routs
  Route::group(['prefix' => 'app'], function() {
    Route::get('userprofile', [HomeController::class, 'userprofile'])->name('app.userprofile');
    Route::get('useradd', [HomeController::class, 'useradd'])->name('app.useradd');
    Route::get('userlist', [HomeController::class, 'userlist'])->name('app.userlist');
    Route::get('useracccountsetting', [HomeController::class, 'useracccountsetting'])->name('app.useracccountsetting');
    Route::get('userprivacysetting', [HomeController::class, 'userprivacysetting'])->name('app.userprivacysetting');

  });

  //Error Page Route
  Route::group(['prefix' => 'errors'], function() {
    Route::get('error404', [HomeController::class, 'error404'])->name('errors.error404');
    Route::get('error500', [HomeController::class, 'error500'])->name('errors.error500');
    Route::get('maintenance', [HomeController::class, 'maintenance'])->name('errors.maintenance');
  });

  //widget page Route
  Route::group(['prefix' => 'widget'], function() {
    Route::get('widgetbasic', [HomeController::class, 'widgetbasic'])->name('widget.widgetbasic');
    Route::get('widgetcard', [HomeController::class, 'widgetcard'])->name('widget.widgetcard');
    Route::get('widgetchart', [HomeController::class, 'widgetchart'])->name('widget.widgetchart');
  });
//map page Route
Route::group(['prefix' => 'maps'], function() {
  Route::get('google', [HomeController::class, 'google'])->name('maps.google');
  Route::get('vector', [HomeController::class, 'vector'])->name('maps.vector');
});
Route::group(['prefix' => 'extra'], function() {
  Route::get('privacypolicy', [HomeController::class, 'privacypolicy'])->name('extra.privacypolicy');
  Route::get('termsofservice', [HomeController::class, 'termsofservice'])->name('extra.termsofservice');
});





//Forms Pages Routs
  Route::group(['prefix' => 'form'], function() {
    Route::get('formelement', [HomeController::class, 'formelement'])->name('form.formelement');
    Route::get('formwizard', [HomeController::class, 'formwizard'])->name('form.formwizard');
    Route::get('formvalidation', [HomeController::class, 'formvalidation'])->name('form.formvalidation');
  });


//Table Page Routs
  Route::group(['prefix' => 'table'], function() {
   Route::get('bootstraptable', [HomeController::class, 'bootstraptable'])->name('table.bootstraptable');
   Route::get('tabledata', [HomeController::class, 'tabledata'])->name('table.tabledata');
  });

  //Icons Page Routs
  Route::group(['prefix' => 'icons'], function() {
    Route::get('solid', [HomeController::class, 'solid'])->name('icons.solid');
    Route::get('outline', [HomeController::class, 'outline'])->name('icons.outline');
    Route::get('dualtone', [HomeController::class, 'dualtone'])->name('icons.dualtone');
  });
    
//Extra Page Routs
  Route::get('PrivacyPolicy', [HomeController::class, 'PrivacyPolicy'])->name('PrivacyPolicy');
  Route::get('TermsofUse', [HomeController::class, 'TermsofUse'])->name('TermsofUse');

//uielements-nav 
Route::group(['prefix' => 'uielements'], function() {
    Route::get('uitypography', [HomeController::class, 'uitypography'])->name('uielements.uitypography');
    Route::get('uialerts', [HomeController::class, 'uialerts'])->name('uielements.uialerts');
    Route::get('uiavatars', [HomeController::class, 'uiavatars'])->name('uielements.uiavatars');
    Route::get('uicolor', [HomeController::class, 'uicolor'])->name('uielements.uicolor');
    Route::get('uibadges', [HomeController::class, 'uibadges'])->name('uielements.uibadges');
    Route::get('uiboxshadow', [HomeController::class, 'uiboxshadow'])->name('uielements.uiboxshadow');
    Route::get('uibreadcrumb', [HomeController::class, 'uibreadcrumb'])->name('uielements.uibreadcrumb');
    Route::get('uibuttons', [HomeController::class, 'uibuttons'])->name('uielements.uibuttons');
    Route::get('uibuttonsgroup', [HomeController::class, 'uibuttonsgroup'])->name('uielements.uibuttonsgroup');
    Route::get('uicards', [HomeController::class, 'uicards'])->name('uielements.uicards');
    Route::get('uicarousel', [HomeController::class, 'uicarousel'])->name('uielements.uicarousel');
    Route::get('uigrid', [HomeController::class, 'uigrid'])->name('uielements.uigrid');
    Route::get('uihelperclasses', [HomeController::class, 'uihelperclasses'])->name('uielements.uihelperclasses');
    Route::get('uiembedvideo', [HomeController::class, 'uiembedvideo'])->name('uielements.uiembedvideo');
    Route::get('uiimages', [HomeController::class, 'uiimages'])->name('uielements.uiimages');
    Route::get('uilistgroup', [HomeController::class, 'uilistgroup'])->name('uielements.uilistgroup');
    Route::get('uimodal', [HomeController::class, 'uimodal'])->name('uielements.uimodal');
    Route::get('uinotifications', [HomeController::class, 'uinotifications'])->name('uielements.uinotifications');
    Route::get('uipagination', [HomeController::class, 'uipagination'])->name('uielements.uipagination');
    Route::get('uipopovers', [HomeController::class, 'uipopovers'])->name('uielements.uipopovers');
    Route::get('uiprogressbars', [HomeController::class, 'uiprogressbars'])->name('uielements.uiprogressbars');
    Route::get('uitabs', [HomeController::class, 'uitabs'])->name('uielements.uitabs');
    Route::get('uitooltips', [HomeController::class, 'uitooltips'])->name('uielements.uitooltips');
});