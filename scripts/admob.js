var isPendingInterstitial = false;
var isAutoshowInterstitial = false;

function prepareInterstitialAd() {
    if (!isPendingInterstitial) {
        admob.requestInterstitialAd({
            autoShowInterstitial: isAutoshowInterstitial
        });
    }
}

function onAdLoadedEvent(e) {
    if (e.adType === admob.AD_TYPE.INTERSTITIAL && !isAutoshowInterstitial) {
        isPendingInterstitial = true;
    }
}

function onDeviceReady() {
    start();
    document.removeEventListener('deviceready', onDeviceReady, false);

    admob.setOptions({
        publisherId:          "ca-app-pub-3940256099942544~3347511713",
        interstitialAdId:     "ca-app-pub-3940256099942544/1033173712",
    });

    document.addEventListener(admob.events.onAdLoaded, onAdLoadedEvent);
    prepareIntestitialAd();
}

document.addEventListener("deviceready", onDeviceReady, false);

function showInterstitialAd() {
    if (isPendingInterstitial) {
        admob.showInterstitialAd(function () {
                isPendingInterstitial = false;
                isAutoshowInterstitial = false;
                prepareInterstitialAd();
                alert('lol');
        });
    } else {
        isAutoshowInterstitial = true;
        admob.requestInterstitialAd({
            autoShowInterstitial: isAutoshowInterstitial
        });
    }
}

/*document.addEventListener(admob.events.onAdClosed, function(e) {
    alert('closed');
    $('#mainMenu').fadeIn(250);
});

document.addEventListener("resume", function(e) {
    alert('resume');
    $('#mainMenu').fadeIn(250);
});*/