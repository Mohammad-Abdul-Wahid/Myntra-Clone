let bagItems;

onLoad();
function onLoad() {
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}

function addToBag(itemId) {
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon() {
    let bagitemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagitemCountElement.style.visibility = 'visible';
        bagitemCountElement.innerText = bagItems.length;
    } else {
        bagitemCountElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){
        return ;
    }
    let innerHTML = '';
    items.forEach(item => {
        innerHTML += ` <div class="item-container">
                    <img class="item-image" src="${item.image}" alt="item image">
                    <div class="rating">
                        ${item.rating.stars} ⭐ | ${item.rating.count}
                    </div>
                    <div class="company-name">${item.company}</div>
                    <div class="item-name">${item.item_name}</div>
                    <div class="price">
                        <span class="current-price">Rs ${item.current_price}</span>
                        <span class="original-price">Rs ${item.original_price}</span>
                        <span class="discount">(${item.discount_perscentage}% OFF)</span>
                    </div>
                    <button onclick='addToBag(${item.id})' class="btn-add-bag">Add to Bag</button>
                </div>`;
    })

    itemsContainerElement.innerHTML = innerHTML;
}

