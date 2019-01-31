var posts = {

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
								var textures = document.querySelector('#textures');

								/* post title texture */
								var title_texture = document.createElement('div');
								title_texture.id = 'post-title-texture-' + cid;
								title_texture.dataset.cid = cid;
								title_texture.className = 'post-title-texture';
								title_texture.innerHTML = obj['blog-posts'][i]['post-title-north']['#value'];
								textures.appendChild(title_texture);

								this.createBlogPostTexture('north-east', cid, textures);
								this.createBlogPostTexture('east', cid, textures);
								this.createBlogPostTexture('south-east', cid, textures);
								this.createBlogPostTexture('south', cid, textures);
								this.createBlogPostTexture('south-west', cid, textures);
								this.createBlogPostTexture('west', cid, textures);
								this.createBlogPostTexture('north-west', cid, textures);



								/* animation nav */
								var posts_wrapper = document.querySelector('#posts-wrapper');
								posts_wrapper.setAttribute('animation__nav_up_' + cid, { property: 'position', dur: 1, easing: 'linear', to: '0 ' + ((this.post_counter - 1) * this.meters_between_posts) + ' 0', startEvents: 'nav_up_' + cid });
								posts_wrapper.setAttribute('animation__nav_down_' + cid, { property: 'position', dur: 1, easing: 'linear', to: '0 ' + ((this.post_counter * this.meters_between_posts) + 10) + ' 0', startEvents: 'nav_down_' + cid });
		

								/* post title */




                /*var photosphere_image = new Image();
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
                photosphere_image.src = obj['photo-spheres'][i]['photo-sphere']['#uri']['#value'];*/

            } /* for */

        } /* if */

    }, /* responseHandler */


		createBlogPostTexture: function (id, cid, textureParent) {

				if (obj['blog-posts'][i]['post-display-' + id]['#value'] == 'text') {

						var texture = document.createElement('div');
						texture.id = 'post-text-' + id + '-texture-' + cid;
						texture.dataset.cid = cid;
						texture.className = 'post-text-' + id + '-texture';
						texture.style.backgroundColor = obj['blog-posts'][i]['post-text-image-background-color-' + id]['#value'];
						texture.innerHTML = obj['blog-posts'][i]['post-text-' + id]['#value'];
						textures.appendChild(texture);

				} else if (obj['blog-posts'][i]['post-display-' + id]['#value'] == 'link') {

						var texture = document.createElement('div');
						texture.id = 'post-link-' + id + '-texture-' + cid;
						texture.dataset.cid = cid;
						texture.className = 'post-link-' + id + '-texture';
						texture.style.backgroundColor = obj['blog-posts'][i]['post-text-image-background-color-' + id]['#value'];
						if (obj['blog-posts'][i]['post-link-text-' + id]['#value'].trim() != '') {
								texture.innerHTML = obj['blog-posts'][i]['post-link-text-' + id]['#value'];
						} else if (obj['blog-posts'][i]['post-link-' + id]['#value'].trim() != '') {
								texture.innerHTML = obj['blog-posts'][i]['post-link-' + id]['#value'];
						}
						textures.appendChild(texture);

						texture = document.createElement('div');
						texture.id = 'post-link-' + id + '-texture-' + cid + '-active';
						texture.dataset.cid = cid;
						texture.className = 'post-link-' + id + '-texture';
						texture.style.color = '#0080e5'; 
						texture.style.backgroundColor = obj['blog-posts'][i]['post-text-image-background-color-' + id]['#value'];
						if (obj['blog-posts'][i]['post-link-text-' + id]['#value'].trim() != '') {
								texture.innerHTML = obj['blog-posts'][i]['post-link-text-' + id]['#value'];
						} else if (obj['blog-posts'][i]['post-link-' + id]['#value'].trim() != '') {
								texture.innerHTML = obj['blog-posts'][i]['post-link-' + id]['#value'];
						}
						textures.appendChild(texture);

				} else if (obj['blog-posts'][i]['post-display-' + id]['#value'] == 'image') {

						var texture = document.createElement('img');
						texture.id = 'post-image-' + id + '-texture-' + cid;
						texture.dataset.cid = cid;
						texture.className = 'post-image-' + id + '-texture';
						texture.src = obj['blog-posts'][i]['post-image-' + id]['#uri']['#value'];
						texture.crossOrigin = 'anonymous';
						textures.appendChild(texture);
				}

		}


};


