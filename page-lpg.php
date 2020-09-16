<?php
get_header();
/*
Template name: Шаблон для страницы lpg
*/
?>

<div class="calculator-lpg-wrapper" id="block_21" style="background-color: #f0f0f0; padding: 50px 0;">
  <div class="container" id="block_3">
    <div class="std-header calculator-lpg-header">
      Рассчитайте стоимость Вашего LPG-Массажа
    </div>
    <div class="std-desc calculator-lpg-desc">
      Узнайте, сколько процедур Вам понадобится и сколько это будет стоить
    </div>
    <div class="calculator-lpg-container">
      <div class="calculator-lpg-block">
        <form class="calculator-lpg-inner" id="calculator-lpg_front">
          <div class="calculator-lpg-inputs-1">
            <div class="calculator-lpg-input calculator-lpg-input-wide">
              <div class="calculator-lpg-inp-header">
                <span>1</span> Укажите степень целлюлита
              </div>
              <div class="calculator-lpg-select-container">
                <select class="calculator-lpg-select" name="calculator-lpg-cellulit" id="calculator-lpg-cellulit" data-modal_id="modal-calculator-lpg-cellulit">
                  <option selected="" value="Предцеллюлитная">
                    Предцеллюлитная
                  </option>
                  <option value="Начальная">Начальная</option>
                  <option value="Микронодулярная">Микронодулярная</option>
                  <option value="Макронодулярная">Макронодулярная</option>
                </select>
              </div>
            </div>
            <div class="calculator-lpg-input calculator-lpg-input-ultrawide">
              <div class="calculator-lpg-inp-header">
                <span>2</span> Как часто вы можете проходить процедуру?
              </div>
              <div class="calculator-lpg-select-container">
                <select class="calculator-lpg-select" name="calculator-lpg-period" id="calculator-lpg-period" data-modal_id="modal-calculator-lpg-period">
                  <option selected="" value="1-2 раза в неделю">
                    1-2 раза в неделю
                  </option>
                  <option value="3 раза в неделю">3 раза в неделю</option>
                  <option value="Больше 3 раз в неделю">
                    Больше 3 раз в неделю
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="calculator-lpg-inputs-2">
            <div class="calculator-lpg-inp-header">
              <span>3</span> Какие зоны вас беспокоят?
            </div>
            <div class="calculator-lpg-checkboxes-wrapper">
              <div class="calculator-lpg-checkboxes-container">
                <div class="calculator-lpg-checkboxes-header">Тело</div>
                <div class="calculator-lpg-checkbox-wrapper">
                  <div class="calculator-lpg-checkbox-container">
                    <input class="checkbox calculator-lpg-checkbox" name="calculator-lpg-checkbox-1" value="Живот" type="checkbox" id="calculator-lpg-checkbox-1" data-modal_id="modal-calculator-lpg-zones" />
                    <label for="calculator-lpg-checkbox-1">Живот</label>
                  </div>
                  <div class="calculator-lpg-checkbox-container">
                    <input class="checkbox calculator-lpg-checkbox" name="calculator-lpg-checkbox-2" value="Бока" type="checkbox" id="calculator-lpg-checkbox-2" data-modal_id="modal-calculator-lpg-zones" />
                    <label for="calculator-lpg-checkbox-2">Бока</label>
                  </div>
                  <div class="calculator-lpg-checkbox-container">
                    <input class="checkbox calculator-lpg-checkbox" name="calculator-lpg-checkbox-3" value="Все зоны" type="checkbox" id="calculator-lpg-checkbox-3" data-modal_id="modal-calculator-lpg-zones" />
                    <label for="calculator-lpg-checkbox-3">Все зоны</label>
                  </div>
                </div>
              </div>
              <div class="calculator-lpg-checkboxes-container">
                <div class="calculator-lpg-checkboxes-header">Ноги</div>
                <div class="calculator-lpg-checkbox-wrapper">
                  <div class="calculator-lpg-checkbox-container">
                    <input class="checkbox calculator-lpg-checkbox" name="calculator-lpg-checkbox-4" value="Бедра" type="checkbox" id="calculator-lpg-checkbox-4" data-modal_id="modal-calculator-lpg-zones" />
                    <label for="calculator-lpg-checkbox-4">Бедра</label>
                  </div>
                  <div class="calculator-lpg-checkbox-container">
                    <input class="checkbox calculator-lpg-checkbox" name="calculator-lpg-checkbox-5" value="Ягодицы" type="checkbox" id="calculator-lpg-checkbox-5" data-modal_id="modal-calculator-lpg-zones" />
                    <label for="calculator-lpg-checkbox-5">Ягодицы</label>
                  </div>
                  <div class="calculator-lpg-checkbox-container">
                    <input class="checkbox calculator-lpg-checkbox" name="calculator-lpg-checkbox-6" value="Ноги полностью" type="checkbox" id="calculator-lpg-checkbox-6" data-modal_id="modal-calculator-lpg-zones" />
                    <label for="calculator-lpg-checkbox-6">Ноги полностью</label>
                  </div>
                </div>
              </div>
              <div class="calculator-lpg-checkboxes-container">
                <div class="calculator-lpg-checkboxes-header">
                  Руки и предплечья
                </div>
                <div class="calculator-lpg-checkbox-wrapper">
                  <div class="calculator-lpg-checkbox-container">
                    <input class="checkbox calculator-lpg-checkbox" name="calculator-lpg-checkbox-7" value="Руки выше локтя" type="checkbox" id="calculator-lpg-checkbox-7" data-modal_id="modal-calculator-lpg-zones" />
                    <label for="calculator-lpg-checkbox-7">Руки выше локтя</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="calculator-lpg-inputs-3">
            <div class="calculator-lpg-input">
              <a href="#modal-calculator-lpg-form" class="button medium-button red-button calculator-lpg-button" id="calculator-lpg-form-init" data-fancybox="">Рассчитать<span> стоимость</span></a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<div id="modal-calculator-lpg-form" style="display: none" class="modal-calculator-lpg-wrapper">
  <div class="modal-container modal-calculator-lpg">
    <div class="modal-inner modal_wrap_order">
      <?php the_field('lpg_form'); ?>
      <div class="post-success form-hidden">
        <div class="modal-success">
          Ваша заявка успешно отправлена. <br />Мы свяжемся с Вами в
          ближайшее время.
        </div>
      </div>
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
      'post_type' => 'faq_lpg',
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
?>