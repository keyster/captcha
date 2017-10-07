var login = new Vue({
	el: "#login",
	data: {
		prefix: '+1',
		number: '',
		code: '',
		token: ''
	},
	created: function() {
		window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha');
		window.recaptchaVerifier.render();
		window.recaptchaVerifier.verify().then(token => {
			login.token = token
		})
	},
	methods: {
		send: function() {
			window.parent.postMessage(JSON.stringify({number: login.prefix+login.number, token: login.token, action: "send"}),"*")
		},
		confirm: function() {
			window.parent.postMessage(JSON.stringify({code: login.code, action: "confirm"}),"*")
		}
	}
});
