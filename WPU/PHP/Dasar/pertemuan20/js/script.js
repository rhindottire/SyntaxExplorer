$(document).ready(function(){
  $('#tombol-cari').hide();
  $('#keyword').on('keyup', function(){
    $('.loader').show();

    // AJAX menggunakan load
    // $('#container').load('ajax/mahasiswa.php?keyword=' + $('#keyword').val());

    // AJAX menggunakan $.get()
    $.get('ajax/mahasiswa.php?keyword=' + $('#keyword').val(), function(data){
      $('#container').html(data);
      $('.loader').hide();
    });
  });
});