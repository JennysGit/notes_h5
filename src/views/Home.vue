<template>
  <div class="home">
    <div class="editor-container">
      <editor :value="notes" ref="editor" />
    </div>
    <cube-button type="submit" @click="save">Submit Button</cube-button>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Editor from '@/components/editor/editor.vue'; // @ is an alias to /src

@Component({
    components: {
        Editor,
    }
})
export default class Home extends Vue {
    public notes: any = '';

    mounted() {
        let data = sessionStorage.getItem('notes');
        if (data.length > 0) {
            this.notes = data;
        }
    }

    public save(): void {
        let html = this.$refs.editor.getEditorHtml();
        sessionStorage.setItem('notes', html);
        this.$createToast({
            txt: '保存成功',
            type: 'txt'
        }).show();
    }
}
</script>
<style lang="scss" scoped>
  .home {
    padding-top: 10px;
    .editor-container {
      min-height: 400px;
    }
  }
</style>
