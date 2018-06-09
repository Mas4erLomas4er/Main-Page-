// window.onload = () => {

// 	const changeHeight = (item, parent) => {
// 		const [...mediaItem] = document.getElementsByClassName(item);
// 		if (!mediaItem.length) return;

// 		let maxHeight = 0;

// 		mediaItem.forEach(childDiv => {
// 			if (childDiv.parentElement === parent) {
// 				if (maxHeight < childDiv.offsetHeight || maxHeight < childDiv.clientHeight) {
// 					maxHeight = (childDiv.offsetHeight || childDiv.clientHeight);
// 				}
// 				setTimeout(() => childDiv.style.height = maxHeight + 'px', 0);
// 			}
// 		});
// 		//console.log(maxHeight);
// 	};

// 	const [...container] = document.getElementsByClassName('wrapper');

// 	container.forEach(parentDiv => {
// 		if (parentDiv.children) {
// 			changeHeight('main-content', parentDiv);
// 		}
// 	})
// };




// /*window.onload = function () {
// 	var left = document.querySelector('.left');
// 	var right = document.querySelector('.right');

// 	function equalHeight() {
// 		left.style.height = 'auto';
// 		right.style.height = 'auto';
// 		var leftH = left.offsetHeight;
// 		var rightH = right.offsetHeight;
// 		var max = Math.max(leftH, rightH);
// 		left.style.height = max + 'px';
// 		right.style.height = max + 'px';
// 	}
// 	equalHeight();
// 	window.onresize = equalHeight;

// }
// */


