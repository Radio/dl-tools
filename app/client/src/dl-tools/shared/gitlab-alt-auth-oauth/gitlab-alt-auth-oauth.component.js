define([], function() {
    return {
        /* @ngInject */
        controller: function(BACKEND_URL) {
            this.auth = function() {
                const locationOrigin = window.location.origin ||
                    (window.location.protocol + '//' + window.location.host);

                window.location.href = BACKEND_URL + '/gitlab-auth/oauth?redirect=' + locationOrigin;
            };
        },
        template: '<button type="button" class="btn btn-primary" ng-click="$ctrl.auth()">Login with Gitlab (OAuth2)</button>'
    }
});