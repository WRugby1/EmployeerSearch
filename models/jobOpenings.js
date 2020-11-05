module.exports = function (sequelize, DataTypes) {
    var JobOpening = sequelize.define("JobOpening", {

        jobTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
              }
        },
        co_name: {
            type: DataTypes.STRING
        },
        recruiter_email: {
            type: DataTypes.STRING
        },
        recruiter_phone: {
            type: DataTypes.STRING
        },
        jobLocation: {
            type: DataTypes.STRING
        }
    });
    return JobOpening;
};