console.log('test');

var letReviewBtn = document.getElementById('letReviewBtn');
var letReviewBtn2 = document.getElementById('letReviewBtn2');
var popupWrp = document.getElementById('popupWrp');
var popupCloseBtn = document.getElementById('popupCloseBtn');

letReviewBtn.addEventListener('click', () => {
    popupWrp.classList.toggle('popup_none');
})

letReviewBtn2.addEventListener('click', () => {
    popupWrp.classList.toggle('popup_none');
})

popupCloseBtn.addEventListener('click', () => {
    popupWrp.classList.toggle('popup_none');
})