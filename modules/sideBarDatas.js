export default class SideBarData {

    constructor(header, content) {
        this.header = header
        this.content = content
    }
    list() {
        let str = ' ';
        this.content.forEach(element => {
            str = str + '<li><button class="sidebarBtn" value="' + element.list + '">' + element.list + '</button></li>';
        })
        return str
    }
    Render() {
        return `
                <article class="article">
                    <p class="heading">${this.header}</p>
                    <ul>
                    ${this.list()}
                    </ul>
                </article>
                
                `
    }


}