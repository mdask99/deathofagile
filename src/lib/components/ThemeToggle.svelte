<script>
	import { theme, toggleTheme } from '$lib/theme.svelte.js';
	import Skull from '$lib/components/icons/Skull.svelte';

	let isDark = $derived(theme.resolved === 'dark');
</script>

<button
	type="button"
	class="inline-flex size-9 items-center justify-center rounded-full border border-dashed border-stone-400 text-stone-700 transition-colors hover:bg-stone-100 dark:border-stone-600 dark:text-stone-200 dark:hover:bg-stone-800"
	onclick={toggleTheme}
	aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
	aria-pressed={isDark}
>
	{#if isDark}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="size-4" aria-hidden="true">
			<circle cx="12" cy="12" r="4" />
			<path d="M12 3v2M12 19v2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M3 12h2M19 12h2M5.6 18.4 7 17M17 7l1.4-1.4" />
		</svg>
	{:else}
		<Skull class="size-4" />
	{/if}
</button>
