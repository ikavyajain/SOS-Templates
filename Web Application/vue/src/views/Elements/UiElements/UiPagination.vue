<template>
     <div class="container-fluid">
         <div class="row">
            <div class="col-lg-6">
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Pagination Examples</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label="Search results pages"</code>.</p>
                     <nav aria-label="Page navigation example">
                        <pagination mainClass="mb-0">
                        <pagination-content><a>Previous</a></pagination-content>
                        <pagination-content><a>1</a></pagination-content>
                        <pagination-content><a>2</a></pagination-content>
                        <pagination-content><a>3</a></pagination-content>
                        <pagination-content><a>Next</a></pagination-content>
                        </pagination>
                     </nav>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Disabled and active states</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Pagination links are customizable for different circumstances. Use <code>.disabled</code> for links that appear un-clickable and <code>.active</code> to indicate the current page.</p>
                     <p>While the <code>.disabled</code> class uses <code>pointer-events: none</code> to <em>try</em> to disable the link functionality of <code>&lt;a&gt;</code>s, that CSS property is not yet standardized and doesn’t account for keyboard navigation. As such, you should always add <code>tabindex="-1"</code> on disabled links and use custom JavaScript to fully disable their functionality.</p>
                     <nav aria-label="...">
                        <pagination  >
                           <pagination-content itemClass="disabled" tabindex="-1">
                              Previous
                           </pagination-content>
                           <pagination-content>1</pagination-content>
                           <pagination-content itemClass="active" ariaCurrent="page">2</pagination-content>
                           <pagination-content>3</pagination-content>
                           <pagination-content>Next</pagination-content>
                        </pagination>
                     </nav>
                     <p>You can optionally swap out active or disabled anchors for <code>&lt;span&gt;</code>, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.</p>
                     <nav aria-label="...">
                            <pagination >
                           <pagination-content tag="span">
                              Previous
                           </pagination-content>
                           <pagination-content tag="span">1</pagination-content>
                           <pagination-content itemClass="active" ariaCurrent="page" tag="span" >2</pagination-content>
                           <pagination-content>3</pagination-content>
                           <pagination-content>Next</pagination-content>
                        </pagination>
                     </nav>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Pagination With Color</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive <code>aria-label</code> for the <code>&lt;nav&gt;</code> to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be <code>aria-label="Search results pages"</code>.</p>
                     <nav aria-label="Page navigation example">
                                <pagination >
                           <pagination-content itemlinkClass="border-primary bg-primary text-white"> Previous </pagination-content>
                           <pagination-content itemlinkClass="border-primary bg-primary text-white"> 1 </pagination-content>
                          <pagination-content itemlinkClass="border-primary bg-primary text-white"> 2 </pagination-content>
                           <pagination-content itemlinkClass="border-primary bg-primary text-white"> 3 </pagination-content>
                           <pagination-content itemlinkClass="border-primary bg-primary text-white"> Next </pagination-content>
                        </pagination>
                     </nav>
                     <nav aria-label="Page navigation example">
                            <pagination >
                           <pagination-content itemlinkClass="border-success bg-success text-white">Previous </pagination-content>
                           <pagination-content itemlinkClass="border-success bg-success text-white"> 1 </pagination-content>
                          <pagination-content itemlinkClass="border-success bg-success text-white"> 2 </pagination-content>
                           <pagination-content itemlinkClass="border-success bg-success text-white"> 3 </pagination-content>
                           <pagination-content itemlinkClass="border-success bg-success text-white"> Next </pagination-content>
                        </pagination>
                     </nav>
                     <nav aria-label="Page navigation example">
                          <pagination >
                           <pagination-content itemlinkClass="border-info bg-info text-white">Previous </pagination-content>
                           <pagination-content itemlinkClass="border-info bg-info text-white"> 1 </pagination-content>
                          <pagination-content itemlinkClass="border-info bg-info text-white"> 2 </pagination-content>
                           <pagination-content itemlinkClass="border-info bg-info text-white"> 3 </pagination-content>
                           <pagination-content itemlinkClass="border-info bg-info text-white"> Next </pagination-content>
                        </pagination>
                     </nav>
                  </div>
               </div>
            </div>
            <div class="col-lg-6">
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Working with icons</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with <code>aria</code> attributes.</p>
                     <nav aria-label="Page navigation example">
                         <pagination mainClass="mb-0">
                           <pagination-content label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                           </pagination-content>
                           <pagination-content>1</pagination-content>
                           <pagination-content>2</pagination-content>
                           <pagination-content>3</pagination-content>
                           <pagination-content label="Next">
                               <span aria-hidden="true">&raquo;</span>
                           </pagination-content>
                        </pagination>
                     </nav>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Pagination Sizing</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Fancy larger or smaller pagination? Add <code>.pagination-lg</code> or <code>.pagination-sm</code> for additional sizes.</p>
                     <nav aria-label="...">
                           <pagination mainClass="pagination-lg">
                           <pagination-content itemClass="active" ariaCurrent="page" tag="span">
                            1
                           </pagination-content>
                           <pagination-content>2</pagination-content>
                           <pagination-content>3</pagination-content>
                        </pagination>
                     </nav>
                     <nav aria-label="...">
                          <pagination>
                           <pagination-content itemClass="active" ariaCurrent="page" tag="span">
                            1
                           </pagination-content>
                           <pagination-content>2</pagination-content>
                           <pagination-content>3</pagination-content>
                        </pagination>
                     </nav>
                     <nav aria-label="...">
                          <pagination mainClass="pagination-sm">
                           <pagination-content itemClass="active" ariaCurrent="page" tag="span">
                            1
                           </pagination-content>
                           <pagination-content>2</pagination-content>
                           <pagination-content>3</pagination-content>
                        </pagination>
                     </nav>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Alignment</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Change the alignment of pagination components with <a href="/docs/4.3/utilities/flex/">flexbox utilities</a>.</p>
                     <h6>left</h6>
                     <nav aria-label="Page navigation example">
                          <pagination>
                           <pagination-content itemClass="disabled" tabindex="-1">
                            Previous
                           </pagination-content>
                           <pagination-content>1</pagination-content>
                           <pagination-content>2</pagination-content>
                            <pagination-content>3</pagination-content>
                             <pagination-content>Next</pagination-content>
                        </pagination>
                     </nav>
                     <h6 class="text-center">Center</h6>
                     <nav aria-label="Page navigation example">
                               <pagination mainClass="justify-content-center">
                           <pagination-content itemClass="disabled" tabindex="-1">
                            Previous
                           </pagination-content>
                           <pagination-content>1</pagination-content>
                           <pagination-content>2</pagination-content>
                            <pagination-content>3</pagination-content>
                             <pagination-content>Next</pagination-content>
                        </pagination>
                     </nav>
                     <h6 class="text-end">Right</h6>
                     <nav aria-label="Page navigation example">
                            <pagination mainClass="justify-content-end">
                           <pagination-content itemClass="disabled" tabindex="-1">
                            Previous
                           </pagination-content>
                           <pagination-content>1</pagination-content>
                           <pagination-content>2</pagination-content>
                            <pagination-content>3</pagination-content>
                             <pagination-content>Next</pagination-content>
                        </pagination>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </div>
</template>
<script>
import PaginationContent from '../../../components/bootstrap/pagination/pagination-content.vue'
import pagination from '../../../components/bootstrap/pagination/pagination.vue'
export default {
  components: { pagination, PaginationContent },
  name: 'UiPagination'
}
</script>
