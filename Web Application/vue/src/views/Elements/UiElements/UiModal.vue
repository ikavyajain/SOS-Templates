<template>
          <div class="container-fluid">
         <div class="row">
            <div class="col-sm-12 col-lg-6">
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Modal components</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p class="mb-1">Below is a <em>static</em> modal example (meaning its <code>position</code> and <code>display</code> have been overridden). Included are the modal header, modal body (required for <code>padding</code>), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.</p>
                     <!-- Button trigger modal -->
                     <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                     Launch demo modal
                     </button>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Modal Scrolling </h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p class="mb-1">When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.</p>
                     <!-- Button trigger modal -->
                     <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable">
                     Launch demo modal
                     </button>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Optional sizes</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p class="mb-1">Modals have three optional sizes, available via modifier classes to be placed on a .modal-dialog. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.</p>
                     <!-- Extra large modal -->
                     <button type="button" class="btn btn-primary mt-2 me-1" data-bs-toggle="modal" data-bs-target=".bd-example-modal-xl">Extra large modal</button>

                     <!-- Large modal -->
                     <button type="button" class="btn btn-primary mt-2 me-1" data-bs-toggle="modal" data-bs-target=".bd-example-modal-lg">Large modal</button>

                     <!-- Small modal -->
                     <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target=".bd-example-modal-sm">Small modal</button>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-lg-6">
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Scrolling long content</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p class="mb-1">When modals become too long for the user’s viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.</p>
                     <!-- Button trigger modal -->
                     <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#exampleModalLong">
                     Launch demo modal
                     </button>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Vertically centered</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p class="mb-1">Add <code class="highlighter-rouge">.modal-dialog-centered</code> to <code class="highlighter-rouge">.modal-dialog</code> to vertically center the modal.</p>
                     <!-- Button trigger modal -->
                     <button type="button" class="btn btn-primary mt-2 me-1" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                     Launch demo modal
                     </button>
                     <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenteredScrollable">
                     Vertically centered scrollable modal
                     </button>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Using the grid</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p class="mb-1">Utilize the Bootstrap grid system within a modal by nesting <code>.container-fluid</code> within the <code>.modal-body</code>. Then, use the normal grid system classes as you would anywhere else.</p>
                     <button type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#gridSystemModal">
                     Launch demo modal
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- Modal -->
      <modal id="exampleModal" :tabindex="-1" role="dialog" ariaLabelled="exampleModalLabel" :ariaHidden="true" contentrole="document">
         <model-header :dismissable="true">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
         </model-header>
         <model-body>
            ...
         </model-body>
         <model-footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
         </model-footer>

      </modal>
      <!-- Modal -->
      <modal id="exampleModalScrollable" :tabindex="-1" role="dialog" ariaLabelled="exampleModalScrollableTitle" :ariaHidden="true" contentrole="document" dialogClass="modal-dialog-scrollable">
         <model-header :dismissable="true">
            <h5 class="modal-title" id="exampleModalScrollableTitle">Modal title</h5>
         </model-header>
         <model-body>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
         </model-body>
         <model-footer>
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
         </model-footer>
      </modal>
      <modal mainClass="bd-example-modal-xl" :tabindex="-1" role="dialog" ::ariaHidden="true" dialogClass="modal-xl">
      <model-header :dismissable="true">
          <h5 class="modal-title">Modal title</h5>
      </model-header>
      <model-body>
         <p>Modal body text goes here.</p>
      </model-body>
      <model-footer>
         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         <button type="button" class="btn btn-primary">Save changes</button>
      </model-footer>
      </modal>
       <modal mainClass="bd-example-modal-lg" :tabindex="-1" role="dialog" ::ariaHidden="true" dialogClass="modal-lg">
      <model-header :dismissable="true">
          <h5 class="modal-title">Modal title</h5>
      </model-header>
      <model-body>
         <p>Modal body text goes here.</p>
      </model-body>
      <model-footer>
         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         <button type="button" class="btn btn-primary">Save changes</button>
      </model-footer>
      </modal>
      <modal mainClass="bd-example-modal-sm" :tabindex="-1" role="dialog" ::ariaHidden="true" dialogClass="modal-sm">
      <model-header :dismissable="true">
          <h5 class="modal-title">Modal title</h5>
      </model-header>
      <model-body>
         <p>Modal body text goes here.</p>
      </model-body>
      <model-footer>
         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         <button type="button" class="btn btn-primary">Save changes</button>
      </model-footer>
      </modal>
      <modal id="exampleModalLong" :tabindex="-1" role="dialog" ariaLabelled="exampleModalLongTitle" :ariaHidden="true" contentrole="document" dialogClass="modal-dialog-scrollable">
         <model-header :dismissable="true">
             <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
         </model-header>
         <model-body>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                  <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
         </model-body>
         <model-footer>
             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
         </model-footer>
      </modal>
      <modal id="exampleModalCenter" :tabindex="-1" role="dialog" ariaLabelled="exampleModalCenterTitle" :ariaHidden="true" dialogClass="modal-dialog-centered" contentrole="document">
         <model-header :dismissable="true">
              <h5 class="modal-title" id="exampleModalCenterTitle">Modal title </h5>
         </model-header>
         <model-body>
            ...
         </model-body>
         <model-footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
         </model-footer>
      </modal>
      <!-- Modal -->
      <modal id="exampleModalCenteredScrollable" :tabindex="-1" role="dialog" ariaLabelled="exampleModalCenteredScrollableTitle" :ariaHidden="true" dialogClass="modal-dialog-scrollable modal-dialog-centered" contentrole="document">
         <model-header :dismissable="true">
               <h5 class="modal-title" id="exampleModalCenteredScrollableTitle">Modal title </h5>
         </model-header>
         <model-body>
             <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
         </model-body>
         <model-footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
         </model-footer>
      </modal>
            <modal id="gridSystemModal" :tabindex="-1" role="dialog" ariaLabelled="gridModalLabel" :ariaHidden="true" contentrole="document">
         <model-header :dismissable="true">
               <h5 class="modal-title" id="gridModalLabel">Grids in modals</h5>
         </model-header>
         <model-body>
             <div class="iq-example-row">
                     <div class="container-fluid">
                        <div class="row mb-3">
                           <div class="col-md-4">.col-md-4</div>
                           <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
                        </div>
                        <div class="row mb-3">
                           <div class="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
                           <div class="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
                        </div>
                        <div class="row mb-3">
                           <div class="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
                        </div>
                        <div class="row">
                           <div class="col-sm-9">
                              Level 1: .col-sm-9
                              <div class="row">
                                 <div class="col-8 col-sm-6">
                                    Level 2: .col-8 .col-sm-6
                                 </div>
                                 <div class="col-4 col-sm-6">
                                    Level 2: .col-4 .col-sm-6
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
         </model-body>
         <model-footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
         </model-footer>
      </modal>
      <!-- Modal components -->
          <modal id="exampleModal" :tabindex="-1" role="dialog" ariaLabelled="exampleModalLabel" :ariaHidden="true" contentrole="document">
         <model-header :dismissable="true">
              <h5 class="modal-title" id="exampleModalLabel">Modal title </h5>
         </model-header>
         <model-body>
            ...
         </model-body>
         <model-footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
         </model-footer>
      </modal>
</template>
<script>
import Modal from '../../../components/bootstrap/modal/modal.vue'
import ModelBody from '../../../components/bootstrap/modal/model-body.vue'
import ModelFooter from '../../../components/bootstrap/modal/model-footer.vue'
import modelHeader from '../../../components/bootstrap/modal/model-header.vue'
export default {
  components: { modelHeader, ModelFooter, ModelBody, Modal },
  name: 'UiModal'
}
</script>
