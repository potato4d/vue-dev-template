import ViewComponent from '~/pages/_view.vue'
import IndexComponent from '~/pages/index.vue'
import ChildComponent from '~/pages/child.vue'
export default [
  {
    path: '/',
    component: ViewComponent,
    children: [
      { path: 'child', component: ChildComponent },
      { path: '', component: IndexComponent }
    ]
  }
]
