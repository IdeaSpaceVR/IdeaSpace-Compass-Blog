AFRAME.registerComponent('isvr-about-link', {


		schema: {
		},
  

    init: function () {

				var self = this;

				var soundClick = document.querySelector('#sound-click');

				this.el.addEventListener('mouseenter', function(evt) {
						document.querySelector('#about-link').setAttribute('material', 'target', '#about-link-hover-texture');
        });

        this.el.addEventListener('mouseleave', function() {
						document.querySelector('#about-link').setAttribute('material', 'target', '#about-link-texture');
        });

				this.el.addEventListener('click', function() {

						soundClick.components.sound.stopSound();
            soundClick.components.sound.playSound();

            //document.getElementById('posts-wrapper').emit('nav_down_' + self.data.cid);
        });
		}

});


