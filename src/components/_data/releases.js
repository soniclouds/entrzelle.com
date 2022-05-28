// album covers
// studio
import _coverDOAR from '../../assets/img/releases/DOAR.jpg';
import _coverFHTD from '../../assets/img/releases/FHTD.jpg';
import _coverTPC from '../../assets/img/releases/TPC.jpg';
import _coverSTWOF from '../../assets/img/releases/STWOF.jpg';
import _coverPOTM from '../../assets/img/releases/POTM.jpg';
import _coverPOTM_v1 from '../../assets/img/releases/POTM_v1.jpg';
import _coverBS from '../../assets/img/releases/BS.jpg';

// compilations
import _coverMD5 from '../../assets/img/releases/MD5.jpg';
import _coverMD4 from '../../assets/img/releases/MD4.jpg';
import _coverFTB3 from '../../assets/img/releases/FTB3.jpg';
import _coverFTB2 from '../../assets/img/releases/FTB2.jpg';
import _coverEB7 from '../../assets/img/releases/EB7.jpg';
import _coverSFTM16 from '../../assets/img/releases/SFTM16.jpg';
import _coverHIC2 from '../../assets/img/releases/HIC2.jpg';
import _coverHIC1 from '../../assets/img/releases/HIC1.jpg';

// remixes
import _coverBC13_CK from '../../assets/img/releases/BC13_CK.jpg';

const releaseData = {

    studio: {
        doar: {
            id: 'doar',
            cover: _coverDOAR,
            title: {
                short: "Dust On A Razorblade",
                long: "Dust On A Razorblade (2022)  -  LP"
            },
            label: "Alfa Matrix",
            date: {
                short: "May 27, 2022",
                long: "released May 27, 2022 - LP"
            },
            url: "https://alfamatrix.bandcamp.com/album/dust-on-a-razorblade",
            _shareUrl: "https://alfamatrix.bandcamp.com/album/dust-on-a-razorblade?action=share&from=embed",
            alt: "Dust On A Razorblade - album",
            releaseInfo: "(2022)  -  LP",
            credits: {
                production: [
                    'all writing, performance, mixing by David Chamberlin',
                    'mastering by Len Lemeire',
                    'artwork by Tomoki Hayasaka'
                ],
                lyrics: [
                    "All lyrics by David Chamberlin"
                ]
            }
        },
        fhtd: {
            id: 'fhtd',
            cover: _coverFHTD,
            title: {
                short: "Feeling Heavy These Days",
                long: "Feeling Heavy These Days (2021)  -  EP"
            },
            label: "Alfa Matrix",
            date: {
                short: "March 4, 2021",
                long: "released March 4, 2021 - EP"
            },
            url: "https://alfamatrix.bandcamp.com/album/feeling-heavy-these-days-ep",
            _shareUrl: "https://alfamatrix.bandcamp.com/album/feeling-heavy-these-days-ep?action=share&from=embed",
            alt: "Feeling Heavy These Days - EP",
            releaseInfo: "(2021)  -  EP",
            credits: {
                production: [
                    'all writing, performance, mixing by David Chamberlin',
                    'mastering by Sebastian Komor',
                    'artwork by Tomoki Hayasaka'
                ],
                lyrics: [
                    "All lyrics by David Chamberlin"
                ]
            }
        },
        tpc: {
            id: 'tpc',
            cover: _coverTPC,
            title: {
                short: "Total Progressive Collapse",
                long: "Total Progressive Collapse (2016)  -  LP / 2CD Box"
            },
            label: "Alfa Matrix",
            date: {
                short: "April 15, 2016",
                long: "released April 15, 2016 - 2CD LP"
            },
            url: "https://alfamatrix.bandcamp.com/album/total-progressive-collapse-bonus-tracks-version",
            _shareUrl: "https://alfamatrix.bandcamp.com/album/total-progressive-collapse-bonus-tracks-version?action=share&from=embed",
            alt: "Total Progressive Collapse - album",
            releaseInfo: "(2016)  -  LP / 2CD Box",
            credits: {
                production: [
                    'all writing, performance, mixing by David Chamberlin',
                    'mastering by Sebastian Komor',
                    'artwork by Tomoki Hayasaka'
                ],
                lyrics: [
                    "All lyrics by David Chamberlin"
                ]
            }
        },
        stwof: {
            id: 'stwof',
            cover: _coverSTWOF,
            title: {
                short: "Set These Walls On Fire",
                long: "Set These Walls On Fire (2015)   -   EP"
            },
            label: "Alfa Matrix",
            date: {
                short: "June 19, 2015",
                long: "released June 19, 2015 - digital EP"
            },
            url: "https://alfamatrix.bandcamp.com/album/set-these-walls-on-fire-ep",
            _shareUrl: "https://alfamatrix.bandcamp.com/album/set-these-walls-on-fire-ep?action=share&from=embed",
            alt: "Set These Walls On Fire - EP",
            releaseInfo: "(2015)   -   EP",
            credits: {
                production: [
                    'all writing, performance, production, artwork by David Chamberlin'
                ],
                lyrics: [
                    "All lyrics by David Chamberlin"
                ]
            }
        },
        potm: {
            id: 'potm',
            cover: _coverPOTM,
            title: {
                short: "Part Of The Movement (Bonus Tracks Version)",
                long: "Part Of The Movement - Bonus Tracks Version (2015)   -   LP"
            },
            label: "Alfa Matrix",
            date: {
                short: "June 19, 2015",
                long: "released June 19, 2015 - digital LP"
            },
            url: "https://alfamatrix.bandcamp.com/album/part-of-the-movement-bonus-tracks-version",
            _shareUrl: "https://alfamatrix.bandcamp.com/album/part-of-the-movement-bonus-tracks-version?action=share&from=embed",
            alt: "Part Of The Movement - album",
            releaseInfo: "(2015)   -   LP",
            credits: {
                production: [
                    'all writing, performance, production, artwork by David Chamberlin'
                ],
                lyrics: [
                    "All lyrics by David Chamberlin"
                ]
            }
        },
        potm_v1: {
            id: 'potm_v1',
            cover: _coverPOTM_v1,
            title: {
                short: "Part Of The Movement (original)",
                long: "Part Of The Movement - original version (2012)   -   LP"
            },
            label: "Entrzelle Music",
            date: {
                short: "",
                long: ""
            },
            alt: "Part Of The Movement v1 - self-released version album",
            releaseInfo: "",
            credits: {
                production: [
                    'all writing, performance, production, artwork by David Chamberlin'
                ],
                lyrics: [
                    "All lyrics by David Chamberlin"
                ]
            }
        },
        bs: {
            id: 'bs',
            cover: _coverBS,
            title: {
                short: "Biotic Shift",
                long: "Biotic Shift (2013)   -   EP"
            },
            label: "Entrzelle Music",
            date: {
                short: "",
                long: ""
            },
            alt: "Biotic Shift - self-released EP",
            releaseInfo: "",
            credits: {
                production:  [
                    'all writing, performance, production, artwork by David Chamberlin'
                ],
                lyrics: [
                    "All lyrics by David Chamberlin"
                ]
            }
        }
    },
    compilations: {
        md5: {
            id: 'md5',
            cover: _coverMD5,
            title: {
                short: "Matrix Downloaded 005",
                long: "Matrix Downloaded, 005 (2015)"
            },
            label: "Alfa Matrix",
            date: {
                short: "",
                long: ""
            },
            url: "http://alfamatrix.bandcamp.com/album/matrix-downloaded-005",
            _shareUrl: "http://alfamatrix.bandcamp.com/album/matrix-downloaded-005?action=share&from=embed",
            alt: "Matrix Downloaded, 005 - compilation",
            releaseInfo: "",
            featured_song: '"Liar For Profit [arson]"'
        },
        md4: {
            id: 'md4',
            cover: _coverMD4,
            title: {
                short: "Matrix Downloaded 004",
                long: "Matrix Downloaded, 004 (2015)"
            },
            label: "Alfa Matrix",
            date: {
                short: "",
                long: ""
            },
            url: "http://alfamatrix.bandcamp.com/album/matrix-downloaded-004",
            _shareUrl: "http://alfamatrix.bandcamp.com/album/matrix-downloaded-004?action=share&from=embed",
            alt: "Matrix Downloaded, 004 - compilation",
            releaseInfo: "",
            featured_song: '"Compatible With My Intoxication [radio edit]"'
            
        },
        ftb3: {
            id: 'ftb3',
            cover: _coverFTB3,
            title: {
                short: "Face The Beat 3",
                long: "Face The Beat, Session 3 (2015)"
            },
            label: "Side-Line Magazine",
            date: {
                short: "",
                long: ""
            },
            url: "https://sidelinemag.bandcamp.com/album/face-the-beat-session-3",
            _shareUrl: "https://sidelinemag.bandcamp.com/album/face-the-beat-session-3?action=share&from=embed",
            alt: "Face The Beat, Session 3 - compilation",
            releaseInfo: "",
            featured_song: '"Liar For Profit [arson]"'
        },
        ftb2: {
            id: 'ftb2',
            cover: _coverFTB2,
            title: {
                short: "Face The Beat 2",
                long: "Face The Beat, Session 2 - compilation"
            },
            label: "Side-Line Magazine",
            date: {
                short: "",
                long: ""
            },
            url: "https://sidelinemag.bandcamp.com/album/face-the-beat-session-2",
            _shareUrl: "https://sidelinemag.bandcamp.com/album/face-the-beat-session-2?action=share&from=embed",
            alt: "Face The Beat, Session 2 - compilation",
            releaseInfo: "",
            featured_song: '"Compatible With My Intoxication [radio edit]"'
        },
        eb7: {
            id: 'eb7',
            cover: _coverEB7,
            title: {
                short: "Endzeit Bunkertracks 7",
                long: "Endzeit Bunkertracks, act VII (2015)"
            },
            label: "Out Of Line Music",
            date: {
                short: "",
                long: ""
            },
            url: "https://www.outoflineshop.de/endzeit-bunkertracks-vol-7.html",
            _shareUrl: "",
            alt: "Endzeit Bunkertracks, act VII - compilation",
            releaseInfo: "",
            featured_song: '"Power Play [assault]"'
        },
        sftm16: {
            id: 'sftm16',
            cover: _coverSFTM16,
            title: {
                short: "Sounds From The Matrix 16",
                long: "Sounds From The Matrix, vol. 16 - compilation"
            },
            label: "Alfa Matrix",
            date: {
                short: "",
                long: ""
            },
            url: "http://alfamatrix.bandcamp.com/album/sounds-from-the-matrix-16",
            _shareUrl: "http://alfamatrix.bandcamp.com/album/sounds-from-the-matrix-16?action=share&from=embed",
            alt: "Sounds From The Matrix, vol. 16 - compilation",
            releaseInfo: "",
            featured_song: '"Compatible With My Intoxication [radio edit]"'
        },
        hic2: {
            id: 'hic2',
            cover: _coverHIC2,
            title: {
                short: "Hell, It's Christmas...Again",
                long: "Hell, It's Christmas...Again (2012)"
            },
            label: "Hollywood RX Records",
            date: {
                short: "",
                long: ""
            },
            url: "https://itunes.apple.com/us/album/hell...-its-christmas...-again/id589695268",
            _shareUrl: "",
            alt: "Hell, It's Christmas...Again - compilation",
            releaseInfo: "",
            featured_song: '"White Christmas"'
        },
        hic1: {
            id: 'hic1',
            cover: _coverHIC1,
            title: {
                short: "Hell...It's Christmas",
                long: "Hell...It's Christmas (2011)"
            },
            label: "Hollywood RX Records",
            date: {
                short: "",
                long: ""
            },
            url: "https://itunes.apple.com/us/album/hell...its-christmas-ep/id488370290",
            _shareUrl: "",
            alt: "Hell, It's Christmas... - compilation",
            releaseInfo: "",
            featured_song: '"The Most Wonderful Time Of The Year"'
        },
    },
    remixesBy: {
        sod: {
            id: 'sod',
            cover: _coverMD4,
            title: {
                short: "Matrix Downloaded 004",
                long: "Matrix Downloaded, 004 (2015)"
            },
            label: "Alfa Matrix",
            date: {
                short: "",
                long: ""
            },
            url: "https://alfamatrix.bandcamp.com/track/a-sea-of-distance-entrzelle-mix",
            _shareUrl: "https://alfamatrix.bandcamp.com/track/a-sea-of-distance-entrzelle-mix?action=share&from=embed",
            alt: "Mondtraume - Sea Of Distance (Entrzelle remix)",
            releaseInfo: "",
            featured_song: '"Sea Of Distance"',
            original_artist: "Mondträume"
        },
        gtl: {
            id: 'gtl',
            cover: _coverBC13_CK,
            title: {
                short: "Cyberkraft",
                long: "Cyberkraft (2012) - LP"
            },
            label: "BioCarbon13",
            date: {
                short: "",
                long: ""
            },
            url: "https://itunes.apple.com/us/album/cyberkraft/id518318223",
            _shareUrl: "",
            alt: "BioCarbon13 - Good To Live (Entrzelle remix)",
            releaseInfo: "",
            featured_song: '"Good To Live"',
            original_artist: "BioCarbon13"
        },
    },
    remixesOf: {
        pressure: {
            id: 'pressure',
            cover: _coverSTWOF,
            title: {
                short: "Set These Walls On Fire",
                long: "Set These Walls On Fire (2015) - EP"
            },
            label: "Alfa Matrix",
            date: {
                short: "",
                long: ""
            },
            url: "http://alfamatrix.bandcamp.com/track/pressure-psy-aviah-remix",
            _shareUrl: "http://alfamatrix.bandcamp.com/track/pressure-psy-aviah-remix?action=share&from=embed",
            alt: "Entrzelle - Pressure (Psy'Aviah remix)",
            releaseInfo: "",
            featured_song: '"Pressure"',
            remix_artist: "Psy'Aviah"
        },
        ror: {
            id: 'ror',
            cover: _coverSTWOF,
            title: {
                short: "Set These Walls On Fire",
                long: "Set These Walls On Fire (2015) - EP"
            },
            label: "Alfa Matrix",
            date: {
                short: "",
                long: ""
            },
            url: "http://alfamatrix.bandcamp.com/track/rites-of-romance-avarice-in-audio-remix",
            _shareUrl: "http://alfamatrix.bandcamp.com/track/rites-of-romance-avarice-in-audio-remix?action=share&from=embed",
            alt: "Entrzelle - Rites Of Romance (Avarice In Audio remix)",
            releaseInfo: "",
            featured_song: '"Rites Of Romance"',
            remix_artist: "Avarice In Audio"
        },

    }

}

export default releaseData;