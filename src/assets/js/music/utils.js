
export function sortSingerList(list) {
    const HOT_SINGER_LEN = 10;
    const HOT_NAME = '热门';
    let map = {
        hot: {
            title: HOT_NAME,
            items: []
        }
    };
    list.forEach(item,index => {
        if (index < HOT_SINGER_LEN) {
            map.hot.items.push(new Singer({
                name: item.Fsinger_name,
                id: item.Fsinger_mid
            }));
        }
        const key = item.Findex;
        
    })
}