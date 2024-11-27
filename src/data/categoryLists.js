import kbag from "../assets/images/kid_bag.jpg";
import kshoe from "../assets/images/kid_shoe.jpg";
import mshirt from "../assets/images/men_shirt.jpg";
import mshoe from "../assets/images/men_shoe.jpg";
import msuit from "../assets/images/men_suit.jpg";
import wdress from "../assets/images/women_dress.jpg";
import wshoe from "../assets/images/women_shoe.jpg";
import wbag from "../assets/images/bag.jpg";

export const categoryLists = {
    "Men": [{
        'image': mshirt , 'title': "Shirt", desc: "This is description of the product"
    }, {
        'image': mshoe, 'title': "Shoes", desc: "This is description of the product"
    }, {
        'image': msuit, 'title': "Suit", desc: "This is description of the product"
    }], "Women": [{
        'image': wdress, 'title': "Dress", desc: "This is description of the product"
    }, {
        'image': wshoe, 'title': "Shoes", desc: "This is description of the product"
    },
    {
        'image': wbag, 'title': "Bag", desc: "This is description of the product"
    }], "Kids": [{
        'image': kbag, 'title': "Bag", desc: "This is description of the product"
    }, {
        'image': kshoe, 'title': "Shoes", desc: "This is description of the product"
    }],
};