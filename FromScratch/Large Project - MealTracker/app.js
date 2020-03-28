// Storage Controller

// Item Controller
const ItemCtrl = (function() {
    // Item Constructor
    const Item = function(id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data Structure / State
    // Note these are private data and cannot be accessed by the browser unless returned
    const data = {
        items: [
            {id: 0, name: 'Steak Dinner', calories: 1200},
            {id: 1, name: 'Cookie', calories: 400},
            {id: 2, name: 'Eggs', calories: 300},

        ],
        currentItem: null,
        totalCalories: 0
    }

    return {
        getItems: function() {
            return data.items;
        },
        logData: function(){
            return data;
        }
    }
})();





// UI Controller
const UICtrl = (function() {
    const UISelectors = {
        itemList: '#item-list',
        addBtn: ".add-btn"
    }

    // Public Method
    return {
        populateItemList: function(items){
            let html = '';

            items.forEach(function(item){
                html += `<li id="item-${item.id}" class="collection-item"><strong>${item.name} </strong>  <em>${item.calories}</em>
                <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a></li>`;
            });

            // Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },

        getSelectors: function(){
            return UISelectors;
        }
    }
})();







// App Controller
const App = (function(ItemCtrl, UICtrl) {
    // Load event listeners
    const loadEventListeners = function() {
        // Get UI Selectors
        const UISelectors = UICtrl.getSelectors();
        
        // Add item event
        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    }

    // Add item submit
    const itemAddSubmit = function(e){
        console.log('Add');

        e.preventDefault();
    }

    // Public methods
    return {
        init: function(){
            console.log('Initializing App');

            // Fetch items from data structure
            const items = ItemCtrl.getItems();

            // Populate list with Controller
            UICtrl.populateItemList(items);

            // Load event Listeners
            loadEventListeners();
        }
    }

})(ItemCtrl, UICtrl);


// Initialize App
App.init();