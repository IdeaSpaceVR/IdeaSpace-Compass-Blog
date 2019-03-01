AFRAME.registerComponent('isvr-text-nav', {


		bindMethods: function () {

				this.mouse_wheel_handler = this.mouse_wheel_handler.bind(this);
				this.mouseenter_handler = this.mouseenter_handler.bind(this);
				this.mouseleave_handler = this.mouseleave_handler.bind(this);

				//this.stateadded_handler = this.stateadded_handler.bind(this);
				this.thumbupstart_handler = this.thumbupstart_handler.bind(this);
				this.thumbupend_handler = this.thumbupend_handler.bind(this);
				this.thumbdownstart_handler = this.thumbdownstart_handler.bind(this);
				this.thumbdownend_handler = this.thumbdownend_handler.bind(this);
		},


    init: function () {

				this.bindMethods();

				this.tcup_delta = -0.05; 
				this.tcdown_delta = 0.05; 
				this.thumbupstart = false;
				this.thumbdownstart = false;
				this.last_time = 0;

				this.scrollupstop = true;
				this.scrolldownstop = false;

				this.el.addEventListener('mouseenter', this.mouseenter_handler); 
				this.el.addEventListener('mouseleave', this.mouseleave_handler); 

				window.isvr_text_nav_mw_listenerset = false;
				window.isvr_text_nav_tc_listenerset = false;

				/* listen to entered-vr state */
				//this.el.sceneEl.addEventListener('stateadded', this.stateadded_handler);
		},

		
		/*stateadded_handler: function(e) {

				if (e.detail == 'entered-vr') {
				}
		},*/


		thumbupstart_handler: function (e) {
				this.thumbupstart = true;
		},


		thumbupend_handler: function (e) {
				this.thumbupstart = false;
		},


		thumbdownstart_handler: function (e) {
				this.thumbdownstart = true;
		},


		thumbdownend_handler: function (e) {
				this.thumbdownstart = false;
		},


		tick: function (time) {

				if (!this.last_time || time - this.last_time >= 30) {

						this.last_time = time;

				if (this.thumbupstart == true) {

						var positionTmp = this.positionTmp = this.positionTmp || {x: 0, y: 0, z: 0};

						var pos = this.el.getAttribute('position');
						var height = this.el.getAttribute('height');

						/* top end */
						if (-((height / 2) - 0.5) < pos.y) {
								positionTmp.x = pos.x; 
								positionTmp.y = (pos.y + this.tcup_delta); 
								positionTmp.z = pos.z; 
								this.el.setAttribute('position', positionTmp);
						}
				}

				if (this.thumbdownstart == true) {

						var positionTmp = this.positionTmp = this.positionTmp || {x: 0, y: 0, z: 0};

						var pos = this.el.getAttribute('position');
						var height = this.el.getAttribute('height');

						/* bottom end */
						if (((height / 2) - 0.5) > pos.y) {
								positionTmp.x = pos.x; 
								positionTmp.y = (pos.y + this.tcdown_delta); 
								positionTmp.z = pos.z; 
								this.el.setAttribute('position', positionTmp);
						}
				}
				}
		},


		mouseenter_handler: function (e) {

				if (window.isvr_text_nav_mw_listenerset == false) {

						/* IE9, Chrome, Safari, Opera */
						window.addEventListener('mousewheel', this.mouse_wheel_handler, false);
						/* Firefox */
						window.addEventListener('DOMMouseScroll', this.mouse_wheel_handler, false);

						window.isvr_text_nav_mw_listenerset = true;
				}

				if (this.el.sceneEl.is('entered-vr') && window.isvr_text_nav_tc_listenerset == false) {

						var laser_controls = document.querySelectorAll('.laser-controls');
						if (laser_controls != null) {
								for (var i = 0; i < laser_controls.length; i++) {

										laser_controls[i].addEventListener('thumbupstart', this.thumbupstart_handler, false);
										laser_controls[i].addEventListener('thumbupend', this.thumbupend_handler, false);
										laser_controls[i].addEventListener('thumbdownstart', this.thumbdownstart_handler, false);
										laser_controls[i].addEventListener('thumbdownend', this.thumbdownend_handler, false);

										window.isvr_text_nav_tc_listenerset = true;
								}
						}
				}
		},


		mouseleave_handler: function (e) {

				if (window.isvr_text_nav_mw_listenerset == true) {

						/* IE9, Chrome, Safari, Opera */
						window.removeEventListener('mousewheel', this.mouse_wheel_handler, false);
						/* Firefox */
						window.removeEventListener('DOMMouseScroll', this.mouse_wheel_handler, false);

						window.isvr_text_nav_mw_listenerset = false;
				}

				if (this.el.sceneEl.is('entered-vr') && window.isvr_text_nav_tc_listenerset == true) {

						var laser_controls = document.querySelectorAll('.laser-controls');
						if (laser_controls != null) {
								for (var i = 0; i < laser_controls.length; i++) {

										laser_controls[i].removeEventListener('thumbupstart', this.thumbupstart_handler, false);
										laser_controls[i].removeEventListener('thumbupend', this.thumbupend_handler, false);
										laser_controls[i].removeEventListener('thumbdownstart', this.thumbdownstart_handler, false);
										laser_controls[i].removeEventListener('thumbdownend', this.thumbdownend_handler, false);

										window.isvr_text_nav_tc_listenerset = false;
								}
						}
				}
		},

		
		mouse_wheel_handler: function (e) {

				var e = window.event || e; 
		    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
				delta = delta / 4;
				delta *= -1; /* change scroll direction */

				var pos = this.el.getAttribute('position');
				var height = this.el.getAttribute('height');


				/* top end */
				if (-((height / 2) - 0.5) < pos.y && this.scrollupstop == false && this.scrolldownstop == true) {
						this.el.setAttribute('position', { x: pos.x, y: (pos.y + delta), z: pos.z });
//console.log('in 2');
				} else {
//						this.el.setAttribute('position', { x: pos.x, y: (pos.y + 0.01), z: pos.z });
this.scrollupstop = true;
this.scrolldownstop = false;
				}


				/* bottom end */
				if (((height / 2) - 0.5) > pos.y && this.scrolldownstop == false && this.scrollupstop == true) {
						this.el.setAttribute('position', { x: pos.x, y: (pos.y + delta), z: pos.z });
				} else {
//						this.el.setAttribute('position', { x: pos.x, y: (pos.y - 0.01), z: pos.z });
this.scrolldownstop = true;
this.scrollupstop = false;
				}

    		return false;
		}

});

