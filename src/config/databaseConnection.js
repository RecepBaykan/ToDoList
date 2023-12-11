const mongoose = require("mongoose")
mongoose.connect
(
    process.env.MONGO,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
    .then
    (() =>
        {
        console.log('Veritabanına bağlanıldı');
        }
    )
    .catch
    (
        (err) =>
        {
        console.log('Veritabanına bağlanılamadı' + err);
        }
    )  