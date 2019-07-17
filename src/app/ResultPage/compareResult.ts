import { TreeViewSource } from './treeViewSource';
import { TableViewSource } from './tableViewSource';


class BaseNode {
    name: string;
    compareMode: number;
    componentType: number;
    pathKey: string = '';

    constructor(obj: any, basePath: string, nodes: Map<string, any>) {
        this.name = obj.name;
        this.compareMode = obj.compareMode;
        this.componentType = obj.componentType;

        this.pathKey = basePath ? `${basePath}-${this.name}` : this.name;
        nodes.set(this.pathKey, this);
    }
}


class SummaryNode extends BaseNode {
    children: SummaryNode[] = [];
    leftList: CompareNode[] = [];
    rightList: CompareNode[] = [];

    constructor(obj: any, basePath: string, nodes: Map<string, any>) {
        super(obj, basePath, nodes);

        if (obj.children) {
            obj.children.forEach(element => {
                if (element)
                    this.children.push(new SummaryNode(element, this.pathKey, nodes));
            });
        }

        if (obj.leftList) {
            obj.leftList.forEach(element => {
                if (element)
                    this.leftList.push(new CompareNode(element, this.pathKey, LeftNodes));
            });
        }

        if (obj.rightList) {
            obj.rightList.forEach(element => {
                if (element)
                    this.rightList.push(new CompareNode(element, this.pathKey, RightNodes));
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

    constructor(obj: any, basePath: string, nodes: Map<string, any>) {
        super(obj, basePath, nodes);

        if (obj.children) {
            obj.children.forEach(element => {
                if (element)
                    this.children.push(new CompareNode(element, this.pathKey, nodes));
            });
        }

        if (obj.properties)
            this.properties = new CompareList(obj.properties, this.pathKey, nodes);
    }

    get TableSource() {
        return new TableViewSource(this.properties);
    }
}


export class CompareList {
    compareList: CompareListNode[] = [];

    constructor(arr: any, basePath: string, nodes: Map<string, any>) {
        arr.forEach(element => {
            if (element)
                this.compareList.push(new CompareListNode(element, basePath, nodes));
        });
    }
}


class CompareListNode extends BaseNode {
    properties: Map<string, string> = new Map();

    constructor(obj: any, basePath: string, nodes: Map<string, any>) {
        super(obj, basePath, nodes);

        if (obj.properties) {
            for (const key in obj.properties) {
                if (obj.properties.hasOwnProperty(key)) {
                    this.properties.set(key, obj.properties[key]);
                }
            }
        }
    }
}


let SummaryNodes: Map<string, any> = new Map();
let LeftNodes: Map<string, any> = new Map();
let RightNodes: Map<string, any> = new Map();


export class CompareResult {
    root: SummaryNode;

    constructor(obj: any) {
        SummaryNodes = new Map();
        LeftNodes = new Map();
        RightNodes = new Map();
        this.root = new SummaryNode(obj.result, '', SummaryNodes);
    }

    _summaryTreeSource: TreeViewSource;
    get SummaryTreeSource() {
        if (!this._summaryTreeSource) {
            this._summaryTreeSource = new TreeViewSource([this.root]);
        }
        return this._summaryTreeSource;
    }

    getSummaryNode(pathKey: string) {
        return SummaryNodes.get(pathKey);
    }

    getLeftNode(pathKey: string) {
        return LeftNodes.get(pathKey);
    }

    getRightNode(pathKey: string) {
        return RightNodes.get(pathKey);
    }
}