<template>
          <div class="container-fluid">
         <div class="row">
            <div class="col-sm-12 col-lg-6">
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Tooltips</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. The data-bs-placement attribute specifies the tooltip position.</p>
                     <tooltip type="button" className="btn btn-secondary mt-3 me-1" tooltipPlacement="top" data-bs-original-title="Tooltip on top" tooltipContent="Tooltip on top">Tooltip on top</tooltip>
                     <tooltip type="button" className="btn btn-secondary mt-3 me-1" tooltipPlacement="right" data-bs-original-title="Tooltip on right" tooltipContent="Tooltip on end">Tooltip on right</tooltip>
                     <tooltip type="button" className="btn btn-secondary mt-3 me-1" tooltipPlacement="bottom" data-bs-original-title="Tooltip on bottom" tooltipContent="Tooltip on bottom">Tooltip on bottom</tooltip>
                     <tooltip type="button" className="btn btn-secondary mt-3 me-1" tooltipPlacement="left" data-bs-original-title="Tooltip on start" tooltipContent="Tooltip on start">Tooltip on left</tooltip>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Disabled elements</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Elements with the <code>disabled</code> attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from a wrapper <code>&lt;div&gt;</code> or <code>&lt;span&gt;</code>, ideally made keyboard-focusable using <code>tabindex="0"</code>, and override the <code>pointer-events</code> on the disabled element.</p>
                     <tooltip tag="span" className="d-inline-block" tooltipPlacement="top" tooltipContent="Disabled tooltip">
                        <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled button</button>
                     </tooltip>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-lg-6">
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Tooltips</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left Using background colors</p>
                     <tooltip type="button" className="btn btn-primary mt-2 me-1" tooltipPlacement="top" data-bs-original-title="Tooltip on top" tooltipContent="Tooltip on top">Tooltip on top</tooltip>
                     <tooltip type="button" className="btn btn-success mt-2 me-1" tooltipPlacement="right" data-bs-original-title="Tooltip on right" tooltipContent="Tooltip on end">Tooltip on right</tooltip>
                     <tooltip type="button" className="btn btn-danger mt-2 me-1" tooltipPlacement="bottom" data-bs-original-title="Tooltip on bottom" tooltipContent="Tooltip on bottom">Tooltip on bottom</tooltip>
                     <tooltip type="button" className="btn btn-info mt-2 me-1" tooltipPlacement="left" data-bs-original-title="Tooltip on start" tooltipContent="Tooltip on start">Tooltip on left</tooltip>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Tooltips</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left Using Light background colors</p>
                     <tooltip type="button" className="btn iq-bg-primary mt-2 me-1 px-0 mr-2" tooltipPlacement="top" data-bs-original-title="Tooltip on top" tooltipContent="Tooltip on top">Tooltip on top</tooltip>
                     <tooltip type="button" className="btn iq-bg-success mt-2 px-0 mx-2" tooltipPlacement="right" data-bs-original-title="Tooltip on right" tooltipContent="Tooltip on end">Tooltip on right</tooltip>
                     <tooltip type="button" className="btn iq-bg-danger mt-2 px-0 mx-2" tooltipPlacement="bottom" data-bs-original-title="Tooltip on bottom" tooltipContent="Tooltip on bottom">Tooltip on bottom</tooltip>
                     <tooltip type="button" className="btn iq-bg-info mt-2 px-0 mx-2" tooltipPlacement="left" data-bs-original-title="Tooltip on start" tooltipContent="Tooltip on start">Tooltip on left</tooltip>
                  </div>
               </div>
            </div>
            <div class="col-lg-12">
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Hover elements</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Hover over the buttons below to see the tooltip.</p>
                     <!-- HTML to write -->
                     <tooltip tag="a" href="#" tooltipPlacement="top" data-bs-original-title="Some tooltip text!" tooltipContent="Some tooltip text!">Hover over me</tooltip>
                     <!-- Generated markup by the plugin -->
                     <div class="tooltip bs-tooltip-top" role="tooltip">
                        <div class="arrow"></div>
                        <div class="tooltip-inner">
                           Some tooltip text!
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</template>
<script>
export default {
  name: 'UiTooltips'
}
</script>
