class ProductService {
    products = [
        {
            id: 1,
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
            categoryId: 1,
            name: 'Product 1',
            price: 12.5,
            url: 'https://userscontent2.emaze.com/images/3d23edfb-cee6-4b8b-a903-f14b23729a2e/760462fd8f86f009cf2041f5234c4f90.png',
        },
        {
            id: 2,
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
            categoryId: 1,
            name: 'Product 2',
            price: 20.5,
            url: 'https://avatars.mds.yandex.net/get-zen_doc/1780598/pub_5e8b22f10091cb76045870c6_5e8b23ee056db828ac6ae5e1/scale_1200',
        },
        {
            id: 3,
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
            categoryId: 2,
            name: 'Product 3',
            price: 15,
            url: 'https://im0-tub-ua.yandex.net/i?id=5ab11130ed0af6f46ba011d9286274b5&n=13',
        },
        {
            id: 4,
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
            categoryId: 1,
            name: 'Product 4',
            price: 6.45,
            url: 'https://im0-tub-ua.yandex.net/i?id=5ab11130ed0af6f46ba011d9286274b5&n=13',
        },
        {
            id: 5,
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
            categoryId: 3,
            name: 'Product 5',
            price: 7,
            url: 'https://im0-tub-ua.yandex.net/i?id=5ab11130ed0af6f46ba011d9286274b5&n=13',
        },
        {
            id: 6,
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
            categoryId: 3,
            name: 'Product 6',
            price: 14,
            url: 'https://www.nastol.com.ua/download.php?img=201804/1680x1050/nastol.com.ua-277496.jpg',
        },
        {
            id: 7,
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
            categoryId: 2,
            name: 'Product 7',
            price: 11,
            url: 'https://images.izi.ua/54918466',
        },
        {
            id: 8,
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
            categoryId: 3,
            name: 'Product 8',
            price: 22,
            url: 'https://avatars.mds.yandex.net/get-pdb/2500392/4b161865-13a9-4ced-bbe6-8e2af6faa23c/s1200?webp=false',
        },
        {
            id: 9,
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
            categoryId: 2,
            name: 'Product 9',
            price: 17,
            url: 'https://avatars.mds.yandex.net/get-pdb/2500392/4b161865-13a9-4ced-bbe6-8e2af6faa23c/s1200?webp=false',
        },
        {
            id: 10,
            about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dignissimos necessitatibus in unde porro voluptas quos consectetur ut et repudiandae quam quia laborum obcaecati, suscipit velit praesentium provident non corporis!',
            categoryId: 1,
            name: 'Product 10',
            price: 6,
            url: 'https://im0-tub-ua.yandex.net/i?id=5ab11130ed0af6f46ba011d9286274b5&n=13',
        },
    ];

    getProducts() {
        return this.products;
    }
    getProductsForCatalog(id) {
        var buff = [];
        this.products.forEach((element) => {
            if (element.categoryId === id) {
                buff.push(element);
            }
        });
        return buff;
    }
}
export default new ProductService();
