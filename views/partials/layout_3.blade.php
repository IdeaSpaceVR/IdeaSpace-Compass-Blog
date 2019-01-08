
@include('theme::partials.layout_2', ['points' => $points])

<a-rounded
    id="post-image-wrapper-1-{{ $blog_post['post-image-1']['#content-id'] }}"
    position="{{ $points[4]['x'] }} 0 {{ $points[4]['z'] }}"
		look-at="0 0 0"
    color="#FFFFFF"
    width="2"
    height="3"
    top-left-radius="0.06"
    top-right-radius="0.06"
    bottom-left-radius="0.06"
    bottom-right-radius="0.06">
    @if ($blog_post['post-image-1']['#mime-type'] == 'image/gif')
    <a-image
        id="post-image-1-{{ $blog_post['post-image-1']['#content-id'] }}"
        position="0 0 0.001"
        shader="gif"
        src="#post-image-1-texture-{{ $blog_post['post-image-1']['#content-id'] }}"
        @if ($blog_post['post-image-1']['#width'] > $blog_post['post-image-1']['#height'])
        width="1.8"
        height="0.9">
        @elseif ($blog_post['post-image-1']['#width'] < $blog_post['post-image-1']['#height'])
        width="1.8"
        height="3.6">
        @else
        width="1.8"
        height="1.8">
        @endif
    </a-image>
    @else
    <a-image
        id="post-image-1-{{ $blog_post['post-image-1']['#content-id'] }}"
        position="0 0 0.001"
        src="#post-image-1-texture-{{ $blog_post['post-image-1']['#content-id'] }}"
        @if ($blog_post['post-image-1']['#width'] > $blog_post['post-image-1']['#height'])
        width="1.8"
        height="0.9">
        @elseif ($blog_post['post-image-1']['#width'] < $blog_post['post-image-1']['#height'])
        width="1.8"
        height="3.6">
        @else
        width="1.8"
        height="1.8">
        @endif
    </a-image>
    @endif
</a-rounded>


