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


if (window.innerWidth > 950) {
	window.onload = function () {
		var left = document.querySelector('.left');
		var right = document.querySelector('.right');

		function equalHeight() {
			left.style.height = 'auto';
			right.style.height = 'auto';
			var leftH = left.offsetHeight;
			var rightH = right.offsetHeight;
			var max = Math.max(leftH, rightH);
			left.style.height = max + 'px';
			right.style.height = max + 'px';
		}
		equalHeight();
		window.onresize = equalHeight;

	};
}

(function Accordion() {
	// var title = document.getElementsByClassName('accordion-title');
	//
	// for (var i = 0; i < title.length; i++) {
	//     title[i].addEventListener('click', function () {
	//         if (!(this.classList.contains('active'))) {
	//             for (var i = 0; i < title.length; i++) {
	//                 title[i].classList.remove('active');
	//             }
	//             this.classList.add('active');
	//         }
	//     })
	// }

	// for (var i = 0; i < title.length; i++) {
	// 	var curTitle = title[i];
	// 	title[i].addEventListener('click', function () {
	// 		var classes = this.getAttribute('class'),
	// 			newClasses = '',
	// 			classesArr = classes.split(' '),
	// 			newClassesArr = classes.split(' ');
	// 		for (var j = 0; j < classesArr.length; j++) {
	// 			if (classesArr[j] == 'active') {
	// 				classesArr.splice([j], 1);
	// 			}
	// 		}
	// 		if (classesArr.length === newClassesArr.length) {
	// 			classesArr.push('active');
	// 			newClasses = classesArr.join(' ');
	// 		} else {
	// 			newClasses = classesArr.join(' ');
	// 		}

	// 		for (var l = 0; l < title.length; l++) {
	// 			oldClasses = title[l].getAttribute('class');
	// 			oldClassesArr = oldClasses.split(' ');
	// 			for (var k = 0; k < oldClassesArr.length; k++) {
	// 				if (oldClassesArr[k] == 'active') {
	// 					oldClassesArr.splice([k], 1);
	// 				}
	// 				oldClasses = oldClassesArr.join(' ');
	// 				title[l].setAttribute('class', oldClasses);

	// 			}
	// 		}
	// 		this.setAttribute('class', newClasses);
	// 	})
	// }

	//приведение в нормальный вид массива
	const [...acocrdion_containers] = document.querySelectorAll('[data-accordion]');

	acocrdion_containers.forEach((accordion) => {
		const [...accordion_titles] = accordion.querySelectorAll('.accordion-title');

		accordion_titles.forEach((title) => {
			title.addEventListener('click', () => open(title, accordion_titles))
		})
	});

	function open(title, siblings) {
		siblings.forEach(item => item.classList.remove('active'));
		title.classList.add('active');
	}
})();

//Burger
// (() => {
// 	const burger_button = document.querySelector('.burger-button');
// 	const left_container = document.querySelector('.left-container');
// 	burger_button.addEventListener('click', () => left_container.classList.toggle('show'));

// 	//copy icons
// 	let icons = document.querySelector('.icon-bar');
// 	if (!left_container.querySelector('.icon-bar')) {
// 		left_container.appendChild(icons.cloneNode(true))
// 	}
// })();

$(document).ready(function () {
	const burger_button = $('.burger-button');
	const left_container = $('.left-container');
	burger_button.click(function () {
		left_container.toggleClass('show');
		$('.slider-header').toggle();
	});

	let icons = $('.icon-bar');
	if (left_container.children(icons == false)) {
		left_container.append(icons);
	}
});

// 



// 
$('.menu-btn').on('click', function (e) {
	e.preventDefault();
	$(this).toggleClass('menu-btn_active');
	$('.menu-nav').toggleClass('menu-nav_active');
});