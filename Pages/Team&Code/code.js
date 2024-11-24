const usernameField = document.getElementById('username-field');
const passwordField = document.getElementById('password-field');
const submitBtnel = document.getElementById('submit-btn');

const logInContainer = document.getElementById('log-in-container')
const codeContainer = document.getElementById('code-container')

const menuCrose = document.getElementById('nav-swap-for-mobile')
const navMenuForMobile = document.getElementById('nav-menu-for-moble')
let toggle = true;
const navMenuHandler = () => {
    if (toggle) {
        navMenuForMobile.style.display = 'flex'
        toggle = false;
    } else {
        navMenuForMobile.style.display = 'none';
        toggle = true;
    }
}
submitBtnel.addEventListener('click', () => {
    let username = usernameField.value;
    let password = passwordField.value;
    console.log(username);
    console.log(password);
    if (username == 'devsujoy36' && password == 123) {
        console.log('Clicked');
        codeContainer.style.display = "block";
        logInContainer.style.display = "none";
    } else {
        alert('Enter Valid User & Pass')
    }
})
let codeLoader = document.getElementById('preloader');
window.addEventListener('load', function () {
    setTimeout(() => {
        codeLoader.remove()
    }, 500);

})



const teams = [
    {
        img: '../../src/assets/profile-pic/sujoy.png',
        name: 'SUJOY DAS',
        team: 'Team Leader',
        roll: '672736',
        reg: '1502218235',
        dept: 'CST',
        sem: '6th',
        shift: '2nd',
        group: 'B'

    },
    {
        img: '../../src/assets/profile-pic/rain.jpg',
        name: 'NAIMUL HASAN',
        team: 'Co-Team-Leader',
        roll: '672737',
        reg: '1502218234',
        dept: 'CST',
        sem: '6th',
        shift: '2nd',
        group: 'B'

    },
    {
        img: '../../src/assets/profile-pic/shofiqul.jpg',
        name: 'SHAFIKUL ISLAM',
        team: 'Member',
        roll: '672732',
        reg: '1502218232',
        dept: 'CST',
        sem: '6th',
        shift: '2nd',
        group: 'B'

    },
    {
        img: '../../src/assets/profile-pic/rifat.jpg',
        name: 'MD. RIFAT ISLAM',
        team: 'Member',
        roll: '672730',
        reg: '1502218241',
        dept: 'CST',
        sem: '6th',
        shift: '2nd',
        group: 'B'

    },
    {
        img: '../../src/assets/profile-pic/mahfuza.jpg',
        name: 'MAFUJA AKTER',
        team: 'Member',
        roll: '672734',
        reg: '1502218237',
        dept: 'CST',
        sem: '6th',
        shift: '2nd',
        group: 'B'

    },
    {
        img: '../../src/assets/profile-pic/chua.png',
        name: 'CHUA AKTER',
        team: 'Member',
        roll: '672735',
        reg: '1502218236',
        dept: 'CST',
        sem: '6th',
        shift: '2nd',
        group: 'B'

    },
]
const teamContainer = document.getElementById('team-container')
teams.forEach((team) => {
    let div = document.createElement('div');
    div.className = 'border p-8 flex flex-col gap-3 rounded-lg hover:shadow-xl hover:-translate-x-2 hover:-translate-y-2 transition-all'
    div.innerHTML = `
                <div class="flex justify-center items-center">
                    <img class="rounded-full w-full hover:scale-105 transition"
                        src=${team.img} alt="Sujoy Das">
                </div>
                <div class="">
                    <h3 class="font-bold text-2xl">${team.name} </h3>
                    <p class="font-semibold">${team.team}</p>
                    <p class="font-semibold">Roll No : ${team.roll}</p>
                    <p>Reg. No : ${team.reg}</p>
                    <p>Dept. : ${team.dept}</p>
                    <p>Semester : ${team.sem}</p>
                    <p>Shift : ${team.shift}</p>
                    <p>Group : ${team.group}</p>
                </div>
    `
    teamContainer.appendChild(div);
})






const teachers = [
    {
        name: "জনাব মুহাম্মদ আতিকুল ইসলাম",
        podobi: "চিফ ইনস্ট্রাক্টর ও বিভাগীয় প্রধান (কম্পিউটার) ১ম শিফট",
        dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
        shift: "১ম শিফট",
        email: "atiqduet@gmail.com",
        batch: "0",
        mobile: "০১৭১৬০৬৭৮৮৫",
        img: "./src/teacher/Atikulislam.png",
    },
    {
        name: "মোহাম্মদ হযরত আলী",
        podobi: "চিফ ইনস্ট্রাক্টর ও বিভাগীয় প্রধান(কম্পিউটার) ২য় শিফট",
        dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
        shift: "২য়শিফট",
        email: "mniloy@yahoo.com",
        batch: "0",
        mobile: "০১৭১২১১৮৩৭২",
        img: "./src/teacher/hazratali.png",
    },
    {
        name: "ফাতেমা জোহুরা",
        podobi: "চিফ ইনস্ট্রাক্টর",
        dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
        shift: "১ম শিফট",
        email: "sompa.ruet98@gmail.com",
        batch: "0",
        mobile: "০১৭১২৬৬৭৯৫৭",
        img: "./src/teacher/fatemajohora.png",
    },
    {
        name: "ফাওজিয়া আনিকা",
        podobi: "ইনস্ট্রাক্টর কম্পিউটার",
        dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
        shift: "১ম শিফট",
        email: "anikcse10@gmail.com",
        batch: "0",
        mobile: "01921220637",
        img: "./src/teacher/foujiaanika.png",
    },
    {
        name: "তোফায়েল আলম সিদ্দিকী",
        podobi: "ইনস্ট্রাক্টর কম্পিউটার",
        dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
        shift: "১ম শিফট",
        email: "tofaelalam91@gmail.com",
        batch: "0",
        mobile: "01718195615",
        img: "./src/teacher/tofayelalom.png",
    },
    {
        name: "এস যুথী আল সাকী",
        podobi: "ইনস্ট্রাক্টর কম্পিউটার",
        dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
        shift: "১ম শিফট",
        email: "sjuthi12@gmail.com",
        batch: "0",
        mobile: "০১৯৯২০০৮২১৮",
        img: "./src/teacher/sjuthialsaki.png",
    },
    {
        name: "তন্ময় দেবনাথ",
        podobi: "ইনস্ট্রাক্টর কম্পিউটার",
        dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
        shift: "২য় শিফট",
        email: "tonmoy.mbd@gmail.com",
        batch: "৪০",
        mobile: "০১৭১৮৫৫১৮৭৫",
        img: "./src/teacher/tonmoydebnath.jpeg",
    },
    {
        name: "মোঃ রিফাত আমিন",
        podobi: "ইনস্ট্রাক্টর কম্পিউটার",
        dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
        shift: "২য় শিফট",
        email: "refatamin1305@gmail.com",
        batch: "৪১",
        mobile: "০১৯৬৭৪০০১১৫",
        img: "./src/teacher/refatamin.jpg",
    },
    {
        name: "ফৌজিয়া হক",
        podobi: "ইনস্ট্রাক্টর কম্পিউটার",
        dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
        shift: "২য় শিফট",
        email: "huque.fouzia863@gmail.com",
        batch: "0",
        mobile: "০১৯৯২০০৮২২১",
        img: "./src/teacher/foujiahoque.png",
    },
    {
        name: "উবায়দুল ইসলাম (Course Instructor)",
        podobi: "খন্ডকালীন শিক্ষক",
        dprmt: "কম্পিউটার সাইন্স এন্ড টেকনোলজি",
        shift: "২য় শিফট",
        email: "obydulmpi@gmail.com",
        batch: "0",
        mobile: "০১৯৫২৮০৫৪৯৮",
        img: "./src/teacher/obydulislam.jpg",
    },
]

const teacherContainer = document.getElementById('teacher-container');

teachers.forEach((teacher) => {
    let div = document.createElement('div');
    div.className = 'border p-6 gap-3 rounded-lg hover:shadow-xl hover:-translate-x-2 hover:-translate-y-2 transition-all'
    div.innerHTML = `
                <figure class="flex justify-center items-center">
                   <img class="rounded-full w-8/12 hover:scale-105 transition" src=${teacher.img} />
               </figure>
                <div class="mt-6 flex flex-col  gap-2 text-xs">
                    <h2 class="font-bold text-[18px]"> নাম : ${teacher.name}</h2>
                    <h3 class="">পদবি : ${teacher.podobi}</h3>
                    <h3>অনুষদ : ${teacher.dprmt}</h3>
                    <h3>বিভাগ : ${teacher.shift}</h3>
                    <h3>ই-মেইল : ${teacher.email}</h3>
                    <h3>ব্যাচ (বিসিএস) : ${teacher.batch}</h3>                 
                    <h3>মোবাইল : ${teacher.mobile}</h3>
                </div>         
            
    `
    teacherContainer.appendChild(div);
})


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    freeMode: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    breakpoints: {
        576: { slidesPerView: 1, spaceBetween: 10, },
        768: { slidesPerView: 2, spaceBetween: 10, },
        1024: { slidesPerView: 4, spaceBetween: 15, },
    },
});







