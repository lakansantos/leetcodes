// convert it into
// [
//     {
//         "version": "1.1",
//         "accountType": "cb",
//         "fileType": "excel",
//         "name": "cb_certs_excel",
//         "url": "https://f1.iafcertsearch.org/assets/t/cb/1.1/cb_certs.xlsx",
//         "sample": false,
//         "recommended": true,
//         "description": "The Certification Template Version 1.1 supports adding of legal identifiers, such as Tax ID, Company ID Number, and Business Registration Number, for a Certified Entity.",
//         "instructions": false,
//         "excel": "https://f1.iafcertsearch.org/assets/t/cb/1.1/cb_certs.xlsx",
//         "xml": "https://f1.iafcertsearch.org/assets/t/cb/1.1/cb_certs.xml"
//     },
//     {
//         "version": "1.0",
//         "accountType": "cb",
//         "fileType": "excel",
//         "name": "cb_certs_excel",
//         "url": "https://f1.iafcertsearch.org/assets/t/cb/1.0/cb_certs.xlsx",
//         "sample": false,
//         "recommended": false,
//         "description": "The Certification Template Version 1.0 is the initial template the system releases.",
//         "instructions": false,
//         "excel": "https://f1.iafcertsearch.org/assets/t/cb/1.0/cb_certs.xlsx",
//         "xml": "https://f1.iafcertsearch.org/assets/t/cb/1.0/cb_certs.xml"
//     }
// ]
const dataJSON = require("./remove_duplicates_array_hard.json");

const array = dataJSON;

// this codebase consists of initial, better, and most recommended part

// initial

const initial = (array, key) => {
  const result = array.reduce((acc, cur) => {
    // i thought of declaring duplicate variable for readability
    const duplicate = acc.find((item) => item[key] === cur[key]);

    if (!duplicate) {
      acc.push(cur);
    }
    return acc;
  }, []);

  return result;
};

// console.log(initial(array, "version"));

// better
// it's shorter
// I removed return keyword
const better = (array, key) =>
  array.reduce(
    (acc, cur) =>
      acc.some((item) => item[key] === cur[key]) ? acc : [...acc, cur],
    []
  );

// console.log(better(array, "version"));

// most recommemded
// using set
// why it's recommended
// it uses set to optimize

const recommendedRemoveDuplicate = (array, key) => {
  const seen = new Set(array);

  return array.filter((item) => {
    const keyValue = item[key];

    if (seen.has(keyValue)) {
      return false;
    }

    seen.add(keyValue);

    return keyValue;
  });
};

console.log(recommendedRemoveDuplicate(array, "version"));
