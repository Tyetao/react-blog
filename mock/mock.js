let Mock = require('mockjs');
const Random = Mock.Random;

module.exports = () => {
    let data = {};

    data.user = {
        'name': Random.cname(),
        'intro': Random.word(20)
    };

    data.articleList = [];

    for (let i = 0; i < 20; i++) {
        let content=Random.cparagraph(0,10);

        data.articleList.push({
            id: i,
            name: Random.cname(),
            createAt: Random.datetime(),
            class: Random.string( 7, 10 ),
            reading: Random.integer(100, 5000),
            desc: content.substr(0, 200),
            content: Random.cparagraph(10, 50)
        })
    }

    data.classify = [];

    for (let i = 0; i < 16; i++) {
        data.classify.push({
            id: i,
            count: Random.integer(60,100),
            class: Random.string( 7, 10 ),
            totalClass: 66
        })
    }

    return data;
};
