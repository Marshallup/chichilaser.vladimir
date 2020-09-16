<?php
class Ch_Widget_Phone_Footer extends WP_Widget
{
  public function __construct()
  {
    parent::__construct(
      'ch_widget_phone_footer',
      'Chichilaser - для номера телефона в футере',
      [
        'name' => 'Chichilaser - виджет номера телефона в футере',
        'description' => 'Выводит номер телефона в футере'
      ]
    );
  }

  public function form($instance)
  {
?>
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
    <a href="tel:<?php print $tel; ?>" class="footer-1-phone"><?php print $instance['phone']; ?></a>
<?php
  }
  public function update($new_instance, $old_instance)
  {
    return $new_instance;
  }
}
