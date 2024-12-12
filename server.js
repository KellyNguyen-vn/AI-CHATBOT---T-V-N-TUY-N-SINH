const { Botpress } = require('botpress');

const botpress = new Botpress({
  server: {
    port: 3000,
  },
  dataFolder: './data', // Đường dẫn đến thư mục dữ liệu Botpress
});

botpress.start()
  .then(() => {
    console.log('Botpress is running');
  })
  .catch(err => {
    console.error('Error starting Botpress', err);
  });
