<script>
	import Nav from '$lib/Nav.svelte'
	import { variables } from '$lib/utils/variables'
	import Notification from '$lib/Noti.svelte'

	const year = new Date().getFullYear()

	const apiPath = variables.env === 'development' ? variables.apiDevPath : variables.apiLivePath
</script>

<div class="site">
	<Nav />
	<Notification duration='7000'/>
	<div class="site-content galaxy-bg">
		<slot />
	</div>
	<footer class="text-center">
		<br>&copy {year} {variables.appName}. All rights reserved
		<br><b>API Server: <a href="{apiPath}/api">{apiPath}/api</a></b>
	</footer>
</div>

<style>
	footer {
		margin: .5rem;
		overflow: hidden;
	}

	.galaxy-bg {
		background: url("/img/splashes/milky-way-g34c9b56c6_1920.jpg") no-repeat center center fixed; /* Image Source: https://pixabay.com/photos/milky-way-sky-stars-cosmos-night-4526277/ */
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
	}
</style>
