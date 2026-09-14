/** @typedef {'system' | 'light' | 'dark'} ThemePreference */

const STORAGE_KEY = 'theme';

export const theme = $state({
	/** @type {ThemePreference} */
	preference: 'system',
	/** @type {'light' | 'dark'} */
	resolved: 'light'
});

function getSystemTheme() {
	if (typeof window === 'undefined') return 'light';
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * @param {ThemePreference} next
 */
function resolve(next) {
	return next === 'system' ? getSystemTheme() : next;
}

/**
 * @param {'light' | 'dark'} value
 */
function apply(value) {
	if (typeof document === 'undefined') return;
	document.documentElement.classList.toggle('dark', value === 'dark');
}

export function initTheme() {
	if (typeof window === 'undefined') return;

	/** @type {ThemePreference} */
	let stored = 'system';
	try {
		const value = localStorage.getItem(STORAGE_KEY);
		if (value === 'light' || value === 'dark' || value === 'system') {
			stored = value;
		}
	} catch {
		// ignore quota / private mode
	}

	theme.preference = stored;
	theme.resolved = resolve(stored);
	apply(theme.resolved);

	const media = window.matchMedia('(prefers-color-scheme: dark)');
	const onChange = () => {
		if (theme.preference === 'system') {
			theme.resolved = getSystemTheme();
			apply(theme.resolved);
		}
	};

	media.addEventListener('change', onChange);
	return () => media.removeEventListener('change', onChange);
}

export function toggleTheme() {
	const next = theme.resolved === 'dark' ? 'light' : 'dark';
	theme.preference = next;
	theme.resolved = next;
	apply(next);
	try {
		localStorage.setItem(STORAGE_KEY, next);
	} catch {
		// ignore quota / private mode
	}
}
