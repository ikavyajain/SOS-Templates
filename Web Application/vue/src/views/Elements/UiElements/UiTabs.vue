<template>
          <div class="container-fluid">
         <div class="row">
            <div class="col-sm-12 col-lg-6">
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Basic Tabs</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>The base <code>.nav</code> component does not include any <code>.active</code> state. The following examples include the class, mainly to demonstrate that this particular class does not trigger any special styling.</p>
                     <tab-nav :tabs="true" id="myTab-1" role="tablist">
                     <tab-nav-items :active="true" id="home-tab" dataToggle="tab" href="#profile" role="tab" ariaControls="home" ariaSelected="true"><template v-slot:title>Home</template></tab-nav-items>
                     <tab-nav-items id="profile-tab" dataToggle="tab" href="#home" role="tab" ariaControls="profile"><template v-slot:title>Profile</template></tab-nav-items>
                     <tab-nav-items id="contact-tab" dataToggle="tab" href="#contact" role="tab" ariaControls="contact"><template v-slot:title>Contact</template></tab-nav-items>
                     </tab-nav>
                     <tab-content id="myTabContent-2">
                        <tab-content-item :active="true" id="profile" ariaLabelledBy="profile-tab">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                         <tab-content-item id="home1" ariaLabelledBy="home-tab">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                        <tab-content-item id="contact" ariaLabelledBy="contact-tab">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                     </tab-content>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Basic Tabs Style 3</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Takes the basic nav from above and adds the <code>.nav-tabs</code> class to generate a tabbed interface.</p>
                     <tab-nav :tabs="true" id="myTab-two" role="tablist">
                     <tab-nav-items :active="true" id="home-tab-two" dataToggle="tab" href="#home-two" role="tab" ariaControls="home" ariaSelected="true"><template v-slot:title>Home</template></tab-nav-items>
                     <tab-nav-items id="profile-tab-two" dataToggle="tab" href="#profile-two" role="tab" ariaControls="profile"><template v-slot:title>Profile</template></tab-nav-items>
                     <tab-nav-items id="contact-tab-two" dataToggle="tab" href="#contact-two" role="tab" ariaControls="contact"><template v-slot:title>Contact</template></tab-nav-items>
                     </tab-nav>
                     <tab-content id="myTabContent-1">
                        <tab-content-item :active="true" id="home-two" ariaLabelledBy="home-tab-two">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                         <tab-content-item id="profile-two" ariaLabelledBy="profile-tab-two">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                        <tab-content-item id="contact-two" ariaLabelledBy="contact-tab-two">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                     </tab-content>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Tabs Vertical Pills</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Stack your navigation by changing the flex item direction with the <code>.flex-column</code> utility.</p>
                     <div class="row">
                        <div class="col-sm-3">
                          <tab-nav :pills="true" :vertical="true" extraclass="text-center" id="v-pills-tab" role="tablist" aria="vertical">
                     <tab-nav-items :active="true" id="v-pills-home-tab" dataToggle="pill" href="#v-pills-home" role="tab" ariaControls="v-pills-home" ariaSelected="true"><template v-slot:title>Home</template></tab-nav-items>
                     <tab-nav-items id="v-pills-profile-tab" dataToggle="pill" href="#v-pills-profile" role="tab" ariaControls="v-pills-profile"><template v-slot:title>Profile</template></tab-nav-items>
                     <tab-nav-items id="v-pills-messages-tab" dataToggle="pill" href="#v-pills-messages" role="tab" ariaControls="v-pills-messages"><template v-slot:title>Messages</template></tab-nav-items>
                     <tab-nav-items id="v-pills-settings-tab" dataToggle="pill" href="#v-pills-settings" role="tab" ariaControls="v-pills-settings"><template v-slot:title>Settings</template></tab-nav-items>
                     </tab-nav>
                        </div>
                        <div class="col-sm-9">
                           <tab-content extraclass="mt-0" id="v-pills-tabContent">
                        <tab-content-item :active="true" id="v-pills-home" ariaLabelledBy="v-pills-home-tab">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </tab-content-item>
                         <tab-content-item id="v-pills-profile" ariaLabelledBy="v-pills-profile-tab">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </tab-content-item>
                        <tab-content-item id="v-pills-messages" ariaLabelledBy="v-pills-messages-tab">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </tab-content-item>
                         <tab-content-item id="v-pills-settings" ariaLabelledBy="v-pills-settings-tab">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </tab-content-item>
                     </tab-content>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Tabs Justify Center</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Centered with <code>.justify-content-center</code></p>
                     <tab-nav :tabs="true" extraclass="justify-content-center" id="myTab-1" role="tablist">
                     <tab-nav-items :active="true" id="home-tab" dataToggle="tab" href="#profile" role="tab" ariaControls="home" ariaSelected="true"><template v-slot:title>Home</template></tab-nav-items>
                     <tab-nav-items id="profile-tab" dataToggle="tab" href="#home" role="tab" ariaControls="profile"><template v-slot:title>Profile</template></tab-nav-items>
                     <tab-nav-items id="contact-tab" dataToggle="tab" href="#contact" role="tab" ariaControls="contact"><template v-slot:title>Contact</template></tab-nav-items>
                     </tab-nav>
                     <tab-content id="myTabContent-3">
                        <tab-content-item :active="true" id="profile" ariaLabelledBy="profile-tab">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                         <tab-content-item id="home1" ariaLabelledBy="home-tab">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                        <tab-content-item id="contact" ariaLabelledBy="contact-tab">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                     </tab-content>
                  </div>
               </div>
            </div>
            <div class="col-sm-12 col-lg-6">
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Basic Tabs Style 2</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Take that same HTML, but use <code>.nav-pills</code> instead:</p>
                        <tab-nav :pills="true" extraclass="mb-3" id="pills-tab" role="tablist">
                     <tab-nav-items :active="true" id="pills-home-tab" dataToggle="pill" href="#pills-home" role="tab" ariaControls="pills-home" ariaSelected="true"><template v-slot:title>Home</template></tab-nav-items>
                     <tab-nav-items id="pills-profile-tab" dataToggle="pill" href="#pills-profile" role="tab" ariaControls="pills-profile"><template v-slot:title>Profile</template></tab-nav-items>
                     <tab-nav-items id="pills-contact-tab" dataToggle="pill" href="#pills-contact" role="tab" ariaControls="pills-contact"><template v-slot:title>Contact</template></tab-nav-items>
                     </tab-nav>
                      <tab-content id="pills-tabContent-2">
                        <tab-content-item :active="true" id="pills-home" ariaLabelledBy="pills-home-tab">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                         <tab-content-item id="pills-profile" ariaLabelledBy="ills-profile-tab">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                        <tab-content-item id="pills-contact" ariaLabelledBy="pills-contact-tab">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                     </tab-content>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Basic Tabs Style 4</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Takes the basic nav from above and adds the <code>.nav-tabs</code> class to generate a tabbed interface.</p>
                     <tab-nav :tabs="true" id="myTab-three" role="tablist">
                     <tab-nav-items :active="true" id="home-tab-three" dataToggle="tab" href="#home-three" role="tab" ariaControls="home" ariaSelected="true"><template v-slot:title>Home</template></tab-nav-items>
                     <tab-nav-items id="profile-tab-three" dataToggle="tab" href="#profile-three" role="tab" ariaControls="profile"><template v-slot:title>Profile</template></tab-nav-items>
                     <tab-nav-items id="contact-tab-three" dataToggle="tab" href="#contact-three" role="tab" ariaControls="contact"><template v-slot:title>Contact</template></tab-nav-items>
                     </tab-nav>
                      <tab-content id="myTabContent-4">
                        <tab-content-item :active="true" id="home-three" ariaLabelledBy="home-tab-three">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                         <tab-content-item id="profile-three" ariaLabelledBy="profile-tab-three">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                        <tab-content-item id="contact-three" ariaLabelledBy="contact-tab-three">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                     </tab-content>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Tabs Fill and justify</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Force your <code>.nav</code>’s contents to extend the full available width one of two modifier classes. To proportionately fill all available space with your <code>.nav-item</code>s, use <code>.nav-fill</code>. Notice that all horizontal space is occupied, but not every nav item has the same width.</p>
                     <tab-nav :pills="true" extraclass=" mb-3 nav-fill" id="pills-tab-1" role="tablist">
                     <tab-nav-items :active="true" id="pills-home-tab-fill" dataToggle="pill" href="#pills-home-fill" role="tab" ariaControls="pills-home" ariaSelected="true"><template v-slot:title>Home</template></tab-nav-items>
                     <tab-nav-items id="pills-profile-tab-fill" dataToggle="pill" href="#pills-profile-fill" role="tab" ariaControls="pills-profile"><template v-slot:title>Profile</template></tab-nav-items>
                     <tab-nav-items id="pills-contact-tab-fill" dataToggle="pill" href="#pills-contact-fill" role="tab" ariaControls="pills-contact"><template v-slot:title>Contact</template></tab-nav-items>
                     </tab-nav>
                      <tab-content id="pills-tabContent-1">
                        <tab-content-item :active="true" id="pills-home-fill" ariaLabelledBy="pills-home-tab-fill">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                         <tab-content-item id="pills-profile-fill" ariaLabelledBy="pills-profile-tab-fill">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                        <tab-content-item id="pills-contact-fill" ariaLabelledBy="pills-contact-tab-fill">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                     </tab-content>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header d-flex justify-content-between">
                     <div class="header-title">
                        <h4 class="card-title">Tabs Justify Right</h4>
                     </div>
                  </div>
                  <div class="card-body">
                     <p>Right-aligned with <code>.justify-content-end</code>.</p>
                     <tab-nav :tabs="true" extraclass="justify-content-end" id="myTab-4" role="tablist">
                     <tab-nav-items :active="true" id="home-tab-end" dataToggle="tab" href="#home-end" role="tab" ariaControls="home" ariaSelected="true"><template v-slot:title>Home</template></tab-nav-items>
                     <tab-nav-items id="profile-tab-end" dataToggle="tab" href="#profile-end" role="tab" ariaControls="profile"><template v-slot:title>Profile</template></tab-nav-items>
                     <tab-nav-items id="contact-tab-end" dataToggle="tab" href="#contact-end" role="tab" ariaControls="contact"><template v-slot:title>Contact</template></tab-nav-items>
                     </tab-nav>
                     <tab-content id="myTabContent-5">
                        <tab-content-item :active="true" id="home-end" ariaLabelledBy="home-tab-end">
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                         <tab-content-item id="profile-end" ariaLabelledBy="profile-tab-end">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                        <tab-content-item id="contact-end" ariaLabelledBy="contact-tab-end">
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </tab-content-item>
                     </tab-content>
                  </div>
               </div>
            </div>
         </div>
      </div>
</template>
<script>
import tabNav from '../../../components/bootstrap/tab/tab-nav.vue'
export default {
  components: { tabNav },
  name: 'UiTabs'
}
</script>
