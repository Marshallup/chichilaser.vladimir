<?php
get_header();
/*
Template name: Шаблон для страницы шугаринг
*/
?>
<div class="calculator-shugaring-wrapper" id="block_30" style="background-color: #f0f0f0; padding: 50px 0;">
  <div class="container" id="block_3">
    <div class="std-header calculator-shugaring-header">
      Рассчитайте стоимость шугаринга
    </div>
    <div class="std-desc calculator-shugaring-desc">
      Узнайте, сколько процедур Вам понадобится и сколько это будет стоить
    </div>
    <div class="calculator-shugaring-container">
      <div class="calculator-shugaring-block">
        <form class="calculator-shugaring-inner" id="calculator-shugaring_front">
          <div class="calculator-shugaring-inputs-1">
            <div class="calculator-shugaring-input calculator-shugaring-input-wide">
              <div class="calculator-shugaring-inp-header">
                <span>1</span> Как удаляли волосы до этого?
              </div>
              <div class="calculator-shugaring-input-container">
                <label><input type="text" name="calculator-shugaring-earlier" class="medium-input grey-input calculator-shugaring-text-input" id="calculator-shugaring-earlier" data-modal_id="modal-calculator-shugaring-earlier" placeholder="Укажите способы" /></label>
              </div>
            </div>
            <div class="calculator-shugaring-input">
              <div class="calculator-shugaring-inp-header">
                <span>2</span> Введите ваш возраст
              </div>
              <div class="calculator-shugaring-input-container">
                <label><input type="text" name="calculator-shugaring-age" class="medium-input grey-input calculator-shugaring-text-input" id="calculator-shugaring-age" data-modal_id="modal-calculator-shugaring-age" placeholder="Ваш возраст" /></label>
              </div>
            </div>
          </div>
          <div class="calculator-shugaring-inputs-2">
            <div class="calculator-shugaring-inp-header">
              <span>3</span> Выберите зоны эпиляции
            </div>
            <div class="calculator-shugaring-checkboxes-wrapper">
              <div class="calculator-shugaring-checkboxes-container">
                <div class="calculator-shugaring-checkboxes-header">
                  Голова и лицо
                </div>
                <div class="calculator-shugaring-checkbox-wrapper">
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-1" value="Лицо полностью" type="checkbox" id="calculator-shugaring-checkbox-1" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-1">Лицо полностью</label>
                  </div>
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-2" value="Брови" type="checkbox" id="calculator-shugaring-checkbox-2" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-2">Брови</label>
                  </div>
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-3" value="Верхняя губа" type="checkbox" id="calculator-shugaring-checkbox-3" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-3">Верхняя губа</label>
                  </div>
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-4" value="Подбородок" type="checkbox" id="calculator-shugaring-checkbox-4" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-4">Подбородок</label>
                  </div>
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-5" value="Бакенбарды" type="checkbox" id="calculator-shugaring-checkbox-5" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-5">Бакенбарды</label>
                  </div>
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-6" value="Шея" type="checkbox" id="calculator-shugaring-checkbox-6" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-6">Шея</label>
                  </div>
                </div>
              </div>
              <div class="calculator-shugaring-checkboxes-container">
                <div class="calculator-shugaring-checkboxes-header">
                  Руки и предплечья
                </div>
                <div class="calculator-shugaring-checkbox-wrapper">
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-7" value="Руки полностью" type="checkbox" id="calculator-shugaring-checkbox-7" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-7">Руки полностью</label>
                  </div>
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-8" value="Предплечья (ниже локтя)" type="checkbox" id="calculator-shugaring-checkbox-8" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-8">Предплечья</label>
                  </div>
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-9" value="Руки выше локтя" type="checkbox" id="calculator-shugaring-checkbox-9" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-9">Руки выше локтя</label>
                  </div>
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-10" value="Кисти рук" type="checkbox" id="calculator-shugaring-checkbox-10" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-10">Кисти рук</label>
                  </div>
                </div>
              </div>
              <div class="calculator-shugaring-checkboxes-container">
                <div class="calculator-shugaring-checkboxes-header">
                  Тело
                </div>
                <div class="calculator-shugaring-checkbox-wrapper">
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-16" value="Подмышки" type="checkbox" id="calculator-shugaring-checkbox-16" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-16">Подмышки</label>
                  </div>
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-11" value="Живот полностью" type="checkbox" id="calculator-shugaring-checkbox-11" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-11">Живот полностью</label>
                  </div>
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-12" value="Линия живота" type="checkbox" id="calculator-shugaring-checkbox-12" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-12">Линия живота</label>
                  </div>
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-13" value="Спина полностью" type="checkbox" id="calculator-shugaring-checkbox-13" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-13">Спина полностью</label>
                  </div>
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-14" value="Поясница" type="checkbox" id="calculator-shugaring-checkbox-14" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-14">Поясница</label>
                  </div>
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-15" value="Грудь (декольте)" type="checkbox" id="calculator-shugaring-checkbox-15" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-15">Грудь (декольте)</label>
                  </div>
                </div>
              </div>
              <div class="calculator-shugaring-checkboxes-container">
                <div class="calculator-shugaring-checkboxes-header">
                  Ноги и зона бикини
                </div>
                <div class="calculator-shugaring-checkbox-wrapper">
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-17" value="Зона бикини" type="checkbox" id="calculator-shugaring-checkbox-17" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-17">Зона бикини</label>
                  </div>
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-21" value="Голени" type="checkbox" id="calculator-shugaring-checkbox-21" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-21">Голени</label>
                  </div>
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-20" value="Бедра" type="checkbox" id="calculator-shugaring-checkbox-20" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-20">Бедра</label>
                  </div>
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-19" value="Ягодицы" type="checkbox" id="calculator-shugaring-checkbox-19" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-19">Ягодицы</label>
                  </div>
                  <div class="calculator-shugaring-checkbox-container">
                    <input class="checkbox calculator-shugaring-checkbox" name="calculator-shugaring-checkbox-18" value="Ноги полностью" type="checkbox" id="calculator-shugaring-checkbox-18" data-modal_id="modal-calculator-shugaring-zones" />
                    <label for="calculator-shugaring-checkbox-18">Ноги полностью</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="calculator-shugaring-inputs-3">
            <div class="calculator-shugaring-input">
              <a href="#modal-calculator-shugaring-form" class="button medium-button red-button calculator-shugaring-button" id="calculator-shugaring-form-init" data-fancybox="">Рассчитать<span> стоимость</span></a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

<div id="modal-calculator-shugaring-form" style="display: none" class="modal-calculator-shugaring-wrapper">
  <div class="modal-container modal-calculator-shugaring">
    <div class="modal-inner modal_wrap_order">
      <?php the_field('form_shugaring'); ?>
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
      'post_type' => 'faq_shugaring',
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