'use strict';

// postgres

module.exports = {

    questions: [
        {
            message: "Database name",
            name: "database_name",
            default: "skyflow",
        },
        {
            message: "Database user",
            name: "user",
            default: "skyflow",
        },
        {
            message: "Database password",
            name: "password",
            default: "root",
        },
        {
            message: "Database storage location. Relative to the current directory.",
            name: "database_storage_location",
            default: "../.database/my_app",
        },
        {
            message: "Application port",
            name: "port",
            default: "5432",
            validator: (value)=>{
                if(Skyflow.isPortReachable(value)){
                    return 'This port is not available.'
                }
                Skyflow.addDockerPort(value);
                return true
            }
        },
    ],

    messages: {
        info: [
            'Database information:',
            'Host: {{ container_name }}',
            'Database name: {{ database_name }}',
            'User: {{ user }}',
            'Password: {{ password }}',
        ],
    }

};
