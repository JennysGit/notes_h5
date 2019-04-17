<template>
  <div class="home">
    <cube-button :inline="true" icon="cubeic-delete" @click="confirmDelete">清空列表</cube-button>
    <notes-list :data="notesList"></notes-list>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import NotesList from '../note/list'; // @ is an alias to /src
import StorageService from '@/common/util/StorageService';

@Component({
    components: {
        NotesList,
    },
})
export default class Home extends Vue {
    public notesList: object[] = [];

    public mounted() {
        const data = StorageService.getLocalStorage('notes-list');
        if (data) {
            this.notesList = JSON.parse(data);
        }
    }

    private confirmDelete() {
        this.$createDialog({
            type: 'confirm',
            icon: 'cubeic-alert',
            title: '删除确认',
            content: '确认要清空所有记录吗？',
            onConfirm: () => {
                StorageService.removeLocalStorage('notes-list')
                this.notesList = [];
                this.$createToast({
                    type: 'success',
                    time: 1000,
                    txt: '删除成功'
                }).show()
            }
        }).show()
    }
}
</script>

<style lang="scss" scoped>
  .home {
    padding-top: 15px;
    .editor-container {
      min-height: 400px;
    }
  }
</style>
