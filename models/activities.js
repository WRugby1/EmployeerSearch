// activities.js to create activities table, which contains action items 
// which will be associated with specific job openings
module.exports = function (sequelize, DataTypes) {
    var Activity = sequelize.define("Activity", {
        action_item: {
            type: DataTypes.STRING,
            allowNull: false,

            validate: {
                len: [1, 140]
              }
        },
        jobLocation: {
            type: DataTypes.STRING
        },
        resume_file_submitted: {
            type: DataTypes.STRING
        },
        due_date: {
            type: DataTypes.DATEONLY
        },
        date_applied: {
            type: DataTypes.DATEONLY
        },
        interview_date: {
            type: DataTypes.DATEONLY
        }

        //need to include employer ID and Job ID.  get from other tables joins and 
        //insert into Contacts (employerID, value)
        //values ( ( select id from empTalble where employer = 'company name'), )
    });
    // ActionItem.associate = function(models) {
    //     // Associating ActionItem with job opening
    //     ActionItem.belongsTo(models.JobOpening, {
    //       //onDelete: "cascade"
    //     });
    //   };
    return Activity;
};