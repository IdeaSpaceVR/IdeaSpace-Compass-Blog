<a-rounded
    id="post-link-wrapper-{{ $id }}-{{ $blog_post['post-text-' . $id]['#content-id'] }}"
    position="{{ $position['x'] }} 0 {{ $position['z'] }}"
    color="#FFFFFF"
    look-at="0 0 0"
		animation__enter="property: position; dur: 500; to: 0 0 0.1; easing: easeOutElastic; startEvents:isvr_mouseenter"
		animation__leave="property: position; dur: 200; from: 0 0 0.1; to: 0 0 0.0001; startEvents:isvr_mouseleave"
    width="2"
    height="0.5"
    top-left-radius="0.06"
    top-right-radius="0.06"
    bottom-left-radius="0.06"
    bottom-right-radius="0.06">		
		<a-entity
				position="0 0 0.001"
				material="shader: html; target: #post-link-{{ $id }}-texture-{{ $blog_post['post-link-' . $id]['#content-id'] }}; transparent: true; ratio: width"
				@if (isset($blog_post['post-link-' . $id]['#value']) && trim($blog_post['post-link-' . $id]['#value']) != '')
				link="href: {{ $blog_post['post-link-' . $id]['#value'] }}; visualAspectEnabled: false"
				@endif
				geometry="primitive: plane; width: 1.8">
		</a-entity>
</a-rounded>

