import { getData } from './restApi.js';
import SideBarData from './sideBarDatas.js';
import TableData from './tableDatas.js';

export default class Datas {

    constructor(url, tUrl) {
            this._dataList = [];
            this._url = url;
            this._talbeDataUrl = tUrl;
            this._lastUpdated = Date.now();
            this._hasChanged = false;
            this._tableDataList = [];
            this._listButton = [];

        }
        // Upload() {
        //     if (this._hasChanged) {
        //         fetch(this._url, {
        //                 method: 'PUT',
        //                 headers: {
        //                     'Content-Type': 'application/json;charset=utf-8',
        //                     'versioning': false
        //                 },
        //                 body: JSON.stringify(this._recentNewsList)
        //             })
        //             .then(response => { console.log(response.status); })
        //             .catch(err => { console.log(err) });

    //         this._hasChanged = false;
    //     }
    // }

    DownloadSidebar(targetElement) {
        getData(this._url, (result) => {
            var datas = '';
            result.forEach(element => {
                this._dataList.push(element);
                datas = datas + (
                        new SideBarData(element.header, element.content).Render()
                    )
                    // console.log("datas:", datas)
            });
            gebi(targetElement).innerHTML = datas;
            this.DownloadTableDatas();
            this.setTableDatas();
        });
    }

    DownloadSideNav(targetElement) {
        getData(this._url, (result) => {
            var datas = '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>';
            result.forEach(element => {
                datas = datas + (
                        new SideBarData(element.header, element.content).Render()
                    )
                    // console.log("datas:", datas)
            });
            gebi(targetElement).innerHTML = datas;
            this.DownloadTableDatas();
            this.setTableDatas();
        });
    }

    DownloadTableDatas() {
        getData(this._talbeDataUrl, (result) => {
            // console.log(result);
            this._tableDataList.push(result);
        });
    }



    setTableDatas() {
        var str;
        this._listButton = Array.from(document.querySelectorAll('.sidebarBtn'))
            // console.log(this._listButton);
        this._listButton.forEach((route) => route.addEventListener('click', () => {
            let val = route.value;
            this._dataList.forEach((dList) => {
                    // console.log(dList.content);
                    let row = dList.content;
                    row.forEach((d) => {
                        // console.log(d);
                        if (d.list === val) {
                            str = new TableData(d.data.title, d.data.tableHeades, d.data.tableDatas).Render();
                        }
                    })
                })
                // console.log(str);
            gebi('table').innerHTML = str;
        }, false))
    }
}

const gebi = id => document.getElementById(id);

const url = "https://api.jsonbin.io/b/5fba498490e7c66167f565b7/latest";
const tableDataUrl = "https://api.jsonbin.io/b/5fbb5259522f1f0550cc6078/latest";

const datas = new Datas(url, tableDataUrl);
datas.DownloadSideNav("sidenav");
datas.DownloadSidebar("sidebar");
setInterval(() => datas.DownloadSidebar("sidebar"), 600000);