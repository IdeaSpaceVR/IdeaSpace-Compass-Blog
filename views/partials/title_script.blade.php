var post_title_textures = document.querySelectorAll('.post-title-texture');
for (var i = 0; i < post_title_textures.length; i++) {
		if (post_title_textures[i].getElementsByTagName('span')[0].style.color == 'rgb(0, 0, 0)' || post_title_textures[i].getElementsByTagName('span')[0].style.color == '') {
				post_title_textures[i].getElementsByTagName('span')[0].style.color = 'rgb(255, 255, 255)';
				/* update html shader material */
				document.querySelector('#post-title-' + post_title_textures[i].dataset.cid).components.material.shader.__render();
		}
}
