AFRAME.registerComponent('isvr-text-nav', {

		bindMethods: function () {
				/* custom bind: in isvr-helpers.js */
				this.mouse_wheel_handler = bind(this.mouse_wheel_handler, this);
				this.mouseenter_handler = bind(this.mouseenter_handler, this);
				this.mouseleave_handler = bind(this.mouseleave_handler, this);
		},


    init: function () {

				this.bindMethods();

				this.el.addEventListener('mouseenter', this.mouseenter_handler); 
				this.el.addEventListener('mouseleave', this.mouseleave_handler); 

				window.isvr_text_nav_mw_listenerset = false;
				window.isvr_text_nav_tc_listenerset = false;

				/* only in vr */
				/*var laser_controls = document.querySelector('.laser-controls');
				for (var i = 0; i < laser_controls.length; i++) {

						laser_controls[i].addEventListener('thumbupstart', this.thumbupstart_handler);
						laser_controls[i].addEventListener('thumbupend', this.thumbupend_handler);
						laser_controls[i].addEventListener('thumbdownstart', this.thumbdownstart_handler);
						laser_controls[i].addEventListener('thumbdownend', this.thumbdownend_handler);

						window.isvr_text_nav_tc_listenerset = true;
				}*/
		},


		mouseenter_handler: function(e) {

				if (window.isvr_text_nav_mw_listenerset == false) {

						/* IE9, Chrome, Safari, Opera */
						window.addEventListener('mousewheel', this.mouse_wheel_handler, false);
						/* Firefox */
						window.addEventListener('DOMMouseScroll', this.mouse_wheel_handler, false);

						window.isvr_text_nav_mw_listenerset = true;
				}
		},


		mouseleave_handler: function(e) {

				if (window.isvr_text_nav_mw_listenerset == true) {

						/* IE9, Chrome, Safari, Opera */
						window.removeEventListener('mousewheel', this.mouse_wheel_handler, false);
						/* Firefox */
						window.removeEventListener('DOMMouseScroll', this.mouse_wheel_handler, false);

						window.isvr_text_nav_mw_listenerset = false;
				}
		},

		
		mouse_wheel_handler: function(e) {

				var e = window.event || e; 
		    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
				delta = delta / 2;

				var pos = this.el.getAttribute('position');
				var height = this.el.getAttribute('height');

				/* bottom end */
				if (((height / 2) - 1) > pos.y) {
						this.el.setAttribute('position', { x: pos.x, y: (pos.y + delta), z: pos.z });
				} else {
						this.el.setAttribute('position', { x: pos.x, y: (pos.y - 0.5), z: pos.z });
				}

				/* top end */
				if (-((height / 2) - 0.5) < pos.y) {
						this.el.setAttribute('position', { x: pos.x, y: (pos.y + delta), z: pos.z });
				} else {
						this.el.setAttribute('position', { x: pos.x, y: (pos.y + 0.5), z: pos.z });
				}

    		return false;
		}

});

