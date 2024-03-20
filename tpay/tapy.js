
(function () {
    try {
        function loadTpayJS(url, callback) {
            var script = document.createElement('script');
            var fn = callback || function () { };
            script.type = 'text/javascript';

            // IE
            if (script.readyState) {
                script.onreadystatechange = function () {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') {
                        script.onreadystatechange = null;
                        fn();
                    }
                };
            } else {
                //其他浏览器
                script.onload = function () {
                    window.tpay = window.tazapay
                    fn();
                };
            }
            script.src = url;
            document.getElementsByTagName('head')[0].appendChild(script);
        }
        function getQueryVariable(variable) {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] == variable) { return pair[1]; }
            }
            return (false);
        }

        window.loadTpayJS = loadTpayJS
        window.getQueryVariable = getQueryVariable


    } catch (e) {
        // Fail quietly
        console.log(e)
    }
})()