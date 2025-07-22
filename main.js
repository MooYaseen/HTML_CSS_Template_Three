function startmove(ele) {
    let goal = parseInt(ele.dataset.width);
    ele.style.width = '0%'; // تعيين القيمة الابتدائية
    
    let count = setInterval(() => {
        let mywidth = parseInt(ele.style.width) || 0;
        if (mywidth < goal) {
            mywidth++;
            ele.style.width = mywidth + '%';
        } else {
            clearInterval(count);
            console.log(`width bar completed`);
        }
    },);
}

function skillsp(el) {
    let goal = parseInt(el.dataset.left);
    el.style.left = '-5%'
    el.textContent = '0%'
    let count = setInterval(() => {
        let left = parseInt(el.style.left) || 0;
        let text = parseInt(el.textContent);

        if (left < goal && text < goal) {
            left++;
            text++;
            el.style.left = `${left}%`
            el.textContent = text + '%'
        } else
            clearInterval(count);
    },);
}

function startcount(el) {
    let goal = parseInt(el.dataset.goal);
    let count = setInterval(() => {
        if (parseInt(el.textContent) < goal) {
            el.textContent++;
        } else {
            clearInterval(count);
            console.log(`Counting completed`);
        }
    }, 1000 / goal);
}


let num = document.querySelectorAll('.stats .container .card .n');
let stats = document.querySelector('.stats');
let skills = document.getElementById('skills');
let myBar = document.querySelectorAll('.skills .container .skills-bars .skill .bar span');
let pr = document.querySelectorAll('.skills .container .skills-bars .skill .bar p');
let s = true;
let ss = true;
let sss = true;


// تعيين العرض الابتدائي للبارز
myBar.forEach(bar => {
    bar.style.width = '0%';
});

// إضافة مستمع حدث للتمرير
window.addEventListener('scroll', function () {
    if (window.scrollY >= stats.offsetTop - stats.offsetHeight / 3) {
        if (s) {
            num.forEach(startcount);
            s = false; // تأكد من تغيير الحالة بعد بدء العد
        }
    }

    if (window.scrollY >= skills.offsetTop) {
        if (ss) {
            myBar.forEach(startmove);
            ss = false; // تأكد من تغيير الحالة بعد بدء الحركة
        }
    }

    if (window.scrollY >= skills.offsetTop) {
        if (sss) {
            pr.forEach(skillsp);
            sss = false; // تأكد من تغيير الحالة بعد بدء الحركة
        }
    }

});



let headings = document.querySelectorAll('.sec-heading')
let toTop = document.querySelector('.to-top-btn a')

headings.forEach(function (header) {
    window.addEventListener('scroll', function () {
        let cords = header.getBoundingClientRect()
        this.scrollY >= 1000 ? toTop.classList.add('show') : toTop.classList.remove('show');
        if (cords.top < 200 && cords.top > - cords.height) {
            header.classList.add('sec-heading-in')
            header.classList.remove('sec-heading-out')
        }
        else {
            header.classList.remove('sec-heading-in')
            header.classList.add('sec-heading-out')
        }
    })
})






