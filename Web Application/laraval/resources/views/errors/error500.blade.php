<x-guest-layout>
<div class="d-flex align-items-center justify-content-center vh-100">
    <div class="container text-center mt-5">
    <img src="{{asset('images/error/03.png')}}" class="img-fluid w-25" alt="">
    <img src="{{asset('images/error/06.png')}}" class="img-fluid w-25" alt="">
    <img src="{{asset('images/error/04.png')}}" class="img-fluid cookie-1" alt="">
    <h2 class="mb-0 mt-4">Internal Server Error</h2>
    <p class="mt-2">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. </p>
    <div class="d-flex justify-content-center">
        <a href="{{route('dashboard')}}" class="btn btn-primary rounded">Back to Home</a>
    </div>
</div>
<div class="box">
    <div class="c xl-circle">
        <div class="c lg-circle">
            <div class="c md-circle">
                <div class="c sm-circle">
                    <div class="c xs-circle">                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</x-guest-layout>