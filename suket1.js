
$('#connect_with_us').on('click', function() {
  const connect = $('#connect').position().top;

  $('html, body').animate(
    {
      scrollTop: connect
    },
    900
  );
});
