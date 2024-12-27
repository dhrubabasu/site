export const debounce = <T extends (...args: any[]) => void>(func: T): (() => void) => {
	let timeout: number;
	return function (this: any) {
		const context = this;
		const args = Array.from(arguments);

		if (timeout) {
			window.cancelAnimationFrame(timeout);
		}

		timeout = window.requestAnimationFrame(function () {
			func.apply(context, args);
		});
	};
};
