export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Hasim Febriyanto, S.Kom.',
            child: 'Putra ke 2 ',
            father: 'Saryono',
            mother: 'Ruminten',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Cahya Wulansari, S.M.',
            child: 'Putri ke 3',
            father: 'Rosidin',
            mother: 'Siti Muawanah',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2026',
            month: 'Mei',
            date: '31',
            day: 'Minggu',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception1: {
            year: '2026',
            month: 'Mei',
            date: '31',
            day: 'Minggu',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address1: 'Sumber Agung IV RT 028 RW 010 Secang Kec Secang Kab Magelang'
        ,reception2: {
            year: '2026',
            month: 'Juni',
            date: '02',
            day: 'Selasa',
            hours: {
                start: '11.00',
                finish: 'Selesai'
            }
        },
        address2: 'Gedung Serbaguna Dsn Cepit Ds Pagergunung Kec Bulu Kab Temanggung'
    },

    link: {
        calendar: 'https://calendar.app.google/YCZv1cmimiYkV8Hk7',
        map1: 'https://maps.app.goo.gl/2sLG19xf8M7tbRt28',
        map2: 'https://maps.app.goo.gl/uqczPT14uXJ6jXQn8',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Hasim',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Cahya',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycby8J08zXVKrcaNChezwgKd8g3OinsRZ8NpyKwttCzAVoyEDPccwPJ-xF7ciQdndrEl4pA/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
