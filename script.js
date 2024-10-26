// Top ads
const topAds = document.querySelectorAll('#ad-container .ad');
let currentTopAd = 0;

function showTopAd() {
    topAds.forEach((ad, index) => {
        ad.classList.remove('active');
        if (index === currentTopAd) {
            ad.classList.add('active');
        }
    });

    currentTopAd = (currentTopAd + 1) % topAds.length;
}

setInterval(showTopAd, 2000); // Change top ad every 3 seconds
showTopAd(); // Show the first top ad immediately


// Bottom ads
const bottomAds = document.querySelectorAll('#ad-container-bottom .ad');
let currentBottomAd = 0;

function showBottomAd() {
    bottomAds.forEach((ad, index) => {
        ad.classList.remove('active');
        if (index === currentBottomAd) {
            ad.classList.add('active');
        }
    });

    currentBottomAd = (currentBottomAd + 1) % bottomAds.length;
}

setInterval(showBottomAd, 2000); // Change bottom ad every 3 seconds
showBottomAd(); // Show the first bottom ad immediately
