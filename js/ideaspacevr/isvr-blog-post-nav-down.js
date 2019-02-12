AFRAME.registerComponent('isvr-blog-post-nav-down', {


		schema: {
				id: {
            type: 'string'
        },
				cid: {
            type: 'number'
        },
				url: {
            type: 'string'
        },
				meters: {
            type: 'number'
        },
				posts_per_page: {
            type: 'number'
        },
				total_posts: {
            type: 'number'
        },
				post_counter: {
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

						// total_posts / posts_per_page = possible_pages 	
// TODO trigger post load only one page before
//if (possible_pages >= (current_page + 1)) {
//if (self.data.current_page % 3 != 0 /*&& self.data.current_page != 0*/) {
//if (self.data.current_page % 2 == 0 && self.data.current_page != 0) {
if (self.data.post_counter == 1 || self.data.post_counter == 4) {
console.log('load: ' + self.data.url + '?per-page=' + self.data.posts_per_page + '&page=' + (self.data.post_counter + 1));
						posts.load(self.data.url + '?per-page=' + self.data.posts_per_page + '&page=' + (self.data.post_counter + 1), self.data.meters, self.data.posts_per_page, self.data.total_posts, positions, (self.data.post_counter + 2));
}

            document.getElementById('posts-wrapper').emit('nav_down_' + self.data.cid);
        });
		}

});


