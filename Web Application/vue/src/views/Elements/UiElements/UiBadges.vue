<template>
    <div class="container-fluid">
        <div class="row">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12 col-lg-6">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <div class="header-title">
                            <h4 class="card-title">Badge</h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <p>Badges scale to match the size of the immediate parent element by using relative font sizing and <code>em</code> units.</p>
                        <h1 class="mt-2">
                            Example heading
                            <badge tag="span" badgeClass="bg-primary">New</badge>
                        </h1>
                        <h2 class="mt-2">
                            Example heading
                            <badge tag="span" badgeClass="bg-secondary">New</badge>
                        </h2>
                        <h3 class="mt-2">
                            Example heading
                            <badge tag="span" badgeClass="bg-success">New</badge>
                        </h3>
                        <h4 class="mt-2">
                            Example heading
                            <badge tag="span" badgeClass="bg-danger">New</badge>
                        </h4>
                        <h5 class="mt-2">
                            Example heading
                            <badge tag="span" badgeClass="bg-warning">New</badge>
                        </h5>
                        <h6 class="mt-2 mb-0">
                            Example heading
                            <badge tag="span" badgeClass="bg-info">New</badge>
                        </h6>
                    </div>
                </div>
                <div class="card">
                  <div class="card-header d-flex justify-content-between">
                      <div class="header-title">
                        <h4 class="card-title">Button Badges</h4>
                      </div>
                  </div>
                  <div class="card-body">
                      <p>Badges can be used as part of buttons to provide a counter.</p>
                      <button type="button" class="btn mb-1 btn-primary">
                      Notifications <badge tag="span" badgeClass="bg-light text-dark ms-2">4</badge>
                      </button>
                      <button type="button" class="btn mb-1 btn-success">
                      Notifications <badge tag="span" badgeClass="bg-light text-dark ms-2">4</badge>
                      </button>
                      <button type="button" class="btn mb-1 btn-danger">
                      Notifications <badge tag="span" badgeClass="bg-light text-dark ms-2">4</badge>
                      </button>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header d-flex justify-content-between">
                      <div class="header-title">
                        <h4 class="card-title">Button Light background Badges</h4>
                      </div>
                  </div>
                  <div class="card-body">
                      <p>Badges can be used as part of buttons to provide a counter.</p>
                      <button type="button" class="btn mb-1 btn-outline-primary">
                      Notifications <badge tag="span" badgeClass="bg-primary ms-2">4</badge>
                      </button>
                      <button type="button" class="btn mb-1 btn-outline-success">
                      Notifications <badge tag="span" badgeClass="bg-success ms-2">4</badge>
                      </button>
                      <button type="button" class="btn mb-1 btn-outline-danger">
                      Notifications <badge tag="span" badgeClass="bg-danger ms-2">4</badge>
                      </button>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header d-flex justify-content-between">
                      <div class="header-title">
                        <h4 class="card-title">Button Border Badges</h4>
                      </div>
                  </div>
                  <div class="card-body">
                      <p>Badges can be used as part of buttons to provide a counter.</p>
                      <button type="button" class="btn mb-1 bg-soft-primary">
                      Notifications <badge tag="span" badgeClass="bg-primary ms-2">4</badge>
                      </button>
                      <button type="button" class="btn mb-1 bg-soft-success">
                      Notifications <badge tag="span" badgeClass="bg-success ms-2">4</badge>
                      </button>
                      <button type="button" class="btn mb-1 bg-soft-danger">
                      Notifications <badge tag="span" badgeClass="bg-danger ms-2">4</badge>
                      </button>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-lg-6">
                <div class="card">
                  <div class="card-header d-flex justify-content-between">
                    <div class="header-title">
                      <h4 class="card-title">Contextual variations</h4>
                    </div>
                  </div>
                    <div class="card-body">
                        <p class="mb-2">Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
                        <badge tag="span" badgeClass="mt-2 bg-primary">Primary</badge>
                        <badge tag="span" badgeClass="mt-2 bg-secondary">Secondary</badge>
                        <badge tag="span" badgeClass="mt-2 bg-success">Success</badge>
                        <badge tag="span" badgeClass="mt-2 bg-danger">Danger</badge>
                        <badge tag="span" badgeClass="mt-2 bg-warning">Warning</badge>
                        <badge tag="span" badgeClass="mt-2 bg-info">Info</badge>
                        <badge tag="span" badgeClass="mt-2 bg-light">Light</badge>
                        <badge tag="span" badgeClass="mt-2 bg-dark">Dark</badge>
                        <h5 class="card-title mt-4">Pill badges</h5>
                        <p class="mb-2">Use the <code>.badge-pill</code> modifier class to make badges more rounded (with a larger <code>border-radius</code> and additional horizontal <code>padding</code>). Useful if you miss the badges from v3.</p>
                        <badge tag="span" badgeClass="mt-2 rounded-pill bg-primary">Primary</badge>
                        <badge tag="span" badgeClass="mt-2 rounded-pill bg-secondary">Secondary</badge>
                        <badge tag="span" badgeClass="mt-2 rounded-pill bg-success">Success</badge>
                        <badge tag="span" badgeClass="mt-2 rounded-pill bg-danger">Danger</badge>
                        <badge tag="span" badgeClass="mt-2 rounded-pill bg-warning">Warning</badge>
                        <badge tag="span" badgeClass="mt-2 rounded-pill bg-info">Info</badge>
                        <badge tag="span" badgeClass="mt-2 rounded-pill bg-light">Light</badge>
                        <badge tag="span" badgeClass="mt-2 rounded-pill bg-dark">Dark</badge>
                        <h5 class="card-title mt-4">Links</h5>
                        <p class="mb-2">Using the contextual <code>.badge-*</code> classes on an <code>&lt;a&gt;</code> element quickly provide <em>actionable</em> badges with hover and focus states.</p>
                        <badge tag="a" href="#" badgeClass="mt-2 bg-primary">Primary</badge>
                        <badge tag="a" href="#" badgeClass="mt-2 bg-secondary">Secondary</badge>
                        <badge tag="a" href="#" badgeClass="mt-2 bg-success">Success</badge>
                        <badge tag="a" href="#" badgeClass="mt-2 bg-danger">Danger</badge>
                        <badge tag="a" href="#" badgeClass="mt-2 bg-warning">Warning</badge>
                        <badge tag="a" href="#" badgeClass="mt-2 bg-info">Info</badge>
                        <badge tag="a" href="#" badgeClass="mt-2 bg-light">Light</badge>
                        <badge tag="a" href="#" badgeClass="mt-2 bg-dark">Dark</badge>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <div class="header-title">
                        <h4 class="card-title">Contextual variations Border</h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="mb-2">Add any of the below mentioned modifier classes to change the appearance of a badge.</p>
                        <badge tag="span" badgeClass="mt-2 border text-primary border-primary">Primary</badge>
                        <badge tag="span" badgeClass="mt-2 border text-secondary border-secondary">Secondary</badge>
                        <badge tag="span" badgeClass="mt-2 border text-success border-success">Success</badge>
                        <badge tag="span" badgeClass="mt-2 border text-danger border-danger">Danger</badge>
                        <badge tag="span" badgeClass="mt-2 border text-warning border-warning">Warning</badge>
                        <badge tag="span" badgeClass="mt-2 border text-info border-info">Info</badge>
                        <badge tag="span" badgeClass="mt-2 border text-light border-light">Light</badge>
                        <badge tag="span" badgeClass="mt-2 border text-dark border-dark">Dark</badge>
                        <h5 class="card-title mt-4">Pill badges</h5>
                        <p class="mb-2">Use the <code>.badge-pill</code> modifier class to make badges more rounded (with a larger <code>border-radius</code> and additional horizontal <code>padding</code>). Useful if you miss the badges from v3.</p>
                        <badge tag="span" badgeClass="mt-2 badge-pill border text-primary border-primary">Primary</badge>
                        <badge tag="span" badgeClass="mt-2 badge-pill border text-secondary border-secondary">Secondary</badge>
                        <badge tag="span" badgeClass="mt-2 badge-pill border text-success border-success">Success</badge>
                        <badge tag="span" badgeClass="mt-2 badge-pill border text-danger border-danger">Danger</badge>
                        <badge tag="span" badgeClass="mt-2 badge-pill border text-warning border-warning">Warning</badge>
                        <badge tag="span" badgeClass="mt-2 badge-pill border text-info border-info">Info</badge>
                        <badge tag="span" badgeClass="mt-2 badge-pill border text-light border-light">Light</badge>
                        <badge tag="span" badgeClass="mt-2 badge-pill border text-dark border-dark">Dark</badge>
                        <h5 class="card-title mt-4">Links</h5>
                        <p class="mb-2">Using the contextual <code>.badge-*</code> classes on an <code>&lt;a&gt;</code> element quickly provide <em>actionable</em> badges with hover and focus states.</p>
                        <badge tag="a" href="#" badgeClass="mt-2 border text-primary border-primary">Primary</badge>
                        <badge tag="a" href="#" badgeClass="mt-2 border text-secondary border-secondary">Secondary</badge>
                        <badge tag="a" href="#" badgeClass="mt-2 border text-success border-success">Success</badge>
                        <badge tag="a" href="#" badgeClass="mt-2 border text-danger border-danger">Danger</badge>
                        <badge tag="a" href="#" badgeClass="mt-2 border text-warning border-warning">Warning</badge>
                        <badge tag="a" href="#" badgeClass="mt-2 border text-info border-info">Info</badge>
                        <badge tag="a" href="#" badgeClass="mt-2 border text-light border-light">Light</badge>
                        <badge tag="a" href="#" badgeClass="mt-2 border text-dark border-dark">Dark</badge>
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
  name: 'UiBadges'
}
</script>
