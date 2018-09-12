'use strict';

// adminer

module.exports = {

	questions: [
		{
			message: "Use some plugins",
			name: "plugins",
			default: "tables-filter tinymce",
		},
		{
			message: "Application design",
			name: "design",
			default: "pepa-linha",
		},
		{
			message: "Application port",
			name: "port",
			default: "8080",
            validator: (value)=>{
                if(Skyflow.isPortReachable(value)){
                    return 'This port is not available.'
                }
                Skyflow.addDockerPort(value);
                return true
            }
		}
	],

};
