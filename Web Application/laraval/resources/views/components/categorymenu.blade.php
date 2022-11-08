
@props(['active','categoryImage','categoryTitle','oldPrice','categoryPrice','rating'])

<div>
<div class="card card-white dish-card profile-img mb-0 {{$active ?? ''}}">
    <div class="profile-img21">
        <img src="{{asset('images/layouts/')}}/{{$categoryImage}}" class="img-fluid rounded-pill avatar-170 blur-shadow position-bottom"
            alt="profile-image">
        <img src="{{asset('images/layouts/')}}/{{$categoryImage}}" class="img-fluid rounded-pill avatar-170  hover-image" alt="profile-image"
        data-iq-gsap="onStart"
        data-iq-opacity="0"
        data-iq-scale=".6"
        data-iq-rotate="180"
        data-iq-duration="1"
        data-iq-delay=".6"
        data-iq-trigger="scroll"
        data-iq-ease="none">
    </div>
    <div class="card-body menu-image">
      <h6 class="heading-title fw-bolder mt-4 mb-0">{{$categoryTitle}}</h6>
        <div class="card-rating stars-ratings">
         @for ($i = 1; $i <= 5; $i++)
            @if($rating>= $i)
                <x-ratingstars :fill=1/>
            @else
                <x-ratingstars :fill=0/>
            @endif
            @endfor
        </div>
        <div class="d-flex justify-content-between mt-3">
            <div class="d-flex align-items-center">
                <span class="text-primary fw-bolder me-2">{{$oldPrice}}</span>
                <small class="text-decoration-line-through">{{$categoryPrice ?? ''}}</small>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect class="circle-1" width="24" height="24" rx="12" fill="currentColor"/>
                <rect class="circle-2" x="11.168" y="7" width="1.66667" height="10" rx="0.833333" fill="currentColor"/>
                <rect class="circle-3" x="7" y="12.834" width="1.66666" height="10" rx="0.833332" transform="rotate(-90 7 12.834)" fill="currentColor"/>
            </svg>
        </div>
    </div>
</div>
</div>