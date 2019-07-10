import { TreeViewSource } from './treeViewSource';
import { TableViewSource } from './tableViewSource';

class BaseNode {
    name: string;
    compareMode: number;
    componentType: number;
    pathKey: string = randomWord(50);

    constructor(){
        Nodes.set(this.pathKey, this);
    }
}

class SummaryNode extends BaseNode {
    children: SummaryNode[] = [];
    leftList: CompareNode[] = [];
    rightList: CompareNode[] = [];

    constructor(obj: any) {
        super();
        this.name = obj.name;
        this.compareMode = obj.compareMode;
        this.componentType = obj.componentType;

        if (obj.children) {
            obj.children.forEach(element => {
                if (element)
                    this.children.push(new SummaryNode(element));
            });
        }

        if (obj.leftList) {
            obj.leftList.forEach(element => {
                if (element)
                    this.leftList.push(new CompareNode(element));
            });
        }

        if (obj.rightList) {
            obj.rightList.forEach(element => {
                if (element)
                    this.rightList.push(new CompareNode(element));
            });
        }
    }

    get leftTreeSource() {
        return new TreeViewSource(this.leftList);
    }

    get rightTreeSource() {
        return new TreeViewSource(this.rightList);
    }
}

class CompareNode extends BaseNode {
    children: CompareNode[] = [];
    properties: CompareList;

    constructor(obj: any) {
        super();
        this.name = obj.name;
        this.compareMode = obj.compareMode;
        this.componentType = obj.componentType;

        if (obj.children) {
            obj.children.forEach(element => {
                if (element)
                    this.children.push(new CompareNode(element));
            });
        }

        if (obj.properties)
            this.properties = new CompareList(obj.properties);
    }

    get TableSource() {
        return new TableViewSource(this.properties.compareList);
    }
}

class CompareList {
    compareList: CompareListNode[] = [];

    constructor(arr: any) {
        arr.forEach(element => {
            if (element)
                this.compareList.push(new CompareListNode(element));
        });
    }
}

class CompareListNode extends BaseNode {
    properties: Map<string, string> = new Map();

    constructor(obj: any) {
        super();
        this.name = obj.name;
        this.compareMode = obj.compareMode;
        this.componentType = obj.componentType;

        if (obj.properties) {
            obj.properties.forEach(element => {
                if (element)
                    this.properties.set(element[0], element[1]);
            });
        }

    }
}

let Nodes: Map<string, any> = new Map();

export class CompareResult {
    root: SummaryNode;

    constructor(obj: any) {
        Nodes = new Map();
        this.root = new SummaryNode(obj.root);
    }

    _summaryTreeSource:TreeViewSource;
    get SummaryTreeSource() {
        if(!this._summaryTreeSource){
            this._summaryTreeSource = new TreeViewSource([this.root]);
        }
        return this._summaryTreeSource;
    }

    getNode(pathKey:string){
        return Nodes.get(pathKey);
    }

    getListData(pathKey:string){

    }
}

function randomWord(range) {
    const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let str = "";
    for (var i = 0; i < range; i++) {
        let pos = Math.round(Math.random() * (arr.length - 1));
        str += arr[pos];
    }
    return str;
}