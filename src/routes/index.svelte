<script context='module'>
	export async function load({session}) {
		if (!session.authenticated) {
			return {
				status: 302,
				redirect: '/login'
			}
		}
		return {}
	}
</script>

<script>
	import { variables } from '$lib/utils/variables'
	import Home from '$lib/Home.svelte'
</script>

<svelte:head>
	<title>{variables.appName} | Marketplace for the new generation</title>
</svelte:head>

<Home />
