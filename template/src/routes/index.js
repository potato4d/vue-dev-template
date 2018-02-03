import Vue from 'vue'
import IndexComponent from '@/pages/index.vue'
import ChildComponent from '@/pages/child.vue'

export default [
  { path: '/', component: IndexComponent },
  { path: '/child', component: ChildComponent }
]
