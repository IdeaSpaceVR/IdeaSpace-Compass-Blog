var posts {

		load: function (u, m, c) {

				this.url = u;
				this.meters_between_posts = m;
				this.post_counter = c;


				this.xmlhttp = new XMLHttpRequest();
				this.xmlhttp.onreadystatechange = this.responseHandler.bind(this);
				this.xmlhttp.open('GET', this.url, true);
				this.xmlhttp.send();

		}, /* load */


		responseHandler: function () {

        var self = this;


        if (this.xmlhttp.readyState == 4 && this.xmlhttp.status == 200) {

            var obj = JSON.parse(this.xmlhttp.responseText);

            for (var i=0; i<obj['blog-posts'].length; i++) {

								var cid = obj['blog-posts'][i]['post-title-north']['#content-id'];

								/* animation nav */
								var posts_wrapper = document.querySelector('#posts-wrapper');
								posts_wrapper.setAttribute('animation__nav_up_' + cid, { property: 'position', dur: 1, easing: 'linear', to: '0 ' + ((this.post_counter - 1) * this.meters_between_posts) + ' 0', startEvents: 'nav_up_' + cid });
								posts_wrapper.setAttribute('animation__nav_down_' + cid, { property: 'position', dur: 1, easing: 'linear', to: '0 ' + ((this.post_counter * this.meters_between_posts) + 10) + ' 0', startEvents: 'nav_down_' + cid });
		

								/* post title */




                var photosphere_image = new Image();
                photosphere_image.onload = (function(content_id, i, length) {
                    return function() {
                        var image_elem = document.createElement('img');

                        image_elem.setAttribute('id', 'img-photosphere-' + content_id);
                        image_elem.setAttribute('class', 'img-photosphere-' + i);
                        image_elem.setAttribute('data-content-id', content_id);
                        image_elem.setAttribute('src', this.src);

                        var assets = document.querySelector('a-assets');
                        assets.appendChild(image_elem);

                        self.all_assets_ready[content_id] = true;
                    }
                }(obj['photo-spheres'][i]['photo-sphere']['#content-id'], i, obj['photo-spheres'].length));
                photosphere_image.src = obj['photo-spheres'][i]['photo-sphere']['#uri']['#value'];

            } /* for */

        } /* if */

    } /* responseHandler */


};


