class MenuItemCore {
    name: string = 'Null';
    route: string = '';
    
    constructor(name: string, route: string) {
        this.name = name;
        this.route = route;
    }
}

export default MenuItemCore;