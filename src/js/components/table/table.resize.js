import {$} from '../../core/dom'


export function resizeHandler($root, event) {
	const $resizer = $(event.target);
	const type = $resizer.data.resize;
	$resizer.css({ opacity: 1 });
	let value = null;

	const $resizableParent = $resizer.closest('[data-type^="resizable"]');
	const $document = $(document);
	const coords = $resizableParent.getCoords();

	const cellsCol = $root.findAllEl(`[data-col="${$resizableParent.data.col}"]`);



	document.onmousemove = e => {
		if (type === 'col') {
			const delta = Math.floor(e.clientX - coords.right);
			value = delta;

			$resizer.css({
				right: `${-value - 5}px`,
				zIndex: 1000,
				height: `${parseInt(getComputedStyle($root.$nativeEl).height) - 38}px`,
			});

		} else if (type === 'row') {
			const delta = Math.floor(e.clientY - coords.bottom);
			value = delta;

			$resizer.css({
				bottom: `${-value - 1}px`,
				zIndex: 1000,
				width: `${getComputedStyle($root.$nativeEl).width}`,
			});
		}
	};

	document.onmouseup = e => {
		if (type === 'col') {

			$resizableParent.css({ width: `${value + coords.width}px` });
			cellsCol.forEach((el) => el.style.width = `${value + coords.width}px`);

			$resizer.css({
				opacity: "",
				zIndex: "",
				height: "",
				right: "-1px",
			});

		} else if (type === 'row') {
			console.log(`onmouseup value ${value}`);
			$resizableParent.css({ height: `${value + coords.height}px` });

			$resizer.css({
				opacity: "",
				zIndex: "",
				height: "",
				bottom: "-1px",
			});
		}

		document.onmousemove = null;
		document.onmouseup = null;
	};
};