import cSideBarCategoryButton from '@/components/cSideBarCategoryButton/index.vue';

export default {
  name: 'cSideBar',
  props: {},
  components: { cSideBarCategoryButton },
  data: function() {
    return {
      socialData: [
        {
          icon: ['fab', 'linkedin'],
          methodName: () => {
            this.onLinkedIn();
          },
        },
        {
          icon: ['fab', 'github-square'],
          methodName: () => {
            this.onGithub();
          },
        },
        {
          icon: ['far', 'envelope'],
          methodName: () => {
            this.onMail();
          },
        },
      ],
      categoryData: {
        names: ['Contact', 'About', 'Articles', 'Projects'],
      },
    };
  },
  methods: {
    onPushHandler: function(nextName) {
      if (this.$route.name === nextName) {
        return;
      }

      this.$router.push({
        name: `${nextName}`,
      });
    },
    onLinkedIn: function() {
      console.log('-- onLinkedIn --');
      window.open('https://www.linkedin.com/in/%E5%8A%9B%E7%B6%AD-%E8%95%AD-b06a09ba/');
    },
    onGithub: function() {
      console.log('-- onGithub --');
      window.open('https://github.com/destiny5420');
    },
    onMail: function() {
      console.log('-- onMail --');
      window.location.href = 'mailto:contact@stackergames.com';
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
