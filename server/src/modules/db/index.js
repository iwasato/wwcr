/* core modules */
const fs = require('fs');

/* third party modules */
const sqlite3 = require('sqlite3');

class Database extends sqlite3.Database {
	constructor(url){
		super(url);
	}

	// テーブルの作成
	createTable(tableName,params) {
		return new Promise((resolve)=>{
			this.serialize(()=>{
				let paramsText = Object.keys(params).reduce((pre,key,index)=>{
					return pre+(index > 0 ? ', ' : '')+key+' '+params[key];
				},'');
				
				this.run('create table '+tableName+'('+paramsText+')');
				resolve();
			});
		});
	}

	// データの追加
	add(tableName,values) {
		return new Promise((resolve)=>{
			this.serialize(()=>{
				const valueMap = {};

				let keyText = Object.keys(values).reduce((pre,key,index)=>{
					valueMap['$'+key] = values[key];
					return pre+(index > 0 ? ', $' : '$')+key;
				},'');

				this.run('insert into '+tableName+' values('+keyText+')', valueMap);

				resolve();
			});
		});
	}

	// データの削除
	delete(tableName,values) {
		return new Promise((resolve)=>{
			this.serialize(()=>{
				const valueMap = {};

				const whereText = Object.keys(values).reduce((pre,key,index)=>{
					return pre+(index > 0 ? ' and $' : '$')+key+'='+values[key];
				},'');
				Object.keys(values).forEach((key)=>{
					valueMap['$'+key] = values[key];
				});
				this.run('delete from '+tableName+' where '+whereText, valueMap);

				resolve();
			});
		});
	}

	// データの取得
	get(tableName,values) {
		return new Promise((resolve)=>{
			this.serialize(()=>{
				const valueMap = {};

				const whereText = Object.keys(values).reduce((pre,key,index)=>{
					return pre+(index > 0 ? ' and ' : '')+key+'=$'+key;
				},'');
				Object.keys(values).forEach((key)=>{
					valueMap['$'+key] = values[key];
				});

				this.all('select * from '+tableName+' where '+whereText,valueMap,(err,rows)=>{
					if(rows && rows.length == 1){
						resolve(rows.pop());
					} else {
						resolve(null);
					}
				});
			});
		});
	}

	tables() {
		return new Promise((resolve)=>{
			this.serialize(()=>{
				this.all('select name from sqlite_master where type="table"',(err,rows)=>{
					resolve(rows.map((row)=>{return row['name']}) || []);
				});
			});
		});
	}
}

module.exports = Database;