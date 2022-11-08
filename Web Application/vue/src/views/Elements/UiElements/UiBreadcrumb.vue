<template>
    <div class="container-fluid">
         <div class="row">
            <div class="col-sm-12 col-lg-6">
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Breadcrumb</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Use the items in order to programatically generate the breadcrumb links.use class <code>.breadcrumb to ol</code></p>
                     <breadcrumb innerClass="bg-soft-light">
                        <breadcrumbcontent liClass="active" ariaCurrent="page">Home</breadcrumbcontent>
                     </breadcrumb>
                     <breadcrumb innerClass="bg-soft-light">
                        <breadcrumbcontent><a href="#">Home</a></breadcrumbcontent>
                        <breadcrumbcontent liClass="active" ariaCurrent="page">Library</breadcrumbcontent>
                     </breadcrumb>
                     <breadcrumb innerClass="bg-soft-light">
                        <breadcrumbcontent><a href="#">Home</a></breadcrumbcontent>
                        <breadcrumbcontent><a href="#">Library</a></breadcrumbcontent>
                        <breadcrumbcontent liClass="active" ariaCurrent="page">Data</breadcrumbcontent>
                     </breadcrumb>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-lg-6">
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Breadcrumb With Icon</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Use the items in order to programatically generate the breadcrumb links.use class <code>.breadcrumb to ol</code> with Icon</p>
                     <breadcrumb innerClass="bg-soft-light">
                        <breadcrumbcontent liClass="active" ariaCurrent="page">
                           <svg width="14" height="14" class="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                           </svg>
                        </breadcrumbcontent>
                     </breadcrumb>
                     <breadcrumb innerClass="bg-soft-light">
                        <breadcrumbcontent>
                           <a href="#">
                           <svg width="14" height="14" class="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                           </svg>Home</a>
                        </breadcrumbcontent>
                        <breadcrumbcontent liClass="active" ariaCurrent="page">Library</breadcrumbcontent>
                     </breadcrumb>
                     <breadcrumb innerClass="bg-soft-light">
                        <breadcrumbcontent>
                           <a href="#">
                           <svg width="14" height="14" class="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                           </svg>Home</a>
                        </breadcrumbcontent>
                        <breadcrumbcontent><a href="#">Library</a></breadcrumbcontent>
                        <breadcrumbcontent liClass="active" ariaCurrent="page">Data</breadcrumbcontent>
                     </breadcrumb>
                  </div>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-sm-12 col-lg-6">
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Breadcrumb</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>use class <code>.breadcrumb .bg-primary</code></p>
                     <breadcrumb innerClass="bg-primary">
                        <breadcrumbcontent liClass="active text-white" ariaCurrent="page">Home</breadcrumbcontent>
                     </breadcrumb>
                     <breadcrumb innerClass="bg-primary">
                        <breadcrumbcontent><a href="#" class="text-white">Home</a></breadcrumbcontent>
                        <breadcrumbcontent liClass="active text-white" ariaCurrent="page">Library</breadcrumbcontent>
                     </breadcrumb>
                     <breadcrumb innerClass="bg-primary">
                        <breadcrumbcontent><a href="#" class="text-white">Home</a></breadcrumbcontent>
                        <breadcrumbcontent><a href="#" class="text-white">Library</a></breadcrumbcontent>
                        <breadcrumbcontent liClass="active text-white" ariaCurrent="page">Home</breadcrumbcontent>
                     </breadcrumb>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-lg-6">
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Breadcrumb With Icon</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>use class <code>.breadcrumb .bg-primary </code> With Icon.</p>
                     <breadcrumb innerClass="bg-primary">
                        <breadcrumbcontent liClass="active text-white" ariaCurrent="page"><svg width="14" height="14" class="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>Home
                        </breadcrumbcontent>
                     </breadcrumb>
                     <breadcrumb innerClass="bg-primary">
                        <breadcrumbcontent><a href="#" class="text-white"><svg width="14" height="14" class="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>Home</a>
                        </breadcrumbcontent>
                        <breadcrumbcontent liClass="active text-white" ariaCurrent="page">Library</breadcrumbcontent>
                     </breadcrumb>
                     <breadcrumb innerClass="bg-primary">
                        <breadcrumbcontent><a href="#" class="text-white"><svg width="14" height="14" class="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>Home</a>
                        </breadcrumbcontent>
                        <breadcrumbcontent><a href="#" class="text-white">Library</a></breadcrumbcontent>
                        <breadcrumbcontent liClass="active text-white" ariaCurrent="page">Home</breadcrumbcontent>
                     </breadcrumb>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-lg-6">
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Breadcrumb With Icon</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>use class <code>.breadcrumb .bg-soft-primary</code></p>
                     <breadcrumb innerClass="bg-soft-primary">
                        <breadcrumbcontent liClass="active" ariaCurrent="page"><svg width="14" height="14" class="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>Home
                        </breadcrumbcontent>
                     </breadcrumb>
                     <breadcrumb innerClass="bg-soft-primary">
                        <breadcrumbcontent><a href="#">
                           <svg width="14" height="14" class="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                           </svg>Home</a>
                        </breadcrumbcontent>
                        <breadcrumbcontent liClass="active" ariaCurrent="page">Library</breadcrumbcontent>
                     </breadcrumb>
                     <breadcrumb innerClass="bg-soft-primary mb-0">
                        <breadcrumbcontent><a href="#"><svg width="14" height="14" class="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>Home</a>
                        </breadcrumbcontent>
                        <breadcrumbcontent><a href="#">Library</a></breadcrumbcontent>
                        <breadcrumbcontent liClass="active" ariaCurrent="page">Home</breadcrumbcontent>
                     </breadcrumb>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-lg-6">
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Breadcrumb With Icon</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>use class <code>.breadcrumb .bg-soft-danger</code></p>
                     <breadcrumb innerClass="bg-soft-danger">
                        <breadcrumbcontent liClass="active" ariaCurrent="page"><svg width="14" height="14" class="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>Home
                        </breadcrumbcontent>
                     </breadcrumb>
                     <breadcrumb innerClass="bg-soft-danger">
                        <breadcrumbcontent><a href="#">
                           <svg width="14" height="14" class="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                           </svg>Home</a>
                        </breadcrumbcontent>
                        <breadcrumbcontent liClass="active" ariaCurrent="page">Library</breadcrumbcontent>
                     </breadcrumb>
                     <breadcrumb innerClass="bg-soft-danger mb-0">
                        <breadcrumbcontent><a href="#"><svg width="14" height="14" class="me-2" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>Home</a>
                        </breadcrumbcontent>
                        <breadcrumbcontent><a href="#">Library</a></breadcrumbcontent>
                        <breadcrumbcontent liClass="active" ariaCurrent="page">Home</breadcrumbcontent>
                     </breadcrumb>
                  </div>
               </div>
            </div>
         </div>
      </div>
</template>
<script>
export default {
  name: 'UiBreadcrumb'
}
</script>
