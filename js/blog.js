var gnm =
{
    // toggles the 'closed' class on an item, used to show/hide on demand
    toggleOpen:function(this)
    {
	if (this != null)
	{
	    if (this.hasClass('closed'))
	    {
		this.removeClass('closed');
	    }
	    else
	    {
		this.addClass('closed');
	    }
	}
    },

}

