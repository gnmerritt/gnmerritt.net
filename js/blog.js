var gnm = {
  // toggles the 'closed' class on an item, used to show/hide on demand
  togglePost:function(source, elemId) {
    var article = $("#" + elemId);
    if (article.hasClass('closed')) {
  	  article.removeClass('closed');
      source.innerHTML = 'Hide Post'
    } else {
      article.addClass('closed');
      source.innerHTML = 'Show Post'
    }
  },
}
