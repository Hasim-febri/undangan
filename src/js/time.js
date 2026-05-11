import { data } from "../assets/data/data.js";

export const time = () => {
    const akad = document.getElementById('akad');
    const rep1 = document.getElementById('resepsi1');
    // const rep2 = document.getElementById('resepsi2');
    const maprep1 = document.getElementById('maprep1');
    // const maprep2 = document.getElementById('maprep2');
    const butrep1 = document.getElementById('butrep1');
    // const butrep2 = document.getElementById('butrep2');

    const createTimeListItem = (title, details) => (
        `<h3>${title}</h3>
         <p>${details.day}, ${details.date} ${details.month} ${details.year} <br> 
         Pukul ${details.hours.start} WIB sd ${details.hours.finish}</p>`
    );

    akad.innerHTML = createTimeListItem('Akad', data.time.marriage);
    rep1.innerHTML = createTimeListItem('Resepsi', data.time.reception2);
    // rep2.innerHTML = createTimeListItem('Resepsi 2', data.time.reception2);
    maprep1.href = data.link.map2;
    // maprep2.href = data.link.map2;
    butrep1.textContent = data.time.address2;
    // butrep2.textContent = data.time.address2;

    // mapLink.href = data.link.map;
    // addressParagraph.textContent = data.time.address1;

    // console.log(rep2,createTimeListItem('Resepsi 1', data.time.reception1));
};
