const getIcon = (key: string) => {
    const Icons = new Map<string, string>();
    Icons.set('mail', '../assets/images/mailIcon.png');
    Icons.set('calendar', '../assets/images/calendarIcon.png');
    Icons.set('folder', '../assets/images/folder.png');
    Icons.set('contacts', '../assets/images/contactsIcon.png');
    Icons.set('recycle', '../assets/images/recycle.png');
    Icons.set('notes', '../assets/images/notesIcon.png');
    Icons.set('settings', '../assets/images/settings.png');
    Icons.set('favorites', '../assets/images/favorites.png');

    return Icons.get(key);
}

class TreeViewNode {
    icon: string;
    label: string;
    value: string; //PathKey
    expanded: boolean;
    selected: boolean;
    items: TreeViewNode[] = [];

    constructor(node: any) {
        this.icon = getIcon('mail');////////////???? Need to set
        this.label = node.name;
        this.value = node.pathKey;
        this.expanded = true;
        this.selected = false;

        if (node.children) {
            node.children.forEach(element => {
                if (element) {
                    this.items.push(new TreeViewNode(element));
                }
            });
        }
    }
}

export class TreeViewSource {
    source: TreeViewNode[] = [];

    constructor(arr: any) {
        if (arr) {
            arr.forEach(element => {
                this.source.push(new TreeViewNode(element));
            });
        }
    }
}