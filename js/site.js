(function() {
    var likes = [
        'teach javascript and frontend development',
        'create complex web apps',
        'test out new and interesting frameworks',
        'solve challenging web problems for businesses',
        'build pixel perfect markup',
        'write reusable, easy to maintain code'
    ];
    var funs = [
        'run long distances',
        'play sports',
        'learn about everything',
        'play with my dogs',
        'cheer on the Chicago Cubs',
        'watch movies with my wife',
        'spend time with my son',
        'hike',
        'discover new foods',
        'attend sporting events',
        'watch Notre Dame football',
        'build wood furniture for fun',
        'take cross country road trips'
    ];
    var usedLikes = ['make the complicated web things so you don\'t have to'];
    var usedFuns = [];
    var factBtn = document.getElementById('factBtn');
    var funText = document.getElementById('funText');
    var likeText = document.getElementById('likeText');

    function getRandomItem(arr, usedArr) {
        if (!arr.length) {
            console.log('resetting');
            arr.splice.apply(arr, [0, 0].concat(usedArr));
            usedArr.splice(0, usedArr.length);
        }
        var index = Math.floor(Math.random()*arr.length);
        var item = arr[index];
        var removedItem = arr.splice(index, 1);
        usedArr.push(removedItem[0]);
        return item;
    }

    function changeText(el, text) {
        el.innerText = text;
        el.classList.remove('fadeOut');
    }

    function swapLikesAndFuns() {
        swapLikes();
        swapFuns();
    }

    function swapLikes() {
        likeText.classList.add('fadeOut');
        setTimeout(function() {
            changeText(likeText, getRandomItem(likes, usedLikes));
        }, 300);
    }

    function swapFuns() {
        funText.classList.add('fadeOut');
        setTimeout(function() {
            changeText(funText, getRandomItem(funs, usedFuns));
        }, 300);
    }

    if (factBtn) {
        swapFuns();
        factBtn.addEventListener('click', swapLikesAndFuns, false);
        likeText.addEventListener('click', swapLikes, false);
        funText.addEventListener('click', swapFuns, false);
    }

    function expandImage(e) {
        var el = e.target,
            isTarget = el.classList.contains('work-image'),
            parentIsTarget = el.parentElement.classList.contains('work-image');

        if (isTarget || parentIsTarget) {
            var target = isTarget ? el : el.parentElement;
            target.classList.toggle('expanded');
        }
    }

    var workSection = document.getElementById('work-section');
    if (workSection) {
        workSection.addEventListener('click', expandImage, false);
    }
}());