var posts = {

		load: function (url, meters, counter, total_posts, positions) {

				this.url = url;
				this.meters_between_posts = meters;
				this.post_counter = counter;
				this.total_posts = total_posts;
				this.positions = positions;

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
								var posts_wrapper = document.querySelector('#posts-wrapper');


								/* posts wrapper animation nav */
								posts_wrapper.setAttribute('animation__nav_up_' + cid, { property: 'position', dur: 1, easing: 'linear', to: '0 ' + ((this.post_counter - 1) * this.meters_between_posts) + ' 0', startEvents: 'nav_up_' + cid });
								posts_wrapper.setAttribute('animation__nav_down_' + cid, { property: 'position', dur: 1, easing: 'linear', to: '0 ' + ((this.post_counter * this.meters_between_posts) + 10) + ' 0', startEvents: 'nav_down_' + cid });


								var post = document.createElement('a-entity');
								post.setAttribute('position', { x: 0, y: -(this.post_counter * this.meters_between_posts), z: 0 }); 
								post.id = 'post-' + cid;
								post.className = 'post post-' + this.post_counter + ' collidable';
								posts_wrapper.appendChild(post);


								/* blog post title textures and entities */	
								this.createBlogPostTitleContent(cid, this.positions, textures, post, obj, i, this.post_counter, this.total_posts);								


								/* blog post textures and entities */
								this.createBlogPostContent('north-east', cid, this.positions[1], textures, post, obj, i);
								this.createBlogPostContent('east', cid, this.positions[2], textures, post, obj, i);
								this.createBlogPostContent('south-east', cid, this.positions[3], textures, post, obj, i);
								this.createBlogPostContent('south', cid, this.positions[4], textures, post, obj, i);
								this.createBlogPostContent('south-west', this.positions[5], cid, textures, post, obj, i);
								this.createBlogPostContent('west', cid, this.positions[6], textures, post, obj, i);
								this.createBlogPostContent('north-west', cid, this.positions[7], textures, post, obj, i);




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


								this.post_counter++;

            } /* for */

        } /* if */

    }, /* responseHandler */


		createBlogPostContent: function (id, cid, position, textureParent, post, obj, i) {

				if (obj['blog-posts'][i]['post-display-' + id]['#value'] == 'text') {

						var texture = document.createElement('div');
						texture.id = 'post-text-' + id + '-texture-' + cid;
						texture.dataset.cid = cid;
						texture.className = 'post-text-' + id + '-texture';
						texture.style.backgroundColor = obj['blog-posts'][i]['post-text-image-background-color-' + id]['#value'];
						texture.innerHTML = obj['blog-posts'][i]['post-text-' + id]['#value'];
						textures.appendChild(texture);

						var wrapper = document.createElement('a-rounded');
						wrapper.id = 'post-text-wrapper-' + id + '-' + cid;
						wrapper.setAttribute('position', { x: position['x'], y: 0, z: position['z'] });
						wrapper.setAttribute('color', obj['blog-posts'][i]['post-text-image-background-color-' + id]['#value']);
						wrapper.setAttribute('look-at', { x: 0, y: 0, z: 0 });
						wrapper.setAttribute('width', 2);
						wrapper.setAttribute('height', 3);
						wrapper.setAttribute('top-left-radius', 0.06);
						wrapper.setAttribute('top-right-radius', 0.06);
						wrapper.setAttribute('bottom-left-radius', 0.06);
						wrapper.setAttribute('bottom-right-radius', 0.06);

						var text = document.createElement('a-entity');
						text.id = 'post-text-' + id + '-' + cid;
						text.setAttribute('geometry', { primitive: 'plane', width: 1.8 });
						text.setAttribute('position', { x: 0, y: 0, z: 0.001 });
						text.setAttribute('material', { shader: 'html', target: '#post-text-' + id + '-texture-' + cid, transparent: true, ratio: 'width' });

						var height_meters = (texture.offsetHeight * wrapper.getAttribute('width')) / texture.offsetWidth;
						wrapper.setAttribute('height', height_meters);
				
						wrapper.appendChild(text);
						post.appendChild(wrapper);

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

						var wrapper_active = document.createElement('a-rounded');
						wrapper_active.id = 'post-link-wrapper2-' + id + '-' + cid;
						if (position['x'] == -3) {
								wrapper_active.setAttribute('position', { x: (position['x'] - 0.001), y: 0, z: position['z'] });
						} else {
								wrapper_active.setAttribute('position', { x: position['x'], y: 0, z: position['z'] });
						}
						wrapper_active.setAttribute('color', '#0080e5');
						wrapper_active.setAttribute('visible', false);
						wrapper_active.setAttribute('look-at', { x: 0, y: 0, z: 0 });
						wrapper_active.setAttribute('width', 2);
						wrapper_active.setAttribute('height', 0.5);
						wrapper_active.setAttribute('top-left-radius', 0.06);
						wrapper_active.setAttribute('top-right-radius', 0.06);
						wrapper_active.setAttribute('bottom-left-radius', 0.06);
						wrapper_active.setAttribute('bottom-right-radius', 0.06);

						var wrapper = document.createElement('a-rounded');
						wrapper.id = 'post-link-wrapper-' + id + '-' + cid;
						wrapper.setAttribute('isvr-link-hover', { id: 'id: post-link-wrapper2-' + id + '-' + cid });
						if (position['z'] < 0) {
								wrapper.setAttribute('position', { x: position['x'], y: 0, z: (position['z'] + 0.001) });
						} else {
								wrapper.setAttribute('position', { x: position['x'], y: 0, z: (position['z'] - 0.001) });
						}
						wrapper.setAttribute('look-at', { x: 0, y: 0, z: 0 });
						wrapper.setAttribute('color', obj['blog-posts'][i]['post-text-image-background-color-' + id]['#value']);
						wrapper.setAttribute('width', 1.95);
						wrapper.setAttribute('height', 0.45);
						wrapper.setAttribute('top-left-radius', 0.06);
						wrapper.setAttribute('top-right-radius', 0.06);
						wrapper.setAttribute('bottom-left-radius', 0.06);
						wrapper.setAttribute('bottom-right-radius', 0.06);

						var link = document.createElement('a-entity');
						link.id = 'post-text-' + id + '-' + cid;
						link.setAttribute('position', { x: 0, y: 0, z: 0.001 });
						link.setAttribute('material', { shader: 'html', target: '#post-link-' + id + '-texture-' + cid, transparent: true, ratio: 'width' });
						if (obj['blog-posts'][i]['post-link-' + id]['#value'].trim() != '') {
								link.setAttribute('link', { href: obj['blog-posts'][i]['post-link-' + id]['#value'], visualAspectEnabled: false });	
						}
						link.setAttribute('geometry', { primitive: 'plane', width: 1.8 });

				} else if (obj['blog-posts'][i]['post-display-' + id]['#value'] == 'image') {

						var texture = document.createElement('img');
						texture.id = 'post-image-' + id + '-texture-' + cid;
						texture.dataset.cid = cid;
						texture.className = 'post-image-' + id + '-texture';
						texture.src = obj['blog-posts'][i]['post-image-' + id]['#uri']['#value'];
						texture.crossOrigin = 'anonymous';
						textures.appendChild(texture);
				}

		}, /* createBlogPostContent */


		createBlogPostTitleContent: function (cid, positions, textures, post, obj, i, post_counter, total_posts) {

				var title_texture = document.createElement('div');
				title_texture.id = 'post-title-texture-' + cid;
				title_texture.dataset.cid = cid;
				title_texture.className = 'post-title-texture';
				title_texture.innerHTML = obj['blog-posts'][i]['post-title-north']['#value']; 
				textures.appendChild(title_texture);

				if (title_texture.getElementsByTagName('span')[0].style.color == 'rgb(0, 0, 0)' || title_texture.getElementsByTagName('span')[0].style.color == '') {
        		title_texture.getElementsByTagName('span')[0].style.color = 'rgb(255, 255, 255)';
				}

				var title = document.createElement('a-entity');			
				title.id = 'post-title-' + cid;
				title.dataset.cid = cid;
				title.setAttribute('geometry', { primitive: 'plane', width: 2 });
				title.setAttribute('position', { x: this.positions[0]['x'], y: 0, z: this.positions[0]['z'] });
				title.setAttribute('look-at', { x: 0, y: 0, z: 0 });
				title.setAttribute('material', { shader: 'html', target: '#post-title-texture-' + cid, transparent: true, ratio: 'width' });

				if (post_counter > 0) {
						var nav_up = document.createElement('a-entity');			
						nav_up.id = 'navigation-arrow-up-' + cid;
						nav_up.className = 'navigation-arrow-up collidable';
						nav_up.setAttribute('isvr-navigation-up', { cid: cid });
						nav_up.setAttribute('isvr-blog-post-nav-up', { id: 'navigation-arrow-up-' + cid });
						nav_up.setAttribute('geometry', { primitive: 'plane', width: 2, height: 2 });
						nav_up.setAttribute('position', { x: -1.15, y: 0, z: -0.001 });
						nav_up.setAttribute('material', { shader: 'html', target: '#navigation-arrow-up-texture', transparent: true, ratio: 'width' });

						title.appendChild(nav_up);
				} else {
						var nav_up = document.createElement('a-entity');			
						nav_up.id = 'navigation-arrow-up-' + cid;
						nav_up.className = 'navigation-arrow-up';
						nav_up.setAttribute('geometry', { primitive: 'plane', width: 2, height: 2 });
						nav_up.setAttribute('position', { x: -1.15, y: 0, z: -0.001 });
						nav_up.setAttribute('material', { shader: 'html', target: '#navigation-arrow-up-inactive-texture', transparent: true, ratio: 'width' });

						title.appendChild(nav_up);
				}

				if ((total_posts - 1) > post_counter) {
						var nav_down = document.createElement('a-entity');			
						nav_down.id = 'navigation-arrow-down-' + cid;
						nav_down.className = 'navigation-arrow-down collidable';
						nav_down.setAttribute('isvr-navigation-down', { cid: cid });
						nav_down.setAttribute('isvr-blog-post-nav-down', { id: 'navigation-arrow-down-' + cid });
						nav_down.setAttribute('geometry', { primitive: 'plane', width: 2, height: 2 });
						nav_down.setAttribute('position', { x: 1.15, y: 0, z: -0.001 });
						nav_down.setAttribute('material', { shader: 'html', target: '#navigation-arrow-down-texture', transparent: true, ratio: 'width' });

						title.appendChild(nav_down);

				} else {
						var nav_down = document.createElement('a-entity');			
						nav_down.id = 'navigation-arrow-down-' + cid;
						nav_down.className = 'navigation-arrow-down';
						nav_down.setAttribute('geometry', { primitive: 'plane', width: 2, height: 2 });
						nav_down.setAttribute('position', { x: 1.15, y: 0, z: -0.001 });
						nav_down.setAttribute('material', { shader: 'html', target: '#navigation-arrow-down-inactive-texture', transparent: true, ratio: 'width' });

						title.appendChild(nav_down);
				}
				
				post.appendChild(title);

		} /* createBlogPostTitleContent */




};


