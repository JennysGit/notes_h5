<template>
  <div class="index">
    <div class="tab-bottom-page">
      <cube-tab-panels v-model="selectedTab">
        <cube-tab-panel label="Home" v-if="selectedTab === 'Home'">
          <home />
        </cube-tab-panel>
        <cube-tab-panel label="Add" v-if="selectedTab === 'Add'">
          <add />
        </cube-tab-panel>
        <cube-tab-panel label="Mine" v-if="selectedTab === 'Mine'">
          <mine />
        </cube-tab-panel>

      </cube-tab-panels>
    </div>
    <cube-tab-bar class="bottom-tab-bar" v-model="selectedTab" :data="tabList"></cube-tab-bar>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Home from '../home/home';
import Mine from '../mine/mine';
import Add from '../note/add'

@Component({
    components: {
        Home,
        Mine,
        Add
    },
})
export default class Index extends Vue {
    private selectedTab: string = 'Add';
    private tabList: object = [{
        label: 'Home',
        icon: 'cubeic-home'
    }, {
        label: 'Add',
        icon: 'cubeic-add'
    }, {
        label: 'Mine',
        icon: 'cubeic-person'
    }];

}
</script>

