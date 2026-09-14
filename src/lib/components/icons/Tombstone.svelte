<script>
	/** @type {{ class?: string, epitaph?: string }} */
	let { class: className = 'size-6', epitaph = '' } = $props();
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="1.55"
	stroke-linecap="round"
	stroke-linejoin="round"
	class={className}
	aria-hidden="true"
>
	<path d="M5.2 21.2h13.8" />
	<path d="M6.4 21.1V10.4c0-4.1 2.5-7.2 5.7-7.4 3.1-.2 5.6 2.7 5.7 6.9v11.2" />
	<path d="M8.3 21V11.2c.2-2.8 1.6-4.7 3.7-4.9 2.1-.15 3.7 1.7 3.8 4.6V21" />
	{#if epitaph}
		<text
			x="12"
			y="14.2"
			text-anchor="middle"
			fill="currentColor"
			stroke="none"
			class="font-mono"
			font-size="3.4"
			font-weight="600"
			letter-spacing="0.4"
		>
			{epitaph}
		</text>
	{:else}
		<path d="M10.2 12.4h3.7M10.6 14.6h2.8" />
	{/if}
</svg>
