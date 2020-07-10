import fire from '../fire';

export const getAllConfigurations = () => {
  return new Promise((resolve, reject) => {
    const results = [];
    fire.collection('picture_configuration')
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          resolve([])
        }
        snapshot.forEach(doc => {
          let prod = Object.assign({}, doc.data(), {id: doc.id})
          results.push(prod);
        });
        resolve(results);
      });
  })
}