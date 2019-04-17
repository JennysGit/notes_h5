<template>
  <div class="notes-container">
    <div class="note-item" v-for="item in  data" :key="item.id" @click="goDetail(item.id)">
      <div class="note-content" v-html="item.content"></div>
      <div class="note-time">
        {{item.time | datetime}}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class NotesList extends Vue {
    @Prop() private data!: object[];

    private goDetail(id) {
        this.$router.push({
            name: 'detail',
            params: {id: id}
        })
    }
}
</script>
<style lang="scss">
  .notes-container {
    .note-item {
      margin-bottom: 10px;
      border-bottom: 1px solid #f1f1f1;
      padding: 10px 0px;
      line-height: 1.4;
      .note-content {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-height: 22px;
      }
      .note-time {
        color: #999;
        font-size: 14px;
      }
    }
  }
</style>