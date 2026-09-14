<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { initTheme } from '$lib/theme.svelte.js';

	let { children } = $props();

	$effect(() => {
		return initTheme();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Death of Agile</title>
	<meta
		name="description"
		content="A post-mortem for traditional corporate Agile and a proposal for AI-centric software development."
	/>
</svelte:head>

<div class="flex min-h-dvh flex-col">
	<Header />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>
