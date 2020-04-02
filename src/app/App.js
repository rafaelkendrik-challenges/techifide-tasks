import Vue from 'vue'
import Plugins from './plugins'

const plugins = Plugins.install(Vue)

function App ({ Shell }) {
  return new Vue({
    render: h => h(Shell),
    ...plugins
  })
    .$mount('#app')
}

export default App
