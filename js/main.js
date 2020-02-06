// let theText = document.getElementById('skill').value;
let $skill = $('#skill');

$('#add-skill').click(function(e) {
  console.log(e, this);
  $(`<li class="item"><button class="reset">X</button>${$skill.val()}</li>`).appendTo('ul');
  $('.reset').click(function() {
    $(this).closest('li').fadeOut(1000, function() {
      $(this).remove();
    });
  });
});
