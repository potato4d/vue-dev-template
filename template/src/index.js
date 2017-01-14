const Vue = require("vue");
const VueRouter = require("vue-router");
Vue.use(VueRouter);

const App = Vue.extend(require("./App.vue"));

const Fetch = require("./utilities/Fetch");

// Stores

// Components

Vue.component("greeting", require("./components/Greeting.vue"));

// Pages

const Welcomes = {
	index: require("./pages/welcomes/index.vue")
};

// Routing

const routes = [
	{
		path: "/",
		component: Welcomes["index"]
	}
];

const router = new VueRouter({
	routes: routes
});

const app = new Vue({
	el: "#app",
	render: h => h(App),
	router
});
