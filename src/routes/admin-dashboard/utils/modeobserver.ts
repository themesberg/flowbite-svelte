export default function () {
	const observer: MutationObserver = new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.attributeName === 'class') {
				const dark = document.documentElement.classList.contains('dark');
				const event = new CustomEvent('dark', { detail: dark });
				document.dispatchEvent(event);
			}
		}
	});

	observer.observe(document.documentElement, {
		attributes: true,
		childList: false,
		subtree: false
	});

	return () => observer.disconnect();
}
