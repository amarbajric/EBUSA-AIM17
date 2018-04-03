
# S-BPM (Modelling), Execution and Store Platform
  
This is a (modelling), execution and store platform for S-BPM processes, based on microservices powered by Spring Boot. The modelling platform is based on Angular 1, the frontend for the execution and store platform, however, is based on Angular 2+.  
Basically, the platform consists of the following modules:  
 - **ServiceDiscovery:** Automatic detection of devices and services.  
 - **ConfigurationService:** Central repository for configuration files.  
 - **ProcessModelStorage:** This is the process repository.  
 - **ProcessEngine:** Responsible for the execution of processes, based on Akka.  
 - **EventLogger:** Logs events during execution, exports logs in CSV format, manipulates PNML files and transforms manipulated PNML files to OWL files.  
 - **Gateway:** Authentication and authorization service and handles the requests of the process execution frontend (GUI).  
 - **Persistence:** Hibernate mapping of the database tables.  
 - **ExternalCommunicator:** For the support of external projects.  
 - **GUI-Dev:** Development project for the Angular 2 execution platform frontend (With some dev tools, with node server backend).  
 - **GUI:** Production project for the Angular 2 execution platform frontend (minified, uglified, with Spring Boot backend).  
 - **ModellingPlatform-Dev:** Development project for the Angular 1 modelling platform frontend (with node server backend).  
 - **ModellingPlatform:** Production project for the Angular 1 modelling platform frontend (with Spring Boot backend).
 > A new version of the S-BPM modelling platform is available [here](https://github.com/mkolodiy/s-bpm-modeler).

## Further Development - EBUSA AIM17
The project hosted in this repository is a fork of the original project, where the intention was to build a S-BPM Modelling and Execution Platform.
This fork however, aims to extend the platform by adding process-store functionality. This should allow for searching, buying, 
selling, reviewing and executing processes from the store(=market). Furthermore, organizations should be allowed to register and
invite employees (as users) to the platform, and to give them different roles and rules.
  
  
## Tutorial Videos
[ModellingPlatform](https://youtu.be/3gJXmBRKWNo)  
  
[ExecutionPlatform](https://youtu.be/LkoJVZ__f1k)  
  
## Functionalities
  
  
### Execution
| Functionality | Implemented | Comment |  
| ------------ | ------------ | ------- |  
| Internal Subjects | Yes | - |  
| Multisubjects | No | - |  
| External Subjects | Yes | partially (Engine) |  
| Function States | Yes | - |  
| Send States | Yes | - |  
| Receive States | Yes | - |  
| Timeouts | Yes | partially (Engine) |  
| Refinements | Yes | partially (Engine) |  
| Business Objects | Yes | - |  
| Start Process | Yes | - |  
| Stop Process | Yes | - |  
| Nested Business Objects | Yes | partially (Engine) || Formbuilder | Yes | - |  
| OWL-Import | Yes | standard-pass-ont v0.7.2. & v0.7.5. |  
| Connected Processes | Yes | partially (Engine) |  
| Multiprocesses | Yes | partially (Engine) |  
| Event logging | Yes | Json and CSV |  
  
### Modelling 
| Functionality | Implemented | Comment |  
| ------------ | ------------ | ------- |  
|SID View|yes|-|  
|SBD View|yes|-|  
|Subjects|yes|-|  
|Message Connector|yes|-|  
|Message Types (Business Objects)|yes|-|  
|Send State|yes|-|  
|Receive State|yes|-|  
|Function State|yes|-|  
|OWL-Import|no|standard-pass-ont|  
|OWL-Export|yes|-|  
|ZoomIn/Out|no|-|  
|Customizability|no|-|  
  
## Master theses
In this section you will find Master's theses, which provide further information about the project.  
  
 - Development of a Microservice-based Architecture for Storing and Executing Subject-oriented Processes (german) by Stefan Stani [Link](master_theses/MA-Stani-Stefan.pdf)   
  
## Setup
### Prerequisites
  
 - Java Platform (JDK) 8  
 - MySQL  or [Docker](https://www.docker.com/get-docker) (Docker is recommended)
   
**Development only:**  
 - NodeJS for Angular development in GUI-Dev and ModellingPlatform-Dev  
 - Gulp for Angular development in ModellingPlatform-Dev  
  
### Database Settings
#### For non-docker users:
- Install  the mysql database on your machine and start the service.
- Execute following statements to create the schema and the db user in your MySQL database:  [DB_setup.sql](Setup/mysql_docker/DB_setup.sql)
#### For docker users:
- `cd` into the `/Setup/mysql_docker` folder of the project
- Make sure that docker is already installed on your machine
- Execute the following command in the `/Setup/mysql_docker` directory: `docker-compose up`
	- The command will build a new mysql docker image and start a container which is preconfigured. No further configuration is needed as the database is set-up automatically.
	- **_Tipp:_** To truncate the output of docker in the terminal, use the following command: `docker-compose up -d`
  
## Startup
### Start the MySQL database
#### Non-docker:
 1. Ensure that the service is started and up and running. Otherwise start the database service.
#### Docker:
 1. Check if the newly created docker container named `ebusa-mysql` is running by using the command `docker ps`.
 2. If the docker container is not running, start it by using the command `docker start ebusa-mysql`.
### Start all services on _Windows_  
 1. Go to [Setup/start_windows](Setup/start_windows)  
 2. Execute [start.bat](Setup/start_windows/start.bat)
    - Do **not** execute the `start.bat` script with administrator privileges, as it will not be able to execute all services.
    - To enable the [example processes](#enabledisable-example-processes), execute the `start.bat` script and choose `dev mode`. Otherwise you can use the `normal mode`. 
    Also check the section for further configuration details.
### Start all services on _Linux/macOS_
1. Go to [Setup/start_unix](Setup/start_unix)
2. Execute the bash script `start.sh`.
	- The script will automatically detect if your machine is running _Linux_ or _macOS_.
	- If the script cannot be executed due to permission rights, set the execution permission for the `start.sh` script with 			the following command: `chmod +x start.sh`.
	- To enable the [example processes](#enabledisable-example-processes), execute the script with the following argument: `./start.sh -dev=true`.
	 Also check the section for further configuration details.
### Execution Platform
 1. Start the MySQL Service or Docker Container
 2. Go to ServiceDiscovery and run in cmd:  
 ```gradlew bootRun```  
 3. Go to ConfigurationService and run in cmd:  
 ```gradlew bootRun```  
 4. Go to ProcessModelStorage and run in cmd:   
 ```gradlew bootRun```  
 5. Go to ProcessEngine and run in cmd:   
 ```gradlew bootRun```  
 6. Go to Gateway and run in cmd:   
 ```gradlew bootRun```  
 7. Go to ExternalCommunicator and run in cmd:   
 ```gradlew bootRun```  
 8. Go to EventLogger and run in cmd:   
 ```gradlew bootRun```  
 9. Go to GUI and run in cmd:   
 ```gradlew bootRun```  
 10. Go to ```http://localhost:3000```  
  ### Modelling Platform ###  
 1. Go to ModellingPlatform and run in cmd:   
 ```gradlew bootRun```  
 2. Go to ```http://localhost:4000```  
  #### Alternative ####  
If you prefer to run the jar files, without using gradlew:  
 1. Go to [builds](builds)  
 2. run in cmd: ```java -jar ModellingPlatform-0.0.1-SNAPSHOT.jar```  
 3. Go to ```http://localhost:4000```  
    
  
### GUI-Dev
Just for development purposes, not for production!  
 1. run in cmd: ```npm install```  
 2. Go to GUI-Dev and run in cmd: ```npm start```  
 3. in case of any errors when starting the first time, please stick to the installation guide of [ng2-admin](https://github.com/akveo/ng2-admin/)  
 4. Go to ```http://localhost:3000```  
  
### ModellingPlatform-Dev
Just for development purposes, not for production!  
 1. Run ```npm install -g yo bower grunt-cli gulp && npm install && bower install``` to install required dependencies.  
 2. Go to ModellingPlatform-Dev and run in cmd: ```npm install && bower install```  
 3. Run in cmd: ```gulp serve```  
 4. Go to ```http://localhost:3000```  
  ## Configuration ##  
  
### Ports
Basically, the following ports are used:  
  
|  Service  |  Port  |  
|  -------  |  ----- |  
|  Gateway  |  10000 |  
|  ServiceDiscovery  |  8761 |  
|  ConfigurationService  |  8888 |  
|  ProcessModelStorage  |  Random  |  
|  ProcessEngine  |  Random  |  
|  ExternalCommunicator | Random |  
|  EventLogger  | Random |  
|  GUI  |  3000  |  
|  ModellingPlatform  |  4000  |  
  
To change the port configuration, change the server port in this file e.g. Gateway: [application.properties](Gateway/src/main/resources/application.properties)  
  
**Note:** If you change the port of the Gateway, make sure to change the restApi configuration in [processes.service.ts](GUI-Dev/src/app/processes.service.ts) and to rebuild the GUI-Dev and GUI project according to the guide provide [below](#gui).  
  
### User Configuration
In general, the authentication concept ist based on RBAC. Each user can be assigned to one or more roles. Each role can be assigned to one more rules.  
  
The current *.csv files for the user configuration:  
- [users.csv](Gateway/src/main/resources/memoryusers/users.csv)  
- [roles.csv](Gateway/src/main/resources/memoryusers/roles.csv)  
- [rules.csv](Gateway/src/main/resources/memoryusers/rules.csv)  
  
##### Standard configuration: #####  
  
|  User  |  Roles  |  Password  |  
|  ----  |  -----  |  --------  |  
|  robert  |  BOSS  |  1234  |  
|  matthias  |  ADMIN, EMPLOYEE  |  1234  |  
|  stefan  |  EMPLOYEE  |  1234  |  
|  maksym  |  EMPLOYEE  |  1234  |  
|  marlene |  TRAVEL MANAGEMENT | 1234 |  
  
## Development
### Enable/Disable Example Processes
For the development process it is possible to activate the creation of example processes in order to avoid the manual creation of them during development and testing. The required steps are explained on page 72 in the [master theses](master_theses/MA-Stani-Stefan.pdf). 
The following steps are describing the steps mentioned in the thesis:
#### Enabling the Example Processes:
- Change the parameter `ippr.insert-examples.enabled` to `true` in the `application.properties` file found in the directory `/ProcessModelStorage/src/main/resources`
- Change the parameter `spring.jpa.hibernate.ddl-auto` to `create` in the `application.properties` file found in the directory `/ProcessModelStorage/src/main/resources`
- **Disable** the execution of the `ConfigurationService` microservice to avoid overwriting the configuration file. (See _start all services for_ [Windows](#start-all-services-on-windows) or [Linux/macOS](#start-all-services-on-linuxmacos) how to do it)
#### Disable the Example Processes:
- Change the parameter `ippr.insert-examples.enabled` to `false` in the `application.properties` file found in the directory `/ProcessModelStorage/src/main/resources`
- Change the parameter `spring.jpa.hibernate.ddl-auto` to `update` in the `application.properties` file found in the directory `/ProcessModelStorage/src/main/resources`
- **Enable** the execution of the `ConfigurationService` microservice. (See _start all services for_ [Windows](#start-all-services-on-windows) or [Linux/macOS](#start-all-services-on-linuxmacos) how to do it)
### Spring Boot Modules
Any further development concerning the ServiceDiscovery, the ConfigurationService, the Gateway, the ProcessModelStorage, the ExternalCommunicator or the ProcessEngine can be done directly in java. For further information please use the [Spring Boot Documentation](https://projects.spring.io/spring-boot/)  
  
**Note:** If you do any changes to a module, you have to rebuild it with ```gradlew build```  
  
### GUI
Any further development concerning the GUI has to be done in the GUI-Dev module by using typescript and Angular 2. For further information please use the [Angular Documentation](https://angular.io/) and the [ng2-admin Documentation](https://akveo.github.io/ng2-admin/articles/001-getting-started/).  
  
**Note:** If you do any changes to the GUI-Dev project, you have to update the GUI project afterwards:  
 1. Go to GUI-Dev and run in cmd: ```npm run prebuild:prod && npm run build:prod```  
 2. Go to [GUI/src/main/resources/public/](GUI/src/main/resources/public/) and remove of all of its content.  
 3. Go to [GUI-Dev/dist](GUI-Dev/dist) and move all of its content to [GUI/src/main/resources/public/](GUI/src/main/resources/public/).  
 4. Go to [GUI](GUI) and run ```gradlew build``` or ```gradlew run```  
  ### ModellingPlatform ###  
Any further development concerning the ModellingPlatform has to be done in the ModellingPlatform-Dev module by using javascript and Angular 1.  
  
**Note:** If you do any changes to the ModellingPlatform-Dev project, you have to update the ModellingPlatform project afterwards:  
 1. Go to ModellingPlatform-Dev and run in cmd: ```gulp build```  
 2. Go to [ModellingPlatform/src/main/resources/public/](ModellingPlatform/src/main/resources/public/) and remove of all of its content.  
 3. Go to [ModellingPlatform-Dev/dist](ModellingPlatform-Dev/dist) and move all of its content to [ModellingPlatform/src/main/resources/public/](ModellingPlatform/src/main/resources/public/).  
 4. Go to [ModellingPlatform](ModellingPlatform) and run ```gradlew build``` or ```gradlew run```  
  **Note:** You can change the appearance of the elements by modify the following file: [ui-joint-shape.template.scss](ModellingPlatform-dev/src/app/components/services/ui-joint/ui-joint-shape/ui-joint-shape.template.scss)  
   
## License
[MIT License](LICENSE)