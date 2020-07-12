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
          let config = Object.assign({}, doc.data(), {id: doc.id})
          results.push(config);
        });
        resolve(results);
      });
    });
}

export const getConfigurationsByType = (configurationType) => {
  return new Promise((resolve, reject) => {
    const results = [];
    fire.collection('picture_configuration')
      .where('type', '==', configurationType)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          resolve([])
        }
        snapshot.forEach(doc => {
          let config = Object.assign({}, doc.data(), {id: doc.id})
          results.push(config);
        });
        resolve(results);
      });
    });
}