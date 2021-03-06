<!DOCTYPE html>
<html>
<head>
    <title>@yield('title')</title>

    <link rel="shortcut icon" type="image/png" href="{{ url('favicon.ico') }}"/>

    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta name="apple-mobile-web-app-capable" content="yes"> <!-- Fullscreen Landscape on iOS -->

    <meta name="abstract" content="@yield('title')" />
    <meta name="description" content="@yield('title')" />
    <meta name="keywords" content="" />
    <meta name="copyright" content="" />
    <meta name="robots" content="follow, index" />

    <meta property="og:site_name" content="@yield('title')" />
    <meta property="og:image:secure_url" content="" />
    <meta property="og:image" content="" />
    <meta property="og:description" content="@yield('title')" />
    <meta property="og:title" content="@yield('title')" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ \Request::url() }}" />

    <link rel="stylesheet" href="{{ url($theme_dir . '/css/style.css') }}">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">

		@php
    if (function_exists('embed_fonts')) {
      embed_fonts(true);
    }
    @endphp

    <script src="{{ url($theme_dir . '/js/aframe/aframe-v1.0.3.min.js') }}"></script>
		<script src="{{ url($theme_dir . '/js/aframe-star-system-component/aframe-star-system-component.js') }}"></script>
    <script src="{{ url($theme_dir . '/js/aframe-html-shader/aframe-html-shader.min.js') }}"></script>
    <script src="{{ url($theme_dir . '/js/aframe-gif-shader/aframe-gif-shader.min.js') }}"></script>
    <script src="{{ url($theme_dir . '/js/aframe-rounded-component/aframe-rounded-component.min.js') }}"></script>
    <script src="{{ url($theme_dir . '/js/aframe-thumb-controls/aframe-thumb-controls-component.min.js') }}"></script>
    <script src="{{ url($theme_dir . '/js/a-painter-loader-component/a-painter-loader-component.min.js') }}"></script>
    <script src="{{ url($theme_dir . '/js/howler/howler.min.js') }}"></script>

    <script src="{{ url($theme_dir . '/js/ideaspacevr/isvr-helpers.js') }}"></script>
		<script src="{{ url($theme_dir . '/js/ideaspacevr/isvr-text-nav.js') }}"></script>		
		<script src="{{ url($theme_dir . '/js/ideaspacevr/isvr-blog-post-rotation.js') }}"></script>		
    <script src="{{ url($theme_dir . '/js/ideaspacevr/isvr-load-posts.js') }}"></script>
    <script src="{{ url($theme_dir . '/js/ideaspacevr/isvr-scene.js') }}"></script>
    <script src="{{ url($theme_dir . '/js/ideaspacevr/isvr-link-hover.js') }}"></script>
    <script src="{{ url($theme_dir . '/js/ideaspacevr/isvr-about-link.js') }}"></script>
    <script src="{{ url($theme_dir . '/js/ideaspacevr/isvr-blog-post-nav-up.js') }}"></script>
    <script src="{{ url($theme_dir . '/js/ideaspacevr/isvr-blog-post-nav-down.js') }}"></script>		
</head>
<body>

@yield('scene')

</body>
</html>
