
<a-rounded 
		id="post-text-wrapper-0-{{ $blog_post['post-text-0']['#content-id'] }}"
		position="{{ $points[1]['x'] }} 0 {{ $points[1]['z'] }}" 
		color="#FFFFFF" 
		look-at="0 0 0" 
		width="2" 
		height="3"
		top-left-radius="0.06" 
		top-right-radius="0.06" 
		bottom-left-radius="0.06" 
		bottom-right-radius="0.06">
		<a-entity
				id="post-text-0-{{ $blog_post['post-text-0']['#content-id'] }}"
    		geometry="primitive: plane; width: 1.8"
        position="0 0 0.001"
        material="shader: html; target: #post-text-0-texture-{{ $blog_post['post-text-0']['#content-id'] }}; transparent: true; ratio: width">
    </a-entity>
</a-rounded>

