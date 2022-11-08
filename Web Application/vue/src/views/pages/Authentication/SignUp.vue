<template>
    <section class="container-fluid bg-circle-login">
         <div class="row align-items-center">
            <div class="col-md-12 col-lg-7 col-xl-4">
               <div class="d-flex justify-content-center mb-0">
                  <div class="card-body mt-5">
                     <router-link :to="{name: 'default.dashboard'}">
                        <img src="@/assets/images/favicon.png" class="img-fluid logo-img" alt="img5">
                     </router-link>
                     <h2 class="mb-2 text-center">Sign Up</h2>
                     <p class="text-center">Create your {{appName}} account.</p>
                     <form>
                        <div class="row">
                           <div class="col-lg-6">
                              <div class="form-group">
                                 <label for="full-name" class="form-label">Full Name</label>
                                 <input type="text" class="form-control form-control-sm" id="full-name" placeholder=" ">
                              </div>
                           </div>
                           <div class="col-lg-6">
                              <div class="form-group">
                                 <label for="last-name" class="form-label">Last Name</label>
                                 <input type="text" class="form-control form-control-sm" id="last-name" placeholder=" ">
                              </div>
                           </div>
                           <div class="col-lg-6">
                              <div class="form-group">
                                 <label for="email" class="form-label">Email</label>
                                 <input type="email" class="form-control form-control-sm" id="email" placeholder=" ">
                              </div>
                           </div>
                           <div class="col-lg-6">
                              <div class="form-group">
                                 <label for="phone" class="form-label">Phone No.</label>
                                 <input type="text" class="form-control form-control-sm" id="phone" placeholder=" ">
                              </div>
                           </div>
                           <div class="col-lg-6">
                              <div class="form-group">
                                 <label for="password" class="form-label">Password</label>
                                 <input type="password" class="form-control form-control-sm" id="password" placeholder=" ">
                              </div>
                           </div>
                           <div class="col-lg-6">
                              <div class="form-group">
                                 <label for="confirm-password" class="form-label">Confirm Password</label>
                                 <input type="text" class="form-control form-control-sm" id="confirm-password" placeholder=" ">
                              </div>
                           </div>
                           <div class="col-lg-12 d-flex justify-content-center">
                              <div class="form-check mb-3">
                                 <input type="checkbox" class="form-check-input" id="customCheck1">
                                 <label class="form-check-label" for="customCheck1">I agree with the terms of use</label>
                              </div>
                           </div>
                        </div>
                        <div class="d-flex justify-content-center">
                           <button type="submit" class="btn btn-primary">Sign Up</button>
                        </div>
                        <p class="text-center my-3">or sign in with other accounts?</p>
                        <div class="d-flex justify-content-center">
                           <ul class="list-group list-group-horizontal list-group-flush">
                              <li class="list-group-item border-0 pb-0">
                                 <a href="#"><img src="@/assets/images/brands/gm.svg" alt="gm"></a>
                              </li>
                              <li class="list-group-item border-0 pb-0">
                                 <a href="#"><img src="@/assets/images/brands/fb.svg" alt="fb"></a>
                              </li>
                              <li class="list-group-item border-0 pb-0">
                                 <a href="#"><img src="@/assets/images/brands/im.svg" alt="im"></a>
                              </li>
                              <li class="list-group-item border-0 pb-0">
                                 <a href="#"><img src="@/assets/images/brands/li.svg" alt="li"></a>
                              </li>
                           </ul>
                        </div>
                        <p class="mt-3 text-center">
                           Already have an Account <router-link :to="{name: 'auth.signin'}" class="text-underline">Sign In</router-link>
                        </p>
                     </form>
                  </div>
               </div>
            </div>
            <div class="col-md-12 col-lg-5 col-xl-8 d-lg-block d-none vh-100 overflow-hidden">
               <img src="@/assets/images/auth/09.png" class="img-fluid sign-in-img" alt="images">
            </div>
         </div>
      </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SignUp',
  computed: {
    ...mapGetters({
      appName: 'appName'
    })
  }
}
</script>
