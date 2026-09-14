<script>
	import Tombstone from '$lib/components/icons/Tombstone.svelte';
	import CrossedBones from '$lib/components/icons/CrossedBones.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-dashed border-stone-300 dark:border-stone-700">
	<div class="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
		<div class="flex items-start gap-3">
			<Tombstone class="mt-0.5 size-8 shrink-0 -rotate-3 text-rose-700 dark:text-rose-400" epitaph="RIP" />
			<div>
				<p class="font-mono text-xs text-stone-600 dark:text-stone-400">
					Here lies the sprint. The work continues.
				</p>
				<p class="mt-1 font-mono text-xs text-stone-400 dark:text-stone-500">
					A post-mortem for corporate Agile. Built for people who still ship.
				</p>
			</div>
		</div>
		<div class="flex items-center gap-2 font-mono text-xs text-stone-400 dark:text-stone-500">
			<CrossedBones class="size-3.5" />
			<span>© {year} deathofagile.com</span>
		</div>
	</div>
</footer>
