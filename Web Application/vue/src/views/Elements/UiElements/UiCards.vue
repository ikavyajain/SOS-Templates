<template>
       <div class="container-fluid">
         <div class="row">
            <div class="col-sm-6 col-md-6 col-lg-3">
               <iq-card>
                   <template v-slot:cardImage>
                       <img src="~@/assets/images/page-img/07.jpg" class="card-img-top" alt="#">
                   </template>
                   <template v-slot:body>
                       <h4 class="card-title">Card title</h4>
                        <p class="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <a href="#" class="btn btn-primary">Button</a>
                   </template>
               </iq-card>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
               <iq-card>
                   <template v-slot:cardImage>
                       <img src="~@/assets/images/page-img/07.jpg" class="card-img-top" alt="#">
                   </template>
                   <template v-slot:body>
                       <h4 class="card-title">Card title</h4>
                        <p class="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <p>It is a long established fact that a the readable content of a page when looking at its layout.</p>
                     <a href="#" class="card-link">Card link</a>
                     <a href="#" class="card-link">Another link</a>
                   </template>
               </iq-card>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
                 <iq-card>
                   <template v-slot:cardImage>
                       <img src="~@/assets/images/page-img/07.jpg" class="card-img-top" alt="#">
                   </template>
                   <template v-slot:body>
                       <h4 class="card-title">Card title</h4>
                        <p class="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                     </ul>
                   </template>
               </iq-card>
            </div>
            <div class="col-sm-6 col-md-6 col-lg-3">
                <iq-card>
                   <template v-slot:cardImage>
                       <img src="~@/assets/images/page-img/07.jpg" class="card-img-top" alt="#">
                   </template>
                   <template v-slot:body>
                       <h4 class="card-title">Card title</h4>
                     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                         <ul class="list-group list-group-flush">
                     <li class="list-group-item">Cras justo odio</li>
                  </ul>
                  <div class="card-body">
                     <a href="#" class="card-link">Card link</a>
                     <a href="#" class="card-link">Another link</a>
                  </div>
                   </template>
               </iq-card>
            </div>
         </div>
         <div class="row">
            <div class="col-sm-6 col-lg-6">
               <iq-card bodyClass="d-grid gap-2">
                   <template v-slot:body>
                        <h4 class="card-title">Special title treatment</h4>
                     <p class="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                     <a href="#" class="btn btn-primary">Go somewhere</a>
                   </template>
               </iq-card>
            </div>
            <div class="col-sm-6 col-lg-6">
                <iq-card bodyClass="d-grid gap-2">
                   <template v-slot:body>
                        <h4 class="card-title">Special title treatment</h4>
                     <p class="card-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                     <a href="#" class="btn btn-primary">Go somewhere</a>
                   </template>
               </iq-card>
            </div>
         </div>
         <div class="row">
            <div class="col-lg-4 col-md-6">
               <iq-card>
                    <template v-slot:headerTitle>
                        Featured
                    </template>
                   <template v-slot:body>
                       <h4 class="card-title">Special title treatment</h4>
                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                     <a href="#" class="btn btn-primary">Go somewhere</a>
                   </template>
               </iq-card>
            </div>
            <div class="col-lg-4 col-md-6">>
               <iq-card>
                <template v-slot:headerTitle>
                       Quote
               </template>
                <template v-slot:body>
                   <blockquote class="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                     </blockquote>
                </template>
               </iq-card>
            </div>
            <div class="col-lg-4 col-md-6">
               <iq-card  footerClass=" text-muted">
                  <template v-slot:headerTitle>
                      Featured
                  </template>
                  <template v-slot:body>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                  </template>
                  <template v-slot:footer >
                     2 days ago
                  </template>
               </iq-card>
            </div>
         </div>
         <div class="row">
            <div class="col-lg-4 col-sm-6 col-md-6">
               <iq-card bodyClass="d-grid gap-2">
                   <template v-slot:body>
                       <h4 class="card-title">Special title treatment</h4>
                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                     <a href="#" class="btn btn-primary">Go somewhere</a>
                   </template>
               </iq-card>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6 text-center">
                  <iq-card bodyClass="d-grid gap-2">
                   <template v-slot:body>
                       <h4 class="card-title">Special title treatment</h4>
                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                     <a href="#" class="btn btn-primary">Go somewhere</a>
                   </template>
               </iq-card>
            </div>
            <div class="col-lg-4 col-sm-6 col-md-6 text-end">
                 <iq-card bodyClass="d-grid gap-2">
                   <template v-slot:body>
                       <h4 class="card-title">Special title treatment</h4>
                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                     <a href="#" class="btn btn-primary">Go somewhere</a>
                   </template>
               </iq-card>
            </div>
         </div>
         <div class="row">
            <div class="col-md-6 col-lg-4 col-sm-6">
               <iq-card>
                   <template v-slot:cardImage>
                       <img src="~@/assets/images/page-img/07.jpg" class="card-img-top" alt="#">
                   </template>
                   <template v-slot:body>
                       <h4 class="card-title">Card title</h4>
                     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                   </template>
               </iq-card>
            </div>
            <div class="col-md-6 col-lg-4 col-sm-6">
                <iq-card>
                   <template v-slot:body>
                       <h4 class="card-title">Card title</h4>
                     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                   </template>
                       <img src="~@/assets/images/page-img/07.jpg" class="card-img-top" alt="#">
               </iq-card>
            </div>
            <div class="col-md-6 col-lg-4 col-sm-6">
               <iq-card className="bg-dark text-white">
                   <template v-slot:cardImage>
                       <img src="~@/assets/images/page-img/07.jpg" class="card-img" alt="#">
                    </template>
                  <div class="card-img-overlay">
                     <h4 class="card-title text-white">Card title</h4>
                     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                     <p class="card-text">Last updated 3 mins ago</p>
                  </div>
               </iq-card>
            </div>
         </div>
         <div class="row">
            <div class="col-sm-12">
               <h3 class="mb-3">Horizontal Card</h3>
            </div>
            <div class="col-md-6 col-lg-6">
               <div class="card mb-2">
                  <div class="row no-gutters">
                     <div class="col-md-6 col-lg-4">
                        <img src="~@/assets/images/page-img/08.jpg" class="card-img" alt="#">
                     </div>
                     <div class="col-md-6 col-lg-8">
                        <div class="card-body">
                           <h4 class="card-title">Card title</h4>
                           <p class="card-text">This is a wider card with supporting text below as a natural lead-in. a little bit longer.</p>
                           <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-6 col-lg-6">
               <div class="card">
                  <div class="row no-gutters flex-row-reverse">
                     <div class="col-md-6 col-lg-4">
                        <img src="~@/assets/images/page-img/09.jpg" class="card-img" alt="#">
                     </div>
                     <div class="col-md-6 col-lg-8">
                        <div class="card-body text-end">
                           <h4 class="card-title">Card title</h4>
                           <p class="card-text">This is a wider card with supporting text below as a natural lead-in. a little bit longer.</p>
                           <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-sm-12">
               <h3 class="mb-2">Card Colored Styles</h3>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
               <iq-card className="text-white bg-primary">
                   <template v-slot:body>
                         <h4 class="card-title text-white">Primary card title</h4>
                     <blockquote class="blockquote mb-0">
                        <p class="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                     </blockquote>
                   </template>
               </iq-card>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
               <iq-card className="text-white bg-secondary">
                   <template v-slot:body>
                         <h4 class="card-title text-white">Secondary card title</h4>
                     <blockquote class="blockquote mb-0">
                        <p class="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                     </blockquote>
                   </template>
               </iq-card>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                 <iq-card className="text-white bg-success">
                   <template v-slot:body>
                         <h4 class="card-title text-white">Success card title</h4>
                     <blockquote class="blockquote mb-0">
                        <p class="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                     </blockquote>
                   </template>
               </iq-card>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                  <iq-card className="text-white bg-danger">
                   <template v-slot:body>
                         <h4 class="card-title text-white">Danger card title</h4>
                     <blockquote class="blockquote mb-0">
                        <p class="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                     </blockquote>
                   </template>
               </iq-card>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                  <iq-card className="text-white bg-warning">
                   <template v-slot:body>
                         <h4 class="card-title text-white">Warning card title</h4>
                     <blockquote class="blockquote mb-0">
                        <p class="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                     </blockquote>
                   </template>
               </iq-card>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                    <iq-card className="text-white bg-info">
                   <template v-slot:body>
                         <h4 class="card-title text-white">Info card title</h4>
                     <blockquote class="blockquote mb-0">
                        <p class="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer class="blockquote-footer text-white font-size-12">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                     </blockquote>
                   </template>
               </iq-card>
            </div>
         </div>
         <div class="row">
            <div class="col-sm-12">
               <h3 class="mb-3">Border Card</h3>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
               <iq-card className="border-primary" bodyClass="text-primary">
                   <template v-slot:body>
                       <h4 class="card-title text-primary">Primary card title</h4>
                     <p class="card-text">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>
                   </template>
               </iq-card>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
               <iq-card className="border-secondary" bodyClass="text-secondary">
                   <template v-slot:body>
                       <h4 class="card-title text-secondary">Primary card title</h4>
                     <p class="card-text">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>
                   </template>
               </iq-card>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                <iq-card className="border-success" bodyClass="text-success">
                   <template v-slot:body>
                       <h4 class="card-title text-success">Primary card title</h4>
                     <p class="card-text">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>
                   </template>
               </iq-card>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
               <iq-card className="border-danger" bodyClass="text-danger">
                   <template v-slot:body>
                       <h4 class="card-title text-danger">Primary card title</h4>
                     <p class="card-text">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>
                   </template>
               </iq-card>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                <iq-card className="border-warning" bodyClass="text-warning">
                   <template v-slot:body>
                       <h4 class="card-title text-warning">Primary card title</h4>
                     <p class="card-text">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>
                   </template>
               </iq-card>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
                 <iq-card className="border-info" bodyClass="text-info">
                   <template v-slot:body>
                       <h4 class="card-title text-info">Primary card title</h4>
                     <p class="card-text">Some quick example text to build on the card title  text to build on the card title and make up the bulk of the card's content.</p>
                   </template>
               </iq-card>
            </div>
         </div>
         <div class="row">
            <div class="col-sm-12">
               <h3 class="mb-2">Card groups</h3>
            </div>
            <div class="col-sm-12">
               <div class="card-group">
                    <iq-card>
                        <template v-slot:cardImage>
                             <img src="~@/assets/images/page-img/07.jpg" class="card-img-top" alt="#">
                        </template>
                        <template v-slot:body>
                            <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </template>
                    </iq-card>
                   <iq-card>
                        <template v-slot:cardImage>
                             <img src="~@/assets/images/page-img/07.jpg" class="card-img-top" alt="#">
                        </template>
                        <template v-slot:body>
                            <h4 class="card-title">Card title</h4>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </template>
                    </iq-card>
                    <iq-card>
                        <template v-slot:cardImage>
                             <img src="~@/assets/images/page-img/07.jpg" class="card-img-top" alt="#">
                        </template>
                        <template v-slot:body>
                            <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </template>
                    </iq-card>
               </div>
            </div>
            <div class="col-sm-12">
               <div class="card-group mb-3">
                  <!-- <div class="card">
                     <img src="~@/assets/images/page-img/07.jpg" class="card-img-top" alt="#">
                     <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                     </div>
                     <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                     </div>
                  </div> -->
                  <iq-card>
                        <template v-slot:cardImage>
                             <img src="~@/assets/images/page-img/07.jpg" class="card-img-top" alt="#">
                        </template>
                        <template v-slot:body>
                            <h4 class="card-title">Card title</h4>
                               <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>                        </template>
                         <template v-slot:footer>
                             <small class="text-muted">Last updated 3 mins ago</small>
                         </template>
                    </iq-card>
                  <!-- <div class="card">
                     <img src="~@/assets/images/page-img/07.jpg" class="card-img-top" alt="#">
                     <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                     </div>
                     <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                     </div>
                  </div> -->
               <iq-card>
                        <template v-slot:cardImage>
                             <img src="~@/assets/images/page-img/07.jpg" class="card-img-top" alt="#">
                        </template>
                        <template v-slot:body>
                            <h4 class="card-title">Card title</h4>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>                          </template>
                         <template v-slot:footer>
                             <small class="text-muted">Last updated 3 mins ago</small>
                         </template>
                    </iq-card>
                  <!-- <div class="card">
                     <img src="~@/assets/images/page-img/07.jpg" class="card-img-top" alt="#">
                     <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                     </div>
                     <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                     </div>
                  </div> -->
                  <iq-card>
                        <template v-slot:cardImage>
                             <img src="~@/assets/images/page-img/07.jpg" class="card-img-top" alt="#">
                        </template>
                        <template v-slot:body>
                            <h4 class="card-title">Card title</h4>
                         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                          </template>
                         <template v-slot:footer>
                             <small class="text-muted">Last updated 3 mins ago</small>
                         </template>
                    </iq-card>
               </div>
            </div>
            <div class="col-sm-12">
               <h3 class="mb-3">Card Masonry Columns</h3>
               <div class="row"  data-masonry='{"percentPosition": true }'>
                  <div class="col-sm-6 col-lg-4">
                     <iq-card className="mb-3">
                         <template v-slot:cardImage>
                             <img src="~@/assets/images/page-img/07.jpg" class="card-img-top" alt="#">
                         </template>
                         <template v-slot:body>
                             <h4 class="card-title">Card title that wraps to a new line</h4>
                           <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                         </template>
                     </iq-card>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                      <iq-card className="mb-3">
                         <template v-slot:cardImage>
                             <img src="~@/assets/images/page-img/07.jpg" class="card-img-top" alt="#">
                         </template>
                         <template v-slot:body>
                             <h4 class="card-title">Card title</h4>
                           <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                           <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                         </template>
                     </iq-card>
                  </div>
                     <div class="col-sm-6 col-lg-4">
                        <iq-card className="mb-1" bodyClass="mb-0 ">
                            <template v-slot:cardImage>
                                <img src="~@/assets/images/page-img/07.jpg" class="card-img-top" alt="#">
                            </template>

                        </iq-card>
                        <iq-card className="mb-3 text-end">
                            <template v-slot:body>
                                 <blockquote class="blockquote mb-0 card-body">
                              <p class="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                              <footer class="blockquote-footer">
                                 <small class="text-muted">
                                 Someone famous in <cite title="Source Title">Source Title</cite>
                                 </small>
                              </footer>
                           </blockquote>
                            </template>
                        </iq-card>
                     </div>
                     <div class="col-sm-6 col-lg-4">
                        <iq-card className="mb-3">
                             <blockquote class="blockquote mb-0 card-body">
                              <p class="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                              <footer class="blockquote-footer">
                                 <small class="text-muted">
                                 Someone famous in <cite title="Source Title">Source Title</cite>
                                 </small>
                              </footer>
                           </blockquote>
                        </iq-card>
                     </div>
                     <div class="col-sm-6 col-lg-4">
                        <iq-card className="bg-primary text-white text-center mb-3">
                            <blockquote class="blockquote mb-0 card-body">
                              <p class="font-size-14">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                              <footer class="blockquote-footer">
                                 <small class="text-white">
                                 Someone famous in <cite title="Source Title">Source Title</cite>
                                 </small>
                              </footer>
                           </blockquote>
                        </iq-card>
                     </div>
                     <div class="col-sm-6 col-lg-4">
                        <iq-card className="mb-3">
                            <template v-slot:body>
                                <h4 class="card-title">Card title</h4>
                              <p class="card-text">This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.</p>
                              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </template>
                        </iq-card>
                     </div>
                     <div class="col-sm-6 col-lg-4">
                        <iq-card className="text-center mb-3">
                            <template v-slot:body>
                                 <h4 class="card-title">Card title</h4>
                              <p class="card-text">This card has a regular title and short paragraphy of text below it.</p>
                              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </template>
                        </iq-card>
                     </div>
               </div>
            </div>
         </div>
      </div>
</template>
<script>
import iqCard from '../../../components/bootstrap/Cards/iq-card.vue'
export default {
  components: { iqCard },
  name: 'UiCards'
}
</script>
