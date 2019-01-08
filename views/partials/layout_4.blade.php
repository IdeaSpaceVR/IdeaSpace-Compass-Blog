
@include('theme::partials.layout_3', ['points' => $points])

<a-rounded
    id="post-text-wrapper-2-{{ $blog_post['post-text-2']['#content-id'] }}"
    position="{{ $points[5]['x'] }} 0 {{ $points[5]['z'] }}"
    look-at="0 0 0"
    color="#FFFFFF"
    width="2"
    height="3"
    top-left-radius="0.06"
    top-right-radius="0.06"
    bottom-left-radius="0.06"
    bottom-right-radius="0.06">
    <a-entity
        id="post-text-2-{{ $blog_post['post-text-2']['#content-id'] }}"
        geometry="primitive: plane; width: 1.8"
        position="0 0 0.001"
        material="shader: html; target: #post-text-2-texture-{{ $blog_post['post-text-2']['#content-id'] }}; transparent: true; ratio: width">
    </a-entity>
</a-rounded>

