<?php
if (is_front_page()) :
  get_header();
?>
  <div class="catalog-1-wrapper" id="block_3" style="background-color: #f0f0f0">
    <div class="container">
      <div class="std-header catalog-1-header"><?php the_field('title_services'); ?></div>
      <div class="catalog-1-container">
        <?php $posts = get_posts([
          'post_type' => 'services',
          'numberposts' => -1,
          'order' => 'ASC'
        ]);
        foreach ($posts as $post) :
          setup_postdata($post);
          $id_f_link = get_field('id_for_link');
        ?>
          <div class="catalog-1-item-container <?php print get_field('css_f_display'); ?>">
            <a href="<?php print get_page_link(); ?>" class="catalog-1-item-href">
              <div class="catalog-1-item-row">
                <div class="catalog-1-item-header"><?php the_title(); ?></div>
                <div class="catalog-1-item-subheader">
                  <?php the_field('serv_descr'); ?>
                </div>
                <div class="catalog-1-item-button-container">
                  <div class="button small-button blue-button catlog-1-item-button">
                    <?php the_field('serv_button-text'); ?>
                  </div>
                </div>
              </div>
              <div class="catalog-1-item-image">
                <img data-src="<?php the_field('serv_img'); ?>" alt="Лазерная эпиляция" class="lazyload" />
              </div>
            </a>
          </div>
        <?php endforeach;
        wp_reset_postdata(); ?>
      </div>
    </div>
  </div>
  <div class="advantages-1-wrapper" id="block_4" style="background-color: #ffffff">
    <div class="container">
      <div class="std-header advantages-1-header">
        <?php the_field('title_advantages'); ?>
      </div>
      <div class="advantages-1-container">
        <?php $posts = get_posts([
          'post_type' => 'advantages',
          'numberposts' => 3,
          'order' => 'ASC'
        ]);
        foreach ($posts as $post) :
          setup_postdata($post);
        ?>
          <div class="advantages-1-block">
            <div class="advantages-1-image">
              <img data-src="<?php the_field('adv_img'); ?>" alt="" class="lazyload" />
            </div>
            <div class="advantages-1-text">
              <div class="advantages-1-bheader">
                <?php the_title(); ?>
              </div>
              <p></p>
              <p>
                <?php the_field('adv_desc'); ?>
              </p>
            </div>
          </div>
        <?php endforeach;
        wp_reset_postdata(); ?>
      </div>
    </div>
  </div>
  <div class="cta-1-wrapper" id="block_5" style="background-color: #ffffff">
    <div class="container">
      <div class="cta-1-button-container">
        <a href="#modal-cta-1-form" data-fancybox="" class="button medium-button red-button cta-1-button">Узнать стоимость услуг</a>
      </div>
    </div>
  </div>

  <div id="modal-cta-1-form" style="display: none" class="modal-form-wrapper">
    <div class="modal-container modal-form">
      <div class="modal-inner">
        <?php the_field('form_advantgs'); ?>
        <div id='adv-success' class="post-success form-hidden">
          <div class="modal-success">
            Ваша заявка успешно отправлена. <br />Мы свяжемся с Вами в
            ближайшее время.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="reviews-wrapper" id="block_6" style="background-color: #ebf8f7">
    <div class="container">
      <div class="std-header reviews-header"><?php the_field('title_reviews'); ?></div>
      <div class="reviews-container">
        <?php $posts = get_posts([
          'post_type' => 'inst_reviews',
          'numberposts' => -1
        ]);
        foreach ($posts as $post) :
          setup_postdata($post);
        ?>
          <div class="review-block">
            <div class="review-inner">
              <div class="review-header">
                <div class="review-avatar-container">
                  <div class="review-story-ring"></div>
                  <a class="review-avatar" href="" target="_blank">
                    <!-- <img data-src="assets/images/reviews/elviraa_milagro_avatar.jpg" alt="elviraa_milagro" class="lazyload" /> -->
                    <?php print wp_get_attachment_image(get_field('avatar')); ?>
                  </a>
                </div>
                <div class="review-avatar-text">
                  <a class="review-avatar-username" href="<?php the_field('inst_link'); ?>" target="_blank">
                    <span class="review-avatar-username-text"><?php the_title(); ?></span>
                  </a>
                  <div class="review-avatar-secondary-content">
                    <span class="review-avatar-location"><?php the_field('location'); ?></span>
                  </div>
                </div>
              </div>
              <div class="review-image-container">
                <a class="review-image" href="<?php the_field('inst_link'); ?>" target="_blank">
                  <img data-src="<?php print get_field('inst_img'); ?>" class="lazyload" />
                </a>
              </div>
              <div class="review-feedback">
                <a class="review-likes" href="<?php the_field('inst_link'); ?>" target="_blank">
                  <span class="embedSpriteHeartOpen"></span>
                  <span class="embedSpriteHeartOpenRed"></span>
                </a>
                <a class="review-comments" href="<?php the_field('inst_link'); ?>" target="_blank">
                  <span class="embedSpriteComment"></span>
                </a>
                <a class="review-share" href="<?php the_field('inst_link'); ?>" target="_blank">
                  <span class="embedSpriteShare"></span>
                </a>
                <a class="review-save" href="<?php the_field('inst_link'); ?>" target="_blank">
                  <span class="embedSpriteSaveOpen"></span>
                </a>
              </div>
              <div class="review-social-proof">
                <a href="<?php the_field('inst_link'); ?>" target="_blank"><?php the_field('inst_likes'); ?> отметок "Нравится"</a>
              </div>
              <div class="review-captioned">
                <a class="review-caption-username" href="<?php the_field('inst_link'); ?>" target="_blank"><?php the_title(); ?></a><br /><br />
                <?php the_field('inst_descr'); ?>
                <div class="review-comments">
                  <a class="review-comments-expand" href="<?php the_field('inst_link'); ?>" target="_blank">посмотреть <?php the_field('inst_comments'); ?> комментариев</a>
                </div>
              </div>
              <div class="review-footer">
                <a class="review-footer-input" href="<?php the_field('inst_link'); ?>" target="_blank">Добавьте комментарий...</a>
                <a class="review-footer-glyph" href="<?php the_field('inst_link'); ?>" target="_blank"><span class="embedSpriteGlyph"></span></a>
              </div>
            </div>
          </div>
        <?php endforeach;
        wp_reset_postdata(); ?>
      </div>
    </div>
  </div>
  <div class="faq-wrapper" id="block_7" style="background-color: #f0f0f0">
    <div class="container">
      <div class="std-header faq-header">
        <?php the_field('title_answer'); ?>
      </div>
      <?php $posts = get_posts([
        'post_type' => 'faq',
        'numberposts' => -1,
        'order' => 'ASC'
      ]);
      foreach ($posts as $post) :
        setup_postdata($post);
      ?>
        <div class="faq-block">
          <div class="faq-bheader"><?php the_title(); ?></div>
          <div class="faq-text">
            <p>
              <?php the_field('quest_answer'); ?>
            </p>
          </div>
        </div>
      <?php endforeach;
      wp_reset_postdata();
      ?>
      <div class="faq-more">
        <div class="faq-more-header"><?php the_field('title_whts'); ?></div>
        <div class="faq-more-text">
          Напишите нам в
          <?php if (is_active_sidebar('ch_phone-whatsapp')) {
            dynamic_sidebar('ch_phone-whatsapp');
          }; ?>
        </div>
      </div>
    </div>
  </div>
<?php
  get_footer();
else :
  if (!is_404()) {
    wp_redirect(home_url('/404/'));
    exit();
  }
endif;
?>