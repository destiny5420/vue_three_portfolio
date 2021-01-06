import gsap from 'gsap';

export default {
  name: 'vHome',
  props: {},
  components: {},
  data: function() {
    return {
      scrollY: 0,
      hideMouseTip: false,
      anim: {
        scrollMouse: null,
        hideMouseTip: null,
      },
      sloganData: {
        name: 'PAPER HSIAO',
        position: 'Designer',
      },
    };
  },
  methods: {
    onMouseTipAnim: function() {
      const vm = this;
      vm.scrollMouse = gsap.timeline();
      vm.scrollMouse.from('#mouse-wheel', {
        duration: 1,
        ease: 'power2.inOut',
        repeat: -1,
        opacity: 0,
        scaleY: '0',
      });
    },
    onMouseTipHideAnim: function() {
      const vm = this;
      vm.anim.hideMouseTip = gsap.timeline();
      vm.anim.hideMouseTip.to('.mouse-tip', { duration: 0.5, opacity: 0.5 }).pause();
    },
  },
  computed: {},
  watch: {
    // scrollY: {
    //   handler(newValue, oldValue) {
    //     console.log('new Value: ', newValue, ' / oldValue: ', oldValue);
    //     const vm = this;
    //     if (newValue !== 0 && vm.hideMouseTip === false) {
    //       vm.hideMouseTip = true;
    //       vm.anim.hideMouseTip.play();
    //       console.log('yes -1');
    //     } else if (newValue === 0 && vm.hideMouseTip === true) {
    //       console.log('cancel -2');
    //       vm.hideMouseTip = false;
    //       vm.anim.hideMouseTip.reverse();
    //     }
    //   },
    // },
  },
  // life cycle
  beforeCreate: function() {},
  created: function() {},
  beforeMounted: function() {},
  mounted: function() {
    const vm = this;

    vm.onMouseTipAnim();
    vm.onMouseTipHideAnim();
    window.addEventListener('scroll', () => {
      vm.scrollY = window.scrollY;
    });
  },
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  Destroy: function() {},
};
