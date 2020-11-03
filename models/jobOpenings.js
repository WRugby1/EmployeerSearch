// job_openings.js to create the table which will hold job openings and be 
// associated with a company in the companies table

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

        //need to include employer ID and Job ID.  get from other tables joins and 
        //insert into Contacts (employerID, value)
        //values ( ( select id from empTalble where employer = 'company name'), )
    });
    // JobOpening.associate = function(models) {
    //       // Associating Job Opening with Company
    //       JobOpening.belongsTo(models.Company, {
    //         // onDelete: "cascade"
    //         foreignKey: {
    //             allowNull: false
    //         }
    //       });
    //     };
        
    return JobOpening;
};