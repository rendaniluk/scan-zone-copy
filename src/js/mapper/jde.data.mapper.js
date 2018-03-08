const Mapper = () => {
  getPoData = async () => await GetPoForm().getPo();

  let rowSet = [];

  mapper = async () => {

    let processNewForm = new Promise(async (resolve, reject) => {
      let data = await getPoData();
      let rowset = data['fs_P43081_W43081A'].data.gridData.rowset;
      rowset.forEach((row) => {
        let objRows = {};
        for (let headingKey in row) {
          if (row[headingKey].value !== undefined) {
            objRows[row[headingKey].title] = row[headingKey].value;
          }
        }
        rowSet.push(objRows);
      });
      resolve(true);
    })
    console.log(rowSet);
  }

  return {
    getPoData,
    mapper
  }
}

const myFunc = function () {

  let myf = Mapper().mapper();

}

myFunc();


// if (form.fs_P43081_W43081A) {
//     rowSet = form.fs_P43081_W43081A.data.gridData.rowset;
//     rowSet.forEach(item => {
//         if (item.mnOrderNumber_22.internalValue == Number(PO)) {
//             resolve(item);
//         } else {
//             resolve(false);
//         }
//     });
// } else {
//     console.log('did not find the form')
//     resolve(false);
// }
