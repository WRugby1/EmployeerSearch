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
        jobPost_url: {
            type: DataTypes.STRING
        },
        jobLocation: {
            type: DataTypes.STRING
        },
        jobPriority: {
            type: DataTypes.STRING
        },
        resume_file_submitted: {
            type: DataTypes.STRING
        },
        jobPostingSource: {
            type: DataTypes.STRING
        },
        skillsRequired: {
            type: DataTypes.STRING
        }
    });
    return JobOpening;
};