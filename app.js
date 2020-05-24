const clock = document.querySelector('.clock');



const tik = () => {

    const now = new Date();
    const birthday = new Date('January 29 2001 7:30:32');
    const thisYear = new Date('January 29 2020 7:30:32');

    const diff = now - birthday;
    const milis = now - thisYear;

    const age = Math.round(diff / 1000 / 60 / 60 / 24 / 365);

    const fullAge = Math.round((milis / 31536000000)*1000000000000);


    clock.innerHTML = `
    <span class = "age">
        ${age}
    </span>
    <span class = "milis">
        .${fullAge}
    </span>
    `;

};

setInterval(tik, 10);
