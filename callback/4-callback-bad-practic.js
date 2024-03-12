const checkSuccess = (error, res) => {
  if (error) return void console.error(error);
  if (res.success) console.log('All done!');
  else console.error('Can not save data!');
};

const processReport = (error, data) => {
  if (error) return void console.error(error);
  writeReport('README.md', data, checkSuccess);
};

const processApiResult = (cities) => (error, state) => {
  if (error) return void console.error(error);
  generateReport(cities, state, processReport);
};

const processQueryResult = (error, cities) => {
  if (error) return void console.error(error);
  const url = 'http://domain.name/api';
  apiRequest(url, cities, processApiResult(cities));
};

const processConfig = (error, config) => {
  if (error) return void console.error(error);
  const min = config.population.minimalLimit;
  const sql = `select * from cities where size > ${min}`;
  selectFromDb(sql, processQueryResult);
};

readConfig('config.json', processConfig);

//----------------------

readConfig('config.json', (error, config) => {
  const min = config.population.minimalLimit;
  const sql = `select * from cities where size > ${min}`;
  selectFromDb(sql, (error, cities) => {
    const url = 'http://domain.name/api';
    apiRequest(url, cities, (error, stats) => {
      generateReport(cities, stats, (error, data) => {
        writeReport('README.md', data, (error, res) => {
          if (res.success) console.log('All done!');
        });
      });
    });
  });
});
