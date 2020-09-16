<?php

$php_files_path = [
  '/inc/phone-header.php',
  '/inc/phone-footer.php',
  '/inc/phone-whatsapp.php'
];
require_once_all($php_files_path);
// require_once(__DIR__ . '/inc/phone-header.php');
// require_once(__DIR__ . '/inc/phone-footer.php');


add_action('after_setup_theme', 'ch_setup');
add_action('wp_enqueue_scripts', 'ch_scripts');
add_action('widgets_init', 'ch_register');
add_action('init', 'ch_register_types');

add_filter('acf/format_value/type=textarea', 'root_acf_format_value', 10, 3);

function require_once_all($php_files_path)
{
  foreach ($php_files_path as $php_file) {
    require_once(__DIR__ . $php_file);
  };
}
function ch_setup()
{
  register_nav_menu('menu_header', 'Меню в шапке');
  register_nav_menu('menu_footer', 'Меню в подвале');
  add_theme_support('custom-logo');
  add_theme_support('title-tag');
}
function ch_scripts()
{
  wp_enqueue_script('js', _ch_assets_path('script.js'), [], '1.39996', true);
  wp_enqueue_style('si_style', _ch_assets_path('style.css'), [], '1.09', 'all');
}
function ch_register()
{
  register_sidebar([
    'name' => 'Сайдбар в шапке для социальных сетей',
    'id' => 'ch_socials',
    'before_widget' => null,
    'after_widget' => null
  ]);
  register_sidebar([
    'name' => 'Телефон в шапке',
    'id' => 'ch_phone-header',
    'before_widget' => null,
    'after_widget' => null
  ]);
  register_sidebar([
    'name' => 'Телефон в футере',
    'id' => 'ch_phone-footer',
    'before_widget' => null,
    'after_widget' => null
  ]);
  register_sidebar([
    'name' => 'Телефон WhatsApp',
    'id' => 'ch_phone-whatsapp',
    'before_widget' => null,
    'after_widget' => null
  ]);

  register_widget('ch_widget_phone_header');
  register_widget('ch_widget_phone_footer');
  register_widget('ch_widget_phone_whatsapp');
}
function ch_register_types()
{
  register_post_type('inst_reviews', [
    'labels' => [
      'name'               => 'Отзывы', // основное название для типа записи
      'singular_name'      => 'Отзывы инстаграмм', // название для одной записи этого типа
      'add_new'            => 'Добавить новый отзыв', // для добавления новой записи
      'add_new_item'       => 'Добавить новый отзыв', // заголовка у вновь создаваемой записи в админ-панели.
      'edit_item'          => 'Редактировать отзыв', // для редактирования типа записи
      'new_item'           => 'Новый отзыв', // текст новой записи
      'view_item'          => 'Смотреть отзывы', // для просмотра записи этого типа.
      'search_items'       => 'Искать отзывы', // для поиска по этим типам записи
      'not_found'          => 'Не найдено отзывов', // если в результате поиска ничего не было найдено
      'not_found_in_trash' => 'Не найдено в корзине отзывов', // если не было найдено в корзине
      'menu_name'          => 'Отзывы', // название меню
    ],
    'public'              => true,
    'menu_position'       => 20,
    'menu_icon'           => 'dashicons-smiley',
    'hierarchical'        => false,
    'supports'            => ['title'],
    'has_archive' => false
  ]);
  register_post_type('advantages', [
    'labels' => [
      'name'               => 'Преимущества', // основное название для типа записи
      'singular_name'      => 'Преимущества', // название для одной записи этого типа
      'add_new'            => 'Добавить новое преимущество', // для добавления новой записи
      'add_new_item'       => 'Добавить новое преимущество', // заголовка у вновь создаваемой записи в админ-панели.
      'edit_item'          => 'Редактировать преимущество', // для редактирования типа записи
      'new_item'           => 'Новое преимущество', // текст новой записи
      'view_item'          => 'Смотреть преимущество', // для просмотра записи этого типа.
      'search_items'       => 'Искать преимущество', // для поиска по этим типам записи
      'not_found'          => 'Не найдено преимущества', // если в результате поиска ничего не было найдено
      'not_found_in_trash' => 'Не найдено в корзине преимущества', // если не было найдено в корзине
      'menu_name'          => 'Преимущеста', // название меню
    ],
    'public'              => true,
    'menu_position'       => 20,
    'menu_icon'           => 'dashicons-awards',
    'hierarchical'        => false,
    'supports'            => ['title'],
    'has_archive' => false
  ]);
  register_post_type('services', [
    'labels' => [
      'name'               => 'Услуга', // основное название для типа записи
      'singular_name'      => 'Услуги', // название для одной записи этого типа
      'add_new'            => 'Добавить новую услугу', // для добавления новой записи
      'add_new_item'       => 'Добавить новую услугу', // заголовка у вновь создаваемой записи в админ-панели.
      'edit_item'          => 'Редактировать услугу', // для редактирования типа записи
      'new_item'           => 'Новая услуга', // текст новой записи
      'view_item'          => 'Смотреть услугу', // для просмотра записи этого типа.
      'search_items'       => 'Искать услугу', // для поиска по этим типам записи
      'not_found'          => 'Не найдено услуг', // если в результате поиска ничего не было найдено
      'not_found_in_trash' => 'Не найдено в корзине услуги', // если не было найдено в корзине
      'menu_name'          => 'Услуги', // название меню
    ],
    'public'              => true,
    'menu_position'       => 20,
    'menu_icon'           => 'dashicons-star-filled',
    'hierarchical'        => false,
    'supports'            => ['title', 'page-attributes'],
    'has_archive' => false
  ]);
  register_post_type('faq', [
    'labels' => [
      'name'               => 'Вопрос', // основное название для типа записи
      'singular_name'      => 'Вопросы', // название для одной записи этого типа
      'add_new'            => 'Добавить новый вопрос', // для добавления новой записи
      'add_new_item'       => 'Добавить новый вопрос', // заголовка у вновь создаваемой записи в админ-панели.
      'edit_item'          => 'Редактировать вопрос', // для редактирования типа записи
      'new_item'           => 'Новый вопрос', // текст новой записи
      'view_item'          => 'Смотреть вопрос', // для просмотра записи этого типа.
      'search_items'       => 'Искать вопрос', // для поиска по этим типам записи
      'not_found'          => 'Не найдено вопросов', // если в результате поиска ничего не было найдено
      'not_found_in_trash' => 'Не найдено в корзине вопроса', // если не было найдено в корзине
      'menu_name'          => 'Вопросы', // название меню
    ],
    'public'              => true,
    'menu_position'       => 20,
    'menu_icon'           => 'dashicons-editor-help',
    'hierarchical'        => false,
    'supports'            => ['title'],
    'has_archive' => false
  ]);
  register_post_type('faq_epilation', [
    'labels' => [
      'name'               => 'Вопрос', // основное название для типа записи
      'singular_name'      => 'Вопросы эпиляция', // название для одной записи этого типа
      'add_new'            => 'Добавить новый вопрос', // для добавления новой записи
      'add_new_item'       => 'Добавить новый вопрос', // заголовка у вновь создаваемой записи в админ-панели.
      'edit_item'          => 'Редактировать вопрос', // для редактирования типа записи
      'new_item'           => 'Новый вопрос', // текст новой записи
      'view_item'          => 'Смотреть вопрос', // для просмотра записи этого типа.
      'search_items'       => 'Искать вопрос', // для поиска по этим типам записи
      'not_found'          => 'Не найдено вопросов', // если в результате поиска ничего не было найдено
      'not_found_in_trash' => 'Не найдено в корзине вопроса', // если не было найдено в корзине
      'menu_name'          => 'Вопросы эпиляция', // название меню
    ],
    'public'              => true,
    'menu_position'       => 20,
    'menu_icon'           => 'dashicons-editor-help',
    'hierarchical'        => false,
    'supports'            => ['title'],
    'has_archive' => false
  ]);
  register_post_type('faq_lpg', [
    'labels' => [
      'name'               => 'Вопрос', // основное название для типа записи
      'singular_name'      => 'Вопросы lpg', // название для одной записи этого типа
      'add_new'            => 'Добавить новый вопрос', // для добавления новой записи
      'add_new_item'       => 'Добавить новый вопрос', // заголовка у вновь создаваемой записи в админ-панели.
      'edit_item'          => 'Редактировать вопрос', // для редактирования типа записи
      'new_item'           => 'Новый вопрос', // текст новой записи
      'view_item'          => 'Смотреть вопрос', // для просмотра записи этого типа.
      'search_items'       => 'Искать вопрос', // для поиска по этим типам записи
      'not_found'          => 'Не найдено вопросов', // если в результате поиска ничего не было найдено
      'not_found_in_trash' => 'Не найдено в корзине вопроса', // если не было найдено в корзине
      'menu_name'          => 'Вопросы lpg', // название меню
    ],
    'public'              => true,
    'menu_position'       => 20,
    'menu_icon'           => 'dashicons-editor-help',
    'hierarchical'        => false,
    'supports'            => ['title'],
    'has_archive' => false
  ]);
  register_post_type('faq_shugaring', [
    'labels' => [
      'name'               => 'Вопрос', // основное название для типа записи
      'singular_name'      => 'Вопросы шугаринг', // название для одной записи этого типа
      'add_new'            => 'Добавить новый вопрос', // для добавления новой записи
      'add_new_item'       => 'Добавить новый вопрос', // заголовка у вновь создаваемой записи в админ-панели.
      'edit_item'          => 'Редактировать вопрос', // для редактирования типа записи
      'new_item'           => 'Новый вопрос', // текст новой записи
      'view_item'          => 'Смотреть вопрос', // для просмотра записи этого типа.
      'search_items'       => 'Искать вопрос', // для поиска по этим типам записи
      'not_found'          => 'Не найдено вопросов', // если в результате поиска ничего не было найдено
      'not_found_in_trash' => 'Не найдено в корзине вопроса', // если не было найдено в корзине
      'menu_name'          => 'Вопросы шугаринг', // название меню
    ],
    'public'              => true,
    'menu_position'       => 20,
    'menu_icon'           => 'dashicons-editor-help',
    'hierarchical'        => false,
    'supports'            => ['title'],
    'has_archive' => false
  ]);
}
function root_acf_format_value($value, $post_id, $field)
{

  $value = do_shortcode($value);

  return $value;
}
function _ch_assets_path($path)
{
  return get_template_directory_uri() . '/assets/' . $path;
}
