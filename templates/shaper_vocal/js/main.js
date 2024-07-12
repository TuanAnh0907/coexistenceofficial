var carousel = jQuery('.carousel');
if(carousel){
	if (typeof jQuery != 'undefined' && typeof MooTools != 'undefined' ) {
		Element.implement({
			slide: function(how, mode){
				return this;
			}
		});
	}
}