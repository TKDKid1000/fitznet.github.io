$(function () {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'data/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
}) 
