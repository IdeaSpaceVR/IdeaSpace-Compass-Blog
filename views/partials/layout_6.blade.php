
@include('theme::partials.layout_5', ['points' => $points])

<a-rounded
    id="post-image-wrapper-3-{{ $blog_post['post-image-3']['#content-id'] }}"
    position="{{ $points[7]['x'] }} 0 {{ $points[7]['z'] }}"
    look-at="0 0 0"
    color="#FFFFFF"
    width="2"
    height="3"
    top-left-radius="0.06"
    top-right-radius="0.06"
    bottom-left-radius="0.06"
    bottom-right-radius="0.06">
    @if ($blog_post['post-image-3']['#mime-type'] == 'image/gif')
    <a-image
        id="post-image-3-{{ $blog_post['post-image-3']['#content-id'] }}"
        position="0 0 0.001"
        shader="gif"
        src="#post-image-3-texture-{{ $blog_post['post-image-3']['#content-id'] }}"
        @if ($blog_post['post-image-3']['#width'] > $blog_post['post-image-3']['#height'])
        width="1.8"
        height="0.9">
        @elseif ($blog_post['post-image-3']['#width'] < $blog_post['post-image-3']['#height'])
        width="1.8"
        height="3.6">
        @else
        width="1.8"
        height="1.8">
        @endif
    </a-image>
    @else
		<a-image
        id="post-image-3-{{ $blog_post['post-image-3']['#content-id'] }}"
        position="0 0 0.001"
        src="#post-image-3-texture-{{ $blog_post['post-image-3']['#content-id'] }}"
        @if ($blog_post['post-image-3']['#width'] > $blog_post['post-image-3']['#height'])
        width="1.8"
        height="0.9">
        @elseif ($blog_post['post-image-3']['#width'] < $blog_post['post-image-3']['#height'])
        width="1.8"
        height="3.6">
        @else
        width="1.8"
        height="1.8">
        @endif
    </a-image>
    @endif
</a-rounded>



