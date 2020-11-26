export default {
  name: 'cSideBarCategoryButton',
  props: {
    prop_display_name: String,
    prop_link_name: String,
  },
  components: {},
  data: function() {
    return {
      categoryName: 'default',
    };
  },
  methods: {
    onPushHandler: function() {
      const vm = this;

      if (vm.$route.name === vm.prop_display_name) {
        return;
      }

      vm.$router.push({
        name: `${vm.prop_display_name}`,
      });
    },
  },
  computed: {},
  // life cycle
  beforeCreate: function() {},
  created: function() {},
  beforeMounted: function() {},
  mounted: function() {},
  beforeUpdate: function() {},
  updated: function() {},
  beforeDestroy: function() {},
  Destroy: function() {},
};
