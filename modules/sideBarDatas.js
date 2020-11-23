export default class SideBarData {

    constructor(header, content) {
        this.header = header
        this.content = content
    }
    list() {
        let str = ' ';
        this.content.forEach(element => {
            str = str + '<li><button id="listBtn" class="sidebarBtn" value="' + element.list + '">' + element.list + '</button></li>';
        })
        return str
    }
    Render() {
        return `
                <article class="article">
                    <h3 class="heading">${this.header}</h3>
                    <ul>
                    ${this.list()}
                    </ul>
                </article>
                
                `
    }


}