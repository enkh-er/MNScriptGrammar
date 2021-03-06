export default class TableData {

    constructor(title, tableTitles, tableDatas) {
        this.title = title
        this.tableTitles = tableTitles
        this.tableDatas = tableDatas
    }

    tHead() {
        let str = '';
        this.tableTitles.forEach(tableTitle => {
            str = str + '<th>' + tableTitle + '</th>';
        })
        return str
    }
    tDatas() {
        let str = '';
        this.tableDatas.forEach(tableData => {
            str = str + '<tr>';
            tableData.forEach(td => {
                str = str + '<td><span class="' + td.class + '">' + td.rowData + '</span></td>';
            })
            str = str + '</tr>';
        })
        return str
    }
    Render() {
        return `
        <h1 style="text-align: center;">${this.title}</h1>
        <table>
            <thead>
                <tr>
                ${this.tHead()}
                </tr>
            </thead>
            <tbody>
                 ${this.tDatas()}
            </tbody>
        </table>
        <div>
            <button class="btn nxt-btn">Дүрэм сануулах</button>
        </div>
                
                `
    }
}