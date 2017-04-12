<template>
  <div class="home" id="home">
    <p class="example-list-item" v-for="item in list" v-text="item"></p>
    <infinite-loading :on-infinite="onInfinite" :distance="distance" ref="infiniteLoading"></infinite-loading>
  </div>
</template>

<script>
// mounted 钩子函数  这里去请求豆瓣数据
import InfiniteLoading from 'vue-infinite-loading';

export default {
  name: 'home',
  data () {
    return {
      distance: 100,
      list: []
    }
  },
  components: {
    InfiniteLoading,
  },
  methods: {
    onInfinite: function () {
      if (this.list.length > 200) {
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
      } else {
        setTimeout(function () {
          var temp = [];
          for (var i = this.list.length; i <= this.list.length + 20; i++){
            temp.push(i);
          }
          this.list = this.list.concat(temp);
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
        }.bind(this), 1000);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.example-list-item{
  margin: 0;
  padding: 0 10px;
  font-size: 30px;
  line-height: 40px;
  color: #666;
  background-color: #fafafa;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #e3e3e3;
}
.example-list-item::before{
  content: 'Line: ';
}
</style>