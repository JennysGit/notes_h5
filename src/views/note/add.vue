<template>
  <div class="add">
    <div class="editor-container">
      <editor v-model="notes" ref="editor" placeholder="请说点儿什么吧..." />
    </div>
    <cube-button type="submit" @click="save">提交</cube-button>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Editor from '@/components/editor/editor.vue'; // @ is an alias to /src
import StorageService from '@/common/util/StorageService';

@Component({
    components: {
        Editor,
    },
})
export default class Home extends Vue {
    public notes: any = '';

    public mounted() {
        const data = StorageService.getLocalStorage('notes');
        if (data) {
            this.notes = data;
        }
    }

    public save(): void {
        const editor: any = this.$refs.editor;
        const html = editor.getEditorHtml();
        if (html.length > 0) {
            let list = StorageService.getLocalStorage('notes-list');
            if (list) {
                list = JSON.parse(list);
            } else {
                list = [];
            }
            list.push({
                id: Date.now().toString(),
                content: html,
                time: Date.now()
            });
            StorageService.setLocalStorage('notes-list', JSON.stringify(list));
            this.$createToast({txt: '保存成功', type: 'txt'}).show();
        }

    }
}
</script>

<style lang="scss" scoped>
  .add {
    padding-top: 15px;
    .editor-container {
      min-height: 400px;
    }
  }
</style>
