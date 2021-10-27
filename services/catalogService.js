class CatalogService {
    catalogs = [
        {
            id: 1,
            title: 'category 1',
            url: 'https://www.nastol.com.ua/download.php?img=201606/1280x1024/nastol.com.ua-178781.jpg',
        },
        {
            id: 2,
            title: 'category 2',
            url: 'https://www.nastol.com.ua/download.php?img=201804/1680x1050/nastol.com.ua-277496.jpg',
        },
        {
            id: 3,
            title: 'category 3',
            url: 'https://www.nastol.com.ua/download.php?img=201606/1680x1050/nastol.com.ua-179400.jpg',
        },
        {
            id: 4,
            title: 'category 4',
            url: 'https://www.fonstola.ru/download.php?file=201308/1600x900/fonstola.ru-108950.jpg',
        },
        {
            id: 5,
            title: 'category 5',
            url: 'https://w-dog.ru/wallpapers/9/8/549551266186127/kananaskis-alberta-kanada-nebo-oblaka-gory-les-derevya-el-priroda-zakat-ozero-vecher-kamni-otrazhenie.jpg',
        },
        {
            id: 6,
            title: 'category 6',
            url: 'https://avatars.mds.yandex.net/i?id=2c0897062fc021d63a255445d376334b-5235436-images-thumbs&n=13',
        },
        {
            id: 7,
            title: 'category 7',
            url: 'https://www.nastol.com.ua/download.php?img=201401/1920x1200/nastol.com.ua-83652.jpg',
        },
        {
            id: 8,
            title: 'category 8',
            url: 'https://www.nastol.com.ua/download.php?img=201401/1920x1200/nastol.com.ua-83652.jpg',
        },
        {
            id: 9,
            title: 'category 9',
            url: 'https://www.nastol.com.ua/download.php?img=201401/1920x1200/nastol.com.ua-83652.jpg',
        },
    ];

    getCatalogs() {
        return this.catalogs;
    }
}
export default new CatalogService();
