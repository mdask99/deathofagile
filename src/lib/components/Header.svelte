<script>
	import { page } from '$app/state';
	import { nav } from '$lib/nav.js';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import Skull from '$lib/components/icons/Skull.svelte';
	import CrossedBones from '$lib/components/icons/CrossedBones.svelte';

	let open = $state(false);

	function isActive(href) {
		return href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
	}

	$effect(() => {
		page.url.pathname;
		open = false;
	});
</script>

<header
	class="sticky top-0 z-40 border-b border-dashed border-stone-300/90 bg-stone-50/90 backdrop-blur-md dark:border-stone-700/80 dark:bg-stone-950/90"
>
	<div class="mx-auto flex min-h-16 max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
		<a
			href="/"
			class="flex shrink-0 items-center gap-2 font-mono text-sm font-semibold tracking-tight text-stone-950 dark:text-stone-50"
		>
			<Skull class="size-5 text-rose-600 dark:text-rose-400" />
			death of agile
		</a>

		<nav class="hidden items-center gap-4 md:flex" aria-label="Primary">
			{#each nav as item}
				<a
					href={item.href}
					class="inline-flex items-center gap-1.5 font-mono text-xs tracking-wide transition-colors {isActive(item.href)
						? 'text-stone-950 dark:text-white'
						: 'text-stone-500 hover:text-stone-950 dark:text-stone-400 dark:hover:text-white'}"
				>
					{#if isActive(item.href)}
						<CrossedBones class="size-3.5 text-rose-600 dark:text-rose-400" />
					{/if}
					{item.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-2">
			<ThemeToggle />
			<button
				type="button"
				class="inline-flex size-9 items-center justify-center rounded-full border border-dashed border-stone-400 text-stone-700 md:hidden dark:border-stone-600 dark:text-stone-200"
				aria-expanded={open}
				aria-controls="mobile-nav"
				aria-label="Toggle navigation"
				onclick={() => (open = !open)}
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" class="size-4" aria-hidden="true">
					{#if open}
						<path d="M6 6l12 12M18 6L6 18" />
					{:else}
						<path d="M4 7h16M4 12h16M4 17h16" />
					{/if}
				</svg>
			</button>
		</div>
	</div>

	{#if open}
		<nav
			id="mobile-nav"
			class="border-t border-dashed border-stone-300 px-4 py-3 md:hidden dark:border-stone-700"
			aria-label="Mobile"
		>
			<ul class="flex flex-col gap-1">
				{#each nav as item}
					<li>
						<a
							href={item.href}
							class="flex items-center gap-2 rounded-full px-3 py-2 font-mono text-sm {isActive(item.href)
								? 'text-stone-950 dark:text-white'
								: 'text-stone-700 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-900'}"
						>
							{#if isActive(item.href)}
								<CrossedBones class="size-3.5 text-rose-600 dark:text-rose-400" />
							{/if}
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	{/if}
</header>
