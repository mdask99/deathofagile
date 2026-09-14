<script>
	import Skull from '$lib/components/icons/Skull.svelte';
	import Tombstone from '$lib/components/icons/Tombstone.svelte';
	import CrossedBones from '$lib/components/icons/CrossedBones.svelte';
	import Coffin from '$lib/components/icons/Coffin.svelte';
	import Shovel from '$lib/components/icons/Shovel.svelte';

	/** @typedef {'skull' | 'tombstone' | 'bones' | 'coffin' | 'shovel'} HeroIcon */

	/** @type {{ kicker: string, title: string, lede: string, icon?: HeroIcon, epitaph?: string }} */
	let { kicker, title, lede, icon = 'tombstone', epitaph = 'RIP' } = $props();
</script>

<section class="relative overflow-hidden border-b border-dashed border-stone-300 dark:border-stone-700">
	<div class="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
		<Tombstone
			class="absolute -right-6 top-6 size-40 rotate-8 text-stone-400/35 dark:text-stone-600/40"
			{epitaph}
		/>
		<Skull class="absolute -bottom-8 -left-4 size-28 -rotate-12 text-stone-400/30 dark:text-stone-600/35" />
		<CrossedBones class="absolute right-1/4 bottom-4 size-16 rotate-[-18deg] text-stone-400/25 dark:text-stone-600/30" />
	</div>

	<div class="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
		<p
			class="inline-flex items-center gap-2 rounded-full border border-dashed border-rose-400/70 bg-stone-50/80 px-3 py-1 font-mono text-xs font-medium text-rose-700 dark:border-rose-500/50 dark:bg-stone-950/70 dark:text-rose-400"
		>
			{#if icon === 'skull'}
				<Skull class="size-3.5" />
			{:else if icon === 'bones'}
				<CrossedBones class="size-3.5" />
			{:else if icon === 'coffin'}
				<Coffin class="size-3.5" />
			{:else if icon === 'shovel'}
				<Shovel class="size-3.5" />
			{:else}
				<Tombstone class="size-3.5" />
			{/if}
			<span>RIP · {kicker}</span>
		</p>
		<h1 class="mt-5 max-w-3xl font-mono text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl dark:text-stone-50">
			{title}
		</h1>
		<p class="mt-5 max-w-2xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
			{lede}
		</p>
	</div>
</section>
