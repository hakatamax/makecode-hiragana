(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/makecode-hiragana/",
    "verprefix": "",
    "workerjs": "/makecode-hiragana/worker.js",
    "monacoworkerjs": "/makecode-hiragana/monacoworker.js",
    "gifworkerjs": "/makecode-hiragana/gifjs/gif.worker.js",
    "serviceworkerjs": "/makecode-hiragana/serviceworker.js",
    "typeScriptWorkerJs": "/makecode-hiragana/tsworker.js",
    "pxtVersion": "13.2.17",
    "pxtRelId": "localDirRelId",
    "pxtCdnUrl": "/makecode-hiragana/",
    "commitCdnUrl": "/makecode-hiragana/",
    "blobCdnUrl": "/makecode-hiragana/",
    "cdnUrl": "/makecode-hiragana/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "microbit",
    "simUrl": "/makecode-hiragana/simulator.html",
    "simserviceworkerUrl": "/makecode-hiragana/simulatorserviceworker.js",
    "simworkerconfigUrl": "/makecode-hiragana/workerConfig.js",
    "partsUrl": "/makecode-hiragana/siminstructions.html",
    "runUrl": "/makecode-hiragana/run.html",
    "docsUrl": "/makecode-hiragana/docs.html",
    "multiUrl": "/makecode-hiragana/multi.html",
    "asseteditorUrl": "/makecode-hiragana/asseteditor.html",
    "isStatic": true,
    "kioskUrl": "/makecode-hiragana/kiosk.html",
    "teachertoolUrl": "/makecode-hiragana/teachertool.html",
    "tutorialtoolUrl": "/makecode-hiragana/tutorialtool.html",
    "skillmapUrl": "/makecode-hiragana/skillmap.html",
    "multiplayerUrl": "/makecode-hiragana/multiplayer.html",
    "authcodeUrl": "/makecode-hiragana/authcode.html"
};

    var scripts = [
        "/makecode-hiragana/highlight.js/highlight.pack.js",
        "/makecode-hiragana/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/makecode-hiragana/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/makecode-hiragana/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/makecode-hiragana/target.js");
    scripts.push("/makecode-hiragana/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.setInitCallbacks(pxtCallbacks)
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
