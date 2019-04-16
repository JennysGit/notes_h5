<template>
  <div id="htmlEditor" class="html-editor" contenteditable="true" v-html="value"></div>
</template>
<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class Editor extends Vue {
    @Prop() private value!: string;

    public getEditorHtml(): string {
        var editor = document.getElementById('htmlEditor')
        if (editor) {
            return editor.innerHTML;
        }
        return '';
    }
}
</script>
<style lang="scss">
  .html-editor {

  }
</style>