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
	<path
		d="M6.8 10.2c-.3-3.6 2.1-7 5.6-7.3 3.6-.3 6.5 2.4 6.6 5.9.1 1.7-.5 3.2-1.4 4.3l.1 2.4c.05.9-.7 1.7-1.6 1.7H9.2c-.85 0-1.55-.75-1.5-1.6l.15-2.1c-1-1.2-1.7-2.8-2.05-3.3Z"
	/>
	<ellipse cx="9.5" cy="10.7" rx="1.45" ry="1.75" />
	<ellipse cx="14.7" cy="10.45" rx="1.35" ry="1.65" />
	<path d="M11.1 13.2c.45.75 1.35.85 1.85.05" />
	<path d="M9.4 16.85v1.85M12 17.05v2.05M14.5 16.75v1.7" />
	<path d="M8.6 8.2c.4-.55 1-.8 1.6-.7M14.2 7.85c.55-.35 1.15-.4 1.7-.1" />
</svg>
