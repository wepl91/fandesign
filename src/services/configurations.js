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

export const getConfiguration = (id) => {
  return new Promise((resolve, reject) => {
    fire.collection('picture_configuration')
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          resolve(Object.assign(doc.data(), { id: id }));
        }
        reject();
      })
      .catch(err => {
        reject(err);
      });
  });
}

export const createConfiguration = (configObj) => {
  return new Promise((resolve, reject) => {
    fire.collection('picture_configuration')
      .add(configObj)
      .then(newConfig => {
        resolve(newConfig);
      })
      .catch(err => {
        reject(err);
      });
  });
}
export const updateConfiguration = (configObj) => {
  return new Promise((resolve, reject) => {
    fire.collection('picture_configuration')
      .doc(configObj.id)
      .update(configObj)
      .then((doc) => {
        debugger
      })      
  });
}

export const deleteConfiguration = (id) => {
  return new Promise( async (resolve, reject) => {
    await fire.collection('picture_configuration').doc(id).delete();
    resolve(id);
  });
} 