'use strict';

const resolve = require('path').resolve;

// django

module.exports = {

    questions: [
        {
            message: "Your first project name",
            name: "first_project_name",
            default: "MyProject",
        },
        {
            message: "Application port",
            name: "port",
            default: "8000",
            validator: (value)=>{
                if(Skyflow.isPortReachable(value)){
                    return 'This port is not available.'
                }
                Skyflow.addDockerPort(value);
                return true
            }
        },

    ],

    events: {

        update: {
            after: (values) => {
                const File = Skyflow.File;
                let confDir = resolve(Skyflow.getCurrentDockerDir(), 'django', 'conf');
                File.copy(resolve(confDir, 'docker-compose.yml'), resolve(confDir, '..', '..', '..', 'docker-compose.yml'));
                File.copy(resolve(confDir, 'Dockerfile'), resolve(confDir, '..', '..', '..', 'Dockerfile'));
                File.copy(resolve(confDir, '..', 'requirements.txt'), resolve(confDir, '..', '..', '..', 'requirements.txt'));

                if (!File.exists('manage.py') && !Skyflow.Directory.exists(values['first_project_name'])) {
                    let cmd = "docker-compose run create_first_project django-admin.py startproject " + values['first_project_name'] + " .";
                    Skyflow.Shell.exec(cmd);
                }

                File.remove(resolve(confDir, '..', '..', '..', 'docker-compose.yml'));
                File.remove(resolve(confDir, '..', '..', '..', 'Dockerfile'));
            },
        },

    }

};
