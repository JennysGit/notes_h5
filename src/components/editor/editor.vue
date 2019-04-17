<template>
  <div class="html-editor">
    <div id="htmlEditor"
         class="html-editor-content"
         contenteditable="true"
         v-html="value"
         :placeholder="placeholder">
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Editor extends Vue {
    @Prop() private value!: string;
    @Prop() private placeholder!: string;

    public getEditorHtml(): string {
        const editor = document.getElementById('htmlEditor');
        if (editor) {
            return editor.innerHTML;
        }
        return '';
    }
}
</script>
<style scoped lang="scss">
  .html-editor {
    line-height: 30px;
    position: relative;
    z-index: 1;
    .html-editor-content {
      min-height: 500px;
    }
    .html-editor-content:empty:before {
      content: attr(placeholder);
      color: #999;
      font-size: 14px;
    }
  }

  .editor-place-holder {
    position: absolute;
    top: 3px;
    left: 0;
    color: #999999;
    z-index: 0;
  }
</style>