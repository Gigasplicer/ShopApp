import moment from 'moment';

class Orders {
    constructor(id, items, totalAmount, date) {
        this.id = id;
        this.items = items;
        this.totalAmount = totalAmount;
        this.date = date;
    }
//getter
//for android install npm install --save moment  
 get readableDate() {
//     return this.date.toLocaleDateString('en-EN',{
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric',
//         hour: '2-digit',
//         minute: '2-digit'
//     });

return moment(this.date).format('MMMM D YYYY, hh:mm');
}


}

export default Orders;