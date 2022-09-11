$('#tab-contents .tab[id != "tab1"]').hide();
/*hide();は、特定のHTML要素を非表示にする*/
$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});