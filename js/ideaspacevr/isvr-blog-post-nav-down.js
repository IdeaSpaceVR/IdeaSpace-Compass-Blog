AFRAME.registerComponent('isvr-blog-post-nav-down', {


		schema: {
				id: {
            type: 'string'
        },
				cid: {
            type: 'number'
        }
		},
  

    init: function () {

				var self = this;

				this.el.addEventListener('mouseenter', function(evt) {
						document.querySelector('#' + self.data.id).setAttribute('material', 'target', '#navigation-arrow-down-hover-texture');
        });

        this.el.addEventListener('mouseleave', function() {
						document.querySelector('#' + self.data.id).setAttribute('material', 'target', '#navigation-arrow-down-texture');
        });

				this.el.addEventListener('click', function() {
            document.getElementById('posts-wrapper').emit('nav_down_' + self.data.cid);
        });
		}

});

