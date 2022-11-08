<template>
        <div class="container-fluid">
         <div class="row">
            <div class="col-sm-12 col-lg-6">
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Popovers</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                     <popover className="btn-danger" popoverContent="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Popover title" popoverTitle="">Click to toggle popover</popover>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Dismiss on next click</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Use the <code>focus</code> trigger to dismiss popovers on the user’s next click of a different element than the toggle element.</p>
                     <popover tag="a" className="btn-danger" role="button" popoverContent="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Dismissible popover" popoverTitle="">Dismissible popover</popover>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Disabled elements</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot hover or click them to trigger a popover (or tooltip). As a workaround, you’ll want to trigger the popover from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code> and override the <code>pointer-events</code> on the disabled element.</p>
                     <popover tag="span" className="d-inline-block"  popoverContent="Disabled popover"  popoverTitle="">
                        <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled button</button>
                     </popover>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Hover elements</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>For disabled popover triggers, you may also prefer <code>data-trigger="hover"</code> so that the popover appears as immediate visual feedback to your users as they may not expect to <em>click</em> on a disabled element.</p>
                     <span class="d-inline-block" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover">
                        <button class="btn btn-primary" type="button" disabled>Disabled button</button>
                     </span>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-lg-6">
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Four directions</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Four options are available: top, right, bottom, and left aligned.</p>
                     <popover type="button" className="btn-secondary mb-1 me-1" popoverContent="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverPlacement="top" data-bs-original-title="" popoverTitle="" tabindex="0">Popover on Top</popover>
                     <popover type="button" className="btn-secondary mb-1 me-1" popoverContent="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverPlacement="right" data-bs-original-title="" popoverTitle="">Popover on Right</popover>
                     <popover type="button" className="btn-secondary mb-1 me-1" popoverContent="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverPlacement="bottom" data-bs-original-title="" popoverTitle="">Popover on Bottom</popover>
                     <popover type="button" className="btn-secondary mb-1 me-1" popoverContent="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverPlacement="bottom" data-bs-original-title="" popoverTitle="">Popover on Left</popover>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Popovers With Color</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Four options are available: top, right, bottom, and left aligned.</p>
                     <popover type="button" className="btn-primary mb-1 me-1" popoverContent="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverPlacement="top" data-bs-original-title="" popoverTitle="" tabindex="0">Popover on Top</popover>
                     <popover type="button" className="btn-success mb-1 me-1" popoverContent="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverPlacement="right" data-bs-original-title="" popoverTitle="">Popover on Right</popover>
                     <popover type="button" className="btn-danger mb-1 me-1" popoverContent="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverPlacement="bottom" data-bs-original-title="" popoverTitle="">Popover on Bottom</popover>
                     <popover type="button" className="btn-info mb-1 me-1" popoverContent="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverPlacement="bottom" data-bs-original-title="" popoverTitle="">Popover on Left</popover>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Popovers With Color</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Four options are available: top, right, bottom, and left aligned.</p>
                     <popover type="button" className="bg-soft-primary mb-1 me-1" popoverContent="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverPlacement="top" data-bs-original-title="" popoverTitle="" tabindex="0">Popover on Top</popover>
                     <popover type="button" className="bg-soft-success mb-1 me-1" popoverContent="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverPlacement="right" data-bs-original-title="" popoverTitle="">Popover on Right</popover>
                     <popover type="button" className="bg-soft-danger mb-1 me-1" popoverContent="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverPlacement="bottom" data-bs-original-title="" popoverTitle="">Popover on Bottom</popover>
                     <popover type="button" className="bg-soft-info mb-1 me-1" popoverContent="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." popoverPlacement="bottom" data-bs-original-title="" popoverTitle="">Popover on Left</popover>
                  </div>
               </div>
            </div>
         </div>
      </div>
</template>
<script>
export default {
  name: 'UiPopOvers'
}
</script>
