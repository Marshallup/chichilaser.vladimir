<?php
class Ch_Widget_Phone_Whatsapp extends WP_Widget
{
  public function __construct()
  {
    parent::__construct(
      'ch_widget_phone_whatsapp',
      'Chi - для номера телефона whatsapp',
      [
        'name' => 'Chi - виджет номера телефона whatsapp',
        'description' => 'Выводит номер телефона whatsapp'
      ]
    );
  }

  public function form($instance)
  {
?>
    <p>
      <label for="<?php print $this->get_field_id('name'); ?>">
        Введите название WhatsApp ссылки:
      </label>
      <input id="<?php print $this->get_field_id('id-name'); ?>" class="widefat" type="text" name="<?php print $this->get_field_name('name'); ?>" value="<?php print $instance['name']; ?>">
    </p>

    <p>
      <label for="<?php print $this->get_field_id('phone'); ?>">
        Введите номер телефона:
      </label>
      <input id="<?php print $this->get_field_id('id-phone'); ?>" class="widefat" type="text" name="<?php print $this->get_field_name('phone'); ?>" value="<?php print $instance['phone']; ?>">
    </p>

  <?php
  }
  public function widget($args, $instance)
  {
    $tel = preg_replace('/[^+0-9]/', '', $instance['phone']);
  ?>
    <a href="https://api.whatsapp.com/send?phone=<?php print $tel; ?>" class="faq-whatsapp tracked-href" target="_blank"><?php print $instance['name']; ?></a>
<?php
  }
  public function update($new_instance, $old_instance)
  {
    return $new_instance;
  }
}
