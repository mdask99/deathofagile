<script>
	/** @type {{ class?: string }} */
	let { class: className = 'size-6' } = $props();
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
	<path d="M8.2 3.4h7.5l3.4 5.6-2.6 11.6H7.5L4.8 9Z" />
	<path d="M8.6 4.6h6.7" />
	<path d="M12 8.2v7.4M9.4 11.9h5.3" />
	<path d="M7.2 20.5h9.7" />
</svg>
