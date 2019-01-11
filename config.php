<?php

return [

  '#theme-name' => 'IdeaSpace Compass Blog',
  '#theme-key' => 'ideaspace-compass-blog',
  '#theme-version' => '1.0',
  '#ideaspace-version' => '>=1.2.0',
  '#theme-description' => 'Surround yourself with blog posts.',
  '#theme-author-name' => 'IdeaSpaceVR',
  '#theme-author-email' => 'info@ideaspacevr.org',
  '#theme-homepage' => 'https://www.ideaspacevr.org/themes',
  '#theme-keywords' => 'timeline, blog',
  '#theme-view' => 'scene',

  '#content-types' => [

    'general-settings' => [
      '#label' => 'General Settings',
      '#description' => 'Configure your theme.',
      '#max-values' => 1,
      '#fields' => [

        'space-title' => [
          '#label' => 'Space Title',
          '#description' => 'Enter a title.',
          '#help' => 'Enter a title.',
          '#type' => 'textfield',
					'#contentformat' => 'html/text',
					'#maxlength' => 1000,
          '#required' => false,
        ],

				'environment' => [
          '#label' => 'Environment',
          '#description' => 'Select an environment.',
          '#help' => 'Select an environment.',
          '#type' => 'options-select',
          '#required' => true,
          '#options' => [
							'none' => 'None', 
							'environment-hills' => 'Environment with hills', 
							'environment-mountains' => 'Environment with mountains',
							'environment-trees' => 'Environment with trees',
							'environment-arches' => 'Environment with arches',
							'environment-tron' => 'Tron',
							'background-color' => 'Background Color',
							'photosphere' => '360 Image Panorama Background',
					],
          '#default_value' => 'none',
        ],

        'environment-ground-color' => [
          '#label' => 'Environment Ground Color',
          '#description' => 'Select a ground color.',
          '#help' => 'Select a ground color.',
          '#type' => 'color',
					'#default_value' => '#CCCCCC',
          '#required' => false,
        ],

        'environment-ground-texture' => [
          '#label' => 'Environment Ground Texture',
          '#description' => 'Select a ground texture.',
          '#help' => 'Select a ground texture.',
          '#type' => 'options-select',
          '#required' => false,
          '#options' => [
							'walkernoise' => 'Walkernoise',
							'checkerboard' => 'Checkerboard',
							'squares' => 'Squares',
							'none' => 'None', 
					],
          '#default_value' => 'walkernoise',
        ],

        'background-color' => [
          '#label' => 'Background Color',
          '#description' => 'Select a background color.',
          '#help' => 'Select a background color.',
          '#type' => 'color',
					'#default_value' => '#000000',
          '#required' => false,
        ],

				'photosphere' => [
          '#label' => '360 Image Panorama Background',
          '#description' => 'Upload a photo sphere image.',
          '#help' => 'Photo sphere image in equirectangular projection format.',
          '#type' => 'photosphere',
          '#content-preview-image' => true,
          '#required' => false,
          '#file-extension' => ['jpg', 'png'],
        ],

        'a-painter-painting-url' => [
          '#label' => 'A-Painter Painting URL',
          '#description' => 'Enter the URL of your painting.',
          '#help' => 'Make a painting in A-Painter (<a href="https://aframe.io/a-painter/" target="_blank" style="color:#e42b5a;text-decoration:underline">https://aframe.io/a-painter/</a>) and enter the URL of your saved painting. Example: https://ucarecdn.com/1349e661-2fc2-4e35-baba-95daf48c4283/',
          '#type' => 'textfield',
          '#contentformat' => 'text',
          '#maxlength' => 1024,
          '#required' => false,
        ],

				'antialiasing' => [
          '#label' => 'Antialiasing',
          '#description' => 'Set antialiasing.',
          '#help' => 'Mobile VR headsets may need to have antialiasing set to off (for performance reasons).',
          '#type' => 'options-select',
          '#options' => ['off' => 'Off', 'on' => 'On'],
          '#required' => true,
          '#default_value' => 'off',
        ],

      ],

    ],


    'blog-posts' => [
      '#label' => 'Blog Posts',
      '#description' => 'Manage your blog posts.',
      '#max-values' => 'infinite',
      '#field-groups' => ['north-east' => 'North East', 'east' => 'East', 'south-east' => 'South East', 'south' => 'South', 'south-west' => 'South West', 'west' => 'West', 'north-west' => 'North West'],
//      '#content-type-view' => 'blog-post', // TEST
      '#fields' => [

				'post-title-north' => [
          '#label' => 'Title',
          '#description' => 'Write a text.',
          '#help' => 'Write a text.',
          '#type' => 'textfield',
          '#maxlength' => 1000,
          '#contentformat' => 'html/text',
          '#required' => true,
        ],

        'post-audio' => [
          '#label' => 'Sound',
          '#description' => 'Add a background sound to your post.',
          '#help' => 'Add a background sound to your post.',
          '#type' => 'options-select',
          '#options' => ['birds' => 'Birds', 'ocean' => 'Ocean', 'street' => 'Street'],
          '#required' => false,
        ],

        'post-display-north-east' => [
          '#label' => 'Display',
          '#description' => 'Select media type.',
          '#help' => 'Select media type.',
          '#type' => 'options-select',
          '#required' => false,
          '#options' => [
							'none' => 'None',
							'text' => 'Text',
							'image' => 'Image',
							'link' => 'Link',
					],
          '#default_value' => 'none',
          '#field-group' => 'north-east',
        ],

				'post-text-north-east' => [
          '#label' => 'Text 1',
          '#description' => 'Write a text.',
          '#help' => 'Write a text.',
          '#type' => 'textarea',
          '#rows' => 10,
          '#maxlength' => 20000,
          '#contentformat' => 'html/text',
          '#required' => false,
          '#field-group' => 'north-east',
        ],

				'post-link-north-east' => [
          '#label' => 'Link URL 1',
          '#description' => 'Enter an URL',
          '#help' => 'Enter an URL.',
          '#type' => 'textfield',
          '#contentformat' => 'text',
          '#maxlength' => 1000,
          '#required' => false,
          '#field-group' => 'north-east',
        ],

        'post-image-north-east' => [
          '#label' => 'Image 1',
          '#description' => 'Embed an image in your post.',
          '#help' => 'Embed an image in your post.',
          '#type' => 'image',
					'#content-preview-image' => true,
          '#file-extension' => ['jpg', 'png', 'gif'],
          '#required' => false,
          '#field-group' => 'north-east',
        ],

        'post-display-east' => [
          '#label' => 'Display',
          '#description' => 'Select media type.',
          '#help' => 'Select media type.',
          '#type' => 'options-select',
          '#required' => false,
          '#options' => [
							'none' => 'None',
							'text' => 'Text',
							'image' => 'Image',
							'link' => 'Link',
					],
          '#default_value' => 'none',
          '#field-group' => 'east',
        ],

				'post-text-east' => [
          '#label' => 'Text 2',
          '#description' => 'Write a text.',
          '#help' => 'Write a text.',
          '#type' => 'textarea',
          '#rows' => 10,
          '#maxlength' => 20000,
          '#contentformat' => 'html/text',
          '#required' => false,
          '#field-group' => 'east',
        ],

				'post-link-east' => [
          '#label' => 'Link URL 2',
          '#description' => 'Enter an URL',
          '#help' => 'Enter an URL.',
          '#type' => 'textfield',
          '#contentformat' => 'text',
          '#maxlength' => 1000,
          '#required' => false,
          '#field-group' => 'east',
        ],

        'post-image-east' => [
          '#label' => 'Image 2',
          '#description' => 'Embed an image in your post.',
          '#help' => 'Embed an image in your post.',
          '#type' => 'image',
					'#content-preview-image' => true,
          '#file-extension' => ['jpg', 'png', 'gif'],
          '#required' => false,
          '#field-group' => 'east',
        ],

        'post-display-south-east' => [
          '#label' => 'Display',
          '#description' => 'Select media type.',
          '#help' => 'Select media type.',
          '#type' => 'options-select',
          '#required' => false,
          '#options' => [
							'none' => 'None',
							'text' => 'Text',
							'image' => 'Image',
							'link' => 'Link',
					],
          '#default_value' => 'none',
          '#field-group' => 'south-east',
        ],

				'post-text-south-east' => [
          '#label' => 'Text 3',
          '#description' => 'Write a text.',
          '#help' => 'Write a text.',
          '#type' => 'textarea',
          '#rows' => 10,
          '#maxlength' => 20000,
          '#contentformat' => 'html/text',
          '#required' => false,
          '#field-group' => 'south-east',
        ],

				'post-link-south-east' => [
          '#label' => 'Link URL 3',
          '#description' => 'Enter an URL',
          '#help' => 'Enter an URL.',
          '#type' => 'textfield',
          '#contentformat' => 'text',
          '#maxlength' => 1000,
          '#required' => false,
          '#field-group' => 'south-east',
        ],

        'post-image-south-east' => [
          '#label' => 'Image 3',
          '#description' => 'Embed an image in your post.',
          '#help' => 'Embed an image in your post.',
          '#type' => 'image',
					'#content-preview-image' => true,
          '#file-extension' => ['jpg', 'png', 'gif'],
          '#required' => false,
          '#field-group' => 'south-east',
        ],

        'post-display-south' => [
          '#label' => 'Display',
          '#description' => 'Select media type.',
          '#help' => 'Select media type.',
          '#type' => 'options-select',
          '#required' => false,
          '#options' => [
							'none' => 'None',
							'text' => 'Text',
							'image' => 'Image',
							'link' => 'Link',
					],
          '#default_value' => 'none',
          '#field-group' => 'south',
        ],

				'post-text-south' => [
          '#label' => 'Text 3',
          '#description' => 'Write a text.',
          '#help' => 'Write a text.',
          '#type' => 'textarea',
          '#rows' => 10,
          '#maxlength' => 20000,
          '#contentformat' => 'html/text',
          '#required' => false,
          '#field-group' => 'south',
        ],

				'post-link-south' => [
          '#label' => 'Link URL 3',
          '#description' => 'Enter an URL',
          '#help' => 'Enter an URL.',
          '#type' => 'textfield',
          '#contentformat' => 'text',
          '#maxlength' => 1000,
          '#required' => false,
          '#field-group' => 'south',
        ],

        'post-image-south' => [
          '#label' => 'Image 3',
          '#description' => 'Embed an image in your post.',
          '#help' => 'Embed an image in your post.',
          '#type' => 'image',
					'#content-preview-image' => true,
          '#file-extension' => ['jpg', 'png', 'gif'],
          '#required' => false,
          '#field-group' => 'south',
        ],

        'post-display-south-west' => [
          '#label' => 'Display',
          '#description' => 'Select media type.',
          '#help' => 'Select media type.',
          '#type' => 'options-select',
          '#required' => false,
          '#options' => [
							'none' => 'None',
							'text' => 'Text',
							'image' => 'Image',
							'link' => 'Link',
					],
          '#default_value' => 'none',
          '#field-group' => 'south-west',
        ],

				'post-text-south-west' => [
          '#label' => 'Text 3',
          '#description' => 'Write a text.',
          '#help' => 'Write a text.',
          '#type' => 'textarea',
          '#rows' => 10,
          '#maxlength' => 20000,
          '#contentformat' => 'html/text',
          '#required' => false,
          '#field-group' => 'south-west',
        ],

				'post-link-south-west' => [
          '#label' => 'Link URL 3',
          '#description' => 'Enter an URL',
          '#help' => 'Enter an URL.',
          '#type' => 'textfield',
          '#contentformat' => 'text',
          '#maxlength' => 1000,
          '#required' => false,
          '#field-group' => 'south-west',
        ],

        'post-image-south-west' => [
          '#label' => 'Image 3',
          '#description' => 'Embed an image in your post.',
          '#help' => 'Embed an image in your post.',
          '#type' => 'image',
					'#content-preview-image' => true,
          '#file-extension' => ['jpg', 'png', 'gif'],
          '#required' => false,
          '#field-group' => 'south-west',
        ],

        'post-display-west' => [
          '#label' => 'Display',
          '#description' => 'Select media type.',
          '#help' => 'Select media type.',
          '#type' => 'options-select',
          '#required' => false,
          '#options' => [
							'none' => 'None',
							'text' => 'Text',
							'image' => 'Image',
							'link' => 'Link',
					],
          '#default_value' => 'none',
          '#field-group' => 'west',
        ],

				'post-text-west' => [
          '#label' => 'Text 3',
          '#description' => 'Write a text.',
          '#help' => 'Write a text.',
          '#type' => 'textarea',
          '#rows' => 10,
          '#maxlength' => 20000,
          '#contentformat' => 'html/text',
          '#required' => false,
          '#field-group' => 'west',
        ],

				'post-link-west' => [
          '#label' => 'Link URL 3',
          '#description' => 'Enter an URL',
          '#help' => 'Enter an URL.',
          '#type' => 'textfield',
          '#contentformat' => 'text',
          '#maxlength' => 1000,
          '#required' => false,
          '#field-group' => 'west',
        ],

        'post-image-west' => [
          '#label' => 'Image 3',
          '#description' => 'Embed an image in your post.',
          '#help' => 'Embed an image in your post.',
          '#type' => 'image',
					'#content-preview-image' => true,
          '#file-extension' => ['jpg', 'png', 'gif'],
          '#required' => false,
          '#field-group' => 'west',
        ],

        'post-display-north-west' => [
          '#label' => 'Display',
          '#description' => 'Select media type.',
          '#help' => 'Select media type.',
          '#type' => 'options-select',
          '#required' => false,
          '#options' => [
							'none' => 'None',
							'text' => 'Text',
							'image' => 'Image',
							'link' => 'Link',
					],
          '#default_value' => 'none',
          '#field-group' => 'north-west',
        ],

				'post-text-north-west' => [
          '#label' => 'Text 3',
          '#description' => 'Write a text.',
          '#help' => 'Write a text.',
          '#type' => 'textarea',
          '#rows' => 10,
          '#maxlength' => 20000,
          '#contentformat' => 'html/text',
          '#required' => false,
          '#field-group' => 'north-west',
        ],

				'post-link-north-west' => [
          '#label' => 'Link URL 3',
          '#description' => 'Enter an URL',
          '#help' => 'Enter an URL.',
          '#type' => 'textfield',
          '#contentformat' => 'text',
          '#maxlength' => 1000,
          '#required' => false,
          '#field-group' => 'north-west',
        ],

        'post-image-north-west' => [
          '#label' => 'Image 3',
          '#description' => 'Embed an image in your post.',
          '#help' => 'Embed an image in your post.',
          '#type' => 'image',
					'#content-preview-image' => true,
          '#file-extension' => ['jpg', 'png', 'gif'],
          '#required' => false,
          '#field-group' => 'north-west',
        ],

      ], /* fields */

    ], /* blog-posts */

  ], /* content types */

];


