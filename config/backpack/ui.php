<?php

return [

    // IMPORTANT NOTE: The configurations here get overriden by theme config files.
    //
    // Eg. If you're using theme-tabler and config/backpack/theme-tabler.php
    // has "breadcrumbs" set as false, then THAT value will be used instead
    // of the value in this file.

    /*
    |--------------------------------------------------------------------------
    | Theme (User Interface)
    |--------------------------------------------------------------------------
    */
    // Change the view namespace in order to load a different theme than the one Backpack provides.
    // You can create child themes yourself, by creating a view folder anywhere in your resources/views
    // and choosing that view_namespace instead of the default one. Backpack will load a file from there
    // if it exists, otherwise it will load it from the fallback namespace.

    'view_namespace' => 'backpack.theme-tabler::',
    'view_namespace_fallback' => 'vendor.backpack.theme-tabler::',

    /*
    |--------------------------------------------------------------------------
    | Look & feel customizations
    |--------------------------------------------------------------------------
    |
    | To make the UI feel yours.
    |
    | Note that values set here might be overriden by theme config files
    | (eg. config/backpack/theme-tabler.php) when that theme is in use.
    |
    */

    // Date & Datetime Format Syntax: https://carbon.nesbot.com/docs/#api-localization
    'default_date_format'     => 'D MMM YYYY',
    'default_datetime_format' => 'D MMM YYYY, HH:mm',

    // Direction, according to language
    // (left-to-right vs right-to-left)
    'html_direction' => 'ltr',

    // ----
    // HEAD
    // ----

    // Project name - shown in the window title
    'project_name' => 'Backpack Admin Panel',

    // Content of the HTML meta robots tag to prevent indexing and link following
    'meta_robots_content' => 'noindex, nofollow',

    // ------
    // HEADER
    // ------

    // When clicking on the admin panel's top-left logo/name,
    // where should the user be redirected?
    // The string below will be passed through the url() helper.
    // - default: '' (project root)
    // - alternative: 'admin' (the admin's dashboard)
    'home_link' => 'admin',

    // Menu logo. You can replace this with an <img> tag if you have a logo.
    'project_logo'   => '<b>Back</b>pack',

    // Show / hide breadcrumbs on admin panel pages.
    'breadcrumbs' => true,

    // ------
    // FOOTER
    // ------

    // Developer or company name. Shown in footer.
    'developer_name' => 'Pigmalión',

    // Developer website. Link in footer. Type false if you want to hide it.
    'developer_link' => 'https://github.com/msoler75',

    // Show powered by Laravel Backpack in the footer? true/false
    'show_powered_by' => true,

    // ---------
    // DASHBOARD
    // ---------

    // Show "Getting Started with Backpack" info block?
    'show_getting_started' => false && env('APP_ENV') == 'local',

    // -------------
    // GLOBAL STYLES
    // -------------

    // CSS files that are loaded in all pages, using Laravel's asset() helper
    'styles' => [
        // 'styles/example.css',
        // 'https://some-cdn.com/example.css',
        // 'backpack.css'
    ],

    // CSS files that are loaded in all pages, using Laravel's mix() helper
    'mix_styles' => [ // file_path => manifest_directory_path
        // 'css/app.css' => '',
    ],

    // CSS files that are loaded in all pages, using Laravel's @vite() helper
    // Please note that support for Vite was added in Laravel 9.19. Earlier versions are not able to use this feature.
    'vite_styles' => [ // resource file_path
        'resources/css/admin.css',
        // 'resources/css/app.css',
        // 'public/assets/css/tinymce-custom.css'
    ],

    // --------------
    // GLOBAL SCRIPTS
    // --------------

    // JS files that are loaded in all pages, using Laravel's asset() helper
    'scripts' => [
        // 'packages/backpack/base/js/bundle.js'
        // 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.3/vue.global.min.js'
        // https://unpkg.com/vue@3.3/dist/vue.esm-browser.js
        // 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.runtime.esm-bundler.min.js'
        // 'js/example.js',
        // 'https://unpkg.com/vue@2.4.4/dist/vue.min.js',
        // 'https://unpkg.com/react@16/umd/react.production.min.js',
        // 'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js',
    ],

    // JS files that are loaded in all pages, using Laravel's mix() helper
    'mix_scripts' => [ // file_path => manifest_directory_path
        // 'js/app.js' => '',
    ],

    // JS files that are loaded in all pages, using Laravel's @vite() helper
    'vite_scripts' => [ // resource file_path
        'resources/js/backpack/app.js',
    ],

];
