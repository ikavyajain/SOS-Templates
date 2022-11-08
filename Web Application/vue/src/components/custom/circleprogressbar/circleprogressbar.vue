<template>
    <div class="card-profile-progress mb-3">
    <!-- <div id="circle-progress-{{id}}" class="circle-progress  circle-progress-basic circle-progress-{{color}}" data-min-value="0" data-max-value="100" data-value="{{value}}" data-type="percent"></div> -->
    <CircleProgress :id="`circle-progress-${id}`" :value="value" :color="color" />
    <img :src="image" :class="`img-fluid  rounded-circle card-img ${ imgClass } rotete-infinite`" alt="image">
</div>
<div class="text-center">
    <p class="mb-2">{{progressPercent}}</p>
    <h6 class="heading-title fw-bolder">{{progresssTitle}}</h6>
</div>
</template>
<script>
import CircleProgress from '@/components/custom/progressbar/Circleprogressbar'
export default {
  name: 'circleprogressbar',
  components: {
    CircleProgress
  },
  props: {
    id: { type: Number, default: 0 },
    progressPercent: { type: String, default: '' },
    image: { type: String, default: '' },
    progresssTitle: { type: String, default: '' },
    color: { type: String, default: '' },
    imgClass: { type: String, default: '' },
    value: { type: Number, default: 0 }
  }
}
</script>
