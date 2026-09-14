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
	<path d="M13.8 3.3c1.1-.4 2.4.3 2.7 1.4.35 1.15-.35 2.35-1.5 2.7L8.2 10.2" />
	<path d="M14.6 5.6 7.4 19.4c-.25.45-.8.65-1.25.45-.5-.2-.7-.8-.4-1.25L12.9 6.5" />
	<path d="M6.1 17.2c1.6.9 3.2.35 4.1-1.15" />
	<path d="M15.4 4.2l1.6-1" />
</svg>
