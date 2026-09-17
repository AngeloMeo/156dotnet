function framecheck() {
	try {
	 	var parentframe = 'fr_index.html';
	 	if (parent.location.href == self.location.href) {
	 		var current = window.self.location.pathname;
	   	window.location.replace (parentframe + '?' + current);
		}
	}
	catch (doNothing) {
		// doing nothing... must be like this...
	}
}