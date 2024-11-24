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
    }, 200);

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
        reg: '1502218239',
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
        name: "MD. Atikul Islam", 
        podobi: "Cheif Instructor & Head of Department (Computer) 1st Shift",
        dprmt: "Computer Science & Technology",
        shift: "1st Shift",
        email: "atiqduet@gmail.com",
        batch: "0",
        mobile: "01716067885",
        img: "./src/teacher/Atikulislam.png",
    },
    {
        name: "Mohammad Hazrat Ali",
        podobi: "Cheif Instructor & Head of Department (Computer) 2nd Shift",
        dprmt: "Computer Science & Technology",
        shift: "2nd Shift",
        email: "mniloy@yahoo.com",
        batch: "0",
        mobile: "01712118372",
        img: "./src/teacher/hazratali.png",
    },
    {
        name: "Fatema Johura",
        podobi: "Cheif Instructor",
        dprmt: "Computer Science & Technology",
        shift: "1st Shift",
        email: "sompa.ruet98@gmail.com",
        batch: "0",
        mobile: "01712667957",
        img: "./src/teacher/fatemajohora.png",
    },
    {
        name: "Foujia Anika", 
        podobi: "Instructor Computer",
        dprmt: "Computer Science & Technology",
        shift: "1st Shift",
        email: "anikcse10@gmail.com",
        batch: "0",
        mobile: "01921220637",
        img: "./src/teacher/foujiaanika.png",
    },
    {
        name: "Tofayel Alom Siddiki",
        podobi: "Instructor Computer",
        dprmt: "Computer Science & Technology",
        shift: "1st Shift",
        email: "tofaelalam91@gmail.com",
        batch: "0",
        mobile: "01718195615",
        img: "./src/teacher/tofayelalom.png",
    },
    {
        name: "S. Juthi Al Saki",
        podobi: "Instructor Computer",
        dprmt: "Computer Science & Technology",
        shift: "1st Shift",
        email: "sjuthi12@gmail.com",
        batch: "0",
        mobile: "01992008218",
        img: "./src/teacher/sjuthialsaki.png",
    },
    {
        name: "Tonmoy Debnath",
        podobi: "Instructor Computer",
        dprmt: "Computer Science & Technology",
        shift: "2nd Shift",
        email: "tonmoy.mbd@gmail.com",
        batch: "40",
        mobile: "01718551875",
        img: "./src/teacher/tonmoydebnath.jpeg",
    },
    {
        name: "MD. Refat Amin",
        podobi: "Instructor Computer",
        dprmt: "Computer Science & Technology",
        shift: "2nd Shift",
        email: "refatamin1305@gmail.com",
        batch: "41",
        mobile: "01967400115",
        img: "./src/teacher/refatamin.jpg",
    },
    {
        name: "Foujia Hoque",
        podobi: "Instructor Computer",
        dprmt: "Computer Science & Technology",
        shift: "2nd Shift",
        email: "huque.fouzia863@gmail.com",
        batch: "0",
        mobile: "01992008221",
        img: "./src/teacher/foujiahoque.png",
    },
    {
        name: "Obydul Islam (Course Instructor)",
        podobi: "Part-time teacher",
        dprmt: "Computer Science & Technology",
        shift: "2nd Shift",
        email: "obydulmpi@gmail.com",
        batch: "0",
        mobile: "01952805498",
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
                    <h2 class="font-bold text-[18px]"> Name : ${teacher.name}</h2>
                    <h3 class="">${teacher.podobi}</h3>
                    <h3>Department : ${teacher.dprmt}</h3>
                    <h3>Shift : ${teacher.shift}</h3>
                    <h3>Email : ${teacher.email}</h3>
                    <h3>Batch (BCS) : ${teacher.batch}</h3>                 
                    <h3>Phone : ${teacher.mobile}</h3>
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







