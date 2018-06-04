# Changelog for EBUSA-AIM-17
All notable changes to this project will be documented in this file.
This file ONLY contains changes made by the AIM17 dev-team. This means, that this file only tracks changes
of the forked repository.
The format is partially based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)

## 2018-05-02 ([#51](https://github.com/amarbajric/EBUSA-AIM17/pull/93))
## Added
- User-Details
    - Components are in ../pages/user-details
    - Displays User information
    - Contains test data
- Interceptor
    - Components are in ../@theme/components/auth/
        - token.interceptor.ts
        - jwt.interceptor.ts
    - Adds the current user token to every http request


## 2018-05-02 ([#89](https://github.com/amarbajric/EBUSA-AIM17/pull/89))
## Added
- Authentication
  - Components are in `@theme/auth`
  - Validation takes configuration from `app.module.ts` => `NbAuthModule/providers/forms/validation`
- Registration
  - Currently takes \[firstname, lastname, username, email, password\] to the backend endpoint /register
  - `NbAuthModule/providers/email/config` in `app.module.ts` is used to configure those endpoints
  - access via `/auth/registration`
- Roles
  - Utilizes special roles and rights management
  - Roles are currently assigned via the `role.provider.ts` which takes the first role from the token (issue)
  - `NbSecurityModule` in `app.module.ts` is used to configure rights
    - `view`, `create`, `remove` on role-level or `parent` to inherit rights
    - `*nbIsGranted="['view', 'user']"` is a condition the hides the element unless the user has the right `view` on `user`


## 2018-04-29 ([#79](https://github.com/amarbajric/EBUSA-AIM17/pull/79))
## Added
- register implemented
- register needs adaptations in terms of default role (tbd in corporation with Stefan L.)
- passwords are now hashed and compared by the hashes when logging-in (Bcrypt)
- endpoint added to send json with email attribute which checks if email already exists (async email validation)
  - send `POST` Method to `/user/register/checkIfMailTaken` with JSON containing `email` attribute
## Changed
- changed `application.properties` in Gateway service to fix problem with `RBACConfig` where it would not detect 
property `rbac.system.service`. Therefore, this property was changed to `rbac.system.service.authentication`
  - if set to `memory` then authentication via `CacheUser` is done and csvs are used
  - if set to `database` then authentication via database is done and NO csv and NO `CacheUser` is used
- moved `Condition` files to `config` folder in `Gateway/src/main/java/at/fhjoanneum/ippr/gateway/security/config`


## 2018-04-27 ([#77](https://github.com/amarbajric/EBUSA-AIM17/pull/77))
## Added
- new AuthenticationService in the Gateway parent service
  - named `AuthenticationServiceDatabaseImpl`
  - new service is used solely for logging-in users by ONLY checking if user
  with given `email` and `password` exists in the database
  - old `AuthenticationServiceMemoryImpl` still existent
  - added possibility to configure `rbac.system.service` in the `application.properties`
  of the `Gateway` service with the `database` option. (i.e. `database` option uses login
  via database check only and `memory` option uses `CacheUser` option)
## Changed
- `AuthenticationServiceMemoryImpl` now also uses the `email` attribute and not the `username`
- Payload class, which defines structure of received JSON when logging-in now (i.e. `UserLogin` in controller)
now uses `email` instead of `username`
- modified configuration classes for the `application.properties` file in the `Gateway` service
to allow for switching between `database` and `memory`
- adapted `RBACRetrievalServiceMemoryImpl` where csv is read into Map. Keys of map are now
the users `email` instead of `username` (needed for log-in with email instead of username)


## 2018-04-26 ([#74](https://github.com/amarbajric/EBUSA-AIM17/pull/74))
## Added
- complete GUI replacement: new GUI based on ngx-admin
  - located in the GUI-dev folder
  - uses the starter-kit (clean implementation)
## Changed
- GUI-dev archived as GUI-dev-old

## 2018-04-24 ([#68](https://github.com/amarbajric/EBUSA-AIM17/pull/68))
## Added
- Classes for adopted data model (persistence Objects, ObjectsImpl, ObjectBuilders)
  - `Organization`
  - `ProcessStore`
  - `Rating`
  - `Review`
## Changed
- `UserImpl.java`
  - added fields email, password, organization (FK), createdAt
-`UserBuilder.java`
  - adopted to changes from `UserImpl`
- `ProcessEngineCallerImpl.java`
  - made `getUser` and `appendUserInformation` to remove ErrorMsg from GateWayLog

## 2018-04-23 ([#67](https://github.com/amarbajric/EBUSA-AIM17/pull/67))
## Added
- `CHANGELOG.md` file for the whole project
  - should allow to quickly look up all changes and for further information reference to the PR and the associated files


## 2018-04-23 ([#64](https://github.com/amarbajric/EBUSA-AIM17/pull/64))
## Added
- `postcss.config.js` in `GUI-dev` for a module to function properly (more or less) 
## Changed
- fixed dependencies and errors with npm packages
- modified some module versions in `package.json`


## 2018-04-07 ([#59](https://github.com/amarbajric/EBUSA-AIM17/pull/59))
## Added
- added note in readme for zsh users to change to bash and how to do this.
- also added note that the zsh shell is not recommended at all
## Changed
- start.sh was modified and dynamic variables are used now in applescript for delays.                       
- argument parser was modified and the dev mode argument has changed. This was also changed in the README.
## Removed 
- the custom applescript in the start.sh does not work well with zsh as delays are too short and else it takes too long to execute. 
- Therefore, **zsh support is dropped**.


## 2018-04-04 ([#55](https://github.com/amarbajric/EBUSA-AIM17/pull/55))
## Changed
- Updated README.md.
  - General info added for repo and the intention of the fork
  - Added instructions on how to set-up docker container for mysql
  - Added instructions on how to execute all services by using either the start.bat or start.sh scripts
  - Explained how to enable/disable the example processes which were discussed in the PR #54.
  - Added further description and instructions on how to completely enable/disable the example processes.- added gradlew.bat, gradle-wrapper.properties to .gitignore
- Adapted the start.sh and start.bat scripts:- activated example processes as described in chapter 5 of the master thesis; therefore start_configuration_service is deactivated in start.sh and start.bat
  - Both scripts now support dev mode or normal mode. This allows for skipping the execution of the ConfigurationService to use the example processes.  - tested both example processes - both worked well - no db query errors for the moment


## 2018-03-30 ([#54](https://github.com/amarbajric/EBUSA-AIM17/pull/54))
## Added
- added gradlew.bat, gradle-wrapper.properties to .gitignore
- activated example processes as described in chapter 5 of the master thesis; therefore start_configuration_service is deactivated in start.sh and start.bat
  - tested both example processes - both worked well - no db query errors for the moment
## Changed
- changed remaining Queries where nativeQuery=true to lowercase


## 2018-03-29 ([#36](https://github.com/amarbajric/EBUSA-AIM17/pull/36))
### Added
- added new folder in Setup directory for mysql-docker
- added Dockerfile for creating custom image and including DB_setup.sql file
  - building mysql image, running container and executing DB_setup.sql file automatically
- added docker-compose.yml file to automatically build image and set-up mysql docker container
### Changed
- modified and moved DB_setup.sql file


## 2018-03-27 ([#35](https://github.com/amarbajric/EBUSA-AIM17/pull/35))
### Added
- added start.sh script to start all services at once
- additional scripts for each service to avoid path issues with gradlew bootRun tested successfully on
  - Ubuntu 17.10 (X11/Gnome)
  - W10 (is not affected by the changes)
## Changed
- modfied RBACRepositoryImpl.java and ProcessInstanceRepository.java      
- upper/Lower case issues caused the error messages during startup        
- modifed NativeQueries - changed table names, query params to lowercase
## Removed
- Nothing was removed (demonstration purpose only)
