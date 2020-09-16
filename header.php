<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="assets/images\icons\apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="assets/images\icons\favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="assets/images\icons\favicon-16x16.png" />
  <?php wp_head(); ?>
</head>

<body class="home">
  <div class="header-1-wrapper" id="block_1" style="background-color: #fdfdfd">
    <div class="container">
      <div class="header-1-menu-container">
        <div class="main-navigation" id="site-navigation">
          <button class="menu-toggle" aria-controls="top-menu" aria-expanded="false">
            <div class="menu-toggle-button">
              <span class="menu-toggle-inner"></span>
            </div>
          </button>
          <?php
          wp_nav_menu([
            'theme_location' => 'menu_header',
            'container' => false,
            'menu_class' => 'header-1-menu',
            'items_wrap' => '<ul class="%2$s">%3$s</ul>'
          ])
          ?>
        </div>
        <div class="header-1-social">
          <?php if (is_active_sidebar('ch_socials')) {
            dynamic_sidebar('ch_socials');
          }; ?>
        </div>
      </div>
      <div class="header-1-info">
        <div class="header-1-logo">
          <?php the_custom_logo(); ?>
        </div>
        <div class="header-1-descriptor"><?php the_field('text_logo_right'); ?></div>
        <?php if (is_active_sidebar('ch_phone-header')) {
          dynamic_sidebar('ch_phone-header');
        }; ?>
      </div>
    </div>
  </div>
  <div class="teaser-wrapper" id="block_2" style="background-color: #fdfdfd">
    <div class="container">
      <div class="teaser-container">
        <div class="teaser-text">
          <?php the_title(); ?>
        </div>
        <ul class="teaser-list">
          <?php
          $lists = get_field('list_und_title');
          $list_array = explode("\n", $lists);
          foreach ($list_array as $list) :
          ?>
            <li><?php print $list; ?></li>
          <?php endforeach; ?>
        </ul>
        <div class="teaser-form-container">
          <div class="teaser-form-header">
            <?php the_field('header_form-teaser'); ?>
          </div>
          <?php print get_field('form_header'); ?>
          <div class="post-success form-hidden">
            <div class="teaser-success">
              Ваша заявка успешно отправлена. <br />Мы свяжемся с Вами в
              ближайшее время.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>