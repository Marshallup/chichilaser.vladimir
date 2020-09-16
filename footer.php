<div class="map-wrapper white-wrapper" id="block_8" style="background-color: #ffffff">
  <div class="map-container map_place" id="map"></div>
  <div class="map-form-wrapper">
    <?php the_field('form_map'); ?>
    <div id='map-success' class="post-success form-hidden">
      <div class="modal-success">
        Ваша заявка успешно отправлена. <br />Мы свяжемся с Вами в ближайшее
        время.
      </div>
    </div>
  </div>
</div>

<script>
  var map_latitude = <?php the_field('latitude_show'); ?>;
  var map_longtitude = <?php the_field('longtitude_show'); ?>;
  var map_zoom = <?php the_field('map_zoom'); ?>;
  var map_markers = {};
  map_markers[0] = {
    id: "office_1",
    latitude: "<?php the_field('latitude_marker'); ?>",
    longtitude: "<?php the_field('longtitude_marker'); ?>",
    header: "<?php the_field('title_marker'); ?>",
    text: '<div class="balloon-text"><p><?php the_field('addr_map'); ?></p><p><b>Телефон:</b> <?php the_field('phone_map'); ?></p></div>',
    footer: "<?php the_field('text_bot_map'); ?>",
    image_src: "<?php the_field('marker_img'); ?>",
    image_width: "88",
    image_height: "88",
    offset_width: "-44",
    offset_height: "-88",
  };
</script>
<div class="footer-1-wrapper" id="block_9" style="background-color: #ffffff">
  <div class="container">
    <div class="footer-1-col-w">
      <?php the_custom_logo(); ?>
      <div class="footer-1-info">
        <p>
          <?php the_field('footer_adr'); ?>
        </p>
        <?php the_field('footer_data'); ?>
      </div>
      <div class="footer-1-info">
        <?php the_field('footer_notif'); ?>
      </div>
    </div>
    <div class="footer-1-col-n">
      <?php
      wp_nav_menu([
        'theme_location' => 'menu_footer',
        'container' => false,
        'menu_class' => 'footer-1-menu',
        'items_wrap' => '<ul class="%2$s">%3$s</ul>'
      ])
      ?>
    </div>
    <div class="footer-1-col-n">
      <?php if (is_active_sidebar('ch_phone-footer')) {
        dynamic_sidebar('ch_phone-footer');
      }; ?>
      <div class="footer-1-phone-info"></div>
    </div>
  </div>
</div>
<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=63386582-6c0b-43bc-9b44-f0e3bb2e95bb"></script>
<?php wp_footer(); ?>
</body>

</html>