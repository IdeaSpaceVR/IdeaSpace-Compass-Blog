
@include('theme::partials.layout_1', ['points' => $points])

<a-rounded
    id="post-text-wrapper-1-{{ $blog_post['post-text-1']['#content-id'] }}"
		position="{{ $points[3]['x'] }} 0 {{ $points[3]['z'] }}"
		look-at="0 0 0"
    color="#FFFFFF"
    width="2"
    height="3"
    top-left-radius="0.06"
    top-right-radius="0.06"
    bottom-left-radius="0.06"
    bottom-right-radius="0.06">
    <a-entity
        id="post-text-1-{{ $blog_post['post-text-1']['#content-id'] }}"
        geometry="primitive: plane; width: 1.8"
        position="0 0 0.001"
        material="shader: html; target: #post-text-1-texture-{{ $blog_post['post-text-1']['#content-id'] }}; transparent: true; ratio: width">
    </a-entity>
</a-rounded>

